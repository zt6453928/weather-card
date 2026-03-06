/**
 * Weather Card Application
 * 高质量天气卡片单页应用
 */

// ============================================
// 数据层 - Mock Data
// ============================================

const mockData = {
    '北京': {
        city: '北京',
        country: '中国',
        temp: 22,
        feelsLike: 20,
        condition: 'sunny',
        description: '晴朗',
        high: 26,
        low: 14,
        humidity: 35,
        windSpeed: 12,
        pressure: 1013,
        visibility: 10,
        uvIndex: 6,
        sunrise: '06:15',
        sunset: '18:45',
        aqi: 85,
        pm25: 45,
        pm10: 78,
        forecast: [
            { date: '明天', condition: 'sunny', high: 25, low: 13 },
            { date: '后天', condition: 'cloudy', high: 23, low: 12 },
            { date: '周三', condition: 'cloudy', high: 21, low: 11 },
            { date: '周四', condition: 'rainy', high: 19, low: 10 },
            { date: '周五', condition: 'sunny', high: 24, low: 12 }
        ],
        trend: [20, 22, 25, 23, 21, 19, 24, 22]
    },
    'shanghai': {
        city: '上海',
        country: '中国',
        temp: 19,
        feelsLike: 21,
        condition: 'cloudy',
        description: '多云',
        high: 22,
        low: 16,
        humidity: 68,
        windSpeed: 18,
        pressure: 1010,
        visibility: 8,
        uvIndex: 3,
        sunrise: '06:05',
        sunset: '18:35',
        aqi: 95,
        pm25: 52,
        pm10: 85,
        forecast: [
            { date: '明天', condition: 'cloudy', high: 21, low: 15 },
            { date: '后天', condition: 'rainy', high: 20, low: 14 },
            { date: '周三', condition: 'rainy', high: 18, low: 13 },
            { date: '周四', condition: 'cloudy', high: 22, low: 15 },
            { date: '周五', condition: 'sunny', high: 24, low: 16 }
        ],
        trend: [18, 19, 21, 20, 18, 22, 24, 20]
    },
    '广州': {
        city: '广州',
        country: '中国',
        temp: 28,
        feelsLike: 32,
        condition: 'rainy',
        description: '小雨',
        high: 30,
        low: 24,
        humidity: 82,
        windSpeed: 8,
        pressure: 1008,
        visibility: 6,
        uvIndex: 4,
        sunrise: '06:25',
        sunset: '18:55',
        aqi: 65,
        pm25: 35,
        pm10: 58,
        forecast: [
            { date: '明天', condition: 'rainy', high: 29, low: 23 },
            { date: '后天', condition: 'thunder', high: 28, low: 22 },
            { date: '周三', condition: 'rainy', high: 27, low: 22 },
            { date: '周四', condition: 'cloudy', high: 30, low: 24 },
            { date: '周五', condition: 'sunny', high: 32, low: 25 }
        ],
        trend: [27, 28, 29, 28, 27, 30, 32, 29]
    },
    '成都': {
        city: '成都',
        country: '中国',
        temp: 17,
        feelsLike: 16,
        condition: 'cloudy',
        description: '阴',
        high: 20,
        low: 13,
        humidity: 75,
        windSpeed: 5,
        pressure: 1012,
        visibility: 5,
        uvIndex: 2,
        sunrise: '06:50',
        sunset: '19:10',
        aqi: 110,
        pm25: 68,
        pm10: 95,
        forecast: [
            { date: '明天', condition: 'cloudy', high: 19, low: 12 },
            { date: '后天', condition: 'cloudy', high: 18, low: 11 },
            { date: '周三', condition: 'rainy', high: 16, low: 10 },
            { date: '周四', condition: 'cloudy', high: 20, low: 12 },
            { date: '周五', condition: 'sunny', high: 23, low: 14 }
        ],
        trend: [15, 17, 19, 18, 16, 20, 23, 19]
    },
    '哈尔滨': {
        city: '哈尔滨',
        country: '中国',
        temp: -3,
        feelsLike: -8,
        condition: 'snowy',
        description: '雪',
        high: 0,
        low: -8,
        humidity: 55,
        windSpeed: 22,
        pressure: 1020,
        visibility: 3,
        uvIndex: 1,
        sunrise: '05:45',
        sunset: '17:20',
        aqi: 45,
        pm25: 22,
        pm10: 42,
        forecast: [
            { date: '明天', condition: 'snowy', high: -2, low: -9 },
            { date: '后天', condition: 'snowy', high: -4, low: -11 },
            { date: '周三', condition: 'cloudy', high: -1, low: -7 },
            { date: '周四', condition: 'sunny', high: 2, low: -5 },
            { date: '周五', condition: 'sunny', high: 5, low: -3 }
        ],
        trend: [-5, -3, -2, -4, -1, 2, 5, 0]
    },
    '深圳': {
        city: '深圳',
        country: '中国',
        temp: 29,
        feelsLike: 34,
        condition: 'thunder',
        description: '雷阵雨',
        high: 31,
        low: 25,
        humidity: 88,
        windSpeed: 25,
        pressure: 1005,
        visibility: 4,
        uvIndex: 2,
        sunrise: '06:20',
        sunset: '18:50',
        aqi: 55,
        pm25: 28,
        pm10: 48,
        forecast: [
            { date: '明天', condition: 'thunder', high: 30, low: 24 },
            { date: '后天', condition: 'rainy', high: 29, low: 23 },
            { date: '周三', condition: 'cloudy', high: 31, low: 25 },
            { date: '周四', condition: 'sunny', high: 33, low: 26 },
            { date: '周五', condition: 'sunny', high: 34, low: 27 }
        ],
        trend: [28, 29, 30, 29, 31, 33, 34, 31]
    }
};

