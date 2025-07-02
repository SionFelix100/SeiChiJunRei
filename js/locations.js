// 地点管理器
class LocationManager {
    constructor(viewer) {
        this.viewer = viewer;
        this.locations = [];
        this.filteredLocations = [];
        this.currentAnime = null;
        this.init();
    }
    
    // 初始化
    init() {
        this.loadAllLocations();
        this.displayAllLocations();
    }
    
    // 加载所有地点数据
    loadAllLocations() {
        this.locations = getAllLocations();
        this.filteredLocations = [...this.locations];
        console.log(`加载了 ${this.locations.length} 个动漫圣地`);
    }
    
    // 显示所有地点
    displayAllLocations() {
        this.clearAllMarkers();
        
        this.filteredLocations.forEach(location => {
            this.addLocationMarker(location);
        });
        
        console.log(`显示了 ${this.filteredLocations.length} 个地点标记`);
    }
    
    // 添加地点标记
    addLocationMarker(location) {
        try {
            // 验证地点数据
            if (!location || typeof location.longitude !== 'number' || typeof location.latitude !== 'number') {
                console.warn('无效的地点数据:', location);
                return null;
            }
            
            // 根据动漫类型设置不同的标记颜色
            const markerColor = this.getMarkerColorByAnime(location.animeId);
            
            // 检查实体是否已存在，如果存在则先移除
            if (this.viewer.viewer.entities.getById(location.id)) {
                this.viewer.viewer.entities.removeById(location.id);
            }
            
            const entity = this.viewer.viewer.entities.add({
                id: location.id,
                position: Cesium.Cartesian3.fromDegrees(location.longitude, location.latitude),
                point: {
                    pixelSize: CONFIG.MARKERS.pixelSize,
                    color: markerColor,
                    outlineColor: CONFIG.MARKERS.outlineColor,
                    outlineWidth: CONFIG.MARKERS.outlineWidth,
                    heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
                    disableDepthTestDistance: Number.POSITIVE_INFINITY
                },
                label: {
                    text: location.name,
                    font: '12pt Microsoft YaHei, sans-serif',
                    pixelOffset: new Cesium.Cartesian2(0, -50),
                    fillColor: Cesium.Color.WHITE,
                    outlineColor: Cesium.Color.BLACK,
                    outlineWidth: 2,
                    style: Cesium.LabelStyle.FILL_AND_OUTLINE,
                    heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
                    disableDepthTestDistance: Number.POSITIVE_INFINITY
                },
                billboard: {
                    image: this.createMarkerCanvas(location.animeTitle),
                    pixelOffset: new Cesium.Cartesian2(0, -20),
                    heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
                    disableDepthTestDistance: Number.POSITIVE_INFINITY
                },
                properties: {
                    type: 'location',
                    locationData: location,
                    animeId: location.animeId,
                    animeTitle: location.animeTitle
                }
            });
            
            this.viewer.entities.set(location.id, entity);
            return entity;
        } catch (error) {
            console.error('添加地点标记时出错:', error, location);
            return null;
        }
    }
    
    // 根据动漫ID获取标记颜色
    getMarkerColorByAnime(animeId) {
        const colorMap = {
            'your_name': Cesium.Color.DEEPSKYBLUE,
            'weathering_with_you': Cesium.Color.ORANGE,
            'spirited_away': Cesium.Color.PURPLE,
            'five_cm_per_second': Cesium.Color.PINK
        };
        
        return colorMap[animeId] || CONFIG.MARKERS.defaultColor;
    }
    
    // 创建自定义标记画布
    createMarkerCanvas(animeTitle) {
        const canvas = document.createElement('canvas');
        canvas.width = 100;
        canvas.height = 30;
        const ctx = canvas.getContext('2d');
        
        // 绘制背景
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // 绘制文字
        ctx.fillStyle = 'white';
        ctx.font = '12px Microsoft YaHei';
        ctx.textAlign = 'center';
        ctx.fillText(animeTitle, canvas.width / 2, canvas.height / 2 + 4);
        
        return canvas;
    }
    
    // 按动漫筛选地点
    filterByAnime(animeId) {
        if (animeId === 'all' || !animeId) {
            this.filteredLocations = [...this.locations];
            this.currentAnime = null;
        } else {
            this.filteredLocations = this.locations.filter(location => location.animeId === animeId);
            this.currentAnime = animeId;
        }
        
        this.displayAllLocations();
        
        // 如果只有一个动漫的地点，飞行到该区域
        if (this.filteredLocations.length > 0 && animeId !== 'all') {
            this.flyToAnimeLocations();
        }
    }
    
