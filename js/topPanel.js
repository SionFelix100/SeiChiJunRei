// 顶部功能面板管理器
class TopPanelManager {
    constructor(viewer) {
        // viewer是CesiumViewer实例，需要访问其内部的Cesium.Viewer
        this.cesiumViewer = viewer;
        this.viewer = viewer.viewer; // 真正的Cesium.Viewer实例
        this.activeWeather = null;
        this.activeAnalysis = null;
        this.measurementEntities = [];
        this.bufferEntities = [];
        this.currentCameraMode = '3d'; // 默认3D视角
        this.isMousePressed = false;
        this.originalCameraController = null;
        this.osmBuildingTileset = null; // OSM建筑模型图层
        this.osmModelActive = false; // OSM模型是否激活
        
        // 千代田3D Tiles相关属性
        this.chiyodaTilesets = []; // 存储所有千代田3D Tiles模型
        this.tilesModelActive = false; // 3D Tiles模型是否激活
        
        // 巡礼工具相关属性
        this.favorites = JSON.parse(localStorage.getItem('animeFavorites') || '[]');
        this.notes = JSON.parse(localStorage.getItem('animeNotes') || '{}');
        this.currentEditingLocation = null;
        this.animeLocationsVisible = true; // 默认显示圣地巡礼地点
        
        this.init();
    }

    init() {
        // 使用更长的延迟确保所有DOM元素都已加载
        setTimeout(() => {
            this.setupEventListeners();
            this.setupClickOutside();
            // 初始化默认相机模式
            this.updateCameraModeButtons(this.currentCameraMode);
        }, 1000);
    }