// 城市名映射
const cityMapping = {
    '北京': 'beijing',
    'beijing': 'beijing',
    '上海': 'shanghai',
    'shanghai': 'shanghai',
    '广州': 'guangzhou',
    'guangzhou': 'guangzhou',
    '成都': 'chengdu',
    'chengdu': 'chengdu',
    '哈尔滨': 'harbin',
    'harbin': 'harbin',
    '深圳': 'shenzhen',
    'shenzhen': 'shenzhen'
};

// AQI 等级配置
const aqiLevels = [
    { max: 50, level: '优', advice: '空气很好，可以放心外出活动', class: 'aqi-1' },
    { max: 100, level: '良', advice: '空气质量可以接受，敏感人群减少户外活动', class: 'aqi-2' },
    { max: 150, level: '轻度污染', advice: '敏感人群应减少体力消耗大的户外活动', class: 'aqi-3' },
    { max: 200, level: '中度污染', advice: '对敏感人群不健康，应避免长时间户外运动', class: 'aqi-4' },
    { max: 300, level: '重度污染', advice: '避免户外活动，外出请佩戴口罩', class: 'aqi-5' },
    { max: 999, level: '严重污染', advice: '健康警报：所有人应避免户外活动', class: 'aqi-6' }
];

// 舒适度提示
const comfortTips = [
    { min: -50, max: 0, tip: '寒冷刺骨，注意保暖' },
    { min: 0, max: 10, tip: '天气较冷，建议穿厚外套' },
    { min: 10, max: 18, tip: '凉爽舒适，适合薄外套' },
    { min: 18, max: 25, tip: '温度宜人，体感舒适' },
    { min: 25, max: 32, tip: '温暖偏热，注意防晒' },
    { min: 32, max: 50, tip: '炎热高温，注意防暑降温' }
];

// ============================================
// SVG 图标库
// ============================================

