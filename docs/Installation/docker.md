---
sidebar_position: 3
description: Deploy using Docker
---
# Docker
## Docker Compose
- Copy the command below to deploy the Docker image using docker-compose.
```bash
mkdir -p aingdesk
cd aingdesk
wget https://cnb.cool/aingdesk/AingDesk/-/git/raw/server/docker-compose.yml
# Run
docker compose up -d
# or
docker-compose up -d
```

## Docker Run
- Copy the command below to map the specified port and deploy the Docker image.
```bash
docker run -d \
  --name node \
  -v $(pwd)/data:/aingdesk/data \
  -v $(pwd)/uploads:/aingdesk/uploads \
  -v $(pwd)/logs:/aingdesk/logs \
  -p 7071:7071 \
  -w /aingdesk \
  aingdesk/aingdesk
```

- Users in China can use the Tencent Cloud Native Build image to deploy the Docker image.
```bash
docker run -d \
  --name node \
  -v $(pwd)/data:/aingdesk/data \
  -v $(pwd)/uploads:/aingdesk/uploads \
  -v $(pwd)/logs:/aingdesk/logs \
  -p 7071:7071 \
  -w /aingdesk \
  docker.cnb.cool/aingdesk/aingdesk
```