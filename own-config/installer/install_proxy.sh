#!/bin/bash

CLASH_EXEC=/usr/local/clash-for-windows/clash

start_clash() {
    if pgrep -f "$CLASH_EXEC" > /dev/null; then
        echo "Clash is already running with PID $(pgrep -f $CLASH_EXEC)"
    else
        echo "Starting Clash..."
        $CLASH_EXEC & 
        sleep 1  # 给进程时间启动
        if pgrep -f "$CLASH_EXEC" > /dev/null; then
            echo "Clash started with PID $(pgrep -f $CLASH_EXEC)"
        else
            echo "Failed to start Clash."
        fi
    fi
}

stop_clash() {
    if pgrep -f "$CLASH_EXEC" > /dev/null; then
        echo "Stopping Clash..."
        pkill -f "$CLASH_EXEC"
        echo "Clash stopped."
    else
        echo "Clash is not running."
    fi
}

status_clash() {
    if pgrep -f "$CLASH_EXEC" > /dev/null; then
        echo "Clash is running with PID $(pgrep -f $CLASH_EXEC)"
    else
        echo "Clash is not running."
    fi
}

set_proxy() {
    echo "Setting up network proxy..."
    export http_proxy="http://127.0.0.1:7890"
    export https_proxy="http://127.0.0.1:7890"
    export all_proxy="socks5://127.0.0.1:7890"
    echo "Network proxy set."
}

unset_proxy() {
    echo "Unsetting network proxy..."
    unset http_proxy
    unset https_proxy
    unset all_proxy
    echo "Network proxy unset."
}

show_help() {
    echo "Usage: $0 {start|stop|status|set-proxy|unset-proxy|help}"
    echo "  start       Start Clash and set network proxy"
    echo "  stop        Stop Clash and unset network proxy"
    echo "  status      Show Clash running status"
    echo "  set-proxy   Set network proxy"
    echo "  unset-proxy Unset network proxy"
    echo "  help        Show this help message"
}

case "$1" in
    start)
        start_clash
        set_proxy
        ;;
    stop)
        stop_clash
        unset_proxy
        ;;
    status)
        status_clash
        ;;
    set-proxy)
        set_proxy
        ;;
    unset-proxy)
        unset_proxy
        ;;
    help|*)
        show_help
        ;;
esac