const weatherIcons = {
    sunny: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="sunGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#FFD700;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#FFA500;stop-opacity:1" />
            </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="14" fill="url(#sunGrad)"/>
        <g stroke="#FFD700" stroke-width="3" stroke-linecap="round">
            <line x1="32" y1="4" x2="32" y2="10"/>
            <line x1="32" y1="54" x2="32" y2="60"/>
            <line x1="4" y1="32" x2="10" y2="32"/>
            <line x1="54" y1="32" x2="60" y2="32"/>
            <line x1="12.2" y1="12.2" x2="16.4" y2="16.4"/>
            <line x1="47.6" y1="47.6" x2="51.8" y2="51.8"/>
            <line x1="12.2" y1="51.8" x2="16.4" y2="47.6"/>
            <line x1="47.6" y1="16.4" x2="51.8" y2="12.2"/>
        </g>
    </svg>`,
    cloudy: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#E8E8E8;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#B8C5D6;stop-opacity:1" />
            </linearGradient>
        </defs>
        <circle cx="24" cy="24" r="10" fill="#FFD700" opacity="0.8"/>
        <path d="M18 42h28c6.6 0 12-5.4 12-12s-5.4-12-12-12c-1.3 0-2.5.2-3.7.6C41.7 11.8 35.3 8 28 8c-9.9 0-18 8.1-18 18 0 1.3.2 2.5.5 3.7C4.8 31.2 0 36.5 0 42c0 6.6 5.4 12 12 12h6" fill="url(#cloudGrad)"/>
    </svg>`,
    rainy: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="rainCloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#7B8FA3;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#4A5568;stop-opacity:1" />
            </linearGradient>
        </defs>
        <path d="M8 36h48c6.6 0 12-5.4 12-12s-5.4-12-12-12c-1.3 0-2.5.2-3.7.6C48.7 3.8 42.3 0 35 0c-9.9 0-18 8.1-18 18 0 1.3.2 2.5.5 3.7C11.8 23.2 7 28.5 7 34c0 1 .1 2 .3 2.9" fill="url(#rainCloudGrad)"/>
        <g stroke="#4A90D9" stroke-width="2" stroke-linecap="round">
            <line x1="16" y1="44" x2="14" y2="52"><animate attributeName="y1" values="44;48;44" dur="1s" repeatCount="indefinite"/><animate attributeName="y2" values="52;56;52" dur="1s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/></line>
            <line x1="28" y1="44" x2="26" y2="52"><animate attributeName="y1" values="44;48;44" dur="1s" begin="0.3s" repeatCount="indefinite"/><animate attributeName="y2" values="52;56;52" dur="1s" begin="0.3s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0;1" dur="1s" begin="0.3s" repeatCount="indefinite"/></line>
            <line x1="40" y1="44" x2="38" y2="52"><animate attributeName="y1" values="44;48;44" dur="1s" begin="0.6s" repeatCount="indefinite"/><animate attributeName="y2" values="52;56;52" dur="1s" begin="0.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0;1" dur="1s" begin="0.6s" repeatCount="indefinite"/></line>
            <line x1="52" y1="44" x2="50" y2="52"><animate attributeName="y1" values="44;48;44" dur="1s" begin="0.9s" repeatCount="indefinite"/><animate attributeName="y2" values="52;56;52" dur="1s" begin="0.9s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0;1" dur="1s" begin="0.9s" repeatCount="indefinite"/></line>
        </g>
    </svg>`,
    snowy: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="snowCloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#E8E8E8;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#C5D1E0;stop-opacity:1" />
            </linearGradient>
        </defs>
        <path d="M8 36h48c6.6 0 12-5.4 12-12s-5.4-12-12-12c-1.3 0-2.5.2-3.7.6C48.7 3.8 42.3 0 35 0c-9.9 0-18 8.1-18 18 0 1.3.2 2.5.5 3.7C11.8 23.2 7 28.5 7 34c0 1 .1 2 .3 2.9" fill="url(#snowCloudGrad)"/>
        <g fill="white">
            <circle cx="16" cy="50" r="3"><animate attributeName="cy" values="44;56" dur="2s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0" dur="2s" repeatCount="indefinite"/></circle>
            <circle cx="28" cy="50" r="3"><animate attributeName="cy" values="44;56" dur="2s" begin="0.5s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0" dur="2s" begin="0.5s" repeatCount="indefinite"/></circle>
            <circle cx="40" cy="50" r="3"><animate attributeName="cy" values="44;56" dur="2s" begin="1s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0" dur="2s" begin="1s" repeatCount="indefinite"/></circle>
            <circle cx="52" cy="50" r="3"><animate attributeName="cy" values="44;56" dur="2s" begin="1.5s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0" dur="2s" begin="1.5s" repeatCount="indefinite"/></circle>
        </g>
    </svg>`,
    thunder: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="thunderCloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#4A4A6A;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#2D2D44;stop-opacity:1" />
            </linearGradient>
        </defs>
        <path d="M8 36h48c6.6 0 12-5.4 12-12s-5.4-12-12-12c-1.3 0-2.5.2-3.7.6C48.7 3.8 42.3 0 35 0c-9.9 0-18 8.1-18 18 0 1.3.2 2.5.5 3.7C11.8 23.2 7 28.5 7 34c0 1 .1 2 .3 2.9" fill="url(#thunderCloudGrad)"/>
        <polygon points="30,38 22,52 30,52 26,64 42,46 32,46 38,38" fill="#FFD700">
            <animate attributeName="opacity" values="0;1;0;1;0" dur="2s" repeatCount="indefinite"/>
        </polygon>
    </svg>`
};

// 小型预报图标
const smallIcons = {
    sunny: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`,
    cloudy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>`,
    rainy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 13v8M8 13v8M12 15v8M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"/></svg>`,
    snowy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25M8 16h.01M8 20h.01M12 18h.01M12 22h.01M16 16h.01M16 20h.01"/></svg>`,
    thunder: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"/><path d="M13 11l-4 6h6l-4 6"/></svg>`
};

