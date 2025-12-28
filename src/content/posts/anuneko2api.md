---
title: 使用Zeabur部署Anuneko2API
published: 2025-12-28
description: Anuneko太豪玩啦辣
image: ""
tags:
  - AI
  - LLM
  - 2API
  - 逆向
  - Zeabur
category: 教程
draft: false
---
![[屏幕截图 2025-12-28 170715.png]]
小东西怪可爱的，逆个向玩玩
## 准备工作![[屏幕截图 2025-12-28 170942.png]]

打开F12 发送你好来测试一下
![[屏幕截图 2025-12-28 171340.png]]
这个速X-Token，把他提取出来
![[屏幕截图 2025-12-28 171515.png]]
再提取一下cookies里的uk
![[屏幕截图 2025-12-28 171921.png]]
提取chat id
![[屏幕截图 2025-12-28 172214.png]]
打开zeabur 创建项目
![[屏幕截图 2025-12-28 172247.png]]点击 Github
![[屏幕截图 2025-12-28 172335.png]]
前往 [2API](https://github.com/muyuzier-afk/2api) 点击Fork

![[屏幕截图 2025-12-28 172349.png]]
点击Creat Fork
![[屏幕截图 2025-12-28 172258.png]]
回到Zeabur 点击配置Github
![[屏幕截图 2025-12-28 172403.png]]
选择自己的账户
![[屏幕截图 2025-12-28 172415.png]]
点击install
![[屏幕截图 2025-12-28 172502.png]]
选择2api
![[屏幕截图 2025-12-28 172605.png]]
前往环境变量
![[屏幕截图 2025-12-28 172726.png]]
添加你的账户配置
```
COOKIE_UK=
X_TOKEN=
CHAT_ID=
```

![[屏幕截图 2025-12-28 172744.png]]
等待构建好后，点击重新部署，等重新部署完成后，复制api接入到支持OpenAI Restful API的地方就可以使用了，模型和密钥随便填