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

## 前言

Anuneko 是一个可爱的 AI 助手，界面清新，响应速度也不错。本教程将教你如何通过逆向工程，将 Anuneko 转换为兼容 OpenAI API 格式的接口，这样你就可以在任何支持 OpenAI API 的应用中使用它了。

小东西怪可爱的，逆个向玩玩～

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20170715.png)

## 准备工作

在开始之前，你需要准备以下内容：

- 一个 Anuneko 账号（已登录状态）
- 一个 GitHub 账号
- 一个 Zeabur 账号（可以用 GitHub 登录）

### 第一步：获取 X-Token

首先，打开 Anuneko 网站并登录你的账号。按 `F12` 打开浏览器开发者工具，切换到 `Network`（网络）选项卡。

然后在对话框中发送一条消息（比如"你好"）来触发一个请求：

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20170942.png)

在网络请求列表中找到对应的请求，点击查看请求头（Headers）。找到 `X-Token` 字段，这是我们需要的第一个关键参数，把它复制保存下来：

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20171340.png)

### 第二步：获取 Cookie UK

接下来我们需要获取 Cookies 中的 `uk` 值。在开发者工具中切换到 `Application`（应用）选项卡，在左侧找到 `Cookies`，点击展开后选择 Anuneko 的域名。

在 Cookie 列表中找到名为 `uk` 的项，复制它的值：

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20171515.png)

### 第三步：获取 Chat ID

最后一个需要获取的参数是 `Chat ID`。回到 `Network` 选项卡，在之前的请求中查看请求参数或响应内容，找到 `chat_id` 或类似的字段：

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20171921.png)

现在你已经收集齐了三个关键参数：
- `X-Token`
- `Cookie UK`
- `Chat ID`

## 部署到 Zeabur

### 第四步：创建 Zeabur 项目

打开 [Zeabur](https://zeabur.com) 并登录（推荐使用 GitHub 账号登录）。点击创建新项目：

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20172214.png)

在服务类型中选择 `Git`，然后点击 `GitHub`：

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20172247.png)

### 第五步：Fork 2API 仓库

在新标签页中打开 [2API 仓库](https://github.com/muyuzier-afk/2api)，点击右上角的 `Fork` 按钮：

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20172335.png)

在 Fork 页面直接点击 `Create Fork` 创建你自己的副本：

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20172349.png)

### 第六步：连接 GitHub 仓库

回到 Zeabur，如果这是你第一次使用，需要先配置 GitHub 权限。点击「配置 GitHub」：

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20172258.png)

选择你的 GitHub 账户：

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20172403.png)

点击 `Install` 安装 Zeabur 的 GitHub App：

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20172415.png)

安装完成后，在仓库列表中选择刚才 Fork 的 `2api` 仓库：

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20172502.png)

### 第七步：配置环境变量

部署服务后，进入服务详情页，找到「环境变量」或「Variables」选项卡：

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20172605.png)

添加以下三个环境变量，填入你之前获取的值：

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20172726.png)

```
COOKIE_UK=你的uk值
X_TOKEN=你的x-token值
CHAT_ID=你的chat_id值
```

### 第八步：重新部署并使用

环境变量配置完成后，点击「重新部署」让配置生效。等待构建完成后，Zeabur 会自动为你分配一个域名。

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20172744.png)

复制这个域名，就可以作为 OpenAI API 的 Base URL 使用了！

## 使用方法

在任何支持 OpenAI API 的应用中：

- **API Base URL**: `https://你的zeabur域名`
- **API Key**: 随便填（比如 `sk-xxx`）
- **Model**: 随便填（比如 `gpt-4`）

现在你就可以愉快地使用 Anuneko 了！

## 注意事项

1. Token 和 Cookie 可能会过期，如果 API 不工作了，重新获取一下这些参数
2. 请合理使用，不要滥用
3. 本教程仅供学习交流，请遵守相关服务条款
