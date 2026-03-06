# Weather Card - 精致天气卡片

一个高颜值、高完成度的天气单页应用，具备真实产品级 UI 和完整交互体验。

## 在线预览

🌏 **GitHub Pages**: https://zt6453928.github.io/weather-card

## 功能特性

### 🌤️ 核心功能
- **城市搜索** - 支持输入搜索、Enter 快捷键、定位按钮
- **实时天气** - 温度、湿度、风速、气压、能见度、紫外线、日出日落
- **5日预报** - 未来天气预报列表
- **空气质量** - AQI 指数、PM2.5/PM10、健康建议
- **温度趋势图** - 原生 SVG 实现的折线图，带绘制动画

### 🎨 视觉效果
- **Glassmorphism 毛玻璃** - 现代感卡片设计
- **动态天气背景** - 根据天气类型切换渐变背景
- **粒子动画** - 雨雪天气粒子特效
- **天气图标动画** - 漂浮、呼吸、雨滴动画
- **平滑过渡** - 所有状态切换都有流畅动画

### ⚡ 交互体验
- **加载动画** - 切换城市时显示加载状态
- **错误提示** - 友好的错误提示带抖动动画
- **主题切换** - 深色/浅色模式
- **本地存储** - 记住最后访问的城市和主题
- **响应式设计** - 完美适配桌面、平板、手机

## 技术栈

- 原生 HTML5
- 原生 CSS3 (Glassmorphism, 动画, 响应式)
- 原生 JavaScript (ES6+)
- SVG 图表与图标
- LocalStorage 本地存储

## 项目结构

```
weather-card/
├── index.html      # 主页面
├── style.css       # 样式文件
├── script.js       # JavaScript 逻辑
└── README.md       # 项目说明
```

## 本地运行

```bash
# 克隆仓库
git clone https://github.com/zt6453928/weather-card.git
cd weather-card

# 启动本地服务器
python -m http.server 8000

# 访问 http://localhost:8000
```

或者直接打开 `index.html` 文件。

## 部署到 GitHub Pages

1. Fork 或创建新仓库
2. 推送代码到 `main` 分支
3. 在仓库设置中启用 GitHub Pages
4. 选择 `main` 分支作为源
5. 访问部署后的链接

## 模拟数据

当前版本使用模拟数据展示功能，支持以下城市：
- 北京 - 晴朗
- 上海 - 多云
- 广州 - 小雨
- 成都 - 阴
- 哈尔滨 - 雪
- 深圳 - 雷阵雨

## 浏览器支持

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## License

MIT License
