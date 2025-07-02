// Cesium视图管理器
class CesiumViewer {
    constructor() {
        this.viewer = null;
        this.entities = new Map();
        this.currentSelection = null;
        this.init().catch(error => {
            console.error('初始化失败:', error);
            this.showError('Cesium初始化失败，请检查网络连接和Token配置');
        });
    }
    
    // 初始化Cesium视图
    async init() {
        try {
            // 设置Cesium Ion token
            Cesium.Ion.defaultAccessToken = CONFIG.CESIUM_TOKEN;
            
            // 创建默认的imagery provider (使用Cesium World Imagery)
            const defaultImageryProvider = new Cesium.IonImageryProvider({ assetId: 2 });
            
            // 创建地形provider (使用Cesium World Terrain)
            const terrainProvider = await Cesium.CesiumTerrainProvider.fromIonAssetId(1, {
                requestVertexNormals: true,
                requestWaterMask: true
            });
            
            // 创建Cesium视图
            this.viewer = new Cesium.Viewer('cesiumContainer', {
                imageryProvider: defaultImageryProvider,
                terrainProvider: terrainProvider,
                timeline: CONFIG.UI.showTimeline,
                animation: CONFIG.UI.showAnimation,
                creditsDisplay: CONFIG.UI.showCreditsOnScreen,
                fullscreenButton: CONFIG.UI.showFullscreenButton,
                vrButton: CONFIG.UI.showVrButton,
                sceneModePicker: CONFIG.UI.showSceneModePicker,
                baseLayerPicker: CONFIG.UI.showBaseLayerPicker,
                geocoder: CONFIG.UI.showGeocoder,
                homeButton: CONFIG.UI.showHomeButton,
                navigationHelpButton: CONFIG.UI.showNavigationHelpButton,
                selectionIndicator: true,
                infoBox: true
            });
            
            // 隐藏版权信息
            this.viewer.cesiumWidget.creditContainer.style.display = 'none';
            
            // 进一步确保版权信息完全隐藏
            const creditContainer = this.viewer.cesiumWidget.creditContainer;
            if (creditContainer) {
                creditContainer.style.display = 'none';
                creditContainer.style.visibility = 'hidden';
                creditContainer.style.opacity = '0';
            }
            
            // 隐藏底部的版权信息栏
            const cesiumCredit = document.querySelector('.cesium-widget-credits');
            if (cesiumCredit) {
                cesiumCredit.style.display = 'none';
            }
            
            // 设置默认视图
            this.setDefaultView();
            
            // 设置场景属性
            this.setupScene();
            
            // 绑定事件
            this.bindEvents();
            
            // 初始化比例尺控件
            this.initScaleBar();
            
            console.log('Cesium视图初始化成功');
            
        } catch (error) {
            console.error('Cesium视图初始化失败:', error);
            this.showError('Cesium初始化失败，请检查网络连接和Token配置');
        }
    }
    
    // 设置默认视图位置
    setDefaultView() {
        this.viewer.camera.setView({
            destination: Cesium.Cartesian3.fromDegrees(
                CONFIG.DEFAULT_VIEW.longitude,
                CONFIG.DEFAULT_VIEW.latitude,
                CONFIG.DEFAULT_VIEW.height
            ),
            orientation: {
                heading: 0.0,
                pitch: -Cesium.Math.PI_OVER_TWO,
                roll: 0.0
            }
        });
    }
    
    // 设置场景属性
    setupScene() {
        const scene = this.viewer.scene;
        
        // 启用深度测试
        scene.globe.depthTestAgainstTerrain = true;
        
        // 设置大气效果
        scene.skyAtmosphere.show = true;
        
        // 设置光照
        scene.globe.enableLighting = true;
        
        // 设置雾效
        scene.fog.enabled = true;
        scene.fog.density = 0.0002;
        
        // 设置抗锯齿
        scene.fxaa = true;
        
        // 设置默认地形夸张度（与BaseLayerPicker保持一致）
        scene.globe.terrainExaggeration = 1.0;
    }
    
