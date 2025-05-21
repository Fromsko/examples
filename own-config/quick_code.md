# Quick code

## Set git config

```shell
git config --global user.name "Fromsko"
git config --global user.eamil "hnkong666@gmail.com"
```

## System.service

```toml
[Unit]
Description=code-server
After=network.target

[Service]
Type=simple
ExecStart=sudo -u skong /home/skong/project/code-server/bin/code-server
User=skong
Group=skong
WorkingDirectory=/home/skong/project/code-server
Restart=always
RestartSec=3
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=code-server

[Install]
WantedBy=multi-user.target
```

## Cat fix api-* container

```bash
docker ps -a --format "table {{.ID}}\t{{.Names}}\t{{.Status}}" | grep api | while read -r container_id container_name container_status; do
    docker start "$container_id"
    sleep 3
    if [ "$(docker inspect -f '{{.State.Running}}' "$container_id")" = "false" ]; then
        echo "Container $container_name stopped after starting."
        docker logs "$container_id"
    fi
done
```
