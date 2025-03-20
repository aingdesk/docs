---
sidebar_position: 4
description: Deploy using the BT Panel (宝塔面板)
---
# BT Panel (宝塔面板)

### Prerequisites
> Before installing AingDesk, ensure that your machine meets the minimum installation requirements:
>
> * CPU >= 1 Core
> * RAM >= 2 GiB

| Operating System           | Software                            | Description                                                                                     |
| -------------------------- | ------------------------------------ | ----------------------------------------------------------------------------------------------- |
| Linux platforms            | <p>Official BT Panel version 9.2.0 or higher</p> | Refer to [Install BT Panel](https://www.bt.cn/new/download.html) for more information. |

### Deploying AingDesk
1. Log in to the BT Panel and click on Docker in the menu bar. Follow the prompts to install Docker and Docker Compose services.
2. Find `AingDesk` in the `Docker - App Store`, and click `Install`.
3. Set basic information such as the domain name and click `Confirm`.
   - Name: Application name, default is `AingDesk-random characters`.
   - Version selection: Default is `latest`.
   - Domain: If you want to access via a domain, configure the domain here and point the domain to your server.
   - Allow external access: If you need direct access via `IP + Port`, check this option. If you have already set up a domain, do not select this.
   - Port: Default is `7071`, but you can modify it if needed.
4. After submission, the panel will automatically initialize the application. This process usually takes about `1-3 minutes`. Once initialization is complete, you can access AingDesk.

### Accessing AingDesk
```bash
# Using a domain
http://yourdomain/
# Using IP + port
http://your_server_ip:7071/