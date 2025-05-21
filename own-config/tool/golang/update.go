package main

/*
	云更新
*/

import (
	"log"
	"net/http"
	"os"
	"path/filepath"
	"sync"

	"github.com/fsnotify/fsnotify"
	"github.com/gin-gonic/gin"
)

const (
	rootDir      = `C:\Users\33350\Desktop\fk\libs\arm64-v8a`
	apiEndpoint  = "/api/v1/libs/imgui.so"
	versionQuery = "v=1.1.0"
)

var (
	latestFileMu sync.Mutex
	latestFile   []byte
)

func main() {
	// Initialize Gin router
	r := gin.Default()

	// Allow CORS
	r.Use(corsMiddleware())

	// Watch directory for changes
	go watchDir(rootDir)

	// API endpoint handler
	r.GET(apiEndpoint, func(c *gin.Context) {
		latestFileMu.Lock()
		defer latestFileMu.Unlock()

		if len(latestFile) == 0 {
			c.String(http.StatusNotFound, "No file available")
			return
		}

		c.Data(http.StatusOK, "application/octet-stream", latestFile)
	})

	// WebSocket handler (to be implemented)

	// Start HTTP server
	port := ":80" // choose your desired port
	log.Printf("Server started. Listening on port %s", port)
	log.Fatal(http.ListenAndServe(port, r))
}

func corsMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Origin, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(http.StatusOK)
			return
		}
		c.Next()
	}
}

func watchDir(dir string) {
	watcher, err := fsnotify.NewWatcher()
	if err != nil {
		log.Fatalf("Error creating watcher: %v", err)
	}
	defer watcher.Close()

	log.Printf("Watching directory: %s", dir)

	// Start watching the directory recursively
	err = filepath.Walk(dir, func(path string, info os.FileInfo, err error) error {
		if err != nil {
			return err
		}
		if info.IsDir() {
			log.Printf("Adding directory to watcher: %s", path)
			return watcher.Add(path)
		}
		return nil
	})
	if err != nil {
		log.Fatalf("Error walking directory: %v", err)
	}

	// Handle events
	for {
		select {
		case event, ok := <-watcher.Events:
			if !ok {
				return
			}
			if event.Op&fsnotify.Write == fsnotify.Write {
				log.Printf("File modified: %s", event.Name)
				updateLatestFile(event.Name)
			}
		case err, ok := <-watcher.Errors:
			if !ok {
				return
			}
			log.Printf("Error: %v", err)
		}
	}
}

func updateLatestFile(path string) {
	file, err := os.ReadFile(path)
	if err != nil {
		log.Printf("Error reading file: %v", err)
		return
	}

	latestFileMu.Lock()
	defer latestFileMu.Unlock()

	latestFile = file
	log.Printf("Updated latest file to: %s", path)
}