// ============================================
// 工具函数层
// ============================================

function getAQIInfo(aqi) {
    return aqiLevels.find(level => aqi <= level.max) || aqiLevels[aqiLevels.length - 1];
}

function getComfortTip(temp) {
    const tip = comfortTips.find(t => temp >= t.min && temp < t.max);
    return tip ? tip.tip : '注意天气变化';
}

function getWeatherTheme(condition) {
    const themes = {
        sunny: 'weather-sunny',
        cloudy: 'weather-cloudy',
        rainy: 'weather-rainy',
        snowy: 'weather-snowy',
        thunder: 'weather-thunder'
    };
    return themes[condition] || 'weather-sunny';
}

function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    return date.toLocaleDateString('zh-CN', options);
}

function formatTime(date) {
    return date.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
}

// ============================================
// 状态管理
// ============================================

let currentCity = '北京';
let isDarkMode = false;

// ============================================
// DOM 元素缓存
// ============================================

const elements = {
    cityInput: document.getElementById('cityInput'),
    searchBtn: document.getElementById('searchBtn'),
    locationBtn: document.getElementById('locationBtn'),
    errorMsg: document.getElementById('errorMsg'),
    loadingOverlay: document.getElementById('loadingOverlay'),
    weatherBg: document.getElementById('weatherBg'),
    particles: document.getElementById('particles'),
    themeToggle: document.getElementById('themeToggle'),
    // 主卡片元素
    cityName: document.getElementById('cityName'),
    countryName: document.getElementById('countryName'),
    currentDate: document.getElementById('currentDate'),
    currentTime: document.getElementById('currentTime'),
    weatherIcon: document.getElementById('weatherIcon'),
    temperature: document.getElementById('temperature'),
    weatherDesc: document.getElementById('weatherDesc'),
    comfortTip: document.getElementById('comfortTip'),
    tempHigh: document.getElementById('tempHigh'),
    tempLow: document.getElementById('tempLow'),
    feelsLike: document.getElementById('feelsLike'),
    humidity: document.getElementById('humidity'),
    windSpeed: document.getElementById('windSpeed'),
    pressure: document.getElementById('pressure'),
    visibility: document.getElementById('visibility'),
    uvIndex: document.getElementById('uvIndex'),
    sunrise: document.getElementById('sunrise'),
    sunset: document.getElementById('sunset'),
    // AQI 元素
    aqiBadge: document.getElementById('aqiBadge'),
    aqiValue: document.getElementById('aqiValue'),
    aqiLevel: document.getElementById('aqiLevel'),
    aqiAdvice: document.getElementById('aqiAdvice'),
    pm25: document.getElementById('pm25'),
    pm10: document.getElementById('pm10'),
    pm25Bar: document.getElementById('pm25Bar'),
    pm10Bar: document.getElementById('pm10Bar'),
    // 图表和预报
    tempChart: document.getElementById('tempChart'),
    chartLabels: document.getElementById('chartLabels'),
    forecastList: document.getElementById('forecastList')
};

// ============================================
// 渲染层
// ============================================

