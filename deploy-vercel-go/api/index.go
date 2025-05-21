package handler

import (
	"fmt"
	"net/http"
	"sync"

	"github.com/gin-gonic/gin"
	"golang.org/x/net/websocket"
)

var router *gin.Engine
var logs []string
var logsMutex sync.Mutex

func init() {
	router = gin.Default()

	api := router.Group("/api")
	{
		// 根路径路由
		api.GET("", func(c *gin.Context) {
			c.String(http.StatusOK, "<h1>Welcome to the API!</h1>")
		})

		// 用户路由
		api.GET("/user", func(c *gin.Context) {
			c.JSON(http.StatusOK, gin.H{
				"message": "User endpoint",
				"user":    "example_user",
			})
		})

		// WebSocket 路由
		api.GET("/ws", func(c *gin.Context) {
			websocket.Handler(func(ws *websocket.Conn) {
				defer ws.Close()
				for {
					var message string
					if err := websocket.Message.Receive(ws, &message); err != nil {
						c.AbortWithError(http.StatusInternalServerError, err)
						break
					}
					if err := websocket.Message.Send(ws, "Received: "+message); err != nil {
						c.AbortWithError(http.StatusInternalServerError, err)
						break
					}
				}
			}).ServeHTTP(c.Writer, c.Request)
		})

		// 日志路由
		api.GET("/logs", func(c *gin.Context) {
			logsMutex.Lock()
			defer logsMutex.Unlock()

			logHTML := "<h1>Request Logs</h1><ul>"
			for _, log := range logs {
				logHTML += fmt.Sprintf("<li>%s</li>", log)
			}
			logHTML += "</ul>"

			c.Header("Content-Type", "text/html")
			c.String(http.StatusOK, logHTML)
		})
	}
}

func Handler(w http.ResponseWriter, r *http.Request) {
	// 信息截取
	path := r.URL.Path
	method := r.Method
	query := r.URL.Query()

	log := fmt.Sprintf("Path: %s, Method: %s, Query: %v", path, method, query)
	logsMutex.Lock()
	logs = append(logs, log)
	if len(logs) > 10 { // 只保留最近 10 条日志
		logs = logs[1:]
	}
	logsMutex.Unlock()

	fmt.Printf("Request Info - %s\n", log)

	// 使用 Gin 处理请求
	router.ServeHTTP(w, r)
}
