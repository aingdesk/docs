---
sidebar_position: 3
description: 使用 Docker 部署
---
# Docker
## Docker Compose
- 复制下方的命令，使用docker-compose部署docker镜像

```bash
mkdir -p aingdesk
cd aingdesk
wget https://cnb.cool/aingdesk/AingDesk/-/blob/server/docker-compose.yml
docker-compose up -d
```

## Docker Run
- 复制下方的命令，映射指定端口部署docker镜像

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

- 国内用户可以使用腾讯云原生构建镜像，部署docker镜像

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