    // 飞行到动漫地点区域
    flyToAnimeLocations() {
        if (this.filteredLocations.length === 0) return;
        
        if (this.filteredLocations.length === 1) {
            // 只有一个地点，直接飞过去
            const location = this.filteredLocations[0];
            this.viewer.flyTo(location.longitude, location.latitude, 5000);
        } else {
            // 多个地点，计算边界并飞行到包含所有地点的区域
            const bounds = this.calculateLocationsBounds();
            this.viewer.viewer.camera.flyTo({
                destination: bounds,
                duration: CONFIG.ANIMATION.flyToDuration
            });
        }
    }
    
    // 计算地点边界
    calculateLocationsBounds() {
        let minLon = Number.MAX_VALUE;
        let maxLon = Number.MIN_VALUE;
        let minLat = Number.MAX_VALUE;
        let maxLat = Number.MIN_VALUE;
        
        this.filteredLocations.forEach(location => {
            minLon = Math.min(minLon, location.longitude);
            maxLon = Math.max(maxLon, location.longitude);
            minLat = Math.min(minLat, location.latitude);
            maxLat = Math.max(maxLat, location.latitude);
        });
        
        // 添加一些边距
        const margin = 0.01;
        minLon -= margin;
        maxLon += margin;
        minLat -= margin;
        maxLat += margin;
        
        return Cesium.Rectangle.fromDegrees(minLon, minLat, maxLon, maxLat);
    }
    
    // 搜索地点
    searchLocations(keyword) {
        if (!keyword || keyword.trim() === '') {
            this.filteredLocations = [...this.locations];
        } else {
            const results = searchAnimeAndLocations(keyword.trim());
            
            // 合并地点搜索结果和动漫搜索结果的地点
            let allMatchedLocations = [...results.locations];
            
            // 如果搜索到了动漫，添加该动漫的所有地点
            results.anime.forEach(anime => {
                const animeLocations = this.locations.filter(loc => loc.animeId === anime.id);
                animeLocations.forEach(loc => {
                    // 避免重复添加
                    if (!allMatchedLocations.find(existing => existing.id === loc.id)) {
                        allMatchedLocations.push(loc);
                    }
                });
            });
            
            this.filteredLocations = allMatchedLocations;
        }
        
        this.displayAllLocations();
        
        // 如果有搜索结果，飞行到第一个结果
        if (this.filteredLocations.length > 0) {
            const firstLocation = this.filteredLocations[0];
            this.viewer.flyTo(firstLocation.longitude, firstLocation.latitude, 2000);
        }
        
        return this.filteredLocations;
    }
    
    // 飞行到指定地点
    flyToLocation(locationId) {
        const location = this.locations.find(loc => loc.id === locationId);
        if (location) {
            this.viewer.flyTo(location.longitude, location.latitude, 1000);
            
            // 高亮该地点
            setTimeout(() => {
                const entity = this.viewer.entities.get(locationId);
                if (entity) {
                    this.viewer.selectLocation(entity);
                }
            }, CONFIG.ANIMATION.flyToDuration * 1000);
        }
    }
    
    // 获取附近的地点
    getNearbyLocations(longitude, latitude, radiusKm = 10) {
        return this.locations.filter(location => {
            const distance = this.calculateDistance(
                longitude, latitude,
                location.longitude, location.latitude
            );
            return distance <= radiusKm;
        });
    }
    
    // 计算两点间距离（公里）
    calculateDistance(lon1, lat1, lon2, lat2) {
        const R = 6371; // 地球半径（公里）
        const dLat = this.toRadians(lat2 - lat1);
        const dLon = this.toRadians(lon2 - lon1);
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(this.toRadians(lat1)) * Math.cos(this.toRadians(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    }
    
    // 角度转弧度
    toRadians(degrees) {
        return degrees * (Math.PI / 180);
    }
    
    // 获取地点详细信息
    getLocationDetails(locationId) {
        return this.locations.find(location => location.id === locationId);
    }
    
    // 根据ID获取地点信息
    getLocationById(locationId) {
        return this.locations.find(location => location.id === locationId);
    }
    
    // 清除所有标记
    clearAllMarkers() {
        // 清除 CesiumViewer 管理的实体
        this.viewer.clearAllEntities();
        // 同时清除 Cesium viewer 中的所有实体
        this.viewer.viewer.entities.removeAll();
    }
    
    // 显示/隐藏地点标记
    toggleLocationVisibility(visible) {
        this.viewer.entities.forEach(entity => {
            if (entity.properties && entity.properties.type === 'location') {
                entity.show = visible;
            }
        });
    }
    
    // 获取当前显示的地点数量
    getDisplayedLocationCount() {
        return this.filteredLocations.length;
    }
    
    // 获取统计信息
    getStatistics() {
        const stats = {
            totalLocations: this.locations.length,
            displayedLocations: this.filteredLocations.length,
            animeCount: new Set(this.locations.map(loc => loc.animeId)).size,
            currentAnime: this.currentAnime
        };
        
        return stats;
    }
}

// 导出地点管理器
window.LocationManager = LocationManager;