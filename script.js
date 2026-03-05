const CITY = {
  name: "哈尔滨",
  lat: 45.8038,
  lon: 126.535,
  timezone: "Asia/Shanghai"
};

const weatherCodeMap = {
  0: "晴",
  1: "大体晴",
  2: "局部多云",
  3: "阴",
  45: "雾",
  48: "冻雾",
  51: "小毛毛雨",
  53: "毛毛雨",
  55: "强毛毛雨",
  61: "小雨",
  63: "中雨",
  65: "大雨",
  71: "小雪",
  73: "中雪",
  75: "大雪",
  80: "阵雨",
  81: "强阵雨",
  82: "暴雨",
  95: "雷暴"
};

const cityEl = document.getElementById("city");
const timeEl = document.getElementById("time");
const tempEl = document.getElementById("temp");
const descEl = document.getElementById("desc");
const feelEl = document.getElementById("feel");
const humidityEl = document.getElementById("humidity");
const windEl = document.getElementById("wind");
const forecastEl = document.getElementById("forecast");
const refreshBtn = document.getElementById("refreshBtn");

cityEl.textContent = CITY.name;

function fmtTime(date = new Date()) {
  return date.toLocaleString("zh-CN", {
    timeZone: CITY.timezone,
    hour12: false,
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function renderTime() {
  timeEl.textContent = `更新时间：${fmtTime()}`;
}

function dayLabel(i) {
  if (i === 0) return "今天";
  if (i === 1) return "明天";
  return "后天";
}

async function loadWeather() {
  renderTime();
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${CITY.lat}&longitude=${CITY.lon}&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=${CITY.timezone}`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    const current = data.current;
    tempEl.textContent = Math.round(current.temperature_2m);
    feelEl.textContent = Math.round(current.apparent_temperature);
    humidityEl.textContent = Math.round(current.relative_humidity_2m);
    windEl.textContent = Math.round(current.wind_speed_10m);
    descEl.textContent = weatherCodeMap[current.weather_code] || "未知天气";

    const { temperature_2m_max: maxArr, temperature_2m_min: minArr, weather_code: codeArr } = data.daily;
    forecastEl.innerHTML = "";
    for (let i = 0; i < 3; i++) {
      const el = document.createElement("article");
      el.className = "day";
      el.innerHTML = `
        <h3>${dayLabel(i)}</h3>
        <p>${Math.round(minArr[i])}° ~ ${Math.round(maxArr[i])}°</p>
        <p style="margin-top:6px;color:#dbe5ff">${weatherCodeMap[codeArr[i]] || "-"}</p>
      `;
      forecastEl.appendChild(el);
    }
  } catch (err) {
    descEl.textContent = "天气加载失败";
    console.error(err);
  }
}

refreshBtn.addEventListener("click", loadWeather);
setInterval(renderTime, 30_000);
loadWeather();
