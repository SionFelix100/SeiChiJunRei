// Cesium配置
const CONFIG = {
    // Cesium Ion Token
    CESIUM_TOKEN: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3YmVlMjdlOS0xNjNkLTQyMjktYjM5OC0wMGI4MjY0MzU5YWQiLCJpZCI6MzE2ODY0LCJpYXQiOjE3NTEyNzU1OTh9.YzLLJ6D7EBgJGH0UtJ0lTS6ncRt4DV3PWDAnXYW3hBM',
    
    // 默认视图位置（日本东京）
    DEFAULT_VIEW: {
        longitude: 139.6917,
        latitude: 35.6895,
        height: 1000000
    },
    
    // 地图样式配置
    MAP_STYLES: {
        default: null, // 将在运行时初始化
        satellite: {
            name: '卫星影像',
            iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==',
            tooltip: '卫星影像地图'
        },
        street: {
            name: '街道地图',
            iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==',
            tooltip: '街道地图'
        }
    },
    
    // 地形配置
    TERRAIN: {
        enabled: true,
        provider: null // 将在运行时初始化
    },
    
    // 动画配置
    ANIMATION: {
        flyToDuration: 3.0,
        cameraHeightOffset: 500
    },
    
    // UI配置
    UI: {
        showTimeline: false,
        showAnimation: false,
        showCreditsOnScreen: false,
        showFullscreenButton: true,
        showVrButton: true,
        showSceneModePicker: true,
        showBaseLayerPicker: true,
        showGeocoder: true,
        showHomeButton: true,
        showNavigationHelpButton: true
    },
    
    // 3D模型配置
    MODELS: {
        defaultScale: 1.0,
        defaultHeightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
        maximumScale: 10.0,
        minimumPixelSize: 64
    },
    
    // 标记点配置
    MARKERS: {
        defaultColor: Cesium.Color.YELLOW,
        highlightColor: Cesium.Color.RED,
        selectedColor: Cesium.Color.LIME,
        pixelSize: 10,
        outlineWidth: 2,
        outlineColor: Cesium.Color.BLACK
    },
    
    // 搜索配置
    SEARCH: {
        maxResults: 10,
        minQueryLength: 2
    }
};

// 初始化Cesium Ion
Cesium.Ion.defaultAccessToken = CONFIG.CESIUM_TOKEN;

// 导出配置
window.CONFIG = CONFIG;