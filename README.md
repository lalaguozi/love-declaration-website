# 💕 爱的告白网站 - Love Declaration Website

一个专为情侣设计的浪漫示爱网站，包含美好回忆、情书、相册和承诺等内容。

## ✨ 特色功能

- 🌸 **优美的视觉设计** - 渐变色彩和动画效果
- 💌 **情书区域** - 打字机效果展示爱意
- 📸 **回忆时光轴** - 记录美好时刻
- 🖼️ **相册展示** - 展示珍贵照片
- 💍 **爱的承诺** - 表达永恒誓言
- 📱 **响应式设计** - 完美适配各种设备
- 🎭 **交互动画** - 丰富的用户体验

## 🚀 在Railway上部署

### 方法一：通过GitHub部署（推荐）

1. **创建GitHub仓库**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Love Declaration Website"
   git branch -M main
   git remote add origin https://github.com/yourusername/love-declaration-website.git
   git push -u origin main
   ```

2. **在Railway上部署**
   - 访问 [Railway.app](https://railway.app)
   - 点击 "Start a New Project"
   - 选择 "Deploy from GitHub repo"
   - 选择你的仓库
   - Railway会自动检测并部署你的应用

### 方法二：通过Railway CLI部署

1. **安装Railway CLI**
   ```bash
   npm install -g @railway/cli
   ```

2. **登录Railway**
   ```bash
   railway login
   ```

3. **初始化项目**
   ```bash
   railway init
   ```

4. **部署应用**
   ```bash
   railway up
   ```

## 🛠️ 本地开发

1. **安装依赖**
   ```bash
   npm install
   ```

2. **启动开发服务器**
   ```bash
   npm start
   ```

3. **访问网站**
   打开浏览器访问 `http://localhost:3000`

## 📁 项目结构

```
li/
├── index.html          # 主页面
├── style.css           # 样式文件
├── script.js           # JavaScript交互
├── server.js           # Express服务器
├── package.json        # 项目配置
├── railway.json        # Railway部署配置
└── README.md           # 项目说明
```

## 🎨 自定义内容

### 修改情书内容
编辑 `index.html` 中的 `.letter-content` 部分：

```html
<div class="letter-content">
    <p>亲爱的，</p>
    <p>在这里写下你想说的话...</p>
    <!-- 添加更多段落 -->
</div>
```

### 添加照片
将照片放在项目目录中，然后修改 `.photo-placeholder` 部分：

```html
<div class="photo-item">
    <img src="your-photo.jpg" alt="描述">
</div>
```

### 修改时间轴
在 `.timeline` 部分添加或修改时间轴项目：

```html
<div class="timeline-item">
    <div class="timeline-date">特殊日期</div>
    <div class="timeline-content">
        <h3>标题</h3>
        <p>描述内容...</p>
    </div>
</div>
```

## 🌈 颜色主题

网站使用了温暖的渐变色彩：
- 主色调：粉红色到橙色渐变 (#ff6b6b to #ee5a24)
- 背景：紫色渐变 (#667eea to #764ba2)
- 辅助色：各种柔和的渐变色

## 📱 响应式设计

网站完全响应式，支持：
- 桌面端 (1200px+)
- 平板端 (768px - 1199px)
- 手机端 (< 768px)

## 🎭 动画效果

- 页面加载动画
- 滚动触发动画
- 悬停效果
- 点击特效
- 飘动爱心
- 打字机效果

## 🔧 技术栈

- **前端**: HTML5, CSS3, JavaScript (ES6+)
- **后端**: Node.js, Express.js
- **部署**: Railway
- **字体**: Google Fonts (Dancing Script, Noto Sans SC)

## 📄 许可证

MIT License - 详见 LICENSE 文件

## 💝 贡献

欢迎提交 Issues 和 Pull Requests 来改进这个项目！

## 🌟 致谢

感谢所有为爱情而编程的开发者们！

---

**用代码传递爱意，让技术见证浪漫！** 💕

如果这个项目帮助你表达了爱意，请给个 ⭐ 支持一下！