function renderWeather(data) {
    // 更新背景主题
    const themeClass = getWeatherTheme(data.condition);
    document.body.className = themeClass;
    
    // 更新粒子效果
    updateParticles(data.condition);
    
    // 更新基本信息
    elements.cityName.textContent = data.city;
    elements.countryName.textContent = data.country;
    elements.temperature.textContent = data.temp;
    elements.weatherDesc.textContent = data.description;
    elements.comfortTip.textContent = getComfortTip(data.temp);
    
    // 更新天气图标
    elements.weatherIcon.innerHTML = weatherIcons[data.condition] || weatherIcons.sunny;
    
    // 更新温度范围
    elements.tempHigh.textContent = data.high;
    elements.tempLow.textContent = data.low;
    
    // 更新详情
    elements.feelsLike.textContent = `${data.feelsLike}°`;
    elements.humidity.textContent = `${data.humidity}%`;
    elements.windSpeed.textContent = `${data.windSpeed} km/h`;
    elements.pressure.textContent = `${data.pressure} hPa`;
    elements.visibility.textContent = `${data.visibility} km`;
    elements.uvIndex.textContent = data.uvIndex;
    elements.sunrise.textContent = data.sunrise;
    elements.sunset.textContent = data.sunset;
    
    // 更新日期时间
    const now = new Date();
    elements.currentDate.textContent = formatDate(now);
    elements.currentTime.textContent = formatTime(now);
    
    // 渲染 AQI
    renderAQI(data.aqi, data.pm25, data.pm10);
    
    // 渲染图表
    renderChart(data.trend);
    
    // 渲染预报
    renderForecast(data.forecast);
}

function renderAQI(aqi, pm25, pm10) {
    const aqiInfo = getAQIInfo(aqi);
    
    elements.aqiValue.textContent = aqi;
    elements.aqiLevel.textContent = aqiInfo.level;
    elements.aqiAdvice.textContent = aqiInfo.advice;
    elements.pm25.textContent = pm25;
    elements.pm10.textContent = pm10;
    
    // 更新 AQI 徽章样式
    elements.aqiBadge.textContent = aqiInfo.level;
    elements.aqiBadge.className = `aqi-badge ${aqiInfo.class}`;
    
    // 更新进度条
    elements.pm25Bar.style.width = `${Math.min(pm25 / 150 * 100, 100)}%`;
    elements.pm10Bar.style.width = `${Math.min(pm10 / 150 * 100, 100)}%`;
}

function renderChart(trendData) {
    if (!trendData || trendData.length === 0) return;
    
    const width = 600;
    const height = 200;
    const padding = 40;
    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;
    
    const minTemp = Math.min(...trendData) - 2;
    const maxTemp = Math.max(...trendData) + 2;
    const tempRange = maxTemp - minTemp;
    
    // 计算点的坐标
    const points = trendData.map((temp, index) => {
        const x = padding + (index / (trendData.length - 1)) * chartWidth;
        const y = height - padding - ((temp - minTemp) / tempRange) * chartHeight;
        return { x, y, temp };
    });
    
    // 生成折线路径
    const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
    
    // 生成区域路径
    const areaPath = `${linePath} L ${points[points.length - 1].x} ${height - padding} L ${points[0].x} ${height - padding} Z`;
    
    // 生成点和标签
    const circles = points.map((p, i) => 
        `<circle class="chart-point" cx="${p.x}" cy="${p.y}" style="animation-delay: ${i * 0.1}s"/>
         <text class="chart-label" x="${p.x}" y="${p.y - 15}">${p.temp}°</text>`
    ).join('');
    
    // 生成渐变定义
    const defs = `
        <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color:#FFD700;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#FF6B6B;stop-opacity:1" />
            </linearGradient>
            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#FFD700;stop-opacity:0.3" />
                <stop offset="100%" style="stop-color:#FF6B6B;stop-opacity:0.05" />
            </linearGradient>
        </defs>
    `;
    
    elements.tempChart.innerHTML = `${defs}
        <path class="chart-area" d="${areaPath}"/>
        <path class="chart-line" d="${linePath}"/>
        ${circles}
    `;
    
    // 生成时间标签
    const labels = ['06:00', '09:00', '12:00', '15:00', '18:00', '21:00', '00:00', '03:00'];
    elements.chartLabels.innerHTML = labels.map((label, i) => 
        `<div class="chart-label-item">${label}</div>`
    ).join('');
}

function renderForecast(forecastData) {
    if (!forecastData || forecastData.length === 0) return;
    
    elements.forecastList.innerHTML = forecastData.map((item, index) => {
        const icon = smallIcons[item.condition] || smallIcons.sunny;
        return `
            <div class="forecast-item delay-${index + 1}">
                <span class="forecast-date">${item.date}</span>
                <div class="forecast-icon">${icon}</div>
                <span class="forecast-desc">${getWeatherDescription(item.condition)}</span>
                <span class="forecast-temp">
                    <span class="high">${item.high}°</span>
                    <span class="low">${item.low}°</span>
                </span>
            </div>
        `;
    }).join('');
}