    setupEventListeners() {
        // 天气模拟按钮事件
        const weatherBtn = document.getElementById('weatherBtn');
        const weatherDropdown = document.getElementById('weatherDropdown');
        
        weatherBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleDropdown(weatherBtn, weatherDropdown);
        });

        // 天气选项事件
        const weatherOptions = document.querySelectorAll('[data-weather]');
        weatherOptions.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const weatherType = btn.getAttribute('data-weather');
                // 优先使用高级天气效果
                if (typeof window.PostProcessController !== 'undefined') {
                    this.setWeatherAdvanced(weatherType);
                } else {
                    this.setWeather(weatherType);
                }
                this.closeDropdown(weatherBtn, weatherDropdown);
            });
        });

        // 空间分析按钮事件
        const analysisBtn = document.getElementById('analysisBtn');
        const analysisDropdown = document.getElementById('analysisDropdown');
        
        analysisBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleDropdown(analysisBtn, analysisDropdown);
        });

        // 空间分析选项事件
        const analysisOptions = document.querySelectorAll('[data-analysis]');
        analysisOptions.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const analysisType = btn.getAttribute('data-analysis');
                this.setAnalysis(analysisType);
                this.closeDropdown(analysisBtn, analysisDropdown);
            });
        });

        // 相机视角按钮事件
        const cameraBtn = document.getElementById('cameraBtn');
        const cameraDropdown = document.getElementById('cameraDropdown');
        
        if (cameraBtn && cameraDropdown) {
            cameraBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleDropdown(cameraBtn, cameraDropdown);
            });
        }

        // 相机视角选项事件
        const cameraOptions = document.querySelectorAll('[data-camera]');
        cameraOptions.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const cameraMode = btn.getAttribute('data-camera');
                this.setCameraMode(cameraMode);
                this.closeDropdown(cameraBtn, cameraDropdown);
            });
        });

        // OSM模型按钮事件
        const osmModelBtn = document.getElementById('osmModelBtn');
        const osmModelDropdown = document.getElementById('osmModelDropdown');
        
        if (osmModelBtn && osmModelDropdown) {
            osmModelBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleDropdown(osmModelBtn, osmModelDropdown);
            });
        }

        // OSM模型选项事件
        const osmModelOptions = document.querySelectorAll('[data-osm-model]');
        osmModelOptions.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const osmModelAction = btn.getAttribute('data-osm-model');
                this.setOSMModel(osmModelAction);
                this.closeDropdown(osmModelBtn, osmModelDropdown);
            });
        });

        // 3D Tiles模型按钮事件
        const tilesModelBtn = document.getElementById('tilesModelBtn');
        const tilesModelDropdown = document.getElementById('tilesModelDropdown');
        
        if (tilesModelBtn && tilesModelDropdown) {
            tilesModelBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleDropdown(tilesModelBtn, tilesModelDropdown);
            });
        }

        // 3D Tiles模型选项事件
        const tilesModelOptions = document.querySelectorAll('[data-tiles-model]');
        tilesModelOptions.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const tilesModelAction = btn.getAttribute('data-tiles-model');
                this.setTilesModel(tilesModelAction);
                this.closeDropdown(tilesModelBtn, tilesModelDropdown);
            });
        });

        // 底图样式按钮事件
        const basemapBtn = document.getElementById('basemapBtn');
        const basemapDropdown = document.getElementById('basemapDropdown');
        
        if (basemapBtn && basemapDropdown) {
            basemapBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleDropdown(basemapBtn, basemapDropdown);
            });
        }

        // 底图样式选项事件
        const basemapOptions = document.querySelectorAll('[data-basemap]');
        basemapOptions.forEach(btn => {
            btn.addEventListener('click', async (e) => {
                e.stopPropagation();
                const basemapType = btn.getAttribute('data-basemap');
                await this.setBasemap(basemapType);
                this.closeDropdown(basemapBtn, basemapDropdown);
            });
        });

        // 巡礼工具按钮事件
        const pilgrimageBtn = document.getElementById('pilgrimageBtn');
        const pilgrimageDropdown = document.getElementById('pilgrimageDropdown');
        
        if (pilgrimageBtn && pilgrimageDropdown) {
            pilgrimageBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleDropdown(pilgrimageBtn, pilgrimageDropdown);
            });
        }

        // 巡礼工具选项事件
        const pilgrimageOptions = document.querySelectorAll('[data-pilgrimage]');
        pilgrimageOptions.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const pilgrimageAction = btn.getAttribute('data-pilgrimage');
                this.handlePilgrimageAction(pilgrimageAction);
                this.closeDropdown(pilgrimageBtn, pilgrimageDropdown);
            });
        });

        // 巡礼工具面板关闭按钮事件
        const closePilgrimagePanel = document.getElementById('closePilgrimagePanel');
        if (closePilgrimagePanel) {
            closePilgrimagePanel.addEventListener('click', () => {
                this.closePilgrimagePanel();
            });
        }
    }

    setupClickOutside() {
        document.addEventListener('click', () => {
            this.closeAllDropdowns();
        });
    }

    toggleDropdown(button, dropdown) {
        const isActive = button.classList.contains('active');
        
        // 关闭所有下拉菜单
        this.closeAllDropdowns();
        
        if (!isActive) {
            button.classList.add('active');
            dropdown.classList.add('show');
        }
    }

    closeDropdown(button, dropdown) {
        button.classList.remove('active');
        dropdown.classList.remove('show');
    }

    closeAllDropdowns() {
        const allBtns = document.querySelectorAll('.primary-btn');
        const allDropdowns = document.querySelectorAll('.dropdown-menu');
        
        allBtns.forEach(btn => btn.classList.remove('active'));
        allDropdowns.forEach(dropdown => dropdown.classList.remove('show'));
    }

    // 天气模拟功能
    setWeather(weatherType) {
        // 清除之前的天气效果
        this.clearWeatherEffects();
        
        // 更新活动状态
        this.updateWeatherButtons(weatherType);
        
        switch (weatherType) {
            case 'rain':
                this.createRainEffect();
                break;
            case 'snow':
                this.createSnowEffect();
                break;
            case 'clear':
                // 晴天不需要特殊效果，只需清除其他效果
                break;
        }
        
        this.activeWeather = weatherType;
        console.log(`天气设置为: ${weatherType}`);
    }

    // 使用新的后期处理控制器的天气效果方法
    setWeatherAdvanced(weatherType, options = {}) {
        // 清除之前的天气效果
        this.clearWeatherEffects();
        
        // 更新活动状态
        this.updateWeatherButtons(weatherType);
        
        // 检查是否有后期处理控制器可用
        if (typeof window.PostProcessController !== 'undefined') {
            const viewerInstance = this.viewer;
            switch (weatherType) {
                case 'rain':
                    window.PostProcessController.handleRain(
                        options.rainWidth || 10.0,
                        options.rainSpeed || 60.0,
                        viewerInstance
                    );
                    break;
                case 'snow':
                    window.PostProcessController.handleSnow(
                        options.snowSpeed || 60.0,
                        viewerInstance
                    );
                    break;
                case 'clear':
                    window.PostProcessController.removeStage(viewerInstance);
                    break;
            }
        } else {
            // 回退到原始方法
            this.setWeather(weatherType);
        }
        
        this.activeWeather = weatherType;
        console.log(`高级天气设置为: ${weatherType}`, options);
    }

    updateWeatherButtons(activeType) {
        const weatherBtns = document.querySelectorAll('[data-weather]');
        weatherBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-weather') === activeType) {
                btn.classList.add('active');
            }
        });
    }

    createRainEffect() {
        // 创建雨天效果
        if (!this.viewer || !this.viewer.scene) {
            console.warn('无法创建雨天效果：viewer或scene未定义');
            return;
        }
        
        try {
            const FS_Rain = `uniform sampler2D colorTexture;
                in vec2 v_textureCoordinates;
                uniform float tiltAngle;
                uniform float rainSize;
                uniform float rainWidth;
                uniform float rainSpeed;
                float hash(float x){
                    return fract(sin(x*233.3)*13.13);
                }
                out vec4 vFragColor;
                void main(void){
                    float time = czm_frameNumber / rainSpeed;
                    vec2 resolution = czm_viewport.zw;
                    vec2 uv=(gl_FragCoord.xy*2.-resolution.xy)/min(resolution.x,resolution.y);
                    vec3 c=vec3(1.0,1.0,1.0);
                    float a= tiltAngle;
                    float si=sin(a),co=cos(a);
                    uv*=mat2(co,-si,si,co);
                    uv*=length(uv+vec2(0,4.9))*rainSize + 1.;
                    float v = 1.0 - abs(sin(hash(floor(uv.x * rainWidth)) * 2.0));
                    float b=clamp(abs(sin(20.*time*v+uv.y*(5./(2.+v))))-.95,0.,1.)*20.;
                    c*=v*b;
                    vFragColor = mix(texture(colorTexture, v_textureCoordinates), vec4(c,.3), .4);
                }`;
            
            this.viewer.scene.postProcessStages.add(new Cesium.PostProcessStage({
                name: 'rain',
                fragmentShader: FS_Rain,
                uniforms: {
                    tiltAngle: 0.4, // 倾斜角度
                    rainSize: 0.2, // 雨大小
                    rainWidth: 10.0, // 雨长度
                    rainSpeed: 60.0 // 雨速
                }
            }));
        } catch (error) {
            console.error('创建雨天效果时出错:', error);
        }
    }

    createSnowEffect() {
        // 创建雪天效果
        if (!this.viewer || !this.viewer.scene) {
            console.warn('无法创建雪天效果：viewer或scene未定义');
            return;
        }
        
        try {
            const FS_Snow = `uniform sampler2D colorTexture;
                in vec2 v_textureCoordinates;
                uniform float rainSpeed;
                float snow(vec2 uv,float scale){
                    float time = czm_frameNumber / rainSpeed;
                    float w=smoothstep(1.,0.,-uv.y*(scale/10.));if(w<.1)return 0.;
                    uv+=time/scale;uv.y+=time*2./scale;uv.x+=sin(uv.y+time*.5)/scale;
                    uv*=scale;vec2 s=floor(uv),f=fract(uv),p;float k=3.,d;
                    p=.5+.35*sin(11.*fract(sin((s+p+scale)*mat2(7,3,6,5))*5.))-f;d=length(p);k=min(d,k);
                    k=smoothstep(0.,k,sin(f.x+f.y)*0.01);
                    return k*w;
                }
                out vec4 vFragColor;
                void main(void){
                    vec2 resolution = czm_viewport.zw;
                    vec2 uv=(gl_FragCoord.xy*2.-resolution.xy)/min(resolution.x,resolution.y);
                    vec3 finalColor=vec3(0);
                    float c = 0.0;
                    c+=snow(uv,50.)*.0;
                    c+=snow(uv,30.)*.0;
                    c+=snow(uv,10.)*.0;
                    c+=snow(uv,5.);
                    c+=snow(uv,4.);
                    c+=snow(uv,3.);
                    c+=snow(uv,2.);
                    finalColor=(vec3(c));
                    vFragColor = mix(texture(colorTexture, v_textureCoordinates), vec4(finalColor,1), 0.4);
                }`;
            
            this.viewer.scene.postProcessStages.add(new Cesium.PostProcessStage({
                name: 'snow',
                fragmentShader: FS_Snow,
                uniforms: {
                    rainSpeed: 60.0 // 雪速
                }
            }));
        } catch (error) {
            console.error('创建雪天效果时出错:', error);
        }
    }



    clearWeatherEffects() {
        // 清除所有天气效果
        if (!this.viewer || !this.viewer.scene) {
            console.warn('无法清除天气效果：viewer或scene未定义');
            return;
        }
        
        try {
            const stages = this.viewer.scene.postProcessStages;
            if (stages) {
                const rainStage = stages.getStageByName('rain');
                const snowStage = stages.getStageByName('snow');
                
                if (rainStage) stages.remove(rainStage);
                if (snowStage) stages.remove(snowStage);
            }
            
            // 关闭内置雾效果（如果有的话）
            if (this.viewer.scene.fog) {
                this.viewer.scene.fog.enabled = false;
            }
        } catch (error) {
            console.error('清除天气效果时出错:', error);
        }
    }

    // 空间分析功能
    setAnalysis(analysisType) {
        // 如果是清除分析，直接清除并返回
        if (analysisType === 'clear') {
            this.clearAnalysisTools();
            this.activeAnalysis = null;
            this.updateAnalysisButtons(null);
            console.log('已清除所有空间分析');
            return;
        }
        
        // 清除之前的分析工具
        this.clearAnalysisTools();
        
        // 更新活动状态
        this.updateAnalysisButtons(analysisType);
        
        switch (analysisType) {
            case 'buffer':
                this.startBufferAnalysis();
                break;
            case 'distance':
                this.startDistanceMeasurement();
                break;
            case 'area':
                this.startAreaMeasurement();
                break;
        }
        
        this.activeAnalysis = analysisType;
        console.log(`空间分析工具: ${analysisType}`);
    }

    updateAnalysisButtons(activeType) {
        const analysisBtns = document.querySelectorAll('[data-analysis]');
        analysisBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-analysis') === activeType) {
                btn.classList.add('active');
            }
        });
    }

    startBufferAnalysis() {
        // 弹出输入框让用户自定义缓冲区半径
        const radius = prompt('请输入缓冲区半径（米）:', '1000');
        if (!radius || isNaN(radius) || radius <= 0) {
            alert('请输入有效的半径值！');
            return;
        }
        
        this.viewer.cesiumWidget.canvas.style.cursor = 'crosshair';
        
        const handler = new Cesium.ScreenSpaceEventHandler(this.viewer.scene.canvas);
        
        handler.setInputAction((click) => {
            const position = this.viewer.camera.pickEllipsoid(click.position, this.viewer.scene.globe.ellipsoid);
            if (position) {
                this.createBuffer(position, parseFloat(radius));
            }
            handler.destroy();
            this.viewer.cesiumWidget.canvas.style.cursor = 'auto';
        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
    }

    createBuffer(center, radius = 1000) {
        const radiusText = radius >= 1000 ? 
            `${(radius / 1000).toFixed(2)} km` : 
            `${radius} m`;
        
        const entity = this.viewer.entities.add({
            position: center,
            ellipse: {
                semiMinorAxis: radius,
                semiMajorAxis: radius,
                material: Cesium.Color.YELLOW.withAlpha(0.3),
                outline: true,
                outlineColor: Cesium.Color.YELLOW
            },
            label: {
                text: `缓冲区 (${radiusText})`,
                font: '14pt sans-serif',
                fillColor: Cesium.Color.WHITE,
                outlineColor: Cesium.Color.BLACK,
                outlineWidth: 2,
                style: Cesium.LabelStyle.FILL_AND_OUTLINE,
                pixelOffset: new Cesium.Cartesian2(0, -50),
                disableDepthTestDistance: Number.POSITIVE_INFINITY // 确保缓冲区标签显示在最前面
            }
        });
        
        this.bufferEntities.push(entity);
    }

    startDistanceMeasurement() {
        this.viewer.cesiumWidget.canvas.style.cursor = 'crosshair';
        
        const handler = new Cesium.ScreenSpaceEventHandler(this.viewer.scene.canvas);
        const positions = [];
        let polyline = null;
        
        handler.setInputAction((click) => {
            const position = this.viewer.camera.pickEllipsoid(click.position, this.viewer.scene.globe.ellipsoid);
            if (position) {
                positions.push(position);
                
                if (positions.length === 1) {
                    // 创建起点标记
                    const startPoint = this.viewer.entities.add({
                        position: position,
                        point: {
                            pixelSize: 10,
                            color: Cesium.Color.YELLOW,
                            outlineColor: Cesium.Color.BLACK,
                            outlineWidth: 2
                        }
                    });
                    this.measurementEntities.push(startPoint);
                } else {
                    // 更新或创建线段
                    if (!polyline) {
                        polyline = this.viewer.entities.add({
                            polyline: {
                                positions: positions,
                                width: 3,
                                material: Cesium.Color.YELLOW,
                                clampToGround: true
                            }
                        });
                        this.measurementEntities.push(polyline);
                    } else {
                        polyline.polyline.positions = positions;
                    }
                    
                    // 添加端点标记
                    const endPoint = this.viewer.entities.add({
                        position: position,
                        point: {
                            pixelSize: 10,
                            color: Cesium.Color.YELLOW,
                            outlineColor: Cesium.Color.BLACK,
                            outlineWidth: 2
                        }
                    });
                    this.measurementEntities.push(endPoint);
                    
                    // 计算并显示距离
                    const distance = this.calculateDistance(positions);
                    this.showDistanceLabel(position, distance);
                }
            }
        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
        
        // 右键结束测量
        handler.setInputAction(() => {
            handler.destroy();
            this.viewer.cesiumWidget.canvas.style.cursor = 'auto';
        }, Cesium.ScreenSpaceEventType.RIGHT_CLICK);
    }

    calculateDistance(positions) {
        let totalDistance = 0;
        for (let i = 1; i < positions.length; i++) {
            const distance = Cesium.Cartesian3.distance(positions[i-1], positions[i]);
            totalDistance += distance;
        }
        return totalDistance;
    }

    showDistanceLabel(position, distance) {
        const distanceText = distance > 1000 ? 
            `${(distance / 1000).toFixed(2)} km` : 
            `${distance.toFixed(2)} m`;
            
        const label = this.viewer.entities.add({
            position: position,
            label: {
                text: distanceText,
                font: '14pt sans-serif',
                fillColor: Cesium.Color.WHITE,
                outlineColor: Cesium.Color.BLACK,
                outlineWidth: 2,
                style: Cesium.LabelStyle.FILL_AND_OUTLINE,
                pixelOffset: new Cesium.Cartesian2(0, -30),
                disableDepthTestDistance: Number.POSITIVE_INFINITY // 确保距离标签显示在最前面
            }
        });
        
        this.measurementEntities.push(label);
    }

    startAreaMeasurement() {
        this.viewer.cesiumWidget.canvas.style.cursor = 'crosshair';
        
        const handler = new Cesium.ScreenSpaceEventHandler(this.viewer.scene.canvas);
        const positions = [];
        let polygon = null;
        let areaLabel = null;
        
        handler.setInputAction((click) => {
            const position = this.viewer.camera.pickEllipsoid(click.position, this.viewer.scene.globe.ellipsoid);
            if (position) {
                positions.push(position);
                
                // 添加点标记
                const pointEntity = this.viewer.entities.add({
                    position: position,
                    point: {
                        pixelSize: 8,
                        color: Cesium.Color.RED,
                        outlineColor: Cesium.Color.WHITE,
                        outlineWidth: 2
                    }
                });
                this.measurementEntities.push(pointEntity);
                
                if (positions.length >= 3) {
                    if (!polygon) {
                        polygon = this.viewer.entities.add({
                            polygon: {
                                hierarchy: positions,
                                material: Cesium.Color.RED.withAlpha(0.3),
                                outline: true,
                                outlineColor: Cesium.Color.RED
                            }
                        });
                        this.measurementEntities.push(polygon);
                    } else {
                        polygon.polygon.hierarchy = positions;
                    }
                    
                    // 实时计算并显示面积
                    const area = this.calculateArea(positions);
                    const center = Cesium.BoundingSphere.fromPoints(positions).center;
                    const areaText = area > 1000000 ? 
                        `${(area / 1000000).toFixed(2)} km²` : 
                        `${area.toFixed(2)} m²`;
                    
                    if (!areaLabel) {
                        areaLabel = this.viewer.entities.add({
                            position: center,
                            label: {
                                text: `实时面积: ${areaText}`,
                                font: '14pt sans-serif',
                                fillColor: Cesium.Color.WHITE,
                                outlineColor: Cesium.Color.BLACK,
                                outlineWidth: 2,
                                style: Cesium.LabelStyle.FILL_AND_OUTLINE,
                                backgroundColor: Cesium.Color.BLACK.withAlpha(0.7),
                                backgroundPadding: new Cesium.Cartesian2(8, 4),
                                disableDepthTestDistance: Number.POSITIVE_INFINITY, // 确保实时面积标签显示在最前面
                                pixelOffset: new Cesium.Cartesian2(0, -40)
                            }
                        });
                        this.measurementEntities.push(areaLabel);
                    } else {
                        areaLabel.position = center;
                        areaLabel.label.text = `实时面积: ${areaText}`;
                    }
                }
            }
        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
        
        // 右键结束测量
        handler.setInputAction(() => {
            if (positions.length >= 3 && areaLabel) {
                // 将实时标签改为最终标签
                const area = this.calculateArea(positions);
                const areaText = area > 1000000 ? 
                    `${(area / 1000000).toFixed(2)} km²` : 
                    `${area.toFixed(2)} m²`;
                areaLabel.label.text = `最终面积: ${areaText}`;
                areaLabel.label.backgroundColor = Cesium.Color.GREEN.withAlpha(0.7);
            }
            handler.destroy();
            this.viewer.cesiumWidget.canvas.style.cursor = 'auto';
        }, Cesium.ScreenSpaceEventType.RIGHT_CLICK);
    }

    calculateArea(positions) {
        // 使用更简单可靠的面积计算方法
        if (positions.length < 3) return 0;
        
        // 将笛卡尔坐标转换为地理坐标
        const cartographicPositions = positions.map(position => 
            Cesium.Cartographic.fromCartesian(position)
        );
        
        // 使用球面三角形面积计算
        let area = 0;
        const earthRadius = 6371000; // 地球半径（米）
        
        for (let i = 0; i < cartographicPositions.length; i++) {
            const j = (i + 1) % cartographicPositions.length;
            const lat1 = cartographicPositions[i].latitude;
            const lon1 = cartographicPositions[i].longitude;
            const lat2 = cartographicPositions[j].latitude;
            const lon2 = cartographicPositions[j].longitude;
            
            area += (lon2 - lon1) * (2 + Math.sin(lat1) + Math.sin(lat2));
        }
        
        area = Math.abs(area) * earthRadius * earthRadius / 2;
        return area;
    }

    showAreaLabel(positions, area) {
        // 计算多边形中心点
        const center = Cesium.BoundingSphere.fromPoints(positions).center;
        
        const areaText = area > 1000000 ? 
            `${(area / 1000000).toFixed(2)} km²` : 
            `${area.toFixed(2)} m²`;
            
        const label = this.viewer.entities.add({
            position: center,
            label: {
                text: `面积: ${areaText}`,
                font: '14pt sans-serif',
                fillColor: Cesium.Color.WHITE,
                outlineColor: Cesium.Color.BLACK,
                outlineWidth: 2,
                style: Cesium.LabelStyle.FILL_AND_OUTLINE,
                disableDepthTestDistance: Number.POSITIVE_INFINITY, // 禁用深度测试，确保标签始终显示在最前面
                pixelOffset: new Cesium.Cartesian2(0, -50) // 向上偏移，避免与地面重叠
            }
        });
        
        this.measurementEntities.push(label);
    }

    clearAnalysisTools() {
        // 清除所有测量实体
        this.measurementEntities.forEach(entity => {
            this.viewer.entities.remove(entity);
        });
        this.measurementEntities = [];
        
        // 清除所有缓冲区实体
        this.bufferEntities.forEach(entity => {
            this.viewer.entities.remove(entity);
        });
        this.bufferEntities = [];
        
        // 重置鼠标样式
        this.viewer.cesiumWidget.canvas.style.cursor = 'auto';
    }

    // 清除所有效果和工具
    clearAll() {
        this.clearWeatherEffects();
        this.clearAnalysisTools();
        this.activeWeather = null;
        this.activeAnalysis = null;
        
        // 清除所有按钮的激活状态
        const allSecondaryBtns = document.querySelectorAll('.secondary-btn');
        allSecondaryBtns.forEach(btn => btn.classList.remove('active'));
    }

    /*-------------------------------------底图样式--------------------------------------------*/
    // 设置底图样式
    async setBasemap(basemapType) {
        console.log(`开始设置底图样式: ${basemapType}`);
        
        // 清除现有图层（除了默认的Bing Maps）
        this.clearImageryLayers();
        
        // 更新按钮状态
        this.updateBasemapButtons(basemapType);
        
        try {
            switch (basemapType) {
                case 'terrain':
                    console.log('加载地形...');
                    await this.loadTerrain();
                    break;
                case 'openstreetmap':
                    console.log('加载OpenStreetMap...');
                    await this.loadOpenStreetMap();
                    break;
                case 'stadia-dark':
                    console.log('加载Stadia Alidade Smooth Dark...');
                    await this.loadStadiaDark();
                    break;

                case 'stadia-toner':
                    console.log('加载Stadia x Stamen Toner...');
                    await this.loadStadiaToner();
                    break;
                case 'clear':
                    console.log('清除底图样式，恢复默认...');
                    await this.clearBasemapStyle();
                    break;
                default:
                    console.warn(`未知的底图类型: ${basemapType}`);
            }
            console.log(`底图样式设置完成: ${basemapType}`);
        } catch (error) {
            console.error(`设置底图样式失败: ${basemapType}`, error);
        }
    }

    updateBasemapButtons(activeType) {
        const basemapBtns = document.querySelectorAll('[data-basemap]');
        basemapBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-basemap') === activeType) {
                btn.classList.add('active');
            }
        });
    }

    // 清除现有的影像图层
    clearImageryLayers() {
        try {
            // 移除所有影像图层
            const imageryLayers = this.viewer.imageryLayers;
            while (imageryLayers.length > 0) {
                imageryLayers.remove(imageryLayers.get(imageryLayers.length - 1));
            }
            
            // 重置地形为默认
            if (this.viewer.terrainProvider !== Cesium.EllipsoidTerrainProvider.prototype) {
                this.viewer.terrainProvider = new Cesium.EllipsoidTerrainProvider();
                this.viewer.scene.globe.terrainExaggeration = 1.0;
            }
        } catch (error) {
            console.error('清除图层失败:', error);
        }
    }

    // 加载地形
    async loadTerrain() {
        try {
            this.viewer.terrainProvider = await Cesium.CesiumTerrainProvider.fromIonAssetId(1, {
                requestVertexNormals: true,
                requestWaterMask: true,
            });
            // 地形夸张度与BaseLayerPicker保持一致
            this.viewer.scene.globe.terrainExaggeration = 1.0;
        } catch (error) {
            console.error('加载地形失败:', error);
        }
    }

    // 加载OpenStreetMap底图
    async loadOpenStreetMap() {
        // 备用OSM瓦片服务器列表
        const osmUrls = [
            'https://tile.openstreetmap.org/',
            'https://a.tile.openstreetmap.org/',
            'https://b.tile.openstreetmap.org/',
            'https://c.tile.openstreetmap.org/'
        ];
        
        let osmProvider = null;
        let lastError = null;
        
        // 尝试连接不同的OSM服务器
        for (const url of osmUrls) {
            try {
                console.log(`尝试连接OSM服务器: ${url}`);
                osmProvider = new Cesium.OpenStreetMapImageryProvider({
                    url: url,
                    maximumLevel: 18,
                    credit: '© OpenStreetMap contributors'
                });
                
                // 测试连接
                await new Promise((resolve, reject) => {
                    const testImage = new Image();
                    testImage.onload = () => resolve();
                    testImage.onerror = () => reject(new Error('连接测试失败'));
                    testImage.src = `${url}1/0/0.png`;
                    // 5秒超时
                    setTimeout(() => reject(new Error('连接超时')), 5000);
                });
                
                console.log(`成功连接到OSM服务器: ${url}`);
                break;
            } catch (error) {
                console.warn(`OSM服务器连接失败 ${url}:`, error.message);
                lastError = error;
                osmProvider = null;
            }
        }
        
        if (!osmProvider) {
            console.error('所有OSM服务器连接失败，使用离线模式');
            // 创建一个简单的离线底图提供者
            osmProvider = new Cesium.SingleTileImageryProvider({
                url: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0iI2Y4ZjhmOCIvPjx0ZXh0IHg9IjEyOCIgeT0iMTI4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTkiPk9TTSDnvZHnu5zlpLHotKU8L3RleHQ+PC9zdmc+',
                credit: 'OSM网络连接失败'
            });
        }
        
        try {
            // 移除默认的Bing Maps图层
            const imageryLayers = this.viewer.imageryLayers;
            if (imageryLayers.length > 0) {
                imageryLayers.remove(imageryLayers.get(0));
            }
            
            // 添加OpenStreetMap图层
            this.viewer.imageryLayers.addImageryProvider(osmProvider);
            
            // 加载Cesium World Terrain地形
            await this.loadTerrain();
            
            console.log('OpenStreetMap底图和地形加载成功');
        } catch (error) {
            console.error('加载OpenStreetMap失败:', error);
        }
    }

    // 加载Stadia Alidade Smooth Dark底图
    async loadStadiaDark() {
        try {
            const stadiaProvider = new Cesium.UrlTemplateImageryProvider({
                url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}@2x.png',
                credit: '© <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a> © <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> © <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors',
                maximumLevel: 20
            });
            this.viewer.imageryLayers.addImageryProvider(stadiaProvider);
            
            // 加载Cesium World Terrain地形
            await this.loadTerrain();
            
            console.log('Stadia Alidade Smooth Dark底图和地形加载成功');
        } catch (error) {
            console.error('加载Stadia Alidade Smooth Dark失败:', error);
        }
    }



    // 加载Stadia x Stamen Toner底图
    async loadStadiaToner() {
        try {
            const stadiaTonerProvider = new Cesium.UrlTemplateImageryProvider({
                url: 'https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}@2x.png',
                credit: '© <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a> © <a href="https://stamen.com/" target="_blank">Stamen Design</a> © <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors',
                maximumLevel: 20
            });
            this.viewer.imageryLayers.addImageryProvider(stadiaTonerProvider);
            
            // 加载Cesium World Terrain地形
            await this.loadTerrain();
            
            console.log('Stadia x Stamen Toner底图和地形加载成功');
        } catch (error) {
            console.error('加载Stadia x Stamen Toner失败:', error);
        }
    }

    // 清除底图样式，恢复默认
    async clearBasemapStyle() {
        try {
            // 清除所有图层
            const imageryLayers = this.viewer.imageryLayers;
            while (imageryLayers.length > 0) {
                imageryLayers.remove(imageryLayers.get(imageryLayers.length - 1));
            }
            
            // 添加默认的Bing Maps图层
            const bingProvider = new Cesium.BingMapsImageryProvider({
                url: 'https://dev.virtualearth.net',
                key: '', // 使用默认key或者空key
                mapStyle: Cesium.BingMapsStyle.AERIAL_WITH_LABELS_ON_DEMAND
            });
            this.viewer.imageryLayers.addImageryProvider(bingProvider);
            
            // 恢复默认地形
            this.viewer.terrainProvider = new Cesium.EllipsoidTerrainProvider();
            this.viewer.scene.globe.terrainExaggeration = 1.0;
            
            console.log('底图样式已清除，恢复为默认样式');
        } catch (error) {
            console.error('清除底图样式失败:', error);
        }
    }

    // 相机视角切换功能
    setCameraMode(mode) {
        if (!this.viewer || !this.viewer.scene) {
            console.warn('无法设置相机模式：viewer或scene未定义');
            return;
        }

        // 更新按钮状态
        this.updateCameraModeButtons(mode);
        
        // 保存当前相机位置
        const currentPosition = this.viewer.camera.position.clone();
        const currentHeading = this.viewer.camera.heading;
        const currentPitch = this.viewer.camera.pitch;
        const currentRoll = this.viewer.camera.roll;

        // 移除之前的鼠标事件监听器
        this.removeCameraEventListeners();

        switch (mode) {
            case '2d':
                this.set2DMode(currentPosition);
                break;
            case '2.5d':
                this.set25DMode(currentPosition, currentHeading);
                break;
            case '3d':
                this.set3DMode();
                break;
        }

        this.currentCameraMode = mode;
        console.log(`相机视角切换为: ${mode}`);
    }

    // 设置2D模式
    set2DMode(currentPosition) {
        // 切换到2D场景模式
        this.viewer.scene.mode = Cesium.SceneMode.SCENE2D;
        
        // 禁用相机旋转
        this.viewer.scene.screenSpaceCameraController.enableRotate = false;
        this.viewer.scene.screenSpaceCameraController.enableTilt = false;
        
        // 设置相机位置（俯视角度）
        const cartographic = Cesium.Cartographic.fromCartesian(currentPosition);
        this.viewer.camera.setView({
            destination: Cesium.Cartesian3.fromRadians(
                cartographic.longitude,
                cartographic.latitude,
                cartographic.height + 5000
            ),
            orientation: {
                heading: 0.0,
                pitch: -Cesium.Math.PI_OVER_TWO,
                roll: 0.0
            }
        });
    }

    // 设置2.5D模式
    set25DMode(currentPosition, currentHeading) {
        // 切换到3D场景模式但限制相机角度
        this.viewer.scene.mode = Cesium.SceneMode.SCENE3D;
        
        // 启用基本的相机控制，但禁用默认的倾斜控制（我们将自定义实现）
        this.viewer.scene.screenSpaceCameraController.enableRotate = true;
        this.viewer.scene.screenSpaceCameraController.enableTilt = false;
        
        // 限制缩放距离范围（2.5D效果）
        this.viewer.scene.screenSpaceCameraController.minimumZoomDistance = 100;
        this.viewer.scene.screenSpaceCameraController.maximumZoomDistance = 50000;
        
        // 设置相机位置（斜视角度）
        const cartographic = Cesium.Cartographic.fromCartesian(currentPosition);
        this.viewer.camera.setView({
            destination: Cesium.Cartesian3.fromRadians(
                cartographic.longitude,
                cartographic.latitude,
                cartographic.height + 2000
            ),
            orientation: {
                heading: currentHeading,
                pitch: -Cesium.Math.toRadians(45), // 默认45度俯视角
                roll: 0.0
            }
        });

        // 添加2.5D模式下的鼠标事件监听器
        this.setup25DMouseEvents();
    }

    // 设置3D模式
    set3DMode() {
        // 切换到3D场景模式
        this.viewer.scene.mode = Cesium.SceneMode.SCENE3D;
        
        // 启用所有相机控制
        this.viewer.scene.screenSpaceCameraController.enableRotate = true;
        this.viewer.scene.screenSpaceCameraController.enableTilt = true;
        
        // 重置相机控制限制
        this.viewer.scene.screenSpaceCameraController.minimumZoomDistance = 1.0;
        this.viewer.scene.screenSpaceCameraController.maximumZoomDistance = Number.POSITIVE_INFINITY;
    }

    // 设置2.5D模式下的鼠标事件
    setup25DMouseEvents() {
        const handler = this.viewer.cesiumWidget.screenSpaceEventHandler;
        
        // 鼠标按下事件
        handler.setInputAction((event) => {
            this.isMousePressed = true;
            // 禁用默认的相机控制
            this.viewer.scene.screenSpaceCameraController.enableRotate = false;
        }, Cesium.ScreenSpaceEventType.LEFT_DOWN);
        
        // 鼠标释放事件
        handler.setInputAction((event) => {
            this.isMousePressed = false;
            // 重新启用相机旋转（但不包括倾斜）
            this.viewer.scene.screenSpaceCameraController.enableRotate = true;
        }, Cesium.ScreenSpaceEventType.LEFT_UP);
        
        // 鼠标移动事件（长按时自由旋转和俯仰调节）
        handler.setInputAction((movement) => {
            if (this.isMousePressed) {
                const canvas = this.viewer.cesiumWidget.canvas;
                const deltaX = movement.endPosition.x - movement.startPosition.x;
                const deltaY = movement.endPosition.y - movement.startPosition.y;
                
                // 计算旋转和俯仰角度
                const rotateRate = 1.0 / canvas.clientWidth;
                const pitchRate = 1.0 / canvas.clientHeight;
                
                // 水平旋转（航向角）
                const heading = this.viewer.camera.heading - deltaX * rotateRate;
                
                // 垂直俯仰调节（限制在合理范围内）
                let pitch = this.viewer.camera.pitch + deltaY * pitchRate;
                // 限制俯仰角度范围：10度到80度俯视角
                const minPitch = -Cesium.Math.toRadians(80); // 最大俯视角80度
                const maxPitch = -Cesium.Math.toRadians(10); // 最小俯视角10度
                pitch = Cesium.Math.clamp(pitch, minPitch, maxPitch);
                
                // 应用新的相机方向
                this.viewer.camera.setView({
                    orientation: {
                        heading: heading,
                        pitch: pitch,
                        roll: 0.0
                    }
                });
            }
        }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
    }

    // 移除相机事件监听器
    removeCameraEventListeners() {
        if (this.currentCameraMode === '2.5d') {
            const handler = this.viewer.cesiumWidget.screenSpaceEventHandler;
            handler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOWN);
            handler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_UP);
            handler.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE);
        }
        this.isMousePressed = false;
    }

    // 更新相机模式按钮状态
    updateCameraModeButtons(activeMode) {
        const cameraBtns = document.querySelectorAll('[data-camera]');
        cameraBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-camera') === activeMode) {
                btn.classList.add('active');
            }
        });
    }

    // OSM模型功能
    setOSMModel(action) {
        switch (action) {
            case 'add':
                this.addOSMBuildings();
                break;
            case 'remove':
                this.removeOSMBuildings();
                break;
        }
        this.updateOSMModelButtons(action);
        console.log(`OSM模型操作: ${action}`);
    }

    // 添加OSM建筑模型
    async addOSMBuildings() {
        try {
            if (this.osmBuildingTileset) {
                console.log('OSM建筑模型已存在');
                return;
            }

            // 使用Cesium OSM Buildings tileset
            this.osmBuildingTileset = await Cesium.createOsmBuildingsAsync();
            this.viewer.scene.primitives.add(this.osmBuildingTileset);
            
            // 设置建筑物样式和高度偏移
            this.osmBuildingTileset.style = new Cesium.Cesium3DTileStyle({
                color: {
                    conditions: [
                        ['${feature["building"]} === "hospital"', 'color("red", 0.8)'],
                        ['${feature["building"]} === "school"', 'color("yellow", 0.8)'],
                        ['${feature["building"]} === "commercial"', 'color("blue", 0.8)'],
                        ['true', 'color("white", 0.8)']
                    ]
                },
                // 添加高度偏移以解决与地面高度不重合的问题
                heightOffset: 100,
                show: true
            });

            this.osmModelActive = true;
            console.log('OSM建筑模型添加成功');
            
        } catch (error) {
            console.error('添加OSM建筑模型失败:', error);
            // 如果Cesium OSM Buildings不可用，尝试使用替代方案
            this.addOSMBuildingsAlternative();
        }
    }

    // 替代方案：使用3D Tiles或其他OSM建筑数据源
    async addOSMBuildingsAlternative() {
        try {
            // 这里可以使用其他OSM建筑数据源，比如MapBox或其他3D Tiles服务
            console.log('尝试使用替代OSM建筑数据源...');
            
            // 示例：使用一个公开的OSM建筑3D Tiles服务（需要根据实际可用服务调整）
            const tileset = await Cesium.Cesium3DTileset.fromUrl(
                'https://assets.cesium.com/43978/tileset.json' // 这是一个示例URL，实际使用时需要替换
            );
            
            this.viewer.scene.primitives.add(tileset);
            this.osmBuildingTileset = tileset;
            this.osmModelActive = true;
            
            console.log('替代OSM建筑模型添加成功');
        } catch (error) {
            console.error('替代OSM建筑模型也添加失败:', error);
            alert('无法加载OSM建筑模型，请检查网络连接或稍后重试');
        }
    }

    // 巡礼工具功能方法
    handlePilgrimageAction(action) {
        switch (action) {
            case 'locations':
                this.toggleAnimeLocations();
                break;
            case 'favorites':
                this.showFavoritesPanel();
                break;
            case 'notes':
                this.showNotesPanel();
                break;
            case 'my-collection':
                this.showMyCollection();
                break;
            case 'export':
                this.exportData();
                break;
            default:
                console.warn(`未知的巡礼工具操作: ${action}`);
        }
    }

    // 显示收藏面板
    showFavoritesPanel() {
        const panel = document.getElementById('pilgrimagePanel');
        const title = document.getElementById('pilgrimagePanelTitle');
        const content = document.getElementById('pilgrimagePanelContent');
        
        title.textContent = '地点收藏';
        content.innerHTML = this.generateFavoritesContent();
        panel.style.display = 'block';
        
        // 绑定收藏相关事件
        this.bindFavoritesEvents();
    }

    // 生成收藏内容
    generateFavoritesContent() {
        if (this.favorites.length === 0) {
            return `
                <div class="empty-state">
                    <i class="fas fa-heart"></i>
                    <h4>还没有收藏的地点</h4>
                    <p>点击地图上的地点标记，然后选择"添加到收藏"来收藏您喜欢的动漫圣地</p>
                </div>
            `;
        }
        
        let html = '<div class="favorites-list">';
        this.favorites.forEach(favorite => {
            const note = this.notes[favorite.id] || '';
            html += `
                <div class="favorite-item" data-location-id="${favorite.id}">
                    <div class="favorite-item-header">
                        <h4 class="favorite-item-title">${favorite.name}</h4>
                        <span class="favorite-item-anime">${favorite.anime}</span>
                    </div>
                    ${note ? `<div class="favorite-item-note">${note}</div>` : ''}
                    <div class="favorite-item-actions">
                        <button class="action-btn edit" data-action="edit-note" data-location-id="${favorite.id}">
                            <i class="fas fa-edit"></i> 编辑笔记
                        </button>
                        <button class="action-btn" data-action="locate" data-location-id="${favorite.id}">
                            <i class="fas fa-map-marker-alt"></i> 定位
                        </button>
                        <button class="action-btn remove" data-action="remove" data-location-id="${favorite.id}">
                            <i class="fas fa-trash"></i> 移除
                        </button>
                    </div>
                </div>
            `;
        });
        html += '</div>';
        
        return html;
    }

    // 绑定收藏相关事件
    bindFavoritesEvents() {
        const actionBtns = document.querySelectorAll('.action-btn');
        actionBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const action = btn.getAttribute('data-action');
                const locationId = btn.getAttribute('data-location-id');
                this.handleFavoriteAction(action, locationId);
            });
        });
    }

    // 处理收藏操作
    handleFavoriteAction(action, locationId) {
        switch (action) {
            case 'edit-note':
                this.showNoteEditor(locationId);
                break;
            case 'locate':
                this.locateToFavorite(locationId);
                break;
            case 'remove':
                this.removeFavorite(locationId);
                break;
        }
    }

    // 显示笔记编辑器
    showNoteEditor(locationId) {
        const favorite = this.favorites.find(f => f.id === locationId);
        if (!favorite) return;
        
        const currentNote = this.notes[locationId] || '';
        const content = document.getElementById('pilgrimagePanelContent');
        
        content.innerHTML = `
            <div class="note-editor">
                <h4>为 "${favorite.name}" 添加笔记</h4>
                <textarea class="note-input" placeholder="在这里记录您的巡礼心得、拍摄技巧或其他想法...">${currentNote}</textarea>
                <div class="note-actions">
                    <button class="btn-save" data-location-id="${locationId}">保存笔记</button>
                    <button class="btn-cancel">取消</button>
                </div>
            </div>
        `;
        
        // 绑定保存和取消事件
        const saveBtn = content.querySelector('.btn-save');
        const cancelBtn = content.querySelector('.btn-cancel');
        
        saveBtn.addEventListener('click', () => {
            const noteText = content.querySelector('.note-input').value;
            this.saveNote(locationId, noteText);
            this.showFavoritesPanel(); // 返回收藏列表
        });
        
        cancelBtn.addEventListener('click', () => {
            this.showFavoritesPanel(); // 返回收藏列表
        });
    }

    // 保存笔记
    saveNote(locationId, noteText) {
        if (noteText.trim()) {
            this.notes[locationId] = noteText.trim();
        } else {
            delete this.notes[locationId];
        }
        localStorage.setItem('animeNotes', JSON.stringify(this.notes));
        console.log('笔记已保存');
    }

    // 定位到收藏地点
    locateToFavorite(locationId) {
        const favorite = this.favorites.find(f => f.id === locationId);
        if (!favorite) return;
        
        // 飞行到指定位置
        this.viewer.camera.flyTo({
            destination: Cesium.Cartesian3.fromDegrees(
                favorite.longitude,
                favorite.latitude,
                1000
            ),
            duration: 2.0
        });
        
        this.closePilgrimagePanel();
        console.log(`定位到收藏地点: ${favorite.name}`);
    }

    // 移除收藏
    removeFavorite(locationId) {
        if (confirm('确定要移除这个收藏吗？')) {
            this.favorites = this.favorites.filter(f => f.id !== locationId);
            delete this.notes[locationId];
            
            localStorage.setItem('animeFavorites', JSON.stringify(this.favorites));
            localStorage.setItem('animeNotes', JSON.stringify(this.notes));
            
            this.showFavoritesPanel(); // 刷新收藏列表
            console.log('收藏已移除');
        }
    }

    // 显示笔记面板
    showNotesPanel() {
        const panel = document.getElementById('pilgrimagePanel');
        const title = document.getElementById('pilgrimagePanelTitle');
        const content = document.getElementById('pilgrimagePanelContent');
        
        title.textContent = '笔记系统';
        
        const notesWithFavorites = this.favorites.filter(f => this.notes[f.id]);
        
        if (notesWithFavorites.length === 0) {
            content.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-sticky-note"></i>
                    <h4>还没有任何笔记</h4>
                    <p>先收藏一些地点，然后为它们添加笔记吧</p>
                </div>
            `;
        } else {
            let html = '<div class="favorites-list">';
            notesWithFavorites.forEach(favorite => {
                const note = this.notes[favorite.id];
                html += `
                    <div class="favorite-item">
                        <div class="favorite-item-header">
                            <h4 class="favorite-item-title">${favorite.name}</h4>
                            <span class="favorite-item-anime">${favorite.anime}</span>
                        </div>
                        <div class="favorite-item-note">${note}</div>
                        <div class="favorite-item-actions">
                            <button class="action-btn edit" data-action="edit-note" data-location-id="${favorite.id}">
                                <i class="fas fa-edit"></i> 编辑
                            </button>
                            <button class="action-btn" data-action="locate" data-location-id="${favorite.id}">
                                <i class="fas fa-map-marker-alt"></i> 定位
                            </button>
                        </div>
                    </div>
                `;
            });
            html += '</div>';
            content.innerHTML = html;
            
            // 绑定事件
            this.bindFavoritesEvents();
        }
        
        panel.style.display = 'block';
    }

    // 显示我的收藏
    showMyCollection() {
        this.showFavoritesPanel(); // 目前与收藏面板相同
    }

    // 导出数据
    exportData() {
        const data = {
            favorites: this.favorites,
            notes: this.notes,
            exportTime: new Date().toISOString()
        };
        
        const dataStr = JSON.stringify(data, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = `anime-pilgrimage-data-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        
        console.log('数据导出完成');
    }

    // 关闭巡礼工具面板
    closePilgrimagePanel() {
        const panel = document.getElementById('pilgrimagePanel');
        panel.style.display = 'none';
    }

    // 添加到收藏（供外部调用）
    addToFavorites(locationId) {
        // 获取地点数据
        const location = window.locationManager ? window.locationManager.getLocationById(locationId) : null;
        if (!location) {
            alert('找不到该地点信息！');
            return;
        }
        
        // 检查是否已经收藏
        const isAlreadyFavorited = this.favorites.some(f => f.id === location.id);
        
        if (isAlreadyFavorited) {
            // 如果已收藏，则取消收藏
            this.favorites = this.favorites.filter(f => f.id !== location.id);
            localStorage.setItem('animeFavorites', JSON.stringify(this.favorites));
            alert(`已将 "${location.name}" 从收藏中移除！`);
        } else {
            // 如果未收藏，则添加收藏
            const favoriteItem = {
                id: location.id,
                name: location.name,
                anime: location.animeTitle || '未知动漫',
                longitude: location.longitude,
                latitude: location.latitude
            };
            
            this.favorites.push(favoriteItem);
            localStorage.setItem('animeFavorites', JSON.stringify(this.favorites));
            alert(`已将 "${location.name}" 添加到收藏！`);
        }
        
        // 更新收藏按钮状态
        this.updateFavoriteButtonState(locationId);
    }
    
    // 更新收藏按钮状态
    updateFavoriteButtonState(locationId) {
        const favoriteBtn = document.getElementById(`favoriteBtn-${locationId}`);
        if (favoriteBtn) {
            const isFavorited = this.favorites.some(f => f.id === locationId);
            favoriteBtn.innerHTML = isFavorited ? '❤️ 已收藏' : '🤍 收藏';
            favoriteBtn.onclick = () => this.addToFavorites(locationId);
        }
    }

    // 移除OSM建筑模型
    removeOSMBuildings() {
        try {
            if (this.osmBuildingTileset) {
                this.viewer.scene.primitives.remove(this.osmBuildingTileset);
                this.osmBuildingTileset = null;
                this.osmModelActive = false;
                console.log('OSM建筑模型移除成功');
            } else {
                console.log('没有OSM建筑模型需要移除');
            }
        } catch (error) {
            console.error('移除OSM建筑模型失败:', error);
        }
    }

    // 更新OSM模型按钮状态
    updateOSMModelButtons(action) {
        const osmModelBtns = document.querySelectorAll('[data-osm-model]');
        osmModelBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        
        // 根据当前状态设置按钮状态
        if (this.osmModelActive && action === 'add') {
            const addBtn = document.querySelector('[data-osm-model="add"]');
            if (addBtn) addBtn.classList.add('active');
        } else if (!this.osmModelActive && action === 'remove') {
            const removeBtn = document.querySelector('[data-osm-model="remove"]');
            if (removeBtn) removeBtn.classList.add('active');
        }
    }
    
    // 切换圣地巡礼地点显示/隐藏
    toggleAnimeLocations() {
        if (this.cesiumViewer && this.cesiumViewer.viewer) {
            this.cesiumViewer.toggleLayer('animeLocation', !this.animeLocationsVisible);
            this.animeLocationsVisible = !this.animeLocationsVisible;
            
            // 更新按钮状态
            const locationsBtn = document.querySelector('[data-pilgrimage="locations"]');
            if (locationsBtn) {
                if (this.animeLocationsVisible) {
                    locationsBtn.classList.add('active');
                    locationsBtn.innerHTML = `
                        <i class="fas fa-map-marker-alt"></i>
                        <span class="btn-text">隐藏圣地地点</span>
                    `;
                } else {
                    locationsBtn.classList.remove('active');
                    locationsBtn.innerHTML = `
                        <i class="fas fa-map-marker-alt"></i>
                        <span class="btn-text">显示圣地地点</span>
                    `;
                }
            }
            
            console.log(`圣地巡礼地点${this.animeLocationsVisible ? '显示' : '隐藏'}`);
        }
    }

    // 千代田3D Tiles模型功能
    setTilesModel(action) {
        switch (action) {
            case 'chiyoda':
                this.addChiyodaTiles();
                break;
            case 'clear':
                this.removeChiyodaTiles();
                break;
        }
        this.updateTilesModelButtons(action);
        console.log(`3D Tiles模型操作: ${action}`);
    }

    // 添加千代田3D Tiles模型
    async addChiyodaTiles() {
        try {
            if (this.chiyodaTilesets.length > 0) {
                console.log('千代田3D Tiles模型已存在');
                return;
            }

            // 千代田3D Tiles的URL列表（完整的23个URL）
            const tilesetUrls = [
                'https://chiyoda-ku-pref-2023-3dtiles.oss-cn-fuzhou.aliyuncs.com/chiyoda-ku_pref_2023_3dtiles_mvt_1_op/13101_chiyoda-ku_pref_2023_citygml_1_fld_pref_arakawa_kandagawa-zenpukujigawa-etc_3dtiles_l1/tileset.json',
                'https://chiyoda-ku-pref-2023-3dtiles.oss-cn-fuzhou.aliyuncs.com/chiyoda-ku_pref_2023_3dtiles_mvt_1_op/13101_chiyoda-ku_pref_2023_citygml_1_fld_pref_arakawa_kandagawa-zenpukujigawa-etc_3dtiles_l1_no_texture/tileset.json',
                'https://chiyoda-ku-pref-2023-3dtiles.oss-cn-fuzhou.aliyuncs.com/chiyoda-ku_pref_2023_3dtiles_mvt_1_op/13101_chiyoda-ku_pref_2023_citygml_1_fld_pref_arakawa_kandagawa-zenpukujigawa-etc_3dtiles_l2/tileset.json',
                'https://chiyoda-ku-pref-2023-3dtiles.oss-cn-fuzhou.aliyuncs.com/chiyoda-ku_pref_2023_3dtiles_mvt_1_op/13101_chiyoda-ku_pref_2023_citygml_1_fld_pref_arakawa_kandagawa-zenpukujigawa-etc_3dtiles_l2_no_texture/tileset.json',
                'https://chiyoda-ku-pref-2023-3dtiles.oss-cn-fuzhou.aliyuncs.com/chiyoda-ku_pref_2023_3dtiles_mvt_1_op/13101_chiyoda-ku_pref_2023_citygml_1_fld_pref_kandagawa-ryuiki_3dtiles_l2/tileset.json',
                'https://chiyoda-ku-pref-2023-3dtiles.oss-cn-fuzhou.aliyuncs.com/chiyoda-ku_pref_2023_3dtiles_mvt_1_op/13101_chiyoda-ku_pref_2023_citygml_1_fld_pref_kandagawa-ryuiki_3dtiles_l2_no_texture/tileset.json',
                'https://chiyoda-ku-pref-2023-3dtiles.oss-cn-fuzhou.aliyuncs.com/chiyoda-ku_pref_2023_3dtiles_mvt_1_op/13101_chiyoda-ku_pref_2023_citygml_1_fld_pref_sumidagaw-shingashigawa-ryuiki_3dtiles_l2/tileset.json',
                'https://chiyoda-ku-pref-2023-3dtiles.oss-cn-fuzhou.aliyuncs.com/chiyoda-ku_pref_2023_3dtiles_mvt_1_op/13101_chiyoda-ku_pref_2023_citygml_1_fld_pref_sumidagaw-shingashigawa-ryuiki_3dtiles_l2_no_texture/tileset.json',
                'https://chiyoda-ku-pref-2023-3dtiles.oss-cn-fuzhou.aliyuncs.com/chiyoda-ku_pref_2023_3dtiles_mvt_1_op/13101_chiyoda-ku_pref_2023_citygml_1_htd_13_1_3dtiles/tileset.json',
                'https://chiyoda-ku-pref-2023-3dtiles.oss-cn-fuzhou.aliyuncs.com/chiyoda-ku_pref_2023_3dtiles_mvt_1_op/13101_chiyoda-ku_pref_2023_citygml_1_htd_13_1_3dtiles_no_texture/tileset.json',
                'https://chiyoda-ku-pref-2023-3dtiles.oss-cn-fuzhou.aliyuncs.com/chiyoda-ku_pref_2023_3dtiles_mvt_1_op/13101_chiyoda-ku_pref_2023_citygml_1_op_bldg_3dtiles_13101_chiyoda-ku_lod1/tileset.json',
                'https://chiyoda-ku-pref-2023-3dtiles.oss-cn-fuzhou.aliyuncs.com/chiyoda-ku_pref_2023_3dtiles_mvt_1_op/13101_chiyoda-ku_pref_2023_citygml_1_op_bldg_3dtiles_13101_chiyoda-ku_lod2/tileset.json',
                'https://chiyoda-ku-pref-2023-3dtiles.oss-cn-fuzhou.aliyuncs.com/chiyoda-ku_pref_2023_3dtiles_mvt_1_op/13101_chiyoda-ku_pref_2023_citygml_1_op_bldg_3dtiles_13101_chiyoda-ku_lod2_no_texture/tileset.json',
                'https://chiyoda-ku-pref-2023-3dtiles.oss-cn-fuzhou.aliyuncs.com/chiyoda-ku_pref_2023_3dtiles_mvt_1_op/13101_chiyoda-ku_pref_2023_citygml_1_op_brid_3dtiles_lod1/tileset.json',
                'https://chiyoda-ku-pref-2023-3dtiles.oss-cn-fuzhou.aliyuncs.com/chiyoda-ku_pref_2023_3dtiles_mvt_1_op/13101_chiyoda-ku_pref_2023_citygml_1_op_brid_3dtiles_lod2/tileset.json',
                'https://chiyoda-ku-pref-2023-3dtiles.oss-cn-fuzhou.aliyuncs.com/chiyoda-ku_pref_2023_3dtiles_mvt_1_op/13101_chiyoda-ku_pref_2023_citygml_1_op_frn_3dtiles_lod1/tileset.json',
                'https://chiyoda-ku-pref-2023-3dtiles.oss-cn-fuzhou.aliyuncs.com/chiyoda-ku_pref_2023_3dtiles_mvt_1_op/13101_chiyoda-ku_pref_2023_citygml_1_op_frn_3dtiles_lod3/tileset.json',
                'https://chiyoda-ku-pref-2023-3dtiles.oss-cn-fuzhou.aliyuncs.com/chiyoda-ku_pref_2023_3dtiles_mvt_1_op/13101_chiyoda-ku_pref_2023_citygml_1_op_tran_3dtiles_lod3/tileset.json',
                'https://chiyoda-ku-pref-2023-3dtiles.oss-cn-fuzhou.aliyuncs.com/chiyoda-ku_pref_2023_3dtiles_mvt_1_op/13101_chiyoda-ku_pref_2023_citygml_1_op_ubld_3dtiles_lod1/tileset.json',
                'https://chiyoda-ku-pref-2023-3dtiles.oss-cn-fuzhou.aliyuncs.com/chiyoda-ku_pref_2023_3dtiles_mvt_1_op/13101_chiyoda-ku_pref_2023_citygml_1_op_veg_PlantCover_3dtiles_lod1/tileset.json',
                'https://chiyoda-ku-pref-2023-3dtiles.oss-cn-fuzhou.aliyuncs.com/chiyoda-ku_pref_2023_3dtiles_mvt_1_op/13101_chiyoda-ku_pref_2023_citygml_1_op_veg_PlantCover_3dtiles_lod3/tileset.json',
                'https://chiyoda-ku-pref-2023-3dtiles.oss-cn-fuzhou.aliyuncs.com/chiyoda-ku_pref_2023_3dtiles_mvt_1_op/13101_chiyoda-ku_pref_2023_citygml_1_op_veg_SolitaryVegetationObject_3dtiles_lod1/tileset.json',
                'https://chiyoda-ku-pref-2023-3dtiles.oss-cn-fuzhou.aliyuncs.com/chiyoda-ku_pref_2023_3dtiles_mvt_1_op/13101_chiyoda-ku_pref_2023_citygml_1_op_veg_SolitaryVegetationObject_3dtiles_lod3/tileset.json'
            ];

            console.log('开始加载千代田3D Tiles模型...');
            
            // 并行加载所有tileset
            const loadPromises = tilesetUrls.map(async (url) => {
                try {
                    const tileset = await Cesium.Cesium3DTileset.fromUrl(url);
                    
                    // 根据模型类型设置不同颜色，不透明度统一为90%
                    let modelColor = 'white'; // 默认颜色
                    
                    if (url.includes('fld_pref')) {
                        // 水系模型 - 蓝色
                        modelColor = '#4A90E2';
                    } else if (url.includes('bldg_3dtiles')) {
                        // 建筑模型 - 灰色
                        modelColor = '#8E8E93';
                    } else if (url.includes('brid_3dtiles')) {
                        // 桥梁设施 - 棕色
                        modelColor = '#8B4513';
                    } else if (url.includes('tran_3dtiles')) {
                        // 交通设施 - 黄色
                        modelColor = '#FFD700';
                    } else if (url.includes('frn_3dtiles')) {
                        // 城市家具 - 橙色
                        modelColor = '#FF8C00';
                    } else if (url.includes('veg_PlantCover')) {
                        // 植被覆盖 - 绿色
                        modelColor = '#32CD32';
                    } else if (url.includes('veg_SolitaryVegetationObject')) {
                        // 独立植被 - 深绿色
                        modelColor = '#228B22';
                    } else if (url.includes('ubld_3dtiles')) {
                        // 地下建筑 - 紫色
                        modelColor = '#9370DB';
                    } else if (url.includes('htd_13_1')) {
                        // 高程数据 - 土黄色
                        modelColor = '#D2B48C';
                    }
                    
                    // 设置tileset样式和优化
                    if (url.includes('bldg_3dtiles')) {
                        // 建筑模型 - 根据高度设置渐变颜色
                        
                        // 添加调试代码来查看可用属性
                        tileset.tileLoad.addEventListener(function(tile) {
                            if (tile.content && tile.content.batchTable) {
                                const batchTable = tile.content.batchTable;
                                if (batchTable._properties) {
                                    console.log('建筑3D Tiles可用属性:', Object.keys(batchTable._properties));
                                    // 输出第一个特征的属性值作为示例
                                    if (batchTable.featuresLength > 0) {
                                        const sampleFeature = {};
                                        for (let prop in batchTable._properties) {
                                            sampleFeature[prop] = batchTable.getProperty(0, prop);
                                        }
                                        console.log('第一个建筑特征的属性值:', sampleFeature);
                                    }
                                }
                            }
                        });
                        
                        tileset.style = new Cesium.Cesium3DTileStyle({
                            color: {
                                conditions: [
                                    // 尝试CityGML标准属性名和其他可能的高度属性名
                                    ["Number(${feature['bldg:measuredHeight']}) >= 100 || Number(${feature['measuredHeight']}) >= 100 || Number(${feature['height']}) >= 100 || Number(${feature['Height']}) >= 100 || Number(${feature['HOEHE']}) >= 100", "color('#FF4444', 0.9)"], // 高层建筑 - 红色
                                    ["Number(${feature['bldg:measuredHeight']}) >= 50 || Number(${feature['measuredHeight']}) >= 50 || Number(${feature['height']}) >= 50 || Number(${feature['Height']}) >= 50 || Number(${feature['HOEHE']}) >= 50", "color('#FF8800', 0.9)"],  // 中高层建筑 - 橙色
                                    ["Number(${feature['bldg:measuredHeight']}) >= 30 || Number(${feature['measuredHeight']}) >= 30 || Number(${feature['height']}) >= 30 || Number(${feature['Height']}) >= 30 || Number(${feature['HOEHE']}) >= 30", "color('#FFDD00', 0.9)"],  // 中层建筑 - 黄色
                                    ["Number(${feature['bldg:measuredHeight']}) >= 15 || Number(${feature['measuredHeight']}) >= 15 || Number(${feature['height']}) >= 15 || Number(${feature['Height']}) >= 15 || Number(${feature['HOEHE']}) >= 15", "color('#88DD00', 0.9)"],  // 低中层建筑 - 黄绿色
                                    ["Number(${feature['bldg:measuredHeight']}) >= 8 || Number(${feature['measuredHeight']}) >= 8 || Number(${feature['height']}) >= 8 || Number(${feature['Height']}) >= 8 || Number(${feature['HOEHE']}) >= 8", "color('#00DD88', 0.9)"],   // 低层建筑 - 绿色
                                    ["true", "color('#0088DD', 0.9)"]  // 极低层建筑或无高度数据 - 蓝色
                                ]
                            },
                            show: true
                        });
                    } else {
                        // 其他模型保持原有颜色设置
                        tileset.style = new Cesium.Cesium3DTileStyle({
                            color: `color("${modelColor}", 0.9)`,
                            show: true
                        });
                    }
                    
                    // 性能优化设置
                    tileset.maximumScreenSpaceError = 16;
                    tileset.skipLevelOfDetail = true;
                    tileset.baseScreenSpaceError = 1024;
                    tileset.skipScreenSpaceErrorFactor = 16;
                    tileset.skipLevels = 1;
                    tileset.immediatelyLoadDesiredLevelOfDetail = false;
                    tileset.loadSiblings = false;
                    
                    this.viewer.scene.primitives.add(tileset);
                    this.chiyodaTilesets.push(tileset);
                    
                    console.log(`成功加载tileset: ${url}`);
                    return tileset;
                } catch (error) {
                    console.warn(`加载tileset失败: ${url}`, error);
                    return null;
                }
            });

            // 等待所有tileset加载完成
            await Promise.all(loadPromises);
            
            this.tilesModelActive = true;
            console.log(`千代田3D Tiles模型加载完成，共加载 ${this.chiyodaTilesets.length} 个模型`);
            
            // 如果有成功加载的模型，飞行到千代田区并自动加载Stadia Dark底图
            if (this.chiyodaTilesets.length > 0) {
                this.flyToChiyoda();
                // 自动加载Stadia Alidade Smooth Dark底图
                await this.setBasemap('stadia-dark');
                console.log('已自动加载Stadia Alidade Smooth Dark底图');
            }
            
        } catch (error) {
            console.error('添加千代田3D Tiles模型失败:', error);
            alert('加载千代田3D Tiles模型失败，请检查网络连接或稍后重试');
        }
    }

    // 移除千代田3D Tiles模型
    removeChiyodaTiles() {
        try {
            if (this.chiyodaTilesets.length > 0) {
                this.chiyodaTilesets.forEach(tileset => {
                    this.viewer.scene.primitives.remove(tileset);
                });
                this.chiyodaTilesets = [];
                this.tilesModelActive = false;
                console.log('千代田3D Tiles模型移除成功');
            } else {
                console.log('没有千代田3D Tiles模型需要移除');
            }
        } catch (error) {
            console.error('移除千代田3D Tiles模型失败:', error);
        }
    }

    // 飞行到千代田区
    flyToChiyoda() {
        // 千代田区的大致中心位置（东京皇居附近）
        const destination = Cesium.Cartesian3.fromDegrees(
            139.7528, // 经度
            35.6850,  // 纬度
            2000      // 高度（米）
        );
        
        this.viewer.camera.flyTo({
            destination: destination,
            duration: 3.0,
            orientation: {
                heading: Cesium.Math.toRadians(0.0),
                pitch: Cesium.Math.toRadians(-45.0),
                roll: 0.0
            }
        });
    }

    // 更新3D Tiles模型按钮状态
    updateTilesModelButtons(action) {
        const tilesModelBtns = document.querySelectorAll('[data-tiles-model]');
        tilesModelBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        
        // 根据当前状态设置按钮状态
        if (this.tilesModelActive && action === 'chiyoda') {
            const chiyodaBtn = document.querySelector('[data-tiles-model="chiyoda"]');
            if (chiyodaBtn) chiyodaBtn.classList.add('active');
        } else if (!this.tilesModelActive && action === 'clear') {
            const clearBtn = document.querySelector('[data-tiles-model="clear"]');
            if (clearBtn) clearBtn.classList.add('active');
        }
    }
}

// 导出类以供其他文件使用
window.TopPanelManager = TopPanelManager;