    // 绑定事件
    bindEvents() {
        try {
            // 左键点击事件
            this.viewer.cesiumWidget.screenSpaceEventHandler.setInputAction(
                this.onLeftClick.bind(this),
                Cesium.ScreenSpaceEventType.LEFT_CLICK
            );
            
            // 鼠标移动事件
            this.viewer.cesiumWidget.screenSpaceEventHandler.setInputAction(
                this.onMouseMove.bind(this),
                Cesium.ScreenSpaceEventType.MOUSE_MOVE
            );
            
            // 相机移动结束事件
            this.viewer.camera.moveEnd.addEventListener(this.onCameraMoveEnd.bind(this));
            
            // 添加渲染错误处理
            this.viewer.cesiumWidget.scene.renderError.addEventListener((scene, error) => {
                console.error('Cesium渲染错误:', error);
                // 尝试恢复渲染
                setTimeout(() => {
                    try {
                        this.viewer.scene.requestRender();
                    } catch (e) {
                        console.error('无法恢复渲染:', e);
                    }
                }, 1000);
            });
            
            // 添加相机移动监听器，用于更新浮动框位置
            this.viewer.camera.changed.addEventListener(() => {
                if (window.uiManager && this.currentSelection) {
                    const locationData = this.currentSelection.properties.locationData ? 
                        this.currentSelection.properties.locationData.getValue() : null;
                    if (locationData) {
                        window.uiManager.updateTooltipPosition(locationData);
                    }
                }
            });
        } catch (error) {
            console.error('绑定事件时出错:', error);
        }
    }
    
    // 左键点击事件
    onLeftClick(event) {
        const pickedObject = this.viewer.scene.pick(event.position);
        
        if (Cesium.defined(pickedObject)) {
            const entity = pickedObject.id;
            if (entity && entity.properties) {
                this.selectLocation(entity);
            }
        } else {
            this.clearSelection();
        }
    }
    
    // 鼠标移动事件
    onMouseMove(event) {
        const pickedObject = this.viewer.scene.pick(event.endPosition);
        
        if (Cesium.defined(pickedObject)) {
            const entity = pickedObject.id;
            if (entity && entity.properties) {
                document.body.style.cursor = 'pointer';
            }
        } else {
            document.body.style.cursor = 'default';
        }
    }
    
    // 相机移动结束事件
    onCameraMoveEnd() {
        // 可以在这里添加相机位置变化的处理逻辑
        console.log('相机移动结束');
    }
    
    // 飞行到指定位置
    flyTo(longitude, latitude, height = 1000, duration = CONFIG.ANIMATION.flyToDuration) {
        return this.viewer.camera.flyTo({
            destination: Cesium.Cartesian3.fromDegrees(longitude, latitude, height),
            duration: duration,
            complete: () => {
                console.log(`飞行到位置: ${longitude}, ${latitude}`);
            }
        });
    }
    
    // 添加地点标记
    addLocationMarker(location) {
        try {
            const entity = this.viewer.entities.add({
                id: location.id,
                position: Cesium.Cartesian3.fromDegrees(location.longitude, location.latitude),
                point: {
                    pixelSize: CONFIG.MARKERS.pixelSize,
                    color: CONFIG.MARKERS.defaultColor,
                    outlineColor: CONFIG.MARKERS.outlineColor,
                    outlineWidth: CONFIG.MARKERS.outlineWidth,
                    heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
                    disableDepthTestDistance: Number.POSITIVE_INFINITY
                },
                label: {
                    text: location.name,
                    font: '14pt sans-serif',
                    pixelOffset: new Cesium.Cartesian2(0, -50),
                    fillColor: Cesium.Color.WHITE,
                    outlineColor: Cesium.Color.BLACK,
                    outlineWidth: 2,
                    style: Cesium.LabelStyle.FILL_AND_OUTLINE,
                    heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
                    disableDepthTestDistance: Number.POSITIVE_INFINITY
                },
                properties: {
                    type: 'location',
                    locationData: location
                }
            });
            
            this.entities.set(location.id, entity);
            return entity;
        } catch (error) {
            console.error('添加地点标记时出错:', error, location);
            return null;
        }
    }
    
