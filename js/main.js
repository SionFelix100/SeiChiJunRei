// 主程序入口
class AnimePilgrimageApp {
    constructor() {
        this.viewer = null;
        this.locationManager = null;
        this.uiManager = null;
        this.isInitialized = false;
        this.init();
    }
    
    // 初始化应用
    async init() {
        try {
            console.log('开始初始化日本动漫圣地巡礼应用...');
            
            // 显示加载状态
            this.showInitialLoading();
            
            // 检查Cesium是否加载
            if (typeof Cesium === 'undefined') {
                throw new Error('Cesium库未正确加载');
            }
            
            // 初始化Cesium视图
            await this.initViewer();
            
            // 初始化地点管理器
            await this.initLocationManager();
            
            // 初始化UI管理器
            await this.initUIManager();
            
            // 设置全局引用
            this.setupGlobalReferences();
            
            // 绑定全局事件
            this.bindGlobalEvents();
            
            // 标记为已初始化
            this.isInitialized = true;
            
            console.log('应用初始化完成!');
            
            // 隐藏加载状态
            this.hideInitialLoading();
            
            // 显示欢迎信息
            this.showWelcomeMessage();
            
        } catch (error) {
            console.error('应用初始化失败:', error);
            this.showInitializationError(error);
        }
    }
    
    // 初始化Cesium视图
    async initViewer() {
        console.log('初始化Cesium视图...');
        
        return new Promise((resolve, reject) => {
            try {
                this.viewer = new CesiumViewer();
                
                // 等待视图完全加载
                const checkViewerReady = () => {
                    if (this.viewer.viewer && this.viewer.viewer.scene) {
                        console.log('Cesium视图初始化完成');
                        resolve();
                    } else {
                        setTimeout(checkViewerReady, 100);
                    }
                };
                
                checkViewerReady();
                
            } catch (error) {
                reject(new Error(`Cesium视图初始化失败: ${error.message}`));
            }
        });
    }
    
    // 初始化地点管理器
    async initLocationManager() {
        console.log('初始化地点管理器...');
        
        return new Promise((resolve) => {
            try {
                this.locationManager = new LocationManager(this.viewer);
                console.log('地点管理器初始化完成');
                resolve();
            } catch (error) {
                console.error('地点管理器初始化失败:', error);
                // 地点管理器失败不应该阻止应用启动
                resolve();
            }
        });
    }
    
    // 初始化UI管理器
    async initUIManager() {
        console.log('初始化UI管理器...');
        
        return new Promise((resolve) => {
            try {
                this.uiManager = new UIManager(this.locationManager);
                console.log('UI管理器初始化完成');
                
                // 初始化顶部功能面板管理器
                if (typeof TopPanelManager !== 'undefined') {
                    this.topPanelManager = new TopPanelManager(this.viewer);
                    console.log('顶部功能面板管理器初始化完成');
                } else {
                    console.warn('TopPanelManager未找到，跳过初始化');
                }
                
                // 初始化鹰眼地图
                if (typeof HawkEyeMap !== 'undefined') {
                    this.hawkEyeMap = new HawkEyeMap(this.viewer.viewer);
                    // 延迟初始化鹰眼地图，确保主视图完全加载
                    setTimeout(() => {
                        this.hawkEyeMap.init();
                    }, 1000);
                    console.log('鹰眼地图管理器初始化完成');
                } else {
                    console.warn('HawkEyeMap未找到，跳过初始化');
                }
                
                resolve();
            } catch (error) {
                console.error('UI管理器初始化失败:', error);
                // UI管理器失败不应该阻止应用启动
                resolve();
            }
        });
    }
    
    // 设置全局引用
    setupGlobalReferences() {
        // 将主要对象设置为全局可访问
        window.app = this;
        window.viewer = this.viewer;
        window.locationManager = this.locationManager;
        window.uiManager = this.uiManager;
        window.topPanelManager = this.topPanelManager;
        window.hawkEyeMap = this.hawkEyeMap;
        
        console.log('全局引用设置完成');
    }
    
    // 绑定全局事件
    bindGlobalEvents() {
        // 窗口大小变化事件
        window.addEventListener('resize', this.handleWindowResize.bind(this));
        
        // 页面卸载事件
        window.addEventListener('beforeunload', this.handleBeforeUnload.bind(this));
        
        // 错误处理
        window.addEventListener('error', this.handleGlobalError.bind(this));
        
        // 键盘快捷键
        document.addEventListener('keydown', this.handleKeyDown.bind(this));
        
        console.log('全局事件绑定完成');
    }
    
    // 处理窗口大小变化
    handleWindowResize() {
        if (this.viewer && this.viewer.viewer) {
            this.viewer.viewer.resize();
        }
    }
    
