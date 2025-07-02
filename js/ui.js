// UI管理器
class UIManager {
    constructor(locationManager) {
        this.locationManager = locationManager;
        this.isLoading = false;
        this.currentSelectedAnime = null;
        this.init();
    }
    
    // 初始化UI
    init() {
        this.bindEvents();
        this.loadAnimeList();
        this.hideLoading();
        this.setupResponsive();
        
        // 初始化侧边栏为收纳状态
        const sidebar = document.getElementById('sidebar');
        if (sidebar) {
            sidebar.classList.add('collapsed');
        }
        
        this.showMessage('欢迎来到东京动漫圣地巡礼！', 'success');
    }
    
    // 绑定事件
    bindEvents() {
        // 搜索功能
        const searchInput = document.getElementById('searchInput');
        const searchBtn = document.getElementById('searchBtn');
        const searchDropdown = document.getElementById('searchDropdown');
        
        if (searchInput) {
            // 聚焦时显示下拉框
            searchInput.addEventListener('focus', () => {
                this.showSearchDropdown();
            });
            
            // 失焦时隐藏下拉框（延迟执行以允许点击动漫项）
            searchInput.addEventListener('blur', () => {
                setTimeout(() => {
                    this.hideSearchDropdown();
                }, 200);
            });
            
            searchInput.addEventListener('input', this.debounce(this.handleSearch.bind(this), 300));
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.handleSearch();
                }
            });
        }
        
        if (searchBtn) {
            searchBtn.addEventListener('click', this.handleSearch.bind(this));
        }
        
        // 点击页面其他地方隐藏下拉框
        document.addEventListener('click', (e) => {
            const searchContainer = document.querySelector('.search-container');
            if (searchContainer && !searchContainer.contains(e.target)) {
                this.hideSearchDropdown();
            }
        });
        

    }
    
    // 加载动漫列表
    loadAnimeList() {
        const animeListContainer = document.getElementById('animeList');
        if (!animeListContainer) return;
        
        const animeData = getAllAnime();
        
        // 添加"全部"选项
        const allItem = this.createAnimeItem({
            id: 'all',
            title: '全部动漫',
            description: '显示所有动漫圣地',
            locations: getAllLocations()
        });
        animeListContainer.appendChild(allItem);
        
        // 添加各个动漫
        animeData.forEach(anime => {
            const animeItem = this.createAnimeItem(anime);
            animeListContainer.appendChild(animeItem);
        });
    }
    
    // 创建动漫项目元素
    createAnimeItem(anime) {
        const item = document.createElement('div');
        item.className = 'anime-item fade-in';
        item.dataset.animeId = anime.id;
        
        const locationCount = anime.id === 'all' ? 
            getAllLocations().length : 
            anime.locations.length;
        
        item.innerHTML = `
            <h4>${anime.title}</h4>
            <p>${anime.description}</p>
            <div class="location-count">${locationCount} 个地点</div>
        `;
        
        item.addEventListener('click', () => {
            this.selectAnime(anime.id);
        });
        
        return item;
    }
    
    // 选择动漫
    selectAnime(animeId) {
        // 更新UI状态
        this.updateAnimeSelection(animeId);
        
        // 筛选地点
        this.locationManager.filterByAnime(animeId);
        
        // 更新当前选择
        this.currentSelectedAnime = animeId;
        
        // 隐藏地点信息
        this.hideLocationInfo();
        
        // 隐藏搜索下拉框并清空搜索框
        this.hideSearchDropdown();
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.value = '';
        }
        
        console.log(`选择了动漫: ${animeId}`);
    }
    
    // 更新动漫选择状态
    updateAnimeSelection(selectedId) {
        const animeItems = document.querySelectorAll('.anime-item');
        animeItems.forEach(item => {
            if (item.dataset.animeId === selectedId) {
                item.classList.add('selected');
                item.style.background = 'rgba(255, 107, 107, 0.3)';
                item.style.borderColor = 'rgba(255, 107, 107, 0.8)';
            } else {
                item.classList.remove('selected');
                item.style.background = 'rgba(255, 255, 255, 0.1)';
                item.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            }
        });
    }
    
    // 处理搜索
    handleSearch() {
        const searchInput = document.getElementById('searchInput');
        if (!searchInput) return;
        
        const keyword = searchInput.value.trim();
        
        // 如果没有输入内容，显示所有动漫列表
        if (keyword.length === 0) {
            this.showSearchDropdown();
            return;
        }
        
        if (keyword.length < CONFIG.SEARCH.minQueryLength) {
            this.showMessage('请输入至少2个字符进行搜索', 'warning');
            return;
        }
        
        this.showLoading();
        
        // 模拟搜索延迟
        setTimeout(() => {
            const results = this.locationManager.searchLocations(keyword);
            this.displaySearchResults(results, keyword);
            this.hideLoading();
        }, 500);
    }
    
    // 显示搜索结果
    displaySearchResults(results, keyword) {
        if (results.length === 0) {
            this.showMessage(`未找到包含"${keyword}"的相关内容`, 'info');
        } else {
            // 检查是否搜索到了动漫
            const searchResults = searchAnimeAndLocations(keyword);
            let message = `找到 ${results.length} 个相关地点`;
            
            if (searchResults.anime.length > 0) {
                const animeNames = searchResults.anime.map(anime => anime.title).join('、');
                message = `找到动漫"${animeNames}"的 ${results.length} 个圣地巡礼地点`;
            }
            
            this.showMessage(message, 'success');
            
            // 清除动漫选择
            this.updateAnimeSelection(null);
            this.currentSelectedAnime = null;
        }
    }
    
    // 显示搜索下拉框
    showSearchDropdown() {
        const searchDropdown = document.getElementById('searchDropdown');
        const sidebar = document.getElementById('sidebar');
        if (searchDropdown) {
            searchDropdown.classList.add('show');
        }
        if (sidebar) {
            sidebar.classList.remove('collapsed');
        }
    }
    
    // 隐藏搜索下拉框
    hideSearchDropdown() {
        const searchDropdown = document.getElementById('searchDropdown');
        const sidebar = document.getElementById('sidebar');
        if (searchDropdown) {
            searchDropdown.classList.remove('show');
        }
        if (sidebar) {
            sidebar.classList.add('collapsed');
        }
    }
    
    // 显示地点信息
    showLocationInfo(locationData) {
        // 隐藏侧边栏中的地点信息
        this.hideLocationInfo();
        
        // 显示浮动信息框
        this.showLocationTooltip(locationData);
    }
    
    // 显示地点浮动信息框
    showLocationTooltip(locationData) {
        const tooltip = document.getElementById('locationTooltip');
        const tooltipDetails = document.getElementById('tooltipDetails');
        
        if (!tooltip || !tooltipDetails) {
            return;
        }
        
        // 保存当前显示的地点数据
        this.currentTooltipLocation = locationData;
        
        // 设置地点详情内容
        tooltipDetails.innerHTML = this.createLocationDetailsHTML(locationData);
        
        // 获取地点在屏幕上的位置
        const markerPosition = this.getLocationScreenPosition(locationData);
        
        // 计算浮动框的智能位置（固定大小）
        const tooltipPosition = this.calculateTooltipPosition(markerPosition);
        
        tooltip.style.left = tooltipPosition.left + 'px';
        tooltip.style.top = tooltipPosition.top + 'px';
        tooltip.style.transform = 'scale(1)';
        tooltip.style.transformOrigin = 'top left';
        tooltip.style.display = 'block';
        
        // 添加地图缩放监听器（仅用于位置跟随）
        this.addCameraChangeListener();
        
        // 添加点击事件到图片（如果有）
        this.setupLocationImageEvents();
    }
    
    // 隐藏地点浮动信息框
    hideLocationTooltip() {
        const tooltip = document.getElementById('locationTooltip');
        if (tooltip) {
            tooltip.style.display = 'none';
        }
        
        // 移除相机变化监听器
        this.removeCameraChangeListener();
        this.currentTooltipLocation = null;
    }
    
    // 获取地点在屏幕上的位置
     getLocationScreenPosition(locationData) {
         if (!this.locationManager || !this.locationManager.viewer || !this.locationManager.viewer.viewer) {
             return null;
         }
         
         const viewer = this.locationManager.viewer.viewer;
         const cartesian = Cesium.Cartesian3.fromDegrees(locationData.longitude, locationData.latitude);
         const screenPosition = Cesium.SceneTransforms.wgs84ToWindowCoordinates(viewer.scene, cartesian);
         
         if (screenPosition) {
             return {
                 x: screenPosition.x,
                 y: screenPosition.y
             };
         }
         
         return null;
     }
     
     // 计算浮动框的最佳位置（显示在地点旁边）
     calculateTooltipPosition(markerPosition) {
         const upwardOffset = 150; // 向上偏移150px
         
         if (!markerPosition) {
             // 如果没有标记位置，回退到右侧中间
             const windowWidth = window.innerWidth;
             const windowHeight = window.innerHeight;
             return {
                 left: windowWidth - 320,
                 top: (windowHeight - 200) / 2 - upwardOffset
             };
         }
         
         const windowWidth = window.innerWidth;
         const windowHeight = window.innerHeight;
         const tooltipWidth = 320;
         const tooltipHeight = 250;
         const margin = 15;
         const offset = 20; // 与标记点的偏移距离
         
         let left, top;
         
         // 优先显示在标记点右侧
         left = markerPosition.x + offset;
         top = markerPosition.y - tooltipHeight / 2 - upwardOffset;
         
         // 检查右侧是否有足够空间
         if (left + tooltipWidth + margin > windowWidth) {
             // 右侧空间不足，显示在左侧
             left = markerPosition.x - tooltipWidth - offset;
         }
         
         // 检查左侧是否超出边界
         if (left < margin) {
             // 左侧也不够，显示在标记点下方
             left = markerPosition.x - tooltipWidth / 2;
             top = markerPosition.y + offset - upwardOffset;
         }
         
         // 检查下方是否超出边界
         if (top + tooltipHeight + margin > windowHeight) {
             // 下方空间不足，显示在上方
             top = markerPosition.y - tooltipHeight - offset - upwardOffset;
         }
         
         // 最终边界检查
         left = Math.max(margin, Math.min(left, windowWidth - tooltipWidth - margin));
         top = Math.max(margin, Math.min(top, windowHeight - tooltipHeight - margin));
         
         return { left, top };
     }
     
     // 更新浮动框位置（智能跟随相机变动）
     updateTooltipPosition(locationData) {
         // 更新当前tooltip地点数据
         this.currentTooltipLocation = locationData;
         
         // 使用新的位置和缩放更新方法
         this.updateTooltipPositionAndScale();
     }
    
    // 隐藏地点信息
    hideLocationInfo() {
        const locationInfo = document.getElementById('locationInfo');
        if (locationInfo) {
            locationInfo.style.display = 'none';
            locationInfo.classList.remove('slide-in');
        }
    }
    
    // 创建地点详情HTML
    createLocationDetailsHTML(location) {
        return `
            <div class="location-header">
                <div class="location-title">
                    <h4>${location.name}</h4>
                    ${location.nameEn ? `<p class="name-en">${location.nameEn}</p>` : ''}
                </div>
                <div class="anime-badge">
                    ${location.animeTitle || '未知动漫'}
                </div>
            </div>
            
            <div class="location-detail-item">
                <strong>📍 地址:</strong> ${location.address}
            </div>
            
            <div class="location-detail-item">
                <strong>📝 描述:</strong> ${location.description}
            </div>
            
            ${location.scenes && location.scenes.length > 0 ? `
                <div class="location-detail-item">
                    <strong>🎬 相关场景:</strong>
                    <div class="scenes-list">
                        ${location.scenes.map(scene => `<span class="scene-tag">${scene}</span>`).join('')}
                    </div>
                </div>
            ` : ''}
            
            ${location.visitInfo ? `
                <div class="location-detail-item visit-info">
                    <strong>ℹ️ 参观信息:</strong>
                    <div class="visit-details">
                        <div class="visit-item">
                            <span class="visit-label">⏰ 开放时间:</span>
                            <span class="visit-value">${location.visitInfo.openTime}</span>
                        </div>
                        <div class="visit-item">
                            <span class="visit-label">💰 门票:</span>
                            <span class="visit-value">${location.visitInfo.admission}</span>
                        </div>
                        <div class="visit-item">
                            <span class="visit-label">🚇 交通:</span>
                            <span class="visit-value">${location.visitInfo.transportation}</span>
                        </div>
                    </div>
                </div>
            ` : ''}
            

            
            <div class="location-actions">
                <button onclick="window.uiManager.flyToCurrentLocation()" class="detail-btn primary">
                    📍 定位到此处
                </button>
                <button onclick="window.topPanelManager.addToFavorites('${location.id}')" class="detail-btn favorite" id="favoriteBtn-${location.id}">
                    ${window.topPanelManager && window.topPanelManager.favorites.includes(location.id) ? '❤️ 已收藏' : '🤍 收藏'}
                </button>

                <button onclick="window.uiManager.hideLocationTooltip()" class="detail-btn secondary">
                    ❌ 关闭
                </button>
            </div>
        `;
    }
    
    // 飞行到当前地点
    flyToCurrentLocation() {
        if (this.locationManager.viewer.currentSelection) {
            const locationData = this.locationManager.viewer.currentSelection.properties.locationData ? 
                this.locationManager.viewer.currentSelection.properties.locationData.getValue() : null;
            if (locationData) {
                this.locationManager.flyToLocation(locationData.id);
            }
        }
    }
    
    // 设置地点图片事件
    setupLocationImageEvents() {
        // 图片点击事件已在HTML中设置
    }
    
    // 显示图片模态框
    showImageModal(imageSrc, locationName) {
        // 创建模态框
        const modal = document.createElement('div');
        modal.className = 'image-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="modal-close" onclick="this.parentElement.parentElement.remove()">&times;</span>
                <img src="images/${imageSrc}" alt="${locationName}" class="modal-image">
                <div class="modal-caption">${locationName}</div>
            </div>
        `;
        
        // 添加到页面
        document.body.appendChild(modal);
        
        // 点击背景关闭
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }
    

    

    
    // 清除搜索
    clearSearch() {
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.value = '';
        }
    }
    
    // 显示加载状态
    showLoading() {
        const loadingIndicator = document.getElementById('loadingIndicator');
        if (loadingIndicator) {
            loadingIndicator.style.display = 'block';
            this.isLoading = true;
        }
    }
    
    // 隐藏加载状态
    hideLoading() {
        const loadingIndicator = document.getElementById('loadingIndicator');
        if (loadingIndicator) {
            loadingIndicator.style.display = 'none';
            this.isLoading = false;
        }
    }
    
    // 显示消息
    showMessage(message, type = 'info') {
        // 创建消息元素
        const messageEl = document.createElement('div');
        messageEl.className = `message message-${type}`;
        messageEl.textContent = message;
        
        // 添加样式
        Object.assign(messageEl.style, {
            position: 'fixed',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            padding: '12px 24px',
            borderRadius: '8px',
            color: 'white',
            fontSize: '14px',
            zIndex: '2001',
            opacity: '0',
            transition: 'opacity 0.3s ease'
        });
        
        // 根据类型设置背景色
        const colors = {
            success: '#4CAF50',
            warning: '#FF9800',
            error: '#F44336',
            info: '#2196F3'
        };
        messageEl.style.backgroundColor = colors[type] || colors.info;
        
        // 添加到页面
        document.body.appendChild(messageEl);
        
        // 显示动画
        setTimeout(() => {
            messageEl.style.opacity = '1';
        }, 100);
        
        // 自动隐藏
        setTimeout(() => {
            messageEl.style.opacity = '0';
            setTimeout(() => {
                if (messageEl.parentNode) {
                    messageEl.parentNode.removeChild(messageEl);
                }
            }, 300);
        }, 3000);
    }
    
    // 设置响应式
    setupResponsive() {
        const sidebar = document.getElementById('sidebar');
        const toggleBtn = document.createElement('button');
        
        toggleBtn.innerHTML = '☰';
        toggleBtn.className = 'sidebar-toggle';
        toggleBtn.style.cssText = `
            position: fixed;
            top: 20px;
            left: 20px;
            z-index: 1001;
            background: rgba(255, 107, 107, 0.9);
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            color: white;
            font-size: 18px;
            cursor: pointer;
            display: none;
        `;
        
        document.body.appendChild(toggleBtn);
        
        toggleBtn.addEventListener('click', () => {
            if (sidebar) {
                sidebar.classList.toggle('active');
            }
        });
        
        // 检查屏幕尺寸
        const checkScreenSize = () => {
            if (window.innerWidth <= 768) {
                toggleBtn.style.display = 'block';
            } else {
                toggleBtn.style.display = 'none';
                if (sidebar) {
                    sidebar.classList.remove('active');
                }
            }
        };
        
        window.addEventListener('resize', checkScreenSize);
        checkScreenSize();
    }
    
    // 防抖函数
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    

    
    // 添加相机变化监听器
    addCameraChangeListener() {
        if (!this.locationManager || !this.locationManager.viewer || !this.locationManager.viewer.viewer) {
            return;
        }
        
        const viewer = this.locationManager.viewer.viewer;
        
        // 移除之前的监听器（如果存在）
        this.removeCameraChangeListener();
        
        // 创建防抖的更新函数
        const debouncedUpdate = this.debounce(() => {
            if (this.currentTooltipLocation) {
                this.updateTooltipPositionAndScale();
            }
        }, 50); // 50ms防抖
        
        // 添加新的监听器
        this.cameraChangeListener = viewer.camera.changed.addEventListener(debouncedUpdate);
    }
    
    // 移除相机变化监听器
    removeCameraChangeListener() {
        if (this.cameraChangeListener) {
            this.cameraChangeListener();
            this.cameraChangeListener = null;
        }
    }
    
    // 更新浮动框位置（固定大小）
    updateTooltipPositionAndScale() {
        if (!this.currentTooltipLocation) return;
        
        const tooltip = document.getElementById('locationTooltip');
        if (!tooltip || tooltip.style.display === 'none') return;
        
        // 获取地点当前在屏幕上的位置
        const markerPosition = this.getLocationScreenPosition(this.currentTooltipLocation);
        
        if (markerPosition) {
            // 重新计算位置（固定大小）
            const tooltipPosition = this.calculateTooltipPosition(markerPosition);
            
            tooltip.style.left = tooltipPosition.left + 'px';
            tooltip.style.top = tooltipPosition.top + 'px';
            tooltip.style.transform = 'scale(1)';
        } else {
            // 如果地点不在视野内，隐藏tooltip
            this.hideLocationTooltip();
        }
    }
    
    // 获取UI状态
    getUIState() {
        return {
            isLoading: this.isLoading,
            currentSelectedAnime: this.currentSelectedAnime,
            searchValue: document.getElementById('searchInput')?.value || '',
            locationInfoVisible: document.getElementById('locationInfo')?.style.display !== 'none'
        };
    }
}

// 导出UI管理器
window.UIManager = UIManager;