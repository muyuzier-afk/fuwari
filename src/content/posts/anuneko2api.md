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

打开 Anuneko 并登录，按 `F12` 打开开发者工具，发送一条消息：

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20170942.png)

找到请求头中的 `X-Token`：

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20171340.png)

在 Application → Cookies 中找到 `uk`：

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20171515.png)

提取 `chat_id`：

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20171921.png)

## 部署到 Zeabur

打开 [Zeabur](https://zeabur.com) 创建项目，选择 GitHub：

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20172214.png)

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20172247.png)

Fork [2API 仓库](https://github.com/muyuzier-afk/2api)：

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20172335.png)

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20172349.png)

配置 GitHub 并选择 2api 仓库：

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20172258.png)

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20172403.png)

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20172415.png)

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20172502.png)

添加环境变量：

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20172605.png)

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20172726.png)

```
COOKIE_UK=你的uk值
X_TOKEN=你的x-token值
CHAT_ID=你的chat_id值
```

重新部署后复制域名即可使用：

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20172744.png)

## 使用方法

- **API Base URL**: `https://你的zeabur域名`
- **API Key**: 随便填
- **Model**: 随便填
