/* 
 * @Description: 鹰眼地图效果 
 * @Version: 1.0 
 * @Author: Julian 
 * @Date: 2022-02-25 16:23:36 
 * @LastEditors: Julian 
 * @LastEditTime: 2022-02-26 12:40:35 
 */ 

class HawkEyeMap { 
    constructor(viewer) { 
        this._viewer = viewer; 
        this._hawkEyeMap = null;
        this._isInitialized = false;
        this._syncHandler = null;
    } 

    // 初始化函数 
    init() {
        if (this._isInitialized) {
            return;
        }
        
        try {
            this._hawkEyeMap = new Cesium.Viewer('hawkEyeMap', { 
                geocoder: false, 
                homeButton: false, 
                sceneModePicker: false, 
                baseLayerPicker: false, 
                navigationHelpButton: false, 
                animation: false, 
                timeline: false, 
                fullscreenButton: false,
                vrButton: false,
                infoBox: false,
                selectionIndicator: false
            }); 
            
            // 隐藏版权信息
            this._hawkEyeMap.cesiumWidget.creditContainer.style.display = 'none'; 
            
            // 设置透明背景
            this._hawkEyeMap.scene.backgroundColor = Cesium.Color.TRANSPARENT; 
            
            // 移除默认图层
            this._hawkEyeMap.imageryLayers.removeAll(); 

            // 添加底图图层
            this._hawkEyeMap.imageryLayers.addImageryProvider(
                // 使用OSM矢量图作为鹰眼地图底图
                new Cesium.UrlTemplateImageryProvider({ 
                    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
                    subdomains: ["a", "b", "c", "d"],
                    minimumLevel: 0,
                    maximumLevel: 18
                }) 
            ); 

            // 设置相机变化监听的敏感度
            this._viewer.camera.percentageChanged = 0.01; 

            this._bindEvent();
            this._isInitialized = true;
            
            console.log('鹰眼地图初始化成功');
        } catch (error) {
            console.error('鹰眼地图初始化失败:', error);
        }
    } 

    // 绑定事件 
    _bindEvent() { 
        // 监听主图相机变化 
        this._viewer.camera.changed.addEventListener(this._syncMap, this); 
        
        // 第一次刷新渲染时联动（否则第一次鹰眼地图不会联动） 
        this._syncHandler = this._viewer.scene.preRender.addEventListener(() => {
            this._syncEyeMap();
            // 移除首次同步监听器
            this._viewer.scene.preRender.removeEventListener(this._syncHandler);
        });
    } 

    // 同步主图与鹰眼地图 
    _syncMap() {
        if (!this._hawkEyeMap || !this._isInitialized) {
            return;
        }
        
        try {
            this._hawkEyeMap.camera.setView({
                destination: this._viewer.camera.position,
                orientation: {
                    heading: this._viewer.camera.heading,
                    pitch: this._viewer.camera.pitch,
                    roll: this._viewer.camera.roll,
                }
            });
        } catch (error) {
            console.error('鹰眼地图同步失败:', error);
        }
    }
    
    // 首次同步鹰眼地图
    _syncEyeMap() {
        this._syncMap();
    }
    
    // 显示鹰眼地图
    show() {
        const hawkEyeElement = document.getElementById('hawkEyeMap');
        if (hawkEyeElement) {
            hawkEyeElement.style.display = 'block';
        }
    }
    
    // 隐藏鹰眼地图
    hide() {
        const hawkEyeElement = document.getElementById('hawkEyeMap');
        if (hawkEyeElement) {
            hawkEyeElement.style.display = 'none';
        }
    }
    
    // 销毁鹰眼地图
    destroy() {
        if (this._hawkEyeMap) {
            this._viewer.camera.changed.removeEventListener(this._syncMap, this);
            this._hawkEyeMap.destroy();
            this._hawkEyeMap = null;
            this._isInitialized = false;
        }
    }
    
    // 获取鹰眼地图实例
    get viewer() {
        return this._hawkEyeMap;
    }
    
    // 检查是否已初始化
    get isInitialized() {
        return this._isInitialized;
    }
}