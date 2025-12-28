---
title: 使用Zeabur部署Anuneko2API
published: 2025-12-28
description: 手把手教你将 Anuneko AI 转换为 OpenAI 兼容 API
image: ../assets/images/anuneko2api/屏幕截图 2025-12-28 170942.png
tags:
  - AI
  - LLM
  - 2API
  - 逆向
  - Zeabur
category: 教程
draft: false
---

小东西怪可爱的，逆个向玩玩～

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20170715.png)

## 准备工作

打开F12发送消息测试一下

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20170942.png)

提取X-Token

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20171340.png)

提取cookies里的uk

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20171515.png)

提取chat id

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20171921.png)

## 部署到Zeabur

打开zeabur创建项目

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20172214.png)

点击Github

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20172247.png)

前往 [2API](https://github.com/muyuzier-afk/2api) 点击Fork

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20172335.png)

点击Create Fork

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20172349.png)

回到Zeabur点击配置Github

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20172258.png)

选择自己的账户

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20172403.png)

点击install

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20172415.png)

选择2api

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20172502.png)

前往环境变量

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20172605.png)

添加配置

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20172726.png)

```
COOKIE_UK=
X_TOKEN=
CHAT_ID=
```

重新部署完成后复制域名就能用了，模型和密钥随便填

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20172744.png)