function getWeatherDescription(condition) {
    const descriptions = {
        sunny: '晴',
        cloudy: '多云',
        rainy: '雨',
        snowy: '雪',
        thunder: '雷暴'
    };
    return descriptions[condition] || '晴';
}

function updateParticles(condition) {
    const container = elements.particles;
    container.innerHTML = '';
    
    let particleCount = 20;
    let particleClass = 'particle';
    
    switch(condition) {
        case 'snowy':
            particleClass = 'snow-particle';
            particleCount = 30;
            break;
        case 'rainy':
        case 'thunder':
            particleClass = 'rain-particle';
            particleCount = 40;
            break;
        default:
            particleClass = 'particle';
            particleCount = 15;
    }
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = particleClass;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.width = `${Math.random() * 4 + 2}px`;
        particle.style.height = particle.style.width;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
        container.appendChild(particle);
    }
}

function showError(message) {
    elements.errorMsg.textContent = message;
    elements.errorMsg.classList.add('show');
    setTimeout(() => {
        elements.errorMsg.classList.remove('show');
    }, 3000);
}

function showLoading() {
    elements.loadingOverlay.classList.add('show');
}

function hideLoading() {
    elements.loadingOverlay.classList.remove('show');
}

// ============================================
// 交互逻辑层
// ============================================

function searchCity() {
    const input = elements.cityInput.value.trim();
    if (!input) {
        showError('请输入城市名称');
        return;
    }
    
    showLoading();
    
    // 模拟 API 延迟
    setTimeout(() => {
        const normalizedInput = input.toLowerCase();
        let foundData = null;
        
        // 查找匹配的城市数据
        for (const [key, data] of Object.entries(mockData)) {
            if (key === normalizedInput || 
                data.city === input || 
                data.city.toLowerCase() === normalizedInput) {
                foundData = data;
                break;
            }
        }
        
        if (foundData) {
            currentCity = foundData.city;
            renderWeather(foundData);
            saveLastCity(currentCity);
            elements.cityInput.value = '';
        } else {
            showError(`未找到城市"${input}"，请尝试：北京、上海、广州、成都、哈尔滨、深圳`);
        }
        
        hideLoading();
    }, 500);
}

function locateCurrent() {
    showLoading();
    setTimeout(() => {
        currentCity = '北京';
        renderWeather(mockData['beijing']);
        saveLastCity(currentCity);
        hideLoading();
    }, 600);
}

function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('weatherTheme', isDarkMode ? 'dark' : 'light');
}

// ============================================
// 本地存储
// ============================================

function saveLastCity(city) {
    localStorage.setItem('lastWeatherCity', city);
}

function loadLastCity() {
    const saved = localStorage.getItem('lastWeatherCity');
    return saved || '北京';
}

function loadTheme() {
    const saved = localStorage.getItem('weatherTheme');
    if (saved === 'dark') {
        isDarkMode = true;
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}

// ============================================
// 时钟更新
// ============================================

function updateClock() {
    const now = new Date();
    if (elements.currentTime) {
        elements.currentTime.textContent = formatTime(now);
    }
}

// ============================================
// 初始化逻辑
// ============================================

function init() {
    // 加载主题
    loadTheme();
    
    // 加载上次访问的城市
    const lastCity = loadLastCity();
    
    // 查找城市数据
    let cityData = null;
    for (const [key, data] of Object.entries(mockData)) {
        if (data.city === lastCity) {
            cityData = data;
            break;
        }
    }
    
    // 默认显示北京
    if (!cityData) {
        cityData = mockData['beijing'];
    }
    
    renderWeather(cityData);
    
    // 绑定事件
    elements.searchBtn.addEventListener('click', searchCity);
    elements.cityInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') searchCity();
    });
    elements.locationBtn.addEventListener('click', locateCurrent);
    elements.themeToggle.addEventListener('click', toggleTheme);
    
    // 启动时钟
    setInterval(updateClock, 1000);
    updateClock();
    
    console.log('Weather Card initialized successfully');
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);