    // 处理页面卸载
    handleBeforeUnload() {
        this.cleanup();
    }
    
    // 处理全局错误
    handleGlobalError(event) {
        console.error('全局错误:', event.error);
        
        if (this.uiManager) {
            this.uiManager.showMessage('发生了一个错误，请刷新页面重试', 'error');
        }
    }
    
    // 处理键盘事件
    handleKeyDown(event) {
        // ESC键 - 清除选择
        if (event.key === 'Escape') {
            if (this.viewer) {
                this.viewer.clearSelection();
            }
            if (this.uiManager) {
                this.uiManager.hideLocationInfo();
            }
        }
        
        // F键 - 全屏
        if (event.key === 'f' || event.key === 'F') {
            if (this.viewer && this.viewer.viewer) {
                this.viewer.viewer.fullscreenButton.viewModel.command();
            }
        }
        
        // H键 - 返回首页（功能已移除）
        // if (event.key === 'h' || event.key === 'H') {
        //     // 首页功能已移除
        // }
        
        // Ctrl+F - 聚焦搜索框
        if (event.ctrlKey && event.key === 'f') {
            event.preventDefault();
            const searchInput = document.getElementById('searchInput');
            if (searchInput) {
                searchInput.focus();
            }
        }
    }
    
    // 显示初始加载状态
    showInitialLoading() {
        const loadingIndicator = document.getElementById('loadingIndicator');
        if (loadingIndicator) {
            loadingIndicator.style.display = 'block';
            loadingIndicator.querySelector('p').textContent = '正在初始化应用...';
        }
    }
    
    // 隐藏初始加载状态
    hideInitialLoading() {
        const loadingIndicator = document.getElementById('loadingIndicator');
        if (loadingIndicator) {
            loadingIndicator.style.display = 'none';
        }
    }
    
    // 显示欢迎信息
    showWelcomeMessage() {
        if (this.uiManager) {
            this.uiManager.showMessage('欢迎来到日本动漫圣地巡礼！点击左侧动漫列表开始探索', 'success');
        }
    }
    
    // 显示初始化错误
    showInitializationError(error) {
        const loadingIndicator = document.getElementById('loadingIndicator');
        if (loadingIndicator) {
            loadingIndicator.innerHTML = `
                <div style="color: #ff6b6b; text-align: center;">
                    <h3>初始化失败</h3>
                    <p>${error.message}</p>
                    <button onclick="location.reload()" style="
                        padding: 10px 20px;
                        background: #ff6b6b;
                        color: white;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                        margin-top: 10px;
                    ">重新加载</button>
                </div>
            `;
        }
    }
    
    // 获取应用状态
    getAppState() {
        return {
            isInitialized: this.isInitialized,
            viewerReady: this.viewer && this.viewer.viewer !== null,
            locationManagerReady: this.locationManager !== null,
            uiManagerReady: this.uiManager !== null,
            locationCount: this.locationManager ? this.locationManager.getDisplayedLocationCount() : 0,
            statistics: this.locationManager ? this.locationManager.getStatistics() : null
        };
    }
    
    // 重启应用
    restart() {
        console.log('重启应用...');
        this.cleanup();
        setTimeout(() => {
            location.reload();
        }, 1000);
    }
    
    // 清理资源
    cleanup() {
        console.log('清理应用资源...');
        
        if (this.hawkEyeMap) {
            this.hawkEyeMap.destroy();
            this.hawkEyeMap = null;
        }
        
        if (this.viewer) {
            this.viewer.destroy();
            this.viewer = null;
        }
        
        this.locationManager = null;
        this.uiManager = null;
        this.isInitialized = false;
        
        // 清理全局引用
        delete window.app;
        delete window.viewer;
        delete window.locationManager;
        delete window.uiManager;
        delete window.hawkEyeMap;
    }
}

// 应用启动函数
function startApp() {
    // 检查DOM是否已加载
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            new AnimePilgrimageApp();
        });
    } else {
        new AnimePilgrimageApp();
    }
}

// 调试函数
window.debugApp = function() {
    if (window.app) {
        console.log('应用状态:', window.app.getAppState());
        console.log('配置信息:', CONFIG);
        console.log('动漫数据:', ANIME_DATA);
    } else {
        console.log('应用未初始化');
    }
};

// 重启应用函数
window.restartApp = function() {
    if (window.app) {
        window.app.restart();
    } else {
        location.reload();
    }
};

// 导出应用类
window.AnimePilgrimageApp = AnimePilgrimageApp;

// 启动应用
startApp();

console.log('日本动漫圣地巡礼应用脚本加载完成');
console.log('使用 debugApp() 查看应用状态');
console.log('使用 restartApp() 重启应用');