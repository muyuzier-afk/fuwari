---
title: 使用Zeabur部署Anuneko2API
published: 2025-12-28
description: Anuneko太豪玩啦辣
image: ../assets/images/anuneko2api/屏幕截图 2025-12-28 170715.png
tags:
  - AI
  - LLM
  - 2API
  - 逆向
  - Zeabur
category: 教程
draft: false
---
![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20170715.png)
小东西怪可爱的，逆个向玩玩

## 准备工作

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20170942.png)

打开F12 发送你好来测试一下

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20171340.png)

这个速X-Token，把他提取出来

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20171515.png)

再提取一下cookies里的uk

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20171921.png)

提取chat id

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20172214.png)

打开zeabur 创建项目

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20172247.png)

点击 Github

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20172335.png)

前往 [2API](https://github.com/muyuzier-afk/2api) 点击Fork

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20172349.png)

点击Creat Fork

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20172258.png)

回到Zeabur 点击配置Github

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20172403.png)

选择自己的账户

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20172415.png)

点击install

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20172502.png)

选择2api

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20172605.png)

前往环境变量

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20172726.png)

添加你的账户配置

```
COOKIE_UK=
X_TOKEN=
CHAT_ID=
```

![](../assets/images/anuneko2api/屏幕截图%202025-12-28%20172744.png)

等待构建好后，点击重新部署，等重新部署完成后，复制api接入到支持OpenAI Restful API的地方就可以使用了，模型和密钥随便填