    // 添加3D模型
    addModel(location, modelUrl) {
        const entity = this.viewer.entities.add({
            id: `${location.id}_model`,
            position: Cesium.Cartesian3.fromDegrees(location.longitude, location.latitude),
            model: {
                uri: modelUrl,
                scale: CONFIG.MODELS.defaultScale,
                heightReference: CONFIG.MODELS.defaultHeightReference,
                maximumScale: CONFIG.MODELS.maximumScale,
                minimumPixelSize: CONFIG.MODELS.minimumPixelSize
            },
            properties: {
                type: 'model',
                locationData: location
            }
        });
        
        this.entities.set(`${location.id}_model`, entity);
        return entity;
    }
    
    // 选择地点
    selectLocation(entity) {
        try {
            // 验证实体和属性
            if (!entity || !entity.properties) {
                console.warn('无效的地点实体:', entity);
                return;
            }
            
            // 验证locationData属性存在
            if (!entity.properties.locationData) {
                console.warn('地点实体缺少locationData属性:', entity);
                return;
            }
            
            // 清除之前的选择
            this.clearSelection();
            
            // 设置当前选择
            this.currentSelection = entity;
            
            // 高亮显示
            if (entity.point) {
                entity.point.color = CONFIG.MARKERS.selectedColor;
                entity.point.pixelSize = CONFIG.MARKERS.pixelSize * 1.5;
            }
            
            // 获取地点数据 - 使用getValue()方法获取Cesium属性的实际值
            const locationData = entity.properties.locationData ? entity.properties.locationData.getValue() : null;
            
            // 验证地点数据
            if (locationData && typeof locationData.longitude === 'number' && typeof locationData.latitude === 'number') {
                // 飞行到该位置
                this.flyTo(
                    locationData.longitude,
                    locationData.latitude,
                    CONFIG.ANIMATION.cameraHeightOffset
                );
                
                // 显示地点信息
                if (window.uiManager) {
                    window.uiManager.showLocationInfo(locationData);
                }
            } else {
                console.error('地点数据无效:', locationData);
            }
        } catch (error) {
            console.error('选择地点时出错:', error);
            this.clearSelection();
        }
    }
    
    // 清除选择
    clearSelection() {
        if (this.currentSelection) {
            // 恢复原始样式
            if (this.currentSelection.point) {
                this.currentSelection.point.color = CONFIG.MARKERS.defaultColor;
                this.currentSelection.point.pixelSize = CONFIG.MARKERS.pixelSize;
            }
            this.currentSelection = null;
        }
        
        // 隐藏地点信息
        window.uiManager && window.uiManager.hideLocationInfo();
    }
    
    // 移除所有实体
    clearAllEntities() {
        this.viewer.entities.removeAll();
        this.entities.clear();
        this.currentSelection = null;
    }
    
    // 切换图层显示
    toggleLayer(layerName, visible) {
        switch (layerName) {
            case 'terrain':
                // 暂时禁用地形切换功能，避免Ion服务问题
                console.log('地形切换功能暂时禁用');
                break;
            case 'building':
                this.viewer.scene.primitives.show = visible;
                break;
            case 'animeLocation':
                this.entities.forEach(entity => {
                    entity.show = visible;
                });
                break;
        }
    }
    
    // 显示错误信息
    showError(message) {
        console.error(message);
        // 可以在这里添加错误提示UI
    }
    
