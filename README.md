# Weather Card

一个轻量天气卡片页面（默认城市：哈尔滨），使用 Open-Meteo API 获取实时天气与 3 日预报。

## 本地运行

直接打开 `index.html` 即可。

## 修改城市

编辑 `script.js` 顶部 `CITY` 配置即可：

```js
const CITY = {
  name: "哈尔滨",
  lat: 45.8038,
  lon: 126.535,
  timezone: "Asia/Shanghai"
};
```