    // 初始化比例尺控件
    initScaleBar() {
        // 创建比例尺容器
        const scaleBarContainer = document.createElement('div');
        scaleBarContainer.className = 'cesium-scale-bar';
        scaleBarContainer.innerHTML = `
            <div class="scale-bar-line"></div>
            <div class="scale-bar-text">0 km</div>
        `;
        
        // 添加到Cesium容器
        const cesiumContainer = document.getElementById('cesiumContainer');
        cesiumContainer.appendChild(scaleBarContainer);
        
        this.scaleBarContainer = scaleBarContainer;
        this.scaleBarLine = scaleBarContainer.querySelector('.scale-bar-line');
        this.scaleBarText = scaleBarContainer.querySelector('.scale-bar-text');
        
        // 监听相机变化事件
        this.viewer.camera.changed.addEventListener(() => {
            this.updateScaleBar();
        });
        
        // 初始更新
        this.updateScaleBar();
    }
    
    // 更新比例尺
    updateScaleBar() {
        if (!this.scaleBarContainer) return;
        
        try {
            // 获取当前相机高度
            const cameraHeight = this.viewer.camera.positionCartographic.height;
            
            // 计算屏幕上100像素对应的实际距离
            const canvas = this.viewer.scene.canvas;
            const centerX = canvas.clientWidth / 2;
            const centerY = canvas.clientHeight / 2;
            
            // 获取屏幕中心点的地理坐标
            const centerPick = this.viewer.camera.pickEllipsoid(
                new Cesium.Cartesian2(centerX, centerY),
                this.viewer.scene.globe.ellipsoid
            );
            
            // 获取屏幕中心点右侧100像素的地理坐标
            const rightPick = this.viewer.camera.pickEllipsoid(
                new Cesium.Cartesian2(centerX + 100, centerY),
                this.viewer.scene.globe.ellipsoid
            );
            
            if (centerPick && rightPick) {
                // 计算两点间的距离
                const distance = Cesium.Cartesian3.distance(centerPick, rightPick);
                
                // 根据距离调整比例尺
                let scaleDistance, scaleWidth, unit;
                
                if (distance >= 1000) {
                    // 大于1km，使用km单位
                    const kmDistance = distance / 1000;
                    if (kmDistance >= 100) {
                        scaleDistance = Math.round(kmDistance / 100) * 100;
                        scaleWidth = (scaleDistance * 1000 / distance) * 100;
                    } else if (kmDistance >= 10) {
                        scaleDistance = Math.round(kmDistance / 10) * 10;
                        scaleWidth = (scaleDistance * 1000 / distance) * 100;
                    } else if (kmDistance >= 1) {
                        scaleDistance = Math.round(kmDistance);
                        scaleWidth = (scaleDistance * 1000 / distance) * 100;
                    } else {
                        scaleDistance = Math.round(kmDistance * 10) / 10;
                        scaleWidth = (scaleDistance * 1000 / distance) * 100;
                    }
                    unit = 'km';
                } else {
                    // 小于1km，使用m单位
                    if (distance >= 100) {
                        scaleDistance = Math.round(distance / 100) * 100;
                    } else if (distance >= 10) {
                        scaleDistance = Math.round(distance / 10) * 10;
                    } else {
                        scaleDistance = Math.round(distance);
                    }
                    scaleWidth = (scaleDistance / distance) * 100;
                    unit = 'm';
                }
                
                // 更新比例尺显示
                this.scaleBarLine.style.width = Math.max(scaleWidth, 20) + 'px';
                this.scaleBarText.textContent = `${scaleDistance} ${unit}`;
                
                // 显示比例尺
                this.scaleBarContainer.style.display = 'block';
            } else {
                // 无法获取地面坐标时隐藏比例尺
                this.scaleBarContainer.style.display = 'none';
            }
        } catch (error) {
            console.warn('更新比例尺时出错:', error);
            this.scaleBarContainer.style.display = 'none';
        }
    }
    
    // 销毁视图
    destroy() {
        if (this.viewer) {
            this.viewer.destroy();
            this.viewer = null;
        }
        
        // 清理比例尺控件
        if (this.scaleBarContainer && this.scaleBarContainer.parentNode) {
            this.scaleBarContainer.parentNode.removeChild(this.scaleBarContainer);
        }
        
        this.entities.clear();
        this.currentSelection = null;
    }
}

// 导出视图管理器
window.CesiumViewer = CesiumViewer;