// 动漫圣地数据
const ANIME_DATA = {
    // 你的名字
    'your_name': {
        id: 'your_name',
        title: '你的名字',
        titleEn: 'Your Name',
        year: 2016,
        director: '新海诚',
        description: '一部关于时空交错的浪漫动画电影',
        poster: 'https://example.com/your_name_poster.jpg',
        locations: [
            {
                id: 'suga_shrine',
                name: '须贺神社',
                nameEn: 'Suga Shrine',
                description: '电影中男女主角相遇的著名阶梯场景',
                longitude: 139.7158,
                latitude: 35.6844,
                address: '东京都新宿区须贺町5',
                scenes: ['阶梯相遇场景', '神社参拜场景'],
                images: ['suga_shrine_1.jpg', 'suga_shrine_2.jpg'],
                visitInfo: {
                    openTime: '24小时开放',
                    admission: '免费',
                    transportation: 'JR四谷站步行10分钟'
                }
            },
            {
                id: 'cafe_la_boheme',
                name: 'Cafe La Bohème',
                nameEn: 'Cafe La Bohème',
                description: '男主角打工的意大利餐厅',
                longitude: 139.7021,
                latitude: 35.6598,
                address: '东京都新宿区新宿3-38-1',
                scenes: ['打工场景', '约会场景'],
                images: ['cafe_la_boheme_1.jpg'],
                visitInfo: {
                    openTime: '11:00-23:00',
                    admission: '消费制',
                    transportation: 'JR新宿站东南口步行5分钟'
                }
            },
            {
                id: 'hida_furukawa',
                name: '飞驒古川',
                nameEn: 'Hida-Furukawa',
                description: '三叶居住的小镇原型',
                longitude: 137.1847,
                latitude: 36.2380,
                address: '岐阜县飞驒市古川町',
                scenes: ['小镇全景', '车站场景', '图书馆场景'],
                images: ['hida_furukawa_1.jpg', 'hida_furukawa_2.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR高山本线飞驒古川站'
                }
            }
        ]
    },
    
    // 天气之子
    'weathering_with_you': {
        id: 'weathering_with_you',
        title: '天气之子',
        titleEn: 'Weathering with You',
        year: 2019,
        director: '新海诚',
        description: '关于天气和青春的奇幻爱情故事',
        poster: 'https://example.com/weathering_with_you_poster.jpg',
        locations: [
            {
                id: 'meiji_jingu',
                name: '明治神宫',
                nameEn: 'Meiji Shrine',
                description: '阳菜祈祷天晴的神社',
                longitude: 139.6993,
                latitude: 35.6762,
                address: '东京都涩谷区代代木神园町1-1',
                scenes: ['祈祷场景', '神社参拜'],
                images: ['meiji_jingu_1.jpg'],
                visitInfo: {
                    openTime: '5:00-18:00',
                    admission: '免费',
                    transportation: 'JR原宿站步行1分钟'
                }
            },
            {
                id: 'roppongi_hills',
                name: '六本木之丘',
                nameEn: 'Roppongi Hills',
                description: '帆高和阳菜约会的地方',
                longitude: 139.7291,
                latitude: 35.6606,
                address: '东京都港区六本木6-10-1',
                scenes: ['约会场景', '城市全景'],
                images: ['roppongi_hills_1.jpg'],
                visitInfo: {
                    openTime: '10:00-23:00',
                    admission: '展望台收费',
                    transportation: '地铁六本木站直达'
                }
            }
        ]
    },
    
    // 千与千寻
    'spirited_away': {
        id: 'spirited_away',
        title: '千与千寻',
        titleEn: 'Spirited Away',
        year: 2001,
        director: '宫崎骏',
        description: '吉卜力工作室的经典奇幻冒险动画',
        poster: 'https://example.com/spirited_away_poster.jpg',
        locations: [
            {
                id: 'dogo_onsen',
                name: '道后温泉',
                nameEn: 'Dogo Onsen',
                description: '汤婆婆的汤屋原型',
                longitude: 132.7867,
                latitude: 33.8478,
                address: '爱媛县松山市道后汤之町5-6',
                scenes: ['汤屋外观', '温泉场景'],
                images: ['dogo_onsen_1.jpg'],
                visitInfo: {
                    openTime: '6:00-23:00',
                    admission: '入浴费410日元起',
                    transportation: '伊予铁道道后温泉站步行5分钟'
                }
            },
            {
                id: 'jiufen',
                name: '九份',
                nameEn: 'Jiufen',
                description: '神隐少女中神秘小镇的灵感来源',
                longitude: 121.8439,
                latitude: 25.1097,
                address: '台湾新北市瑞芳区九份',
                scenes: ['夜景', '茶楼场景'],
                images: ['jiufen_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '台北搭乘客运至九份'
                }
            }
        ]
    },
    
    // 秒速5厘米
    'five_cm_per_second': {
        id: 'five_cm_per_second',
        title: '秒速5厘米',
        titleEn: '5 Centimeters per Second',
        year: 2007,
        director: '新海诚',
        description: '关于距离与时间的青春物语',
        poster: 'https://example.com/five_cm_poster.jpg',
        locations: [
            {
                id: 'shinjuku_station',
                name: '新宿站',
                nameEn: 'Shinjuku Station',
                description: '贵树工作和生活的地方',
                longitude: 139.7006,
                latitude: 35.6896,
                address: '东京都新宿区新宿3丁目',
                scenes: ['车站场景', '通勤场景'],
                images: ['shinjuku_station_1.jpg'],
                visitInfo: {
                    openTime: '首末班车时间',
                    admission: '车票费用',
                    transportation: 'JR新宿站'
                }
            },
            {
                id: 'tanegashima',
                name: '种子岛',
                nameEn: 'Tanegashima',
                description: '明里生活的南方小岛',
                longitude: 130.9667,
                latitude: 30.7333,
                address: '鹿儿岛县熊毛郡',
                scenes: ['海边场景', '火箭发射场'],
                images: ['tanegashima_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '鹿儿岛机场转机或轮渡'
                }
            },
            {
                id: 'koganei_park',
                name: '小金井公园',
                nameEn: 'Koganei Park',
                description: '贵树和明里约会的公园',
                longitude: 139.5031,
                latitude: 35.7142,
                address: '东京都小金井市关野町1-13-1',
                scenes: ['樱花场景', '约会场景'],
                images: ['koganei_park_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR中央线东小金井站步行10分钟'
                }
            }
        ]
    },

    // 鬼灭之刃
    'demon_slayer': {
        id: 'demon_slayer',
        title: '鬼灭之刃',
        titleEn: 'Demon Slayer',
        year: 2019,
        director: '外崎春雄',
        description: '大正时代的鬼与人的战斗故事',
        poster: 'https://example.com/demon_slayer_poster.jpg',
        locations: [
            {
                id: 'asakusa',
                name: '浅草',
                nameEn: 'Asakusa',
                description: '炭治郎和祢豆子在东京的活动场所',
                longitude: 139.7967,
                latitude: 35.7148,
                address: '东京都台东区浅草',
                scenes: ['浅草寺场景', '传统街道'],
                images: ['asakusa_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '地铁银座线浅草站'
                }
            },
            {
                id: 'mount_sagiri',
                name: '狭雾山',
                nameEn: 'Mount Sagiri',
                description: '炭治郎修行的山（原型：奥多摩）',
                longitude: 139.0167,
                latitude: 35.8000,
                address: '东京都西多摩郡奥多摩町',
                scenes: ['修行场景', '山林场景'],
                images: ['mount_sagiri_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR青梅线奥多摩站'
                }
            },
            {
                id: 'kumano_shrine',
                name: '熊野神社',
                nameEn: 'Kumano Shrine',
                description: '最终选别的藤袭山原型',
                longitude: 135.7681,
                latitude: 34.2667,
                address: '奈良县吉野郡十津川村',
                scenes: ['最终选别', '藤花场景'],
                images: ['kumano_shrine_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '近铁大和八木站转巴士'
                }
            },
            {
                id: 'tokyo_station',
                name: '东京站',
                nameEn: 'Tokyo Station',
                description: '无限列车的原型车站',
                longitude: 139.7673,
                latitude: 35.6812,
                address: '东京都千代田区丸之内1丁目',
                scenes: ['车站场景', '列车场景'],
                images: ['tokyo_station_1.jpg'],
                visitInfo: {
                    openTime: '首末班车时间',
                    admission: '车票费用',
                    transportation: 'JR东京站'
                }
            }
        ]
    },

    // 进击的巨人
    'attack_on_titan': {
        id: 'attack_on_titan',
        title: '进击的巨人',
        titleEn: 'Attack on Titan',
        year: 2013,
        director: '荒木哲郎',
        description: '人类与巨人的生存战争',
        poster: 'https://example.com/attack_on_titan_poster.jpg',
        locations: [
            {
                id: 'rothenburg',
                name: '罗滕堡',
                nameEn: 'Rothenburg ob der Tauber',
                description: '希干希纳区的原型（德国）',
                longitude: 10.1786,
                latitude: 49.3755,
                address: '德国巴伐利亚州罗滕堡',
                scenes: ['城墙场景', '中世纪街道'],
                images: ['rothenburg_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '从纽伦堡乘火车'
                }
            },
            {
                id: 'neuschwanstein',
                name: '新天鹅堡',
                nameEn: 'Neuschwanstein Castle',
                description: '王政府所在地的原型',
                longitude: 10.7498,
                latitude: 47.5576,
                address: '德国巴伐利亚州施万高',
                scenes: ['城堡场景', '王室场景'],
                images: ['neuschwanstein_1.jpg'],
                visitInfo: {
                    openTime: '9:00-18:00',
                    admission: '门票15欧元',
                    transportation: '从慕尼黑乘火车至富森'
                }
            },
            {
                id: 'hallstatt',
                name: '哈尔施塔特',
                nameEn: 'Hallstatt',
                description: '湖边小镇的原型（奥地利）',
                longitude: 13.6493,
                latitude: 47.5622,
                address: '奥地利上奥地利州哈尔施塔特',
                scenes: ['湖边场景', '小镇风光'],
                images: ['hallstatt_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '从萨尔茨堡乘火车'
                }
            }
        ]
    },

    // 东京喰种
    'tokyo_ghoul': {
        id: 'tokyo_ghoul',
        title: '东京喰种',
        titleEn: 'Tokyo Ghoul',
        year: 2014,
        director: '森田修平',
        description: '现代东京的喰种与人类的故事',
        poster: 'https://example.com/tokyo_ghoul_poster.jpg',
        locations: [
            {
                id: 'shibuya_crossing',
                name: '涩谷十字路口',
                nameEn: 'Shibuya Crossing',
                description: '金木研经常出现的繁华街区',
                longitude: 139.7016,
                latitude: 35.6598,
                address: '东京都涩谷区道玄坂',
                scenes: ['街头场景', '人群场景'],
                images: ['shibuya_crossing_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR涩谷站'
                }
            },
            {
                id: 'kamii_university',
                name: '上井大学',
                nameEn: 'Kamii University',
                description: '金木研就读的大学（原型：早稻田大学）',
                longitude: 139.7197,
                latitude: 35.7089,
                address: '东京都新宿区户塚町1-104',
                scenes: ['校园场景', '图书馆场景'],
                images: ['waseda_university_1.jpg'],
                visitInfo: {
                    openTime: '校园开放时间',
                    admission: '免费参观',
                    transportation: '地铁东西线早稻田站'
                }
            },
            {
                id: 'anteiku_cafe',
                name: '安定区咖啡厅',
                nameEn: 'Anteiku Cafe',
                description: '金木研工作的咖啡厅（原型：表参道咖啡厅）',
                longitude: 139.7128,
                latitude: 35.6657,
                address: '东京都涩谷区神宫前',
                scenes: ['咖啡厅场景', '工作场景'],
                images: ['omotesando_cafe_1.jpg'],
                visitInfo: {
                    openTime: '8:00-22:00',
                    admission: '消费制',
                    transportation: '地铁表参道站'
                }
            },
            {
                id: 'tokyo_bay',
                name: '东京湾',
                nameEn: 'Tokyo Bay',
                description: '重要战斗场景的发生地',
                longitude: 139.8394,
                latitude: 35.5906,
                address: '东京都江东区',
                scenes: ['战斗场景', '海边场景'],
                images: ['tokyo_bay_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '临海线东京电讯港站'
                }
            }
        ]
    },

    // 名侦探柯南
    'detective_conan': {
        id: 'detective_conan',
        title: '名侦探柯南',
        titleEn: 'Detective Conan',
        year: 1996,
        director: '儿玉兼嗣',
        description: '高中生侦探的推理冒险',
        poster: 'https://example.com/detective_conan_poster.jpg',
        locations: [
            {
                id: 'beika_town',
                name: '米花町',
                nameEn: 'Beika Town',
                description: '柯南居住的虚构町区（原型：池袋）',
                longitude: 139.7108,
                latitude: 35.7295,
                address: '东京都丰岛区池袋',
                scenes: ['日常生活场景', '案件现场'],
                images: ['ikebukuro_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR池袋站'
                }
            },
            {
                id: 'tokyo_tower',
                name: '东京塔',
                nameEn: 'Tokyo Tower',
                description: '多次出现的东京地标',
                longitude: 139.7454,
                latitude: 35.6586,
                address: '东京都港区芝公园4-2-8',
                scenes: ['城市全景', '约会场景'],
                images: ['tokyo_tower_1.jpg'],
                visitInfo: {
                    openTime: '9:00-23:00',
                    admission: '展望台1200日元',
                    transportation: '地铁赤羽桥站步行5分钟'
                }
            },
            {
                id: 'imperial_palace',
                name: '皇居',
                nameEn: 'Imperial Palace',
                description: '剧场版中经常出现的场所',
                longitude: 139.7528,
                latitude: 35.6852,
                address: '东京都千代田区千代田1-1',
                scenes: ['皇宫场景', '庭园场景'],
                images: ['imperial_palace_1.jpg'],
                visitInfo: {
                    openTime: '9:00-16:00（需预约）',
                    admission: '免费',
                    transportation: '地铁大手町站步行5分钟'
                }
            },
            {
                id: 'odaiba',
                name: '台场',
                nameEn: 'Odaiba',
                description: '剧场版《天空的遇难船》拍摄地',
                longitude: 139.7753,
                latitude: 35.6267,
                address: '东京都港区台场',
                scenes: ['海滨场景', '现代建筑'],
                images: ['odaiba_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '百合海鸥线台场站'
                }
            }
        ]
    },

    // 火影忍者
    'naruto': {
        id: 'naruto',
        title: '火影忍者',
        titleEn: 'Naruto',
        year: 2002,
        director: '伊达勇登',
        description: '忍者世界的成长与友情物语',
        poster: 'https://example.com/naruto_poster.jpg',
        locations: [
            {
                id: 'awaji_island',
                name: '淡路岛',
                nameEn: 'Awaji Island',
                description: '木叶村的原型岛屿',
                longitude: 134.9167,
                latitude: 34.3833,
                address: '兵库县淡路岛',
                scenes: ['村庄场景', '自然风光'],
                images: ['awaji_island_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '从神户乘巴士'
                }
            },
            {
                id: 'naruto_whirlpools',
                name: '鸣门漩涡',
                nameEn: 'Naruto Whirlpools',
                description: '鸣门名字的由来',
                longitude: 134.2333,
                latitude: 34.2333,
                address: '德岛县鸣门市',
                scenes: ['漩涡场景', '海峡风光'],
                images: ['naruto_whirlpools_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '观光船费用',
                    transportation: 'JR鸣门站'
                }
            },
            {
                id: 'mount_fuji',
                name: '富士山',
                nameEn: 'Mount Fuji',
                description: '火影岩的原型',
                longitude: 138.7274,
                latitude: 35.3606,
                address: '静冈县富士宫市',
                scenes: ['山峰场景', '火影岩'],
                images: ['mount_fuji_1.jpg'],
                visitInfo: {
                    openTime: '登山季节7-9月',
                    admission: '登山费1000日元',
                    transportation: '从东京乘巴士至五合目'
                }
            }
        ]
    },

    // 海贼王
    'one_piece': {
        id: 'one_piece',
        title: '海贼王',
        titleEn: 'One Piece',
        year: 1999,
        director: '宇田钢之助',
        description: '寻找传说中的大秘宝的冒险故事',
        poster: 'https://example.com/one_piece_poster.jpg',
        locations: [
            {
                id: 'kumamoto_castle',
                name: '熊本城',
                nameEn: 'Kumamoto Castle',
                description: '阿拉巴斯坦王宫的原型',
                longitude: 130.7056,
                latitude: 32.8064,
                address: '熊本县熊本市中央区本丸1-1',
                scenes: ['王宫场景', '城堡建筑'],
                images: ['kumamoto_castle_1.jpg'],
                visitInfo: {
                    openTime: '9:00-17:00',
                    admission: '800日元',
                    transportation: '熊本市电熊本城前站'
                }
            },
            {
                id: 'okinawa_beaches',
                name: '冲绳海滩',
                nameEn: 'Okinawa Beaches',
                description: '各种海岛场景的原型',
                longitude: 127.6792,
                latitude: 26.2124,
                address: '冲绳县',
                scenes: ['海滩场景', '热带风光'],
                images: ['okinawa_beaches_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '那霸机场'
                }
            },
            {
                id: 'shirahama_beach',
                name: '白滨海滩',
                nameEn: 'Shirahama Beach',
                description: '水之七都的原型',
                longitude: 135.3333,
                latitude: 33.6833,
                address: '和歌山县西牟娄郡白滨町',
                scenes: ['水城场景', '海滨风光'],
                images: ['shirahama_beach_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR白滨站'
                }
            }
         ]
     },

    // 死神
    'bleach': {
        id: 'bleach',
        title: '死神',
        titleEn: 'Bleach',
        year: 2004,
        director: '阿部记之',
        description: '死神与虚的超自然战斗',
        poster: 'https://example.com/bleach_poster.jpg',
        locations: [
            {
                id: 'karakura_town',
                name: '空座町',
                nameEn: 'Karakura Town',
                description: '一护居住的虚构城镇（原型：荒川区）',
                longitude: 139.7836,
                latitude: 35.7361,
                address: '东京都荒川区',
                scenes: ['日常生活场景', '虚出现场景'],
                images: ['arakawa_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR日暮里站'
                }
            },
            {
                id: 'ueno_park',
                name: '上野公园',
                nameEn: 'Ueno Park',
                description: '一护和露琪亚初次相遇的公园',
                longitude: 139.7731,
                latitude: 35.7153,
                address: '东京都台东区上野公园',
                scenes: ['初遇场景', '樱花场景'],
                images: ['ueno_park_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR上野站'
                }
            },
            {
                id: 'soul_society',
                name: '尸魂界',
                nameEn: 'Soul Society',
                description: '死神居住的世界（原型：京都）',
                longitude: 135.7681,
                latitude: 35.0116,
                address: '京都府京都市',
                scenes: ['死神世界', '传统建筑'],
                images: ['kyoto_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '各景点不同',
                    transportation: 'JR京都站'
                }
            }
        ]
    },

    // 龙珠
    'dragon_ball': {
        id: 'dragon_ball',
        title: '龙珠',
        titleEn: 'Dragon Ball',
        year: 1986,
        director: '西尾大介',
        description: '寻找龙珠的冒险与战斗',
        poster: 'https://example.com/dragon_ball_poster.jpg',
        locations: [
            {
                id: 'mount_paozu',
                name: '包子山',
                nameEn: 'Mount Paozu',
                description: '悟空的故乡（原型：富士山周边）',
                longitude: 138.7274,
                latitude: 35.3606,
                address: '静冈县富士宫市',
                scenes: ['悟空家', '山林场景'],
                images: ['mount_fuji_area_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '从东京乘巴士'
                }
            },
            {
                id: 'kame_house',
                name: '龟仙屋',
                nameEn: 'Kame House',
                description: '龟仙人的家（原型：江之岛）',
                longitude: 139.4814,
                latitude: 35.2989,
                address: '神奈川县藤泽市江之岛',
                scenes: ['修行场景', '海岛风光'],
                images: ['enoshima_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '小田急江之岛线'
                }
            },
            {
                id: 'capsule_corp',
                name: '胶囊公司',
                nameEn: 'Capsule Corporation',
                description: '布尔玛家的公司（原型：东京都心）',
                longitude: 139.7673,
                latitude: 35.6812,
                address: '东京都千代田区',
                scenes: ['科技场景', '都市风光'],
                images: ['tokyo_business_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR东京站'
                }
            }
        ]
    },

    // 我的英雄学院
    'my_hero_academia': {
        id: 'my_hero_academia',
        title: '我的英雄学院',
        titleEn: 'My Hero Academia',
        year: 2016,
        director: '长崎健司',
        description: '超能力英雄的成长故事',
        poster: 'https://example.com/my_hero_academia_poster.jpg',
        locations: [
            {
                id: 'ua_high_school',
                name: '雄英高校',
                nameEn: 'U.A. High School',
                description: '英雄培训学校（原型：早稻田大学）',
                longitude: 139.7197,
                latitude: 35.7089,
                address: '东京都新宿区户塚町1-104',
                scenes: ['校园场景', '训练场景'],
                images: ['waseda_campus_1.jpg'],
                visitInfo: {
                    openTime: '校园开放时间',
                    admission: '免费参观',
                    transportation: '地铁东西线早稻田站'
                }
            },
            {
                id: 'musutafu_city',
                name: '无个性市',
                nameEn: 'Musutafu City',
                description: '出久居住的城市（原型：横滨）',
                longitude: 139.6380,
                latitude: 35.4437,
                address: '神奈川县横滨市',
                scenes: ['城市场景', '英雄活动'],
                images: ['yokohama_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR横滨站'
                }
            },
            {
                id: 'dagobah_beach',
                name: '多古场海滩',
                nameEn: 'Dagobah Beach',
                description: '出久训练的海滩（原型：湘南海岸）',
                longitude: 139.4814,
                latitude: 35.2989,
                address: '神奈川县藤泽市',
                scenes: ['训练场景', '海滩清理'],
                images: ['shonan_beach_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR东海道线藤泽站'
                }
            }
        ]
    },

    // 咒术回战
    'jujutsu_kaisen': {
        id: 'jujutsu_kaisen',
        title: '咒术回战',
        titleEn: 'Jujutsu Kaisen',
        year: 2020,
        director: '朴性厚',
        description: '咒术师与咒灵的现代战斗',
        poster: 'https://example.com/jujutsu_kaisen_poster.jpg',
        locations: [
            {
                id: 'tokyo_jujutsu_high',
                name: '东京都立咒术高等专门学校',
                nameEn: 'Tokyo Jujutsu High School',
                description: '虎杖就读的学校（原型：明治神宫）',
                longitude: 139.6993,
                latitude: 35.6762,
                address: '东京都涩谷区代代木神园町1-1',
                scenes: ['校园场景', '训练场景'],
                images: ['meiji_shrine_1.jpg'],
                visitInfo: {
                    openTime: '日出至日落',
                    admission: '免费',
                    transportation: 'JR原宿站'
                }
            },
            {
                id: 'shibuya_incident',
                name: '涩谷事变现场',
                nameEn: 'Shibuya Incident Site',
                description: '重要战斗场景的涩谷',
                longitude: 139.7016,
                latitude: 35.6598,
                address: '东京都涩谷区',
                scenes: ['战斗场景', '都市破坏'],
                images: ['shibuya_night_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR涩谷站'
                }
            },
            {
                id: 'sendai_city',
                name: '仙台市',
                nameEn: 'Sendai City',
                description: '伏黑惠的故乡',
                longitude: 140.8719,
                latitude: 38.2682,
                address: '宫城县仙台市',
                scenes: ['故乡场景', '东北风光'],
                images: ['sendai_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR仙台站'
                }
            }
        ]
    },

    // 约定的梦幻岛
    'promised_neverland': {
        id: 'promised_neverland',
        title: '约定的梦幻岛',
        titleEn: 'The Promised Neverland',
        year: 2019,
        director: '神户守',
        description: '孤儿院孩子们的逃脱计划',
        poster: 'https://example.com/promised_neverland_poster.jpg',
        locations: [
            {
                id: 'grace_field_house',
                name: 'Grace Field House',
                nameEn: 'Grace Field House',
                description: '孤儿院的原型（英式庄园）',
                longitude: 139.5031,
                latitude: 35.7142,
                address: '东京都小金井市江户东京建筑园',
                scenes: ['孤儿院场景', '逃脱计划'],
                images: ['edo_tokyo_museum_1.jpg'],
                visitInfo: {
                    openTime: '9:30-17:30',
                    admission: '400日元',
                    transportation: 'JR中央线武蔵小金井站'
                }
            },
            {
                id: 'demon_world_forest',
                name: '鬼世界森林',
                nameEn: 'Demon World Forest',
                description: '逃脱后的森林（原型：富士树海）',
                longitude: 138.6272,
                latitude: 35.4731,
                address: '山梨县富士河口湖町',
                scenes: ['森林逃亡', '危险场景'],
                images: ['aokigahara_1.jpg'],
                visitInfo: {
                    openTime: '全天开放（注意安全）',
                    admission: '免费',
                    transportation: '从河口湖站乘巴士'
                }
            }
        ]
    },

    // 紫罗兰永恒花园
    'violet_evergarden': {
        id: 'violet_evergarden',
        title: '紫罗兰永恒花园',
        titleEn: 'Violet Evergarden',
        year: 2018,
        director: '石立太一',
        description: '战后少女寻找爱的含义',
        poster: 'https://example.com/violet_evergarden_poster.jpg',
        locations: [
            {
                id: 'leiden_university',
                name: '莱顿大学',
                nameEn: 'Leiden University',
                description: '自动手记人偶培训学校原型（荷兰）',
                longitude: 4.4814,
                latitude: 52.1676,
                address: '荷兰莱顿',
                scenes: ['学校场景', '欧式建筑'],
                images: ['leiden_university_1.jpg'],
                visitInfo: {
                    openTime: '校园开放时间',
                    admission: '免费参观',
                    transportation: '从阿姆斯特丹乘火车'
                }
            },
            {
                id: 'heidelberg_castle',
                name: '海德堡城堡',
                nameEn: 'Heidelberg Castle',
                description: '剧中城堡场景原型（德国）',
                longitude: 8.7156,
                latitude: 49.4106,
                address: '德国海德堡',
                scenes: ['城堡场景', '贵族生活'],
                images: ['heidelberg_castle_1.jpg'],
                visitInfo: {
                    openTime: '8:00-18:00',
                    admission: '门票8欧元',
                    transportation: '从法兰克福乘火车'
                }
            },
            {
                id: 'lake_bled',
                name: '布莱德湖',
                nameEn: 'Lake Bled',
                description: '美丽湖景的原型（斯洛文尼亚）',
                longitude: 14.0997,
                latitude: 46.3683,
                address: '斯洛文尼亚布莱德',
                scenes: ['湖景场景', '自然风光'],
                images: ['lake_bled_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '从卢布尔雅那乘巴士'
                }
            }
         ]
     },

    // 夏目友人帐
    'natsume_yuujinchou': {
        id: 'natsume_yuujinchou',
        title: '夏目友人帐',
        titleEn: 'Natsume Yuujinchou',
        year: 2008,
        director: '大森贵弘',
        description: '少年与妖怪的温馨日常',
        poster: 'https://example.com/natsume_poster.jpg',
        locations: [
            {
                id: 'kumamoto_countryside',
                name: '熊本乡村',
                nameEn: 'Kumamoto Countryside',
                description: '夏目居住的乡村原型',
                longitude: 130.7414,
                latitude: 32.7898,
                address: '熊本县熊本市',
                scenes: ['乡村生活', '妖怪出现场景'],
                images: ['kumamoto_countryside_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR熊本站转巴士'
                }
            },
            {
                id: 'aso_shrine',
                name: '阿苏神社',
                nameEn: 'Aso Shrine',
                description: '神社场景的原型',
                longitude: 131.1169,
                latitude: 32.9511,
                address: '熊本县阿苏市一の宫町宮地3083-1',
                scenes: ['神社参拜', '传统建筑'],
                images: ['aso_shrine_1.jpg'],
                visitInfo: {
                    openTime: '6:00-18:00',
                    admission: '免费',
                    transportation: 'JR宮地站步行15分钟'
                }
            },
            {
                id: 'aso_caldera',
                name: '阿苏火山口',
                nameEn: 'Aso Caldera',
                description: '壮观自然景色的背景',
                longitude: 131.1044,
                latitude: 32.8847,
                address: '熊本县阿苏市',
                scenes: ['自然风光', '火山景观'],
                images: ['aso_caldera_1.jpg'],
                visitInfo: {
                    openTime: '8:30-17:30',
                    admission: '缆车费用',
                    transportation: 'JR阿苏站转巴士'
                }
            }
        ]
    },

    // 言叶之庭
    'garden_of_words': {
        id: 'garden_of_words',
        title: '言叶之庭',
        titleEn: 'The Garden of Words',
        year: 2013,
        director: '新海诚',
        description: '雨中相遇的师生恋情',
        poster: 'https://example.com/garden_of_words_poster.jpg',
        locations: [
            {
                id: 'shinjuku_gyoen',
                name: '新宿御苑',
                nameEn: 'Shinjuku Gyoen',
                description: '男女主角相遇的公园',
                longitude: 139.7106,
                latitude: 35.6851,
                address: '东京都新宿区内藤町11',
                scenes: ['凉亭相遇', '雨中漫步'],
                images: ['shinjuku_gyoen_1.jpg'],
                visitInfo: {
                    openTime: '9:00-16:00',
                    admission: '500日元',
                    transportation: '地铁新宿御苑前站'
                }
            },
            {
                id: 'shinjuku_station_south',
                name: '新宿站南口',
                nameEn: 'Shinjuku Station South Exit',
                description: '雪野老师工作的地方附近',
                longitude: 139.7006,
                latitude: 35.6896,
                address: '东京都新宿区新宿3丁目',
                scenes: ['都市生活', '通勤场景'],
                images: ['shinjuku_south_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR新宿站南口'
                }
            }
        ]
    },

    // 银魂
    'gintama': {
        id: 'gintama',
        title: '银魂',
        titleEn: 'Gintama',
        year: 2006,
        director: '高松信司',
        description: '江户时代的搞笑武士故事',
        poster: 'https://example.com/gintama_poster.jpg',
        locations: [
            {
                id: 'kabukicho',
                name: '歌舞伎町',
                nameEn: 'Kabukicho',
                description: '银时活动的繁华街区原型',
                longitude: 139.7042,
                latitude: 35.6938,
                address: '东京都新宿区歌舞伎町',
                scenes: ['夜生活场景', '街头打斗'],
                images: ['kabukicho_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR新宿站东口步行5分钟'
                }
            },
            {
                id: 'asakusa_traditional',
                name: '浅草传统街区',
                nameEn: 'Asakusa Traditional District',
                description: '江户风情的传统街道',
                longitude: 139.7967,
                latitude: 35.7148,
                address: '东京都台东区浅草',
                scenes: ['传统建筑', '江户风情'],
                images: ['asakusa_traditional_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '地铁银座线浅草站'
                }
            },
            {
                id: 'edo_tokyo_museum',
                name: '江户东京博物馆',
                nameEn: 'Edo-Tokyo Museum',
                description: '江户时代历史背景参考',
                longitude: 139.7936,
                latitude: 35.6964,
                address: '东京都墨田区横网1-4-1',
                scenes: ['历史场景', '文化背景'],
                images: ['edo_tokyo_museum_1.jpg'],
                visitInfo: {
                    openTime: '9:30-17:30',
                    admission: '600日元',
                    transportation: 'JR两国站步行3分钟'
                }
            }
        ]
    },

    // 全职猎人
    'hunter_x_hunter': {
        id: 'hunter_x_hunter',
        title: '全职猎人',
        titleEn: 'Hunter x Hunter',
        year: 2011,
        director: '神志那弘志',
        description: '少年寻找父亲的冒险之旅',
        poster: 'https://example.com/hunter_x_hunter_poster.jpg',
        locations: [
            {
                id: 'whale_island',
                name: '鲸鱼岛',
                nameEn: 'Whale Island',
                description: '小杰的故乡（原型：屋久岛）',
                longitude: 130.5000,
                latitude: 30.3000,
                address: '鹿儿岛县熊毛郡屋久岛町',
                scenes: ['故乡场景', '自然风光'],
                images: ['yakushima_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '鹿儿岛机场转飞机或轮渡'
                }
            },
            {
                id: 'york_new_city',
                name: '友克鑫市',
                nameEn: 'York New City',
                description: '拍卖会举办地（原型：纽约）',
                longitude: -74.0060,
                latitude: 40.7128,
                address: '美国纽约州纽约市',
                scenes: ['都市场景', '拍卖会'],
                images: ['new_york_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '纽约地铁系统'
                }
            },
            {
                id: 'heavens_arena',
                name: '天空竞技场',
                nameEn: 'Heavens Arena',
                description: '格斗竞技场（原型：东京晴空塔）',
                longitude: 139.8107,
                latitude: 35.7101,
                address: '东京都墨田区押上1-1-2',
                scenes: ['格斗场景', '高塔建筑'],
                images: ['tokyo_skytree_1.jpg'],
                visitInfo: {
                    openTime: '8:00-22:00',
                    admission: '展望台2100日元',
                    transportation: '地铁押上站'
                }
            }
        ]
    },

    // 钢之炼金术师
    'fullmetal_alchemist': {
        id: 'fullmetal_alchemist',
        title: '钢之炼金术师',
        titleEn: 'Fullmetal Alchemist',
        year: 2003,
        director: '水岛精二',
        description: '兄弟寻找贤者之石的冒险',
        poster: 'https://example.com/fullmetal_alchemist_poster.jpg',
        locations: [
            {
                id: 'prague_castle',
                name: '布拉格城堡',
                nameEn: 'Prague Castle',
                description: '中央司令部的原型（捷克）',
                longitude: 14.4009,
                latitude: 50.0910,
                address: '捷克布拉格城堡区',
                scenes: ['军事总部', '欧式建筑'],
                images: ['prague_castle_1.jpg'],
                visitInfo: {
                    openTime: '9:00-17:00',
                    admission: '门票350捷克克朗',
                    transportation: '从布拉格市中心乘电车'
                }
            },
            {
                id: 'rothenburg_medieval',
                name: '罗滕堡中世纪城区',
                nameEn: 'Rothenburg Medieval Town',
                description: '炼金术师世界的城镇原型',
                longitude: 10.1786,
                latitude: 49.3755,
                address: '德国巴伐利亚州罗滕堡',
                scenes: ['中世纪街道', '炼金术实验室'],
                images: ['rothenburg_medieval_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '从纽伦堡乘火车'
                }
            },
            {
                id: 'mont_saint_michel',
                name: '圣米歇尔山',
                nameEn: 'Mont Saint-Michel',
                description: '神秘修道院的原型（法国）',
                longitude: -1.5114,
                latitude: 48.6361,
                address: '法国诺曼底圣米歇尔山',
                scenes: ['修道院场景', '神秘建筑'],
                images: ['mont_saint_michel_1.jpg'],
                visitInfo: {
                    openTime: '9:00-18:00',
                    admission: '门票11欧元',
                    transportation: '从巴黎乘火车至雷恩转巴士'
                }
            }
        ]
    },

    // 工作细胞
    'cells_at_work': {
        id: 'cells_at_work',
        title: '工作细胞',
        titleEn: 'Cells at Work',
        year: 2018,
        director: '铃木健一',
        description: '人体内细胞的日常工作',
        poster: 'https://example.com/cells_at_work_poster.jpg',
        locations: [
            {
                id: 'tokyo_medical_university',
                name: '东京医科大学',
                nameEn: 'Tokyo Medical University',
                description: '医学知识背景参考地',
                longitude: 139.7197,
                latitude: 35.7089,
                address: '东京都新宿区新宿6-1-1',
                scenes: ['医学研究', '教育场景'],
                images: ['tokyo_medical_1.jpg'],
                visitInfo: {
                    openTime: '校园开放时间',
                    admission: '免费参观',
                    transportation: '地铁新宿三丁目站'
                }
            },
            {
                id: 'national_museum_nature',
                name: '国立科学博物馆',
                nameEn: 'National Museum of Nature and Science',
                description: '生物科学展示',
                longitude: 139.7731,
                latitude: 35.7153,
                address: '东京都台东区上野公园7-20',
                scenes: ['科学教育', '生物展示'],
                images: ['science_museum_1.jpg'],
                visitInfo: {
                    openTime: '9:00-17:00',
                    admission: '630日元',
                    transportation: 'JR上野站步行5分钟'
                }
            }
        ]
    },

    // 辉夜大小姐想让我告白
    'kaguya_sama': {
        id: 'kaguya_sama',
        title: '辉夜大小姐想让我告白',
        titleEn: 'Kaguya-sama: Love is War',
        year: 2019,
        director: '畠山守',
        description: '学生会的恋爱心理战',
        poster: 'https://example.com/kaguya_sama_poster.jpg',
        locations: [
            {
                id: 'shuchiin_academy',
                name: '秀知院学园',
                nameEn: 'Shuchiin Academy',
                description: '贵族学校原型（学习院大学）',
                longitude: 139.7197,
                latitude: 35.7089,
                address: '东京都丰岛区目白1-5-1',
                scenes: ['学生会室', '校园生活'],
                images: ['gakushuin_1.jpg'],
                visitInfo: {
                    openTime: '校园开放时间',
                    admission: '免费参观',
                    transportation: 'JR目白站步行2分钟'
                }
            },
            {
                id: 'tokyo_fireworks',
                name: '东京花火大会会场',
                nameEn: 'Tokyo Fireworks Festival',
                description: '花火大会场景（隅田川花火大会）',
                longitude: 139.8050,
                latitude: 35.7100,
                address: '东京都墨田区向岛',
                scenes: ['花火大会', '浪漫场景'],
                images: ['sumida_fireworks_1.jpg'],
                visitInfo: {
                    openTime: '夏季花火大会期间',
                    admission: '免费观看',
                    transportation: '地铁浅草站步行10分钟'
                }
            },
            {
                id: 'ginza_shopping',
                name: '银座购物区',
                nameEn: 'Ginza Shopping District',
                description: '高档购物场景',
                longitude: 139.7673,
                latitude: 35.6762,
                address: '东京都中央区银座',
                scenes: ['购物场景', '高档街区'],
                images: ['ginza_1.jpg'],
                visitInfo: {
                    openTime: '商店营业时间',
                    admission: '免费',
                    transportation: '地铁银座站'
                }
            }
         ]
     },

    // 排球少年
    'haikyuu': {
        id: 'haikyuu',
        title: '排球少年',
        titleEn: 'Haikyuu!!',
        year: 2014,
        director: '满仲劝',
        description: '高中排球部的青春故事',
        poster: 'https://example.com/haikyuu_poster.jpg',
        locations: [
            {
                id: 'karasuno_high_school',
                name: '乌野高校',
                nameEn: 'Karasuno High School',
                description: '主角学校原型（宫城县立古川工业高等学校）',
                longitude: 140.9569,
                latitude: 38.5447,
                address: '宫城县大崎市古川北町4-3-61',
                scenes: ['排球训练', '校园生活'],
                images: ['karasuno_high_1.jpg'],
                visitInfo: {
                    openTime: '校园开放时间',
                    admission: '免费参观',
                    transportation: 'JR古川站步行20分钟'
                }
            },
            {
                id: 'sendai_gymnasium',
                name: '仙台体育馆',
                nameEn: 'Sendai Gymnasium',
                description: '县大会会场原型',
                longitude: 140.8719,
                latitude: 38.2682,
                address: '宫城县仙台市太白区富泽1-4-1',
                scenes: ['比赛场景', '体育竞技'],
                images: ['sendai_gym_1.jpg'],
                visitInfo: {
                    openTime: '9:00-21:00',
                    admission: '活动门票',
                    transportation: '地铁富泽站步行5分钟'
                }
            },
            {
                id: 'tokyo_metropolitan_gym',
                name: '东京体育馆',
                nameEn: 'Tokyo Metropolitan Gymnasium',
                description: '全国大会会场',
                longitude: 139.7197,
                latitude: 35.6762,
                address: '东京都涩谷区千駄ヶ谷1-17-1',
                scenes: ['全国大会', '决赛场景'],
                images: ['tokyo_metro_gym_1.jpg'],
                visitInfo: {
                    openTime: '9:00-21:00',
                    admission: '活动门票',
                    transportation: 'JR千駄ヶ谷站步行1分钟'
                }
            }
        ]
    },

    // 灌篮高手
    'slam_dunk': {
        id: 'slam_dunk',
        title: '灌篮高手',
        titleEn: 'Slam Dunk',
        year: 1993,
        director: '西泽信孝',
        description: '篮球少年的成长故事',
        poster: 'https://example.com/slam_dunk_poster.jpg',
        locations: [
            {
                id: 'kamakura_kokomae_station',
                name: '镰仓高校前站',
                nameEn: 'Kamakura Kokomae Station',
                description: '经典的铁道口场景',
                longitude: 139.5089,
                latitude: 35.3078,
                address: '神奈川县镰仓市腰越1丁目',
                scenes: ['铁道口', '经典场景'],
                images: ['kamakura_crossing_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '江之岛电铁镰仓高校前站'
                }
            },
            {
                id: 'shonan_beach',
                name: '湘南海岸',
                nameEn: 'Shonan Beach',
                description: '海边训练场景',
                longitude: 139.4814,
                latitude: 35.3089,
                address: '神奈川县藤泽市片濑海岸',
                scenes: ['海边训练', '夏日场景'],
                images: ['shonan_beach_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '小田急片濑江之岛站步行3分钟'
                }
            },
            {
                id: 'ryukoku_university',
                name: '龙国大学',
                nameEn: 'Ryukoku University',
                description: '大学篮球场景原型',
                longitude: 135.7681,
                latitude: 34.9669,
                address: '京都府京都市伏见区深草塚本町67',
                scenes: ['大学篮球', '高水平比赛'],
                images: ['ryukoku_university_1.jpg'],
                visitInfo: {
                    openTime: '校园开放时间',
                    admission: '免费参观',
                    transportation: '京阪深草站步行3分钟'
                }
            }
        ]
    },

    // 棋魂
    'hikaru_no_go': {
        id: 'hikaru_no_go',
        title: '棋魂',
        titleEn: 'Hikaru no Go',
        year: 2001,
        director: '西泽信孝',
        description: '围棋少年的成长之路',
        poster: 'https://example.com/hikaru_no_go_poster.jpg',
        locations: [
            {
                id: 'nihon_kiin',
                name: '日本棋院',
                nameEn: 'Nihon Ki-in',
                description: '围棋圣地',
                longitude: 139.7197,
                latitude: 35.6762,
                address: '东京都千代田区五番町7-2',
                scenes: ['职业棋手', '围棋对局'],
                images: ['nihon_kiin_1.jpg'],
                visitInfo: {
                    openTime: '9:00-17:00',
                    admission: '参观需预约',
                    transportation: '地铁市谷站步行2分钟'
                }
            },
            {
                id: 'heian_shrine',
                name: '平安神宫',
                nameEn: 'Heian Shrine',
                description: '古代围棋文化背景',
                longitude: 135.7825,
                latitude: 35.0161,
                address: '京都府京都市左京区岡崎西天王町97',
                scenes: ['传统文化', '历史背景'],
                images: ['heian_shrine_1.jpg'],
                visitInfo: {
                    openTime: '6:00-18:00',
                    admission: '免费',
                    transportation: '地铁东山站步行10分钟'
                }
            }
        ]
    },

    // 网球王子
    'prince_of_tennis': {
        id: 'prince_of_tennis',
        title: '网球王子',
        titleEn: 'The Prince of Tennis',
        year: 2001,
        director: '多田俊介',
        description: '中学网球部的竞技故事',
        poster: 'https://example.com/prince_of_tennis_poster.jpg',
        locations: [
            {
                id: 'seigaku_tennis_courts',
                name: '青春学园网球场',
                nameEn: 'Seigaku Tennis Courts',
                description: '主角学校网球场原型',
                longitude: 139.7197,
                latitude: 35.6762,
                address: '东京都世田谷区等等力',
                scenes: ['网球训练', '校内比赛'],
                images: ['seigaku_courts_1.jpg'],
                visitInfo: {
                    openTime: '校园开放时间',
                    admission: '免费参观',
                    transportation: '东急大井町线等等力站'
                }
            },
            {
                id: 'ariake_coliseum',
                name: '有明竞技场',
                nameEn: 'Ariake Coliseum',
                description: '全国大会会场',
                longitude: 139.7947,
                latitude: 35.6339,
                address: '东京都江东区有明2-2-22',
                scenes: ['全国大会', '决赛场景'],
                images: ['ariake_coliseum_1.jpg'],
                visitInfo: {
                    openTime: '比赛时间',
                    admission: '门票制',
                    transportation: '百合海鸥线有明站步行8分钟'
                }
            }
        ]
    },

    // 食戟之灵
    'shokugeki_no_soma': {
        id: 'shokugeki_no_soma',
        title: '食戟之灵',
        titleEn: 'Shokugeki no Soma',
        year: 2015,
        director: '米田和博',
        description: '料理学校的美食竞技',
        poster: 'https://example.com/shokugeki_poster.jpg',
        locations: [
            {
                id: 'totsuki_culinary_academy',
                name: '远月茶寮料理学园',
                nameEn: 'Totsuki Culinary Academy',
                description: '料理学校原型（辻调理师专门学校）',
                longitude: 135.5023,
                latitude: 34.6937,
                address: '大阪府大阪市阿倍野区松崎町3-16-11',
                scenes: ['料理课程', '食戟比赛'],
                images: ['tsuji_culinary_1.jpg'],
                visitInfo: {
                    openTime: '学校开放日',
                    admission: '参观需预约',
                    transportation: '地铁天王寺站步行8分钟'
                }
            },
            {
                id: 'tsukiji_fish_market',
                name: '筑地鱼市场',
                nameEn: 'Tsukiji Fish Market',
                description: '食材采购场景',
                longitude: 139.7714,
                latitude: 35.6654,
                address: '东京都中央区筑地5-2-1',
                scenes: ['食材采购', '市场文化'],
                images: ['tsukiji_market_1.jpg'],
                visitInfo: {
                    openTime: '5:00-14:00',
                    admission: '免费',
                    transportation: '地铁筑地市场站'
                }
            },
            {
                id: 'kappabashi_street',
                name: '合羽桥道具街',
                nameEn: 'Kappabashi Street',
                description: '料理道具购买场景',
                longitude: 139.7889,
                latitude: 35.7122,
                address: '东京都台东区松が谷',
                scenes: ['料理道具', '专业器具'],
                images: ['kappabashi_1.jpg'],
                visitInfo: {
                    openTime: '商店营业时间',
                    admission: '免费',
                    transportation: '地铁田原町站步行5分钟'
                }
            }
        ]
    },

    // 轻音少女
    'k_on': {
        id: 'k_on',
        title: '轻音少女',
        titleEn: 'K-On!',
        year: 2009,
        director: '山田尚子',
        description: '高中轻音部的日常',
        poster: 'https://example.com/k_on_poster.jpg',
        locations: [
            {
                id: 'toyosato_elementary',
                name: '丰乡小学校',
                nameEn: 'Toyosato Elementary School',
                description: '樱丘高校原型',
                longitude: 136.1331,
                latitude: 35.2331,
                address: '滋贺县犬上郡丰乡町石畑518',
                scenes: ['学校场景', '轻音部活动'],
                images: ['toyosato_school_1.jpg'],
                visitInfo: {
                    openTime: '9:00-17:00',
                    admission: '免费',
                    transportation: '近江铁道丰乡站步行10分钟'
                }
            },
            {
                id: 'kyoto_concert_hall',
                name: '京都音乐厅',
                nameEn: 'Kyoto Concert Hall',
                description: '音乐演出场景',
                longitude: 135.7681,
                latitude: 35.0116,
                address: '京都府京都市左京区下鴨半木町1-26',
                scenes: ['音乐演出', '文化活动'],
                images: ['kyoto_concert_1.jpg'],
                visitInfo: {
                    openTime: '演出时间',
                    admission: '门票制',
                    transportation: '京阪出町柳站步行10分钟'
                }
            },
            {
                id: 'london_trip',
                name: '伦敦毕业旅行',
                nameEn: 'London Graduation Trip',
                description: '毕业旅行场景',
                longitude: -0.1276,
                latitude: 51.5074,
                address: '英国伦敦',
                scenes: ['毕业旅行', '海外演出'],
                images: ['london_trip_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '伦敦地铁系统'
                }
            }
         ]
     },

    // 凉宫春日的忧郁
    'haruhi_suzumiya': {
        id: 'haruhi_suzumiya',
        title: '凉宫春日的忧郁',
        titleEn: 'The Melancholy of Haruhi Suzumiya',
        year: 2006,
        director: '石原立也',
        description: 'SOS团的超自然日常',
        poster: 'https://example.com/haruhi_poster.jpg',
        locations: [
            {
                id: 'nishinomiya_north_high',
                name: '西宫北高校',
                nameEn: 'Nishinomiya North High School',
                description: '北高的原型学校',
                longitude: 135.3569,
                latitude: 34.7381,
                address: '兵库县西宫市高木东町25-1',
                scenes: ['SOS团活动', '校园生活'],
                images: ['nishinomiya_north_1.jpg'],
                visitInfo: {
                    openTime: '校园开放时间',
                    admission: '免费参观',
                    transportation: 'JR西宫名盐站步行15分钟'
                }
            },
            {
                id: 'koshien_stadium',
                name: '甲子园球场',
                nameEn: 'Koshien Stadium',
                description: '棒球比赛场景',
                longitude: 135.3614,
                latitude: 34.7214,
                address: '兵库县西宫市甲子园町1-82',
                scenes: ['棒球比赛', '体育活动'],
                images: ['koshien_stadium_1.jpg'],
                visitInfo: {
                    openTime: '比赛日开放',
                    admission: '门票制',
                    transportation: '阪神甲子园站步行2分钟'
                }
            },
            {
                id: 'nishinomiya_shrine',
                name: '西宫神社',
                nameEn: 'Nishinomiya Shrine',
                description: '传统文化场景',
                longitude: 135.3269,
                latitude: 34.7331,
                address: '兵库县西宫市社家町1-17',
                scenes: ['神社参拜', '传统节日'],
                images: ['nishinomiya_shrine_1.jpg'],
                visitInfo: {
                    openTime: '6:00-18:00',
                    admission: '免费',
                    transportation: '阪神西宫站步行5分钟'
                }
            }
        ]
    },

    // 冰菓
    'hyouka': {
        id: 'hyouka',
        title: '冰菓',
        titleEn: 'Hyouka',
        year: 2012,
        director: '武本康弘',
        description: '古典部的推理日常',
        poster: 'https://example.com/hyouka_poster.jpg',
        locations: [
            {
                id: 'takayama_high_school',
                name: '高山高校',
                nameEn: 'Takayama High School',
                description: '神山高校的原型',
                longitude: 137.2531,
                latitude: 36.1469,
                address: '岐阜县高山市下林町353',
                scenes: ['古典部活动', '校园推理'],
                images: ['takayama_high_1.jpg'],
                visitInfo: {
                    openTime: '校园开放时间',
                    admission: '免费参观',
                    transportation: 'JR高山站步行20分钟'
                }
            },
            {
                id: 'takayama_old_town',
                name: '高山古町',
                nameEn: 'Takayama Old Town',
                description: '传统街道场景',
                longitude: 137.2531,
                latitude: 36.1469,
                address: '岐阜县高山市上三之町',
                scenes: ['传统建筑', '古镇风情'],
                images: ['takayama_old_town_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR高山站步行12分钟'
                }
            },
            {
                id: 'hida_folk_village',
                name: '飞驒民俗村',
                nameEn: 'Hida Folk Village',
                description: '传统文化背景',
                longitude: 137.2331,
                latitude: 36.1669,
                address: '岐阜县高山市上岡本町1-590',
                scenes: ['传统文化', '历史建筑'],
                images: ['hida_folk_village_1.jpg'],
                visitInfo: {
                    openTime: '8:30-17:00',
                    admission: '700日元',
                    transportation: 'JR高山站转巴士'
                }
            }
        ]
    },

    // 声之形
    'koe_no_katachi': {
        id: 'koe_no_katachi',
        title: '声之形',
        titleEn: 'A Silent Voice',
        year: 2016,
        director: '山田尚子',
        description: '关于霸凌与救赎的故事',
        poster: 'https://example.com/koe_no_katachi_poster.jpg',
        locations: [
            {
                id: 'ogaki_suimon_bridge',
                name: '大垣水门川大桥',
                nameEn: 'Ogaki Suimon Bridge',
                description: '重要场景的桥梁',
                longitude: 136.6181,
                latitude: 35.3622,
                address: '岐阜县大垣市船町',
                scenes: ['桥梁场景', '重要对话'],
                images: ['ogaki_bridge_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR大垣站步行10分钟'
                }
            },
            {
                id: 'ogaki_park',
                name: '大垣公园',
                nameEn: 'Ogaki Park',
                description: '公园场景',
                longitude: 136.6131,
                latitude: 35.3672,
                address: '岐阜县大垣市郭町2',
                scenes: ['公园漫步', '日常场景'],
                images: ['ogaki_park_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR大垣站步行7分钟'
                }
            },
            {
                id: 'yoro_falls',
                name: '养老瀑布',
                nameEn: 'Yoro Falls',
                description: '自然风光场景',
                longitude: 136.5431,
                latitude: 35.2972,
                address: '岐阜县养老郡养老町高林1298-2',
                scenes: ['自然风光', '瀑布景观'],
                images: ['yoro_falls_1.jpg'],
                visitInfo: {
                    openTime: '9:00-17:00',
                    admission: '300日元',
                    transportation: '养老铁道养老站转巴士'
                }
            }
        ]
    },

    // 魔法少女小圆
    'madoka_magica': {
        id: 'madoka_magica',
        title: '魔法少女小圆',
        titleEn: 'Puella Magi Madoka Magica',
        year: 2011,
        director: '新房昭之',
        description: '颠覆传统的魔法少女故事',
        poster: 'https://example.com/madoka_poster.jpg',
        locations: [
            {
                id: 'mitakihara_middle_school',
                name: '见泷原中学',
                nameEn: 'Mitakihara Middle School',
                description: '主角学校原型（群馬県立館林女子高等学校）',
                longitude: 139.5431,
                latitude: 36.2472,
                address: '群马县馆林市尾曳町12-1',
                scenes: ['学校生活', '魔法少女活动'],
                images: ['tatebayashi_school_1.jpg'],
                visitInfo: {
                    openTime: '校园开放时间',
                    admission: '免费参观',
                    transportation: '东武伊势崎线馆林站步行15分钟'
                }
            },
            {
                id: 'tatebayashi_city_hall',
                name: '馆林市政厅',
                nameEn: 'Tatebayashi City Hall',
                description: '城市场景原型',
                longitude: 139.5381,
                latitude: 36.2422,
                address: '群马县馆林市城町1-1',
                scenes: ['城市场景', '现代建筑'],
                images: ['tatebayashi_city_hall_1.jpg'],
                visitInfo: {
                    openTime: '8:30-17:15',
                    admission: '免费',
                    transportation: '东武伊势崎线馆林站步行10分钟'
                }
            },
            {
                id: 'tsutsujigaoka_park',
                name: '躑躅岗公园',
                nameEn: 'Tsutsujigaoka Park',
                description: '公园场景',
                longitude: 139.5531,
                latitude: 36.2572,
                address: '群马县馆林市花山町',
                scenes: ['公园场景', '自然环境'],
                images: ['tsutsujigaoka_park_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '东武伊势崎线馆林站转巴士'
                }
            }
        ]
    },

    // 少女与战车
    'girls_und_panzer': {
        id: 'girls_und_panzer',
        title: '少女与战车',
        titleEn: 'Girls und Panzer',
        year: 2012,
        director: '水岛努',
        description: '少女们的战车道竞技',
        poster: 'https://example.com/girls_und_panzer_poster.jpg',
        locations: [
            {
                id: 'oarai_marine_tower',
                name: '大洗海洋塔',
                nameEn: 'Oarai Marine Tower',
                description: '大洗女子学园所在地标',
                longitude: 140.5731,
                latitude: 36.3122,
                address: '茨城县东茨城郡大洗町港中央10',
                scenes: ['学校场景', '海洋风光'],
                images: ['oarai_marine_tower_1.jpg'],
                visitInfo: {
                    openTime: '9:00-18:00',
                    admission: '340日元',
                    transportation: '鹿岛临海铁道大洗站步行15分钟'
                }
            },
            {
                id: 'oarai_isosaki_shrine',
                name: '大洗矶前神社',
                nameEn: 'Oarai Isosaki Shrine',
                description: '海边神社场景',
                longitude: 140.5831,
                latitude: 36.3222,
                address: '茨城县东茨城郡大洗町矶浜町6890',
                scenes: ['神社场景', '海岸风光'],
                images: ['oarai_shrine_1.jpg'],
                visitInfo: {
                    openTime: '6:00-18:00',
                    admission: '免费',
                    transportation: '鹿岛临海铁道大洗站转巴士'
                }
            },
            {
                id: 'oarai_aquarium',
                name: '大洗水族馆',
                nameEn: 'Oarai Aquarium',
                description: '水族馆场景',
                longitude: 140.5931,
                latitude: 36.3322,
                address: '茨城县东茨城郡大洗町矶浜町8252-3',
                scenes: ['水族馆', '海洋生物'],
                images: ['oarai_aquarium_1.jpg'],
                visitInfo: {
                    openTime: '9:00-17:00',
                    admission: '2000日元',
                    transportation: '鹿岛临海铁道大洗站转巴士'
                }
            }
        ]
    },

    // 声之形
    'koe_no_katachi': {
        id: 'koe_no_katachi',
        title: '声之形',
        titleEn: 'A Silent Voice',
        year: 2016,
        director: '山田尚子',
        description: '关于听障少女与同学之间的感人故事',
        poster: 'https://example.com/koe_no_katachi_poster.jpg',
        locations: [
            {
                id: 'ogaki_suimon_bridge',
                name: '大垣水门川桥',
                nameEn: 'Ogaki Suimon River Bridge',
                description: '石田将也与西宫硝子重要对话场景',
                longitude: 136.6186,
                latitude: 35.3622,
                address: '岐阜县大垣市船町',
                scenes: ['桥梁场景', '重要对话'],
                images: ['ogaki_bridge_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR大垣站步行10分钟'
                }
            },
            {
                id: 'yoro_park',
                name: '养老公园',
                nameEn: 'Yoro Park',
                description: '游乐园场景',
                longitude: 136.5486,
                latitude: 35.2922,
                address: '岐阜县养老郡养老町高林1298-2',
                scenes: ['游乐园', '青春回忆'],
                images: ['yoro_park_1.jpg'],
                visitInfo: {
                    openTime: '9:00-17:00',
                    admission: '免费（部分设施收费）',
                    transportation: '养老铁道养老站步行10分钟'
                }
            },
            {
                id: 'ogaki_castle',
                name: '大垣城',
                nameEn: 'Ogaki Castle',
                description: '城市背景场景',
                longitude: 136.6086,
                latitude: 35.3722,
                address: '岐阜县大垣市郭町2-52',
                scenes: ['历史建筑', '城市风光'],
                images: ['ogaki_castle_1.jpg'],
                visitInfo: {
                    openTime: '9:00-17:00',
                    admission: '100日元',
                    transportation: 'JR大垣站步行7分钟'
                }
            }
        ]
    },

    // 言叶之庭
    'kotonoha_no_niwa': {
        id: 'kotonoha_no_niwa',
        title: '言叶之庭',
        titleEn: 'The Garden of Words',
        year: 2013,
        director: '新海诚',
        description: '雨中相遇的师生恋情',
        poster: 'https://example.com/kotonoha_poster.jpg',
        locations: [
            {
                id: 'shinjuku_gyoen_pavilion',
                name: '新宿御苑东屋',
                nameEn: 'Shinjuku Gyoen Pavilion',
                description: '男女主角雨中相遇的凉亭',
                longitude: 139.7106,
                latitude: 35.6851,
                address: '东京都新宿区内藤町11',
                scenes: ['凉亭场景', '雨中相遇'],
                images: ['shinjuku_gyoen_pavilion_1.jpg'],
                visitInfo: {
                    openTime: '9:00-16:00',
                    admission: '500日元',
                    transportation: 'JR新宿站步行10分钟'
                }
            },
            {
                id: 'shinjuku_gyoen_garden',
                name: '新宿御苑日本庭园',
                nameEn: 'Shinjuku Gyoen Japanese Garden',
                description: '美丽的日式庭园场景',
                longitude: 139.7086,
                latitude: 35.6831,
                address: '东京都新宿区内藤町11',
                scenes: ['日式庭园', '自然风光'],
                images: ['shinjuku_gyoen_garden_1.jpg'],
                visitInfo: {
                    openTime: '9:00-16:00',
                    admission: '500日元',
                    transportation: 'JR新宿站步行10分钟'
                }
            },
            {
                id: 'shinjuku_station',
                name: '新宿站',
                nameEn: 'Shinjuku Station',
                description: '都市生活场景',
                longitude: 139.7006,
                latitude: 35.6896,
                address: '东京都新宿区新宿3丁目',
                scenes: ['车站场景', '都市生活'],
                images: ['shinjuku_station_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR新宿站'
                }
            }
        ]
    },

    // 夏日大作战
    'summer_wars': {
        id: 'summer_wars',
        title: '夏日大作战',
        titleEn: 'Summer Wars',
        year: 2009,
        director: '细田守',
        description: '虚拟世界与现实世界的冒险',
        poster: 'https://example.com/summer_wars_poster.jpg',
        locations: [
            {
                id: 'ueda_castle',
                name: '上田城',
                nameEn: 'Ueda Castle',
                description: '陣内家族聚会的城市背景',
                longitude: 138.2486,
                latitude: 36.4022,
                address: '长野县上田市二之丸',
                scenes: ['历史城堡', '家族聚会'],
                images: ['ueda_castle_1.jpg'],
                visitInfo: {
                    openTime: '8:30-17:00',
                    admission: '300日元',
                    transportation: 'JR上田站步行12分钟'
                }
            },
            {
                id: 'ueda_traditional_house',
                name: '上田传统民居',
                nameEn: 'Ueda Traditional House',
                description: '陣内家大宅原型地区',
                longitude: 138.2586,
                latitude: 36.4122,
                address: '长野县上田市中央',
                scenes: ['传统建筑', '家族生活'],
                images: ['ueda_house_1.jpg'],
                visitInfo: {
                    openTime: '参观需预约',
                    admission: '免费',
                    transportation: 'JR上田站转巴士'
                }
            },
            {
                id: 'ueda_countryside',
                name: '上田乡村风景',
                nameEn: 'Ueda Countryside',
                description: '美丽的乡村田园风光',
                longitude: 138.2686,
                latitude: 36.4222,
                address: '长野县上田市郊外',
                scenes: ['乡村风光', '田园景色'],
                images: ['ueda_countryside_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR上田站转巴士'
                }
            }
        ]
    },

    // 未闻花名
    'anohana': {
        id: 'anohana',
        title: '未闻花名',
        titleEn: 'Anohana: The Flower We Saw That Day',
        year: 2011,
        director: '长井龙雪',
        description: '关于友情与成长的感人故事',
        poster: 'https://example.com/anohana_poster.jpg',
        locations: [
            {
                id: 'chichibu_bridge',
                name: '秩父桥',
                nameEn: 'Chichibu Bridge',
                description: '重要的桥梁场景',
                longitude: 139.0786,
                latitude: 35.9922,
                address: '埼玉县秩父市番场町',
                scenes: ['桥梁场景', '重要对话'],
                images: ['chichibu_bridge_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '西武秩父站步行15分钟'
                }
            },
            {
                id: 'chichibu_shrine',
                name: '秩父神社',
                nameEn: 'Chichibu Shrine',
                description: '祈愿场景',
                longitude: 139.0886,
                latitude: 35.9822,
                address: '埼玉县秩父市番场町1-3',
                scenes: ['神社场景', '祈愿'],
                images: ['chichibu_shrine_1.jpg'],
                visitInfo: {
                    openTime: '6:00-20:00',
                    admission: '免费',
                    transportation: '西武秩父站步行3分钟'
                }
            },
            {
                id: 'chichibu_station',
                name: '西武秩父站',
                nameEn: 'Seibu Chichibu Station',
                description: '车站场景',
                longitude: 139.0986,
                latitude: 35.9722,
                address: '埼玉县秩父市野坂町1-16-15',
                scenes: ['车站场景', '离别重逢'],
                images: ['chichibu_station_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '西武秩父站'
                }
            }
        ]
    },

    // 你好世界
    'hello_world': {
        id: 'hello_world',
        title: '你好世界',
        titleEn: 'Hello World',
        year: 2019,
        director: '伊藤智彦',
        description: '科幻爱情故事',
        poster: 'https://example.com/hello_world_poster.jpg',
        locations: [
            {
                id: 'kyoto_library',
                name: '京都府立图书馆',
                nameEn: 'Kyoto Prefectural Library',
                description: '男女主角相遇的图书馆',
                longitude: 135.7681,
                latitude: 35.0116,
                address: '京都府京都市左京区岡崎成勝寺町9-1',
                scenes: ['图书馆', '初次相遇'],
                images: ['kyoto_library_1.jpg'],
                visitInfo: {
                    openTime: '9:30-17:00',
                    admission: '免费',
                    transportation: '地铁东西线东山站步行10分钟'
                }
            },
            {
                id: 'fushimi_inari_shrine',
                name: '伏见稻荷大社',
                nameEn: 'Fushimi Inari Shrine',
                description: '千本鸟居场景',
                longitude: 135.7726,
                latitude: 34.9671,
                address: '京都府京都市伏见区深草薮之内町68',
                scenes: ['神社场景', '千本鸟居'],
                images: ['fushimi_inari_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR稻荷站步行即到'
                }
            },
            {
                id: 'kyoto_tower',
                name: '京都塔',
                nameEn: 'Kyoto Tower',
                description: '城市地标场景',
                longitude: 135.7581,
                latitude: 34.9876,
                address: '京都府京都市下京区烏丸通七条下ル',
                scenes: ['城市地标', '夜景'],
                images: ['kyoto_tower_1.jpg'],
                visitInfo: {
                    openTime: '9:00-21:00',
                    admission: '800日元',
                    transportation: 'JR京都站步行2分钟'
                }
            }
         ]
     },

    // 龙与虎
    'toradora': {
        id: 'toradora',
        title: '龙与虎',
        titleEn: 'Toradora!',
        year: 2008,
        director: '长井龙雪',
        description: '青春校园恋爱喜剧',
        poster: 'https://example.com/toradora_poster.jpg',
        locations: [
            {
                id: 'kawagoe_honkawagoe_station',
                name: '本川越站',
                nameEn: 'Hon-Kawagoe Station',
                description: '车站场景',
                longitude: 139.4886,
                latitude: 35.9222,
                address: '埼玉县川越市新富町1-22',
                scenes: ['车站场景', '通学路'],
                images: ['kawagoe_station_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '西武新宿线本川越站'
                }
            },
            {
                id: 'kawagoe_ichinobashi',
                name: '川越一番街',
                nameEn: 'Kawagoe Ichibangai',
                description: '传统街道场景',
                longitude: 139.4986,
                latitude: 35.9322,
                address: '埼玉县川越市幸町',
                scenes: ['传统街道', '购物场景'],
                images: ['kawagoe_street_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '西武新宿线本川越站步行10分钟'
                }
            },
            {
                id: 'kawagoe_bell_tower',
                name: '川越时之钟',
                nameEn: 'Kawagoe Bell Tower',
                description: '地标建筑场景',
                longitude: 139.5086,
                latitude: 35.9422,
                address: '埼玉县川越市幸町15-7',
                scenes: ['地标建筑', '历史文化'],
                images: ['kawagoe_bell_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '西武新宿线本川越站步行15分钟'
                }
            }
        ]
    },

    // 轻音少女
    'k_on': {
        id: 'k_on',
        title: '轻音少女',
        titleEn: 'K-On!',
        year: 2009,
        director: '山田尚子',
        description: '高中女生的音乐社团生活',
        poster: 'https://example.com/k_on_poster.jpg',
        locations: [
            {
                id: 'toyosato_elementary_school',
                name: '丰乡小学校旧校舍',
                nameEn: 'Toyosato Elementary School',
                description: '樱丘高校原型',
                longitude: 136.1386,
                latitude: 35.1722,
                address: '滋贺县犬上郡丰乡町石畑518',
                scenes: ['学校场景', '音乐室'],
                images: ['toyosato_school_1.jpg'],
                visitInfo: {
                    openTime: '9:00-17:00',
                    admission: '免费',
                    transportation: '近江铁道丰乡站步行15分钟'
                }
            },
            {
                id: 'kyoto_gion',
                name: '京都祇园',
                nameEn: 'Kyoto Gion',
                description: '修学旅行场景',
                longitude: 135.7786,
                latitude: 35.0022,
                address: '京都府京都市东山区祇园町',
                scenes: ['传统街区', '修学旅行'],
                images: ['kyoto_gion_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '京阪本线祇园四条站步行5分钟'
                }
            },
            {
                id: 'kiyomizu_temple',
                name: '清水寺',
                nameEn: 'Kiyomizu Temple',
                description: '修学旅行参观地',
                longitude: 135.7851,
                latitude: 34.9948,
                address: '京都府京都市东山区清水1-294',
                scenes: ['寺庙场景', '观光'],
                images: ['kiyomizu_temple_1.jpg'],
                visitInfo: {
                    openTime: '6:00-18:00',
                    admission: '400日元',
                    transportation: '京阪本线清水五条站步行25分钟'
                }
            }
        ]
    },

    // 冰菓
    'hyouka': {
        id: 'hyouka',
        title: '冰菓',
        titleEn: 'Hyouka',
        year: 2012,
        director: '武本康弘',
        description: '高中生的日常推理故事',
        poster: 'https://example.com/hyouka_poster.jpg',
        locations: [
            {
                id: 'takayama_library',
                name: '高山市图书馆',
                nameEn: 'Takayama City Library',
                description: '图书馆场景',
                longitude: 137.2586,
                latitude: 36.1422,
                address: '岐阜县高山市馬場町2-115',
                scenes: ['图书馆', '调查研究'],
                images: ['takayama_library_1.jpg'],
                visitInfo: {
                    openTime: '9:00-19:00',
                    admission: '免费',
                    transportation: 'JR高山站步行10分钟'
                }
            },
            {
                id: 'takayama_old_town',
                name: '高山古町',
                nameEn: 'Takayama Old Town',
                description: '传统街道场景',
                longitude: 137.2686,
                latitude: 36.1522,
                address: '岐阜县高山市上三之町',
                scenes: ['古町风情', '传统建筑'],
                images: ['takayama_oldtown_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR高山站步行12分钟'
                }
            },
            {
                id: 'hida_takayama_shrine',
                name: '飞騨天满宫',
                nameEn: 'Hida Takayama Shrine',
                description: '神社场景',
                longitude: 137.2786,
                latitude: 36.1622,
                address: '岐阜县高山市天满町1-1',
                scenes: ['神社场景', '祭典'],
                images: ['takayama_shrine_1.jpg'],
                visitInfo: {
                    openTime: '6:00-18:00',
                    admission: '免费',
                    transportation: 'JR高山站步行15分钟'
                }
            }
        ]
    },

    // 我们仍未知道那天所看见的花的名字
    'plastic_memories': {
        id: 'plastic_memories',
        title: 'Plastic Memories',
        titleEn: 'Plastic Memories',
        year: 2015,
        director: '藤原佳幸',
        description: '人与安卓的感人故事',
        poster: 'https://example.com/plastic_memories_poster.jpg',
        locations: [
            {
                id: 'odaiba_aqua_city',
                name: '台场水城',
                nameEn: 'Odaiba Aqua City',
                description: '购物中心场景',
                longitude: 139.7731,
                latitude: 35.6256,
                address: '东京都港区台场1-7-1',
                scenes: ['购物中心', '约会场景'],
                images: ['odaiba_aquacity_1.jpg'],
                visitInfo: {
                    openTime: '11:00-21:00',
                    admission: '免费',
                    transportation: '百合海鸥线台场海滨公园站步行2分钟'
                }
            },
            {
                id: 'rainbow_bridge',
                name: '彩虹大桥',
                nameEn: 'Rainbow Bridge',
                description: '桥梁夜景',
                longitude: 139.7631,
                latitude: 35.6356,
                address: '东京都港区海岸',
                scenes: ['桥梁场景', '夜景'],
                images: ['rainbow_bridge_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '百合海鸥线台场站步行10分钟'
                }
            },
            {
                id: 'tokyo_big_sight',
                name: '东京国际展示场',
                nameEn: 'Tokyo Big Sight',
                description: '展览会场景',
                longitude: 139.7931,
                latitude: 35.6296,
                address: '东京都江东区有明3-11-1',
                scenes: ['展览场景', '现代建筑'],
                images: ['tokyo_bigsight_1.jpg'],
                visitInfo: {
                    openTime: '依展览而定',
                    admission: '依展览而定',
                    transportation: '百合海鸥线国际展示场正门站步行3分钟'
                }
            }
         ]
     },

    // CLANNAD
    'clannad': {
        id: 'clannad',
        title: 'CLANNAD',
        titleEn: 'CLANNAD',
        year: 2007,
        director: '石原立也',
        description: '感人至深的家族与友情故事',
        poster: 'https://example.com/clannad_poster.jpg',
        locations: [
            {
                id: 'sakuragaoka_high_school',
                name: '樱丘高校',
                nameEn: 'Sakuragaoka High School',
                description: '主角们的学校（津田沼高校原型）',
                longitude: 140.0186,
                latitude: 35.6922,
                address: '千叶县习志野市津田沼1-1-1',
                scenes: ['学校生活', '社团活动'],
                images: ['tsudanuma_school_1.jpg'],
                visitInfo: {
                    openTime: '校园开放时间',
                    admission: '免费参观',
                    transportation: 'JR津田沼站步行10分钟'
                }
            },
            {
                id: 'clannad_hill',
                name: '坡道',
                nameEn: 'The Hill',
                description: '经典的坡道场景',
                longitude: 140.0286,
                latitude: 35.7022,
                address: '千叶县习志野市',
                scenes: ['坡道场景', '重要对话'],
                images: ['clannad_hill_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR津田沼站步行15分钟'
                }
            },
            {
                id: 'clannad_shopping_street',
                name: '商店街',
                nameEn: 'Shopping Street',
                description: '日常生活场景',
                longitude: 140.0386,
                latitude: 35.7122,
                address: '千叶县习志野市津田沼商店街',
                scenes: ['商店街', '日常生活'],
                images: ['tsudanuma_shopping_1.jpg'],
                visitInfo: {
                    openTime: '各店铺营业时间',
                    admission: '免费',
                    transportation: 'JR津田沼站步行5分钟'
                }
            }
        ]
    },

    // Angel Beats!
    'angel_beats': {
        id: 'angel_beats',
        title: 'Angel Beats!',
        titleEn: 'Angel Beats!',
        year: 2010,
        director: '岸诚二',
        description: '死后世界的青春故事',
        poster: 'https://example.com/angel_beats_poster.jpg',
        locations: [
            {
                id: 'iwasaki_academy',
                name: '岩崎学园',
                nameEn: 'Iwasaki Academy',
                description: '死后世界学校原型',
                longitude: 139.6286,
                latitude: 35.4422,
                address: '神奈川县横滨市西区北幸1-2-7',
                scenes: ['学校场景', '战斗场面'],
                images: ['iwasaki_academy_1.jpg'],
                visitInfo: {
                    openTime: '校园开放时间',
                    admission: '免费参观',
                    transportation: 'JR横滨站步行8分钟'
                }
            },
            {
                id: 'yokohama_landmark_tower',
                name: '横滨地标塔',
                nameEn: 'Yokohama Landmark Tower',
                description: '城市背景场景',
                longitude: 139.6186,
                latitude: 35.4522,
                address: '神奈川县横滨市西区港未来2-2-1',
                scenes: ['城市风光', '现代建筑'],
                images: ['yokohama_landmark_1.jpg'],
                visitInfo: {
                    openTime: '10:00-21:00',
                    admission: '1000日元',
                    transportation: 'JR樱木町站步行5分钟'
                }
            },
            {
                id: 'cosmo_world',
                name: '宇宙世界游乐园',
                nameEn: 'Cosmo World',
                description: '游乐园场景',
                longitude: 139.6386,
                latitude: 35.4622,
                address: '神奈川县横滨市中区新港2-8-1',
                scenes: ['游乐园', '摩天轮'],
                images: ['cosmo_world_1.jpg'],
                visitInfo: {
                    openTime: '11:00-21:00',
                    admission: '免费入园（游乐设施收费）',
                    transportation: 'JR樱木町站步行10分钟'
                }
            }
        ]
    },

    // Charlotte
    'charlotte': {
        id: 'charlotte',
        title: 'Charlotte',
        titleEn: 'Charlotte',
        year: 2015,
        director: '浅井义之',
        description: '超能力者的青春故事',
        poster: 'https://example.com/charlotte_poster.jpg',
        locations: [
            {
                id: 'hoshinoumi_academy',
                name: '星之海学园',
                nameEn: 'Hoshinoumi Academy',
                description: '超能力者学校（麻布学院原型）',
                longitude: 139.7386,
                latitude: 35.6522,
                address: '东京都港区元麻布2-3-29',
                scenes: ['学校场景', '超能力'],
                images: ['azabu_academy_1.jpg'],
                visitInfo: {
                    openTime: '校园开放时间',
                    admission: '免费参观',
                    transportation: '地铁日比谷线广尾站步行8分钟'
                }
            },
            {
                id: 'tokyo_tower_charlotte',
                name: '东京塔',
                nameEn: 'Tokyo Tower',
                description: '城市地标场景',
                longitude: 139.7454,
                latitude: 35.6586,
                address: '东京都港区芝公园4-2-8',
                scenes: ['城市地标', '夜景'],
                images: ['tokyo_tower_charlotte_1.jpg'],
                visitInfo: {
                    openTime: '9:00-23:00',
                    admission: '1200日元',
                    transportation: '地铁日比谷线神谷町站步行7分钟'
                }
            },
            {
                id: 'shibuya_crossing_charlotte',
                name: '涩谷十字路口',
                nameEn: 'Shibuya Crossing',
                description: '繁华街道场景',
                longitude: 139.7016,
                latitude: 35.6596,
                address: '东京都涩谷区道玄坂',
                scenes: ['繁华街道', '人群'],
                images: ['shibuya_crossing_charlotte_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR涩谷站步行即到'
                }
            }
        ]
    },

    // 我的青春恋爱物语果然有问题
    'oregairu': {
        id: 'oregairu',
        title: '我的青春恋爱物语果然有问题',
        titleEn: 'My Teen Romantic Comedy SNAFU',
        year: 2013,
        director: '吉村爱',
        description: '现实主义青春校园故事',
        poster: 'https://example.com/oregairu_poster.jpg',
        locations: [
            {
                id: 'chiba_monorail',
                name: '千叶单轨电车',
                nameEn: 'Chiba Monorail',
                description: '通学路线',
                longitude: 140.1186,
                latitude: 35.6122,
                address: '千叶县千叶市中央区',
                scenes: ['通学场景', '单轨电车'],
                images: ['chiba_monorail_1.jpg'],
                visitInfo: {
                    openTime: '运营时间5:30-24:00',
                    admission: '按距离收费',
                    transportation: '千叶单轨电车'
                }
            },
            {
                id: 'makuhari_beach',
                name: '幕张海滨',
                nameEn: 'Makuhari Beach',
                description: '海滨场景',
                longitude: 140.0386,
                latitude: 35.6422,
                address: '千叶县千叶市美浜区',
                scenes: ['海滨场景', '夏日祭典'],
                images: ['makuhari_beach_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR海滨幕张站步行15分钟'
                }
            },
            {
                id: 'chiba_port_tower',
                name: '千叶港塔',
                nameEn: 'Chiba Port Tower',
                description: '城市地标',
                longitude: 140.1086,
                latitude: 35.5922,
                address: '千叶县千叶市中央区中央港1',
                scenes: ['城市地标', '港口风光'],
                images: ['chiba_port_tower_1.jpg'],
                visitInfo: {
                    openTime: '9:00-19:00',
                    admission: '420日元',
                    transportation: 'JR千叶港站步行12分钟'
                }
            }
        ]
    },

    // 白色相簿2
    'white_album_2': {
        id: 'white_album_2',
        title: '白色相簿2',
        titleEn: 'White Album 2',
        year: 2013,
        director: '安田贤司',
        description: '复杂的三角恋爱故事',
        poster: 'https://example.com/white_album_2_poster.jpg',
        locations: [
            {
                id: 'houjou_university',
                name: '峰城大学',
                nameEn: 'Houjou University',
                description: '大学校园（早稻田大学原型）',
                longitude: 139.7186,
                latitude: 35.7092,
                address: '东京都新宿区户塚町1-104',
                scenes: ['大学校园', '音乐活动'],
                images: ['waseda_university_1.jpg'],
                visitInfo: {
                    openTime: '校园开放时间',
                    admission: '免费参观',
                    transportation: '地铁东西线早稻田站步行5分钟'
                }
            },
            {
                id: 'shinjuku_park_hyatt',
                name: '新宿柏悦酒店',
                nameEn: 'Park Hyatt Tokyo',
                description: '高级酒店场景',
                longitude: 139.6986,
                latitude: 35.6846,
                address: '东京都新宿区西新宿3-7-1-2',
                scenes: ['高级酒店', '成人世界'],
                images: ['park_hyatt_tokyo_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费参观大堂',
                    transportation: 'JR新宿站步行12分钟'
                }
            },
            {
                id: 'tokyo_metropolitan_government',
                name: '东京都厅',
                nameEn: 'Tokyo Metropolitan Government',
                description: '都市背景',
                longitude: 139.6916,
                latitude: 35.6896,
                address: '东京都新宿区西新宿2-8-1',
                scenes: ['都市建筑', '现代社会'],
                images: ['tokyo_government_1.jpg'],
                visitInfo: {
                    openTime: '9:30-17:30',
                    admission: '免费',
                    transportation: 'JR新宿站步行10分钟'
                }
            }
         ]
     },

    // Love Live!
    'love_live': {
        id: 'love_live',
        title: 'Love Live!',
        titleEn: 'Love Live!',
        year: 2013,
        director: '京极尚彦',
        description: '校园偶像的青春故事',
        poster: 'https://example.com/love_live_poster.jpg',
        locations: [
            {
                id: 'kanda_myojin_shrine',
                name: '神田明神',
                nameEn: 'Kanda Myojin Shrine',
                description: '重要的神社场景',
                longitude: 139.7686,
                latitude: 35.7022,
                address: '东京都千代田区外神田2-16-2',
                scenes: ['神社场景', '祈愿'],
                images: ['kanda_myojin_1.jpg'],
                visitInfo: {
                    openTime: '6:00-18:00',
                    admission: '免费',
                    transportation: 'JR御茶之水站步行5分钟'
                }
            },
            {
                id: 'akihabara_station',
                name: '秋叶原站',
                nameEn: 'Akihabara Station',
                description: '电器街场景',
                longitude: 139.7736,
                latitude: 35.6984,
                address: '东京都千代田区外神田1丁目',
                scenes: ['电器街', '现代文化'],
                images: ['akihabara_station_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR秋叶原站'
                }
            },
            {
                id: 'ueno_park',
                name: '上野公园',
                nameEn: 'Ueno Park',
                description: '公园场景',
                longitude: 139.7736,
                latitude: 35.7148,
                address: '东京都台东区上野公园',
                scenes: ['公园场景', '樱花'],
                images: ['ueno_park_1.jpg'],
                visitInfo: {
                    openTime: '5:00-23:00',
                    admission: '免费',
                    transportation: 'JR上野站步行2分钟'
                }
            }
        ]
    },

    // 凉宫春日的忧郁
    'haruhi_suzumiya': {
        id: 'haruhi_suzumiya',
        title: '凉宫春日的忧郁',
        titleEn: 'The Melancholy of Haruhi Suzumiya',
        year: 2006,
        director: '石原立也',
        description: '超自然现象的校园喜剧',
        poster: 'https://example.com/haruhi_poster.jpg',
        locations: [
            {
                id: 'nishinomiya_kita_high_school',
                name: '西宫北高校',
                nameEn: 'Nishinomiya Kita High School',
                description: '北高校原型',
                longitude: 135.3586,
                latitude: 34.7622,
                address: '兵库县西宫市高木东町',
                scenes: ['学校场景', 'SOS团'],
                images: ['nishinomiya_school_1.jpg'],
                visitInfo: {
                    openTime: '校园开放时间',
                    admission: '免费参观',
                    transportation: '阪急今津线门户厄神站步行15分钟'
                }
            },
            {
                id: 'nishinomiya_shrine',
                name: '西宫神社',
                nameEn: 'Nishinomiya Shrine',
                description: '神社场景',
                longitude: 135.3286,
                latitude: 34.7322,
                address: '兵库县西宫市社家町1-17',
                scenes: ['神社场景', '祭典'],
                images: ['nishinomiya_shrine_1.jpg'],
                visitInfo: {
                    openTime: '6:00-18:00',
                    admission: '免费',
                    transportation: '阪神本线西宫站步行5分钟'
                }
            },
            {
                id: 'koshien_stadium',
                name: '甲子园球场',
                nameEn: 'Koshien Stadium',
                description: '棒球场场景',
                longitude: 135.3616,
                latitude: 34.7214,
                address: '兵库县西宫市甲子园町1-82',
                scenes: ['棒球场', '体育活动'],
                images: ['koshien_stadium_1.jpg'],
                visitInfo: {
                    openTime: '比赛日开放',
                    admission: '依比赛而定',
                    transportation: '阪神本线甲子园站步行2分钟'
                }
            }
        ]
    },

    // Free!
    'free': {
        id: 'free',
        title: 'Free!',
        titleEn: 'Free!',
        year: 2013,
        director: '内海纮子',
        description: '游泳社团的青春故事',
        poster: 'https://example.com/free_poster.jpg',
        locations: [
            {
                id: 'iwami_swimming_club',
                name: '岩美游泳俱乐部',
                nameEn: 'Iwami Swimming Club',
                description: '游泳俱乐部原型',
                longitude: 134.3586,
                latitude: 35.5922,
                address: '鸟取县岩美郡岩美町浦富',
                scenes: ['游泳池', '训练场景'],
                images: ['iwami_pool_1.jpg'],
                visitInfo: {
                    openTime: '9:00-21:00',
                    admission: '500日元',
                    transportation: 'JR岩美站转巴士'
                }
            },
            {
                id: 'tottori_sand_dunes',
                name: '鸟取砂丘',
                nameEn: 'Tottori Sand Dunes',
                description: '沙滩训练场景',
                longitude: 134.2286,
                latitude: 35.5422,
                address: '鸟取县鸟取市福部町湯山',
                scenes: ['沙滩', '特训'],
                images: ['tottori_dunes_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR鸟取站转巴士20分钟'
                }
            },
            {
                id: 'shirahama_beach',
                name: '白滨海滩',
                nameEn: 'Shirahama Beach',
                description: '海滨训练场景',
                longitude: 135.3386,
                latitude: 33.6822,
                address: '和歌山县西牟娄郡白滨町',
                scenes: ['海滨', '夏季合宿'],
                images: ['shirahama_beach_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR白滨站转巴士'
                }
            }
        ]
    },

    // 日常
    'nichijou': {
        id: 'nichijou',
        title: '日常',
        titleEn: 'Nichijou',
        year: 2011,
        director: '石原立也',
        description: '超现实的日常喜剧',
        poster: 'https://example.com/nichijou_poster.jpg',
        locations: [
            {
                id: 'maebashi_high_school',
                name: '前桥高校',
                nameEn: 'Maebashi High School',
                description: '时定高校原型',
                longitude: 139.0686,
                latitude: 36.3922,
                address: '群马县前桥市下沖町321',
                scenes: ['学校场景', '日常生活'],
                images: ['maebashi_school_1.jpg'],
                visitInfo: {
                    openTime: '校园开放时间',
                    admission: '免费参观',
                    transportation: 'JR前桥站转巴士'
                }
            },
            {
                id: 'gunma_prefecture_office',
                name: '群马县厅',
                nameEn: 'Gunma Prefecture Office',
                description: '政府建筑场景',
                longitude: 139.0586,
                latitude: 36.3822,
                address: '群马县前桥市大手町1-1-1',
                scenes: ['政府建筑', '都市场景'],
                images: ['gunma_office_1.jpg'],
                visitInfo: {
                    openTime: '8:30-17:15',
                    admission: '免费',
                    transportation: 'JR前桥站步行10分钟'
                }
            },
            {
                id: 'maebashi_park',
                name: '前桥公园',
                nameEn: 'Maebashi Park',
                description: '公园场景',
                longitude: 139.0786,
                latitude: 36.4022,
                address: '群马县前桥市大手町3-16-1',
                scenes: ['公园场景', '休闲'],
                images: ['maebashi_park_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR前桥站步行15分钟'
                }
            }
        ]
    },

    // 青春猪头少年不会梦到兔女郎学姐
    'bunny_girl_senpai': {
        id: 'bunny_girl_senpai',
        title: '青春猪头少年不会梦到兔女郎学姐',
        titleEn: 'Rascal Does Not Dream of Bunny Girl Senpai',
        year: 2018,
        director: '增井壮一',
        description: '超自然现象的青春恋爱故事',
        poster: 'https://example.com/bunny_girl_senpai_poster.jpg',
        locations: [
            {
                id: 'shichirigahama_beach',
                name: '七里滨海滩',
                nameEn: 'Shichirigahama Beach',
                description: '重要的海滨场景',
                longitude: 139.5086,
                latitude: 35.3122,
                address: '神奈川县镰仓市七里滨东',
                scenes: ['海滨场景', '重要对话'],
                images: ['shichirigahama_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '江之电七里滨站步行3分钟'
                }
            },
            {
                id: 'enoshima_island',
                name: '江之岛',
                nameEn: 'Enoshima Island',
                description: '约会场景',
                longitude: 139.4786,
                latitude: 35.2922,
                address: '神奈川县藤泽市江之岛',
                scenes: ['观光地', '约会'],
                images: ['enoshima_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费（部分设施收费）',
                    transportation: '江之电江之岛站步行10分钟'
                }
            },
            {
                id: 'kamakura_high_school',
                name: '镰仓高校前',
                nameEn: 'Kamakura High School',
                description: '学校场景',
                longitude: 139.4986,
                latitude: 35.3022,
                address: '神奈川县镰仓市腰越1丁目',
                scenes: ['学校场景', '青春'],
                images: ['kamakura_school_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '江之电镰仓高校前站步行即到'
                }
            }
        ]
    },

    // 命运石之门
    'steins_gate': {
        id: 'steins_gate',
        title: '命运石之门',
        titleEn: 'Steins;Gate',
        year: 2011,
        director: '佐藤卓哉',
        description: '关于时间旅行的科幻悬疑动画',
        poster: 'https://example.com/steins_gate_poster.jpg',
        locations: [
            {
                id: 'akihabara_electric_town',
                name: '秋叶原电器街',
                nameEn: 'Akihabara Electric Town',
                description: '未来道具研究所所在地',
                longitude: 139.7744,
                latitude: 35.7022,
                address: '东京都千代田区外神田1丁目',
                scenes: ['实验室场景', '时间机器'],
                images: ['akihabara_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR山手线秋叶原站步行即达'
                }
            },
            {
                id: 'radio_kaikan',
                name: 'Radio会馆',
                nameEn: 'Radio Kaikan',
                description: '未来道具研究所的建筑原型',
                longitude: 139.7736,
                latitude: 35.7019,
                address: '东京都千代田区外神田1-15-16',
                scenes: ['研究所', '重要剧情'],
                images: ['radio_kaikan_1.jpg'],
                visitInfo: {
                    openTime: '10:00-20:00',
                    admission: '免费参观',
                    transportation: 'JR秋叶原站电气街口步行2分钟'
                }
            },
            {
                id: 'manseibashi_bridge',
                name: '万世桥',
                nameEn: 'Manseibashi Bridge',
                description: '时间线收束的关键场所',
                longitude: 139.7728,
                latitude: 35.7014,
                address: '东京都千代田区外神田1丁目',
                scenes: ['关键剧情', '时间线'],
                images: ['manseibashi_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR秋叶原站步行5分钟'
                }
            }
        ]
    },

    // 路人超能100
    'mob_psycho_100': {
        id: 'mob_psycho_100',
        title: '路人超能100',
        titleEn: 'Mob Psycho 100',
        year: 2016,
        director: '立川让',
        description: '拥有强大超能力的中学生成长故事',
        poster: 'https://example.com/mob_psycho_poster.jpg',
        locations: [
            {
                id: 'chofu_city',
                name: '调布市',
                nameEn: 'Chofu City',
                description: '茂夫居住的城市原型',
                longitude: 139.5428,
                latitude: 35.6517,
                address: '东京都调布市',
                scenes: ['日常生活', '超能力'],
                images: ['chofu_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '京王线调布站'
                }
            },
            {
                id: 'chofu_school',
                name: '调布市立第三中学校',
                nameEn: 'Chofu Municipal 3rd Junior High School',
                description: '茂夫就读的盐中学校原型',
                longitude: 139.5401,
                latitude: 35.6489,
                address: '东京都调布市染地2-25-6',
                scenes: ['学校生活', '超能力部'],
                images: ['chofu_school_1.jpg'],
                visitInfo: {
                    openTime: '学校时间',
                    admission: '外部参观免费',
                    transportation: '京王线调布站步行15分钟'
                }
            },
            {
                id: 'tamagawa_riverbank',
                name: '多摩川河岸',
                nameEn: 'Tamagawa Riverbank',
                description: '茂夫经常跑步锻炼的地方',
                longitude: 139.5378,
                latitude: 35.6456,
                address: '东京都调布市多摩川沿岸',
                scenes: ['锻炼场景', '河岸风光'],
                images: ['tamagawa_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '京王线调布站步行10分钟'
                }
            }
        ]
    },

    // 一拳超人
    'one_punch_man': {
        id: 'one_punch_man',
        title: '一拳超人',
        titleEn: 'One Punch Man',
        year: 2015,
        director: '夏目真悟',
        description: '能够一拳击败任何敌人的英雄故事',
        poster: 'https://example.com/one_punch_man_poster.jpg',
        locations: [
            {
                id: 'saitama_city',
                name: '埼玉市',
                nameEn: 'Saitama City',
                description: 'Z市的原型，埼玉居住的城市',
                longitude: 139.6455,
                latitude: 35.8617,
                address: '埼玉县埼玉市',
                scenes: ['英雄活动', '日常生活'],
                images: ['saitama_city_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR京浜东北线大宫站'
                }
            },
            {
                id: 'saitama_arena',
                name: '埼玉超级竞技场',
                nameEn: 'Saitama Super Arena',
                description: '英雄协会总部的参考建筑',
                longitude: 139.6306,
                latitude: 35.8944,
                address: '埼玉县埼玉市中央区新都心8',
                scenes: ['英雄协会', '大型活动'],
                images: ['saitama_arena_1.jpg'],
                visitInfo: {
                    openTime: '根据活动安排',
                    admission: '根据活动而定',
                    transportation: 'JR京浜东北线与宇都宫线大宫站步行3分钟'
                }
            },
            {
                id: 'omiya_park',
                name: '大宫公园',
                nameEn: 'Omiya Park',
                description: '埼玉进行训练的公园场景',
                longitude: 139.6289,
                latitude: 35.9067,
                address: '埼玉县埼玉市大宫区高鼻町4',
                scenes: ['训练场景', '公园'],
                images: ['omiya_park_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR东北本线大宫站步行20分钟'
                }
            }
        ]
    },

    // 我的英雄学院
    'my_hero_academia': {
        id: 'my_hero_academia',
        title: '我的英雄学院',
        titleEn: 'My Hero Academia',
        year: 2016,
        director: '长崎健司',
        description: '超能力社会中少年成为英雄的故事',
        poster: 'https://example.com/my_hero_academia_poster.jpg',
        locations: [
            {
                id: 'ua_high_school',
                name: '雄英高校',
                nameEn: 'U.A. High School',
                description: '英雄培训学校（原型：早稻田大学）',
                longitude: 139.7195,
                latitude: 35.7089,
                address: '东京都新宿区户塚町1-104',
                scenes: ['学校生活', '英雄训练'],
                images: ['waseda_university_1.jpg'],
                visitInfo: {
                    openTime: '校园开放时间',
                    admission: '免费参观',
                    transportation: 'JR山手线高田马场站步行20分钟'
                }
            },
            {
                id: 'musutafu_city',
                name: '无数府市',
                nameEn: 'Musutafu City',
                description: '主角居住的城市（原型：横滨）',
                longitude: 139.6380,
                latitude: 35.4437,
                address: '神奈川县横滨市',
                scenes: ['都市场景', '英雄活动'],
                images: ['yokohama_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR东海道线横滨站'
                }
            },
            {
                id: 'dagoba_beach',
                name: '垃圾海滩',
                nameEn: 'Dagoba Beach',
                description: '绿谷出久训练的海滩（原型：台场海滨公园）',
                longitude: 139.7762,
                latitude: 35.6297,
                address: '东京都港区台场1丁目',
                scenes: ['训练场景', '海滨'],
                images: ['odaiba_beach_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'ゆりかもめ台场海滨公园站步行3分钟'
                }
            }
        ]
    },

    // 鬼灭之刃（补充更多地点）
    'demon_slayer_extended': {
        id: 'demon_slayer_extended',
        title: '鬼灭之刃（扩展版）',
        titleEn: 'Demon Slayer Extended',
        year: 2019,
        director: '外崎春雄',
        description: '大正时代的鬼杀队故事（更多地点）',
        poster: 'https://example.com/demon_slayer_poster.jpg',
        locations: [
            {
                id: 'asakusa_district',
                name: '浅草',
                nameEn: 'Asakusa District',
                description: '炭治郎在东京的活动场所',
                longitude: 139.7967,
                latitude: 35.7148,
                address: '东京都台东区浅草',
                scenes: ['大正时代街景', '鬼的出现'],
                images: ['asakusa_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '东京地铁银座线浅草站'
                }
            },
            {
                id: 'yoshiwara_district',
                name: '吉原',
                nameEn: 'Yoshiwara District',
                description: '花街篇的舞台',
                longitude: 139.7889,
                latitude: 35.7267,
                address: '东京都台东区千束',
                scenes: ['花街', '上弦之陆战斗'],
                images: ['yoshiwara_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '东京地铁日比谷线三之轮站步行15分钟'
                }
            },
            {
                id: 'mount_natagumo',
                name: '那田蜘蛛山',
                nameEn: 'Mount Natagumo',
                description: '蜘蛛鬼家族的居住地（原型：奥多摩）',
                longitude: 139.0167,
                latitude: 35.8000,
                address: '东京都西多摩郡奥多摩町',
                scenes: ['森林战斗', '蜘蛛鬼'],
                images: ['okutama_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR青梅线奥多摩站'
                }
            }
        ]
     },

    // 死神
    'bleach': {
        id: 'bleach',
        title: '死神',
        titleEn: 'Bleach',
        year: 2004,
        director: '阿部记之',
        description: '死神代理黑崎一护的冒险故事',
        poster: 'https://example.com/bleach_poster.jpg',
        locations: [
            {
                id: 'karakura_town',
                name: '空座町',
                nameEn: 'Karakura Town',
                description: '一护居住的城市（原型：东京郊区）',
                longitude: 139.6917,
                latitude: 35.6895,
                address: '东京都新宿区',
                scenes: ['日常生活', '虚的出现'],
                images: ['shinjuku_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR山手线新宿站'
                }
            },
            {
                id: 'urahara_shop',
                name: '浦原商店',
                nameEn: 'Urahara Shop',
                description: '浦原喜助的商店（原型：传统杂货店）',
                longitude: 139.7673,
                latitude: 35.7148,
                address: '东京都台东区浅草',
                scenes: ['道具购买', '训练场所'],
                images: ['asakusa_shop_1.jpg'],
                visitInfo: {
                    openTime: '9:00-18:00',
                    admission: '免费参观',
                    transportation: '东京地铁银座线浅草站步行5分钟'
                }
            }
        ]
    },

    // 火影忍者
    'naruto': {
        id: 'naruto',
        title: '火影忍者',
        titleEn: 'Naruto',
        year: 2002,
        director: '伊达勇登',
        description: '忍者鸣人成长为火影的故事',
        poster: 'https://example.com/naruto_poster.jpg',
        locations: [
            {
                id: 'konoha_village',
                name: '木叶村',
                nameEn: 'Konohagakure Village',
                description: '忍者村的原型（原型：奈良公园）',
                longitude: 135.8048,
                latitude: 34.6851,
                address: '奈良县奈良市雑司町',
                scenes: ['忍者村', '火影岩'],
                images: ['nara_park_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR奈良线奈良站步行20分钟'
                }
            },
            {
                id: 'ichiraku_ramen',
                name: '一乐拉面',
                nameEn: 'Ichiraku Ramen',
                description: '鸣人最爱的拉面店（原型：传统拉面店）',
                longitude: 139.7673,
                latitude: 35.6762,
                address: '东京都涩谷区',
                scenes: ['美食场景', '日常聚会'],
                images: ['ramen_shop_1.jpg'],
                visitInfo: {
                    openTime: '11:00-23:00',
                    admission: '消费制',
                    transportation: 'JR山手线涩谷站步行10分钟'
                }
            }
        ]
    },

    // 海贼王
    'one_piece': {
        id: 'one_piece',
        title: '海贼王',
        titleEn: 'One Piece',
        year: 1999,
        director: '宇田钢之助',
        description: '路飞寻找大秘宝的海上冒险',
        poster: 'https://example.com/one_piece_poster.jpg',
        locations: [
            {
                id: 'windmill_village',
                name: '风车村',
                nameEn: 'Windmill Village',
                description: '路飞的故乡（原型：千叶县房总半島）',
                longitude: 140.0167,
                latitude: 35.2000,
                address: '千叶县南房总市',
                scenes: ['故乡', '童年回忆'],
                images: ['boso_peninsula_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR内房线馆山站转巴士'
                }
            },
            {
                id: 'marine_headquarters',
                name: '海军本部',
                nameEn: 'Marine Headquarters',
                description: '海军总部（原型：东京湾）',
                longitude: 139.7762,
                latitude: 35.6297,
                address: '东京都港区台场',
                scenes: ['海军基地', '大战场景'],
                images: ['tokyo_bay_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'ゆりかもめ台场站'
                }
            }
        ]
    },

    // 龙珠
    'dragon_ball': {
        id: 'dragon_ball',
        title: '龙珠',
        titleEn: 'Dragon Ball',
        year: 1986,
        director: '西尾大介',
        description: '孙悟空收集龙珠的冒险故事',
        poster: 'https://example.com/dragon_ball_poster.jpg',
        locations: [
            {
                id: 'kame_house',
                name: '龟仙屋',
                nameEn: 'Kame House',
                description: '龟仙人的家（原型：江之岛）',
                longitude: 139.4786,
                latitude: 35.2922,
                address: '神奈川县藤泽市江之岛',
                scenes: ['修行场所', '海岛生活'],
                images: ['enoshima_house_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '江之电江之岛站步行10分钟'
                }
            },
            {
                id: 'capsule_corp',
                name: '胶囊公司',
                nameEn: 'Capsule Corporation',
                description: '布尔玛家的公司（原型：东京塔周边）',
                longitude: 139.7454,
                latitude: 35.6586,
                address: '东京都港区芝公园',
                scenes: ['科技公司', '未来都市'],
                images: ['tokyo_tower_area_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '都营大江户线赤羽桥站步行5分钟'
                }
            }
        ]
    },

    // 银魂
    'gintama': {
        id: 'gintama',
        title: '银魂',
        titleEn: 'Gintama',
        year: 2006,
        director: '高松信司',
        description: '江户时代的搞笑武士故事',
        poster: 'https://example.com/gintama_poster.jpg',
        locations: [
            {
                id: 'kabukicho',
                name: '歌舞伎町',
                nameEn: 'Kabukicho',
                description: '银时活动的繁华街区',
                longitude: 139.7036,
                latitude: 35.6938,
                address: '东京都新宿区歌舞伎町',
                scenes: ['繁华街', '夜生活'],
                images: ['kabukicho_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR山手线新宿站东口步行5分钟'
                }
            },
            {
                id: 'yorozuya_office',
                name: '万事屋',
                nameEn: 'Yorozuya Office',
                description: '银时的万事屋事务所',
                longitude: 139.6917,
                latitude: 35.6895,
                address: '东京都新宿区',
                scenes: ['事务所', '日常工作'],
                images: ['old_building_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR山手线新宿站步行10分钟'
                }
            }
        ]
    },

    // 全职猎人
    'hunter_x_hunter': {
        id: 'hunter_x_hunter',
        title: '全职猎人',
        titleEn: 'Hunter x Hunter',
        year: 2011,
        director: '神志那弘志',
        description: '小杰寻找父亲的冒险故事',
        poster: 'https://example.com/hunter_x_hunter_poster.jpg',
        locations: [
            {
                id: 'whale_island',
                name: '鲸鱼岛',
                nameEn: 'Whale Island',
                description: '小杰的故乡（原型：伊豆大岛）',
                longitude: 139.3897,
                latitude: 34.7500,
                address: '东京都大岛町',
                scenes: ['故乡', '自然环境'],
                images: ['izu_oshima_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '从竹芝客船码头乘船'
                }
            },
            {
                id: 'hunter_exam_site',
                name: '猎人考试会场',
                nameEn: 'Hunter Exam Site',
                description: '猎人考试的会场（原型：东京国际展示场）',
                longitude: 139.7946,
                latitude: 35.6298,
                address: '东京都江东区有明',
                scenes: ['考试会场', '竞技场'],
                images: ['tokyo_big_sight_1.jpg'],
                visitInfo: {
                    openTime: '根据展览安排',
                    admission: '根据活动而定',
                    transportation: 'ゆりかもめ国际展示场正门站'
                }
            }
        ]
    },

    // 犬夜叉
    'inuyasha': {
        id: 'inuyasha',
        title: '犬夜叉',
        titleEn: 'Inuyasha',
        year: 2000,
        director: '池田成',
        description: '战国时代的半妖冒险故事',
        poster: 'https://example.com/inuyasha_poster.jpg',
        locations: [
            {
                id: 'higurashi_shrine',
                name: '日暮神社',
                nameEn: 'Higurashi Shrine',
                description: '戈薇家的神社（原型：明治神宫）',
                longitude: 139.6993,
                latitude: 35.6762,
                address: '东京都涩谷区代代木神园町1-1',
                scenes: ['神社', '时空穿越'],
                images: ['meiji_shrine_2.jpg'],
                visitInfo: {
                    openTime: '日出至日落',
                    admission: '免费',
                    transportation: 'JR山手线原宿站步行1分钟'
                }
            },
            {
                id: 'sengoku_village',
                name: '战国村落',
                nameEn: 'Sengoku Village',
                description: '战国时代的村落（原型：白川乡）',
                longitude: 136.9066,
                latitude: 36.2583,
                address: '岐阜县大野郡白川村',
                scenes: ['古代村落', '战国时代'],
                images: ['shirakawago_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '从高山站乘巴士'
                }
            }
        ]
    },

    // 幽游白书
    'yu_yu_hakusho': {
        id: 'yu_yu_hakusho',
        title: '幽游白书',
        titleEn: 'Yu Yu Hakusho',
        year: 1992,
        director: '阿部纪之',
        description: '灵界侦探浦饭幽助的故事',
        poster: 'https://example.com/yu_yu_hakusho_poster.jpg',
        locations: [
            {
                id: 'sarayashiki_junior_high',
                name: '皿屋敷中学',
                nameEn: 'Sarayashiki Junior High',
                description: '幽助就读的中学（原型：东京某中学）',
                longitude: 139.6917,
                latitude: 35.6895,
                address: '东京都新宿区',
                scenes: ['学校生活', '不良少年'],
                images: ['tokyo_school_1.jpg'],
                visitInfo: {
                    openTime: '学校时间',
                    admission: '外部参观免费',
                    transportation: 'JR山手线新宿站步行15分钟'
                }
            },
            {
                id: 'spirit_world_gate',
                name: '灵界之门',
                nameEn: 'Spirit World Gate',
                description: '通往灵界的入口（原型：神社鸟居）',
                longitude: 139.7454,
                latitude: 35.6586,
                address: '东京都港区',
                scenes: ['灵界入口', '超自然'],
                images: ['shrine_gate_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '都营大江户线赤羽桥站步行10分钟'
                }
            }
        ]
    },

    // 钢之炼金术师
    'fullmetal_alchemist': {
        id: 'fullmetal_alchemist',
        title: '钢之炼金术师',
        titleEn: 'Fullmetal Alchemist',
        year: 2003,
        director: '水岛精二',
        description: '炼金术师兄弟的冒险故事',
        poster: 'https://example.com/fullmetal_alchemist_poster.jpg',
        locations: [
            {
                id: 'central_city',
                name: '中央市',
                nameEn: 'Central City',
                description: '亚美斯多利斯的首都（原型：东京站周边）',
                longitude: 139.7673,
                latitude: 35.6812,
                address: '东京都千代田区丸之内',
                scenes: ['政府机关', '都市场景'],
                images: ['marunouchi_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR山手线东京站'
                }
            },
            {
                id: 'resembool',
                name: 'Resembool村',
                nameEn: 'Resembool Village',
                description: '爱德华和阿尔的故乡（原型：农村地区）',
                longitude: 139.0167,
                latitude: 35.8000,
                address: '东京都西多摩郡',
                scenes: ['乡村', '童年回忆'],
                images: ['countryside_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR青梅线终点站转巴士'
                }
            }
        ]
     },

    // 美少女战士
    'sailor_moon': {
        id: 'sailor_moon',
        title: '美少女战士',
        titleEn: 'Sailor Moon',
        year: 1992,
        director: '佐藤顺一',
        description: '月野兔变身美少女战士的故事',
        poster: 'https://example.com/sailor_moon_poster.jpg',
        locations: [
            {
                id: 'azabu_juban',
                name: '麻布十番',
                nameEn: 'Azabu-Juban',
                description: '月野兔居住的街区',
                longitude: 139.7378,
                latitude: 35.6565,
                address: '东京都港区麻布十番',
                scenes: ['日常生活', '变身场景'],
                images: ['azabu_juban_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '东京地铁南北线麻布十番站'
                }
            },
            {
                id: 'tokyo_tower_sailor',
                name: '东京塔',
                nameEn: 'Tokyo Tower',
                description: '战斗场景的重要地标',
                longitude: 139.7454,
                latitude: 35.6586,
                address: '东京都港区芝公园4-2-8',
                scenes: ['最终决战', '地标'],
                images: ['tokyo_tower_2.jpg'],
                visitInfo: {
                    openTime: '9:00-23:00',
                    admission: '1200日元',
                    transportation: '都营大江户线赤羽桥站步行5分钟'
                }
            }
        ]
    },

    // 数码宝贝
    'digimon': {
        id: 'digimon',
        title: '数码宝贝',
        titleEn: 'Digimon Adventure',
        year: 1999,
        director: '角铜博之',
        description: '孩子们与数码宝贝的冒险',
        poster: 'https://example.com/digimon_poster.jpg',
        locations: [
            {
                id: 'odaiba_digimon',
                name: '台场',
                nameEn: 'Odaiba',
                description: '数码世界的入口',
                longitude: 139.7762,
                latitude: 35.6297,
                address: '东京都港区台场',
                scenes: ['数码世界入口', '现实世界'],
                images: ['odaiba_digimon_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'ゆりかもめ台场站'
                }
            },
            {
                id: 'rainbow_bridge',
                name: '彩虹大桥',
                nameEn: 'Rainbow Bridge',
                description: '重要的战斗场景',
                longitude: 139.7636,
                latitude: 35.6339,
                address: '东京都港区台场',
                scenes: ['桥梁战斗', '城市景观'],
                images: ['rainbow_bridge_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'ゆりかもめ台场海滨公园站'
                }
            }
        ]
    },

    // 机动战士高达
    'mobile_suit_gundam': {
        id: 'mobile_suit_gundam',
        title: '机动战士高达',
        titleEn: 'Mobile Suit Gundam',
        year: 1979,
        director: '富野由悠季',
        description: '宇宙世纪的机动战士故事',
        poster: 'https://example.com/gundam_poster.jpg',
        locations: [
            {
                id: 'gundam_base_tokyo',
                name: '高达基地东京',
                nameEn: 'Gundam Base Tokyo',
                description: '高达模型的圣地',
                longitude: 139.7762,
                latitude: 35.6297,
                address: '东京都港区台场1-1-2',
                scenes: ['高达展示', '模型制作'],
                images: ['gundam_base_1.jpg'],
                visitInfo: {
                    openTime: '10:00-21:00',
                    admission: '免费',
                    transportation: 'ゆりかもめ台场站步行5分钟'
                }
            },
            {
                id: 'space_colony',
                name: '宇宙殖民地',
                nameEn: 'Space Colony',
                description: '未来都市的原型（原型：未来科学馆）',
                longitude: 139.7762,
                latitude: 35.6190,
                address: '东京都江东区青海2-3-6',
                scenes: ['宇宙殖民地', '未来科技'],
                images: ['miraikan_1.jpg'],
                visitInfo: {
                    openTime: '10:00-17:00',
                    admission: '630日元',
                    transportation: 'ゆりかもめ船之科学馆站步行5分钟'
                }
            }
        ]
    },

    // 新世纪福音战士
    'evangelion': {
        id: 'evangelion',
        title: '新世纪福音战士',
        titleEn: 'Neon Genesis Evangelion',
        year: 1995,
        director: '庵野秀明',
        description: '少年驾驶EVA对抗使徒的故事',
        poster: 'https://example.com/evangelion_poster.jpg',
        locations: [
            {
                id: 'third_tokyo_city',
                name: '第三新东京市',
                nameEn: 'Third Tokyo City',
                description: 'NERV总部所在地（原型：箱根）',
                longitude: 139.0235,
                latitude: 35.2322,
                address: '神奈川县足柄下郡箱根町',
                scenes: ['NERV总部', '使徒战斗'],
                images: ['hakone_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '小田急线箱根汤本站'
                }
            },
            {
                id: 'nerv_headquarters',
                name: 'NERV总部',
                nameEn: 'NERV Headquarters',
                description: '地下要塞（原型：地下设施）',
                longitude: 139.7673,
                latitude: 35.6812,
                address: '东京都千代田区',
                scenes: ['指挥中心', '地下基地'],
                images: ['underground_facility_1.jpg'],
                visitInfo: {
                    openTime: '参观需预约',
                    admission: '根据设施而定',
                    transportation: 'JR山手线东京站'
                }
            }
        ]
    },

    // 攻壳机动队
    'ghost_in_the_shell': {
        id: 'ghost_in_the_shell',
        title: '攻壳机动队',
        titleEn: 'Ghost in the Shell',
        year: 1995,
        director: '押井守',
        description: '赛博朋克世界的公安故事',
        poster: 'https://example.com/ghost_in_the_shell_poster.jpg',
        locations: [
            {
                id: 'new_port_city',
                name: '新港市',
                nameEn: 'New Port City',
                description: '未来都市（原型：横滨港未来）',
                longitude: 139.6394,
                latitude: 35.4560,
                address: '神奈川县横滨市西区港未来',
                scenes: ['未来都市', '赛博朋克'],
                images: ['yokohama_future_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR根岸线樱木町站步行5分钟'
                }
            },
            {
                id: 'section9_hq',
                name: '公安9课总部',
                nameEn: 'Section 9 Headquarters',
                description: '特殊部队总部（原型：现代办公楼）',
                longitude: 139.7673,
                latitude: 35.6812,
                address: '东京都千代田区',
                scenes: ['政府机关', '高科技'],
                images: ['modern_office_1.jpg'],
                visitInfo: {
                    openTime: '办公时间',
                    admission: '外部参观免费',
                    transportation: 'JR山手线东京站步行5分钟'
                }
            }
        ]
    },

    // 阿基拉
    'akira': {
        id: 'akira',
        title: '阿基拉',
        titleEn: 'Akira',
        year: 1988,
        director: '大友克洋',
        description: '末世东京的超能力故事',
        poster: 'https://example.com/akira_poster.jpg',
        locations: [
            {
                id: 'neo_tokyo',
                name: '新东京',
                nameEn: 'Neo Tokyo',
                description: '2019年的东京（原型：新宿）',
                longitude: 139.7036,
                latitude: 35.6938,
                address: '东京都新宿区',
                scenes: ['末世都市', '暴走族'],
                images: ['neo_tokyo_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR山手线新宿站'
                }
            },
            {
                id: 'olympic_stadium_akira',
                name: '奥林匹克体育场',
                nameEn: 'Olympic Stadium',
                description: '重要剧情发生地',
                longitude: 139.7149,
                latitude: 35.6778,
                address: '东京都新宿区霞丘町10-1',
                scenes: ['体育场', '最终决战'],
                images: ['olympic_stadium_1.jpg'],
                visitInfo: {
                    openTime: '根据活动安排',
                    admission: '根据活动而定',
                    transportation: 'JR中央线信濃町站步行5分钟'
                }
            }
        ]
    },

    // 城市猎人
    'city_hunter': {
        id: 'city_hunter',
        title: '城市猎人',
        titleEn: 'City Hunter',
        year: 1987,
        director: '児玉兼嗣',
        description: '新宿的清道夫冴羽獠的故事',
        poster: 'https://example.com/city_hunter_poster.jpg',
        locations: [
            {
                id: 'shinjuku_city_hunter',
                name: '新宿',
                nameEn: 'Shinjuku',
                description: '冴羽獠活动的主要舞台',
                longitude: 139.7036,
                latitude: 35.6938,
                address: '东京都新宿区',
                scenes: ['都市猎人', '夜生活'],
                images: ['shinjuku_night_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR山手线新宿站'
                }
            },
            {
                id: 'cat_cafe',
                name: '猫眼咖啡厅',
                nameEn: 'Cat Cafe',
                description: '冴羽獠的据点',
                longitude: 139.7036,
                latitude: 35.6938,
                address: '东京都新宿区歌舞伎町',
                scenes: ['咖啡厅', '据点'],
                images: ['cat_cafe_1.jpg'],
                visitInfo: {
                    openTime: '10:00-22:00',
                    admission: '消费制',
                    transportation: 'JR山手线新宿站东口步行5分钟'
                }
            }
        ]
    },

    // 北斗神拳
    'fist_of_the_north_star': {
        id: 'fist_of_the_north_star',
        title: '北斗神拳',
        titleEn: 'Fist of the North Star',
        year: 1984,
        director: '芦田豊雄',
        description: '末世废土的格斗故事',
        poster: 'https://example.com/fist_of_the_north_star_poster.jpg',
        locations: [
            {
                id: 'wasteland_tokyo',
                name: '废土东京',
                nameEn: 'Wasteland Tokyo',
                description: '核战后的东京（原型：工业区）',
                longitude: 139.7762,
                latitude: 35.6297,
                address: '东京都江东区',
                scenes: ['废土', '末世'],
                images: ['industrial_area_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'ゆりかもめ线各站'
                }
            },
            {
                id: 'southern_cross',
                name: '南十字星',
                nameEn: 'Southern Cross',
                description: '重要城市据点',
                longitude: 139.6917,
                latitude: 35.6895,
                address: '东京都新宿区',
                scenes: ['城市据点', '战斗'],
                images: ['urban_fortress_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR山手线新宿站'
                }
            }
        ]
    },

    // 圣斗士星矢
    'saint_seiya': {
        id: 'saint_seiya',
        title: '圣斗士星矢',
        titleEn: 'Saint Seiya',
        year: 1986,
        director: '森下孝三',
        description: '守护雅典娜的圣斗士故事',
        poster: 'https://example.com/saint_seiya_poster.jpg',
        locations: [
            {
                id: 'sanctuary',
                name: '圣域',
                nameEn: 'Sanctuary',
                description: '雅典娜的圣域（原型：希腊神庙）',
                longitude: 139.7454,
                latitude: 35.6586,
                address: '东京都港区',
                scenes: ['圣域', '十二宫'],
                images: ['greek_temple_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '都营大江户线赤羽桥站'
                }
            },
            {
                id: 'kido_mansion',
                name: '城户宅邸',
                nameEn: 'Kido Mansion',
                description: '星矢等人的训练场所',
                longitude: 139.7378,
                latitude: 35.6565,
                address: '东京都港区',
                scenes: ['豪宅', '训练'],
                images: ['luxury_mansion_1.jpg'],
                visitInfo: {
                    openTime: '外部参观',
                    admission: '免费',
                    transportation: '东京地铁南北线麻布十番站'
                }
            }
        ]
    },

    // 足球小将
    'captain_tsubasa': {
        id: 'captain_tsubasa',
        title: '足球小将',
        titleEn: 'Captain Tsubasa',
        year: 1983,
        director: '西沢信孝',
        description: '大空翼的足球梦想',
        poster: 'https://example.com/captain_tsubasa_poster.jpg',
        locations: [
            {
                id: 'nankatsu_elementary',
                name: '南葛小学',
                nameEn: 'Nankatsu Elementary School',
                description: '大空翼的母校（原型：东京某小学）',
                longitude: 139.6917,
                latitude: 35.6895,
                address: '东京都葛饰区',
                scenes: ['学校', '足球场'],
                images: ['elementary_school_1.jpg'],
                visitInfo: {
                    openTime: '学校时间',
                    admission: '外部参观免费',
                    transportation: 'JR常磐线金町站'
                }
            },
            {
                id: 'national_stadium_tsubasa',
                name: '国立竞技场',
                nameEn: 'National Stadium',
                description: '全国大赛的舞台',
                longitude: 139.7149,
                latitude: 35.6778,
                address: '东京都新宿区霞丘町10-1',
                scenes: ['足球比赛', '全国大赛'],
                images: ['national_stadium_1.jpg'],
                visitInfo: {
                    openTime: '根据活动安排',
                    admission: '根据活动而定',
                    transportation: 'JR中央线信濃町站步行5分钟'
                }
            }
        ]
     },

    // 灌篮高手
    'slam_dunk': {
        id: 'slam_dunk',
        title: '灌篮高手',
        titleEn: 'Slam Dunk',
        year: 1993,
        director: '西沢信孝',
        description: '樱木花道的篮球青春',
        poster: 'https://example.com/slam_dunk_poster.jpg',
        locations: [
            {
                id: 'shohoku_high_school',
                name: '湘北高中',
                nameEn: 'Shohoku High School',
                description: '樱木花道就读的学校',
                longitude: 139.6917,
                latitude: 35.6895,
                address: '神奈川县镰仓市',
                scenes: ['学校', '篮球场'],
                images: ['shohoku_high_1.jpg'],
                visitInfo: {
                    openTime: '学校时间',
                    admission: '外部参观免费',
                    transportation: 'JR东海道线镰仓站'
                }
            },
            {
                id: 'kanagawa_prefecture_gym',
                name: '神奈川县体育馆',
                nameEn: 'Kanagawa Prefecture Gymnasium',
                description: '县大赛的比赛场地',
                longitude: 139.6394,
                latitude: 35.4560,
                address: '神奈川县横滨市',
                scenes: ['篮球比赛', '县大赛'],
                images: ['kanagawa_gym_1.jpg'],
                visitInfo: {
                    openTime: '根据活动安排',
                    admission: '根据活动而定',
                    transportation: 'JR根岸线樱木町站'
                }
            }
        ]
    },

    // 棒球英豪
    'touch': {
        id: 'touch',
        title: '棒球英豪',
        titleEn: 'Touch',
        year: 1985,
        director: '杉井ギサブロー',
        description: '上杉达也的棒球青春',
        poster: 'https://example.com/touch_poster.jpg',
        locations: [
            {
                id: 'meisei_high_school',
                name: '明青学园',
                nameEn: 'Meisei High School',
                description: '上杉兄弟就读的学校',
                longitude: 139.6917,
                latitude: 35.6895,
                address: '东京都练马区',
                scenes: ['学校', '棒球场'],
                images: ['meisei_high_1.jpg'],
                visitInfo: {
                    openTime: '学校时间',
                    admission: '外部参观免费',
                    transportation: '西武池袋线练马站'
                }
            },
            {
                id: 'koshien_stadium',
                name: '甲子园球场',
                nameEn: 'Koshien Stadium',
                description: '全国高中棒球大赛圣地',
                longitude: 135.3611,
                latitude: 34.7214,
                address: '兵库县西宫市甲子园町',
                scenes: ['棒球比赛', '甲子园'],
                images: ['koshien_1.jpg'],
                visitInfo: {
                    openTime: '根据比赛安排',
                    admission: '根据比赛而定',
                    transportation: '阪神本线甲子园站'
                }
            }
        ]
    },

    // 网球王子
    'prince_of_tennis': {
        id: 'prince_of_tennis',
        title: '网球王子',
        titleEn: 'The Prince of Tennis',
        year: 2001,
        director: '多田俊介',
        description: '越前龙马的网球传奇',
        poster: 'https://example.com/prince_of_tennis_poster.jpg',
        locations: [
            {
                id: 'seigaku_tennis_court',
                name: '青春学园网球场',
                nameEn: 'Seigaku Tennis Court',
                description: '青学网球部的训练场地',
                longitude: 139.7673,
                latitude: 35.6812,
                address: '东京都世田谷区',
                scenes: ['网球训练', '比赛'],
                images: ['seigaku_court_1.jpg'],
                visitInfo: {
                    openTime: '学校时间',
                    admission: '外部参观免费',
                    transportation: '小田急线成城学园前站'
                }
            },
            {
                id: 'tokyo_metropolitan_gym',
                name: '东京体育馆',
                nameEn: 'Tokyo Metropolitan Gymnasium',
                description: '关东大赛会场',
                longitude: 139.7149,
                latitude: 35.6778,
                address: '东京都渋谷区千駄ヶ谷',
                scenes: ['网球比赛', '关东大赛'],
                images: ['tokyo_gym_1.jpg'],
                visitInfo: {
                    openTime: '根据活动安排',
                    admission: '根据活动而定',
                    transportation: 'JR中央线信濃町站步行5分钟'
                }
            }
        ]
    },

    // 头文字D
    'initial_d': {
        id: 'initial_d',
        title: '头文字D',
        titleEn: 'Initial D',
        year: 1998,
        director: '三沢伸',
        description: '藤原拓海的山道赛车',
        poster: 'https://example.com/initial_d_poster.jpg',
        locations: [
            {
                id: 'mount_akina',
                name: '秋名山',
                nameEn: 'Mount Akina',
                description: '拓海练习漂移的山道',
                longitude: 138.9167,
                latitude: 36.4667,
                address: '群马县前橋市',
                scenes: ['山道赛车', '漂移'],
                images: ['mount_akina_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '自驾前往'
                }
            },
            {
                id: 'fujiwara_tofu_shop',
                name: '藤原豆腐店',
                nameEn: 'Fujiwara Tofu Shop',
                description: '拓海家的豆腐店',
                longitude: 138.9167,
                latitude: 36.4667,
                address: '群马县前橋市',
                scenes: ['豆腐店', '日常生活'],
                images: ['tofu_shop_1.jpg'],
                visitInfo: {
                    openTime: '营业时间',
                    admission: '消费制',
                    transportation: '自驾前往'
                }
            }
        ]
    },

    // 棋魂
    'hikaru_no_go': {
        id: 'hikaru_no_go',
        title: '棋魂',
        titleEn: 'Hikaru no Go',
        year: 2001,
        director: '西澤信孝',
        description: '进藤光的围棋之路',
        poster: 'https://example.com/hikaru_no_go_poster.jpg',
        locations: [
            {
                id: 'go_salon',
                name: '围棋沙龙',
                nameEn: 'Go Salon',
                description: '光经常下棋的地方',
                longitude: 139.7673,
                latitude: 35.6812,
                address: '东京都千代田区',
                scenes: ['围棋对弈', '学习'],
                images: ['go_salon_1.jpg'],
                visitInfo: {
                    openTime: '10:00-22:00',
                    admission: '会员制',
                    transportation: 'JR山手线东京站'
                }
            },
            {
                id: 'nihon_kiin',
                name: '日本棋院',
                nameEn: 'Nihon Ki-in',
                description: '职业围棋的圣地',
                longitude: 139.7378,
                latitude: 35.6565,
                address: '东京都千代田区五番町7-2',
                scenes: ['职业比赛', '围棋殿堂'],
                images: ['nihon_kiin_1.jpg'],
                visitInfo: {
                    openTime: '9:00-17:00',
                    admission: '参观需预约',
                    transportation: '东京地铁半蔵门线半蔵门站'
                }
            }
        ]
    },

    // 食戟之灵
    'shokugeki_no_soma': {
        id: 'shokugeki_no_soma',
        title: '食戟之灵',
        titleEn: 'Shokugeki no Soma',
        year: 2015,
        director: '米たにヨシトモ',
        description: '幸平创真的料理修行',
        poster: 'https://example.com/shokugeki_no_soma_poster.jpg',
        locations: [
            {
                id: 'totsuki_culinary_academy',
                name: '远月茶寮料理学园',
                nameEn: 'Totsuki Culinary Academy',
                description: '顶级料理学校',
                longitude: 139.7673,
                latitude: 35.6812,
                address: '东京都',
                scenes: ['料理学校', '食戟'],
                images: ['totsuki_academy_1.jpg'],
                visitInfo: {
                    openTime: '学校时间',
                    admission: '外部参观免费',
                    transportation: '各线东京站'
                }
            },
            {
                id: 'yukihira_restaurant',
                name: '幸平餐厅',
                nameEn: 'Yukihira Restaurant',
                description: '创真家的定食屋',
                longitude: 139.7036,
                latitude: 35.6938,
                address: '东京都新宿区',
                scenes: ['家庭餐厅', '料理'],
                images: ['yukihira_restaurant_1.jpg'],
                visitInfo: {
                    openTime: '11:00-22:00',
                    admission: '消费制',
                    transportation: 'JR山手线新宿站'
                }
            }
        ]
    },

    // 约会大作战
    'date_a_live': {
        id: 'date_a_live',
        title: '约会大作战',
        titleEn: 'Date A Live',
        year: 2013,
        director: '元永慶太郎',
        description: '五河士道与精灵的约会',
        poster: 'https://example.com/date_a_live_poster.jpg',
        locations: [
            {
                id: 'raizen_high_school',
                name: '来禅高中',
                nameEn: 'Raizen High School',
                description: '士道就读的学校',
                longitude: 139.7673,
                latitude: 35.6812,
                address: '东京都',
                scenes: ['学校', '日常'],
                images: ['raizen_high_1.jpg'],
                visitInfo: {
                    openTime: '学校时间',
                    admission: '外部参观免费',
                    transportation: '各线东京站'
                }
            },
            {
                id: 'tenguu_city',
                name: '天宫市',
                nameEn: 'Tenguu City',
                description: '故事发生的城市',
                longitude: 139.7673,
                latitude: 35.6812,
                address: '东京都',
                scenes: ['城市', '空间震'],
                images: ['tenguu_city_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '各线东京站'
                }
            }
        ]
    },

    // 刀剑神域
    'sword_art_online': {
        id: 'sword_art_online',
        title: '刀剑神域',
        titleEn: 'Sword Art Online',
        year: 2012,
        director: '伊藤智彦',
        description: '桐人在虚拟世界的冒险',
        poster: 'https://example.com/sword_art_online_poster.jpg',
        locations: [
            {
                id: 'aincrad_castle',
                name: '艾恩葛朗特城',
                nameEn: 'Aincrad Castle',
                description: 'SAO的游戏世界（原型：现代建筑）',
                longitude: 139.7673,
                latitude: 35.6812,
                address: '东京都千代田区',
                scenes: ['虚拟世界', '游戏'],
                images: ['modern_building_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR山手线东京站'
                }
            },
            {
                id: 'kirito_home',
                name: '桐人的家',
                nameEn: 'Kirito\'s Home',
                description: '桐人在现实世界的住所',
                longitude: 139.7036,
                latitude: 35.6938,
                address: '东京都',
                scenes: ['现实世界', '日常生活'],
                images: ['apartment_1.jpg'],
                visitInfo: {
                    openTime: '私人住宅',
                    admission: '不对外开放',
                    transportation: 'JR山手线新宿站'
                }
            }
        ]
    },

    // 魔法禁书目录
    'toaru_majutsu_no_index': {
        id: 'toaru_majutsu_no_index',
        title: '魔法禁书目录',
        titleEn: 'A Certain Magical Index',
        year: 2008,
        director: '錦織博',
        description: '上条当麻的学园都市生活',
        poster: 'https://example.com/toaru_majutsu_no_index_poster.jpg',
        locations: [
            {
                id: 'academy_city',
                name: '学园都市',
                nameEn: 'Academy City',
                description: '超能力者的都市（原型：东京）',
                longitude: 139.7673,
                latitude: 35.6812,
                address: '东京都',
                scenes: ['学园都市', '超能力'],
                images: ['academy_city_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '各线东京站'
                }
            },
            {
                id: 'tokiwadai_middle_school',
                name: '常盘台中学',
                nameEn: 'Tokiwadai Middle School',
                description: '御坂美琴就读的名门学校',
                longitude: 139.7378,
                latitude: 35.6565,
                address: '东京都',
                scenes: ['名门学校', '超能力者'],
                images: ['elite_school_1.jpg'],
                visitInfo: {
                    openTime: '学校时间',
                    admission: '外部参观免费',
                    transportation: '东京地铁南北线麻布十番站'
                }
            }
        ]
     },

    // 重装机兵
    'metal_max': {
        id: 'metal_max',
        title: '重装机兵',
        titleEn: 'Metal Max',
        year: 1991,
        director: '高橋良輔',
        description: '末世废土的机甲冒险',
        poster: 'https://example.com/metal_max_poster.jpg',
        locations: [
            {
                id: 'wasteland_garage',
                name: '废土车库',
                nameEn: 'Wasteland Garage',
                description: '机甲维修基地',
                longitude: 139.7762,
                latitude: 35.6297,
                address: '东京都江东区',
                scenes: ['机甲维修', '废土'],
                images: ['wasteland_garage_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'ゆりかもめ线各站'
                }
            }
        ]
    },

    // 机动警察
    'patlabor': {
        id: 'patlabor',
        title: '机动警察',
        titleEn: 'Patlabor',
        year: 1989,
        director: '押井守',
        description: '近未来的机器人警察',
        poster: 'https://example.com/patlabor_poster.jpg',
        locations: [
            {
                id: 'sv2_headquarters',
                name: 'SV2总部',
                nameEn: 'SV2 Headquarters',
                description: '特车二课总部',
                longitude: 139.7762,
                latitude: 35.6297,
                address: '东京都江东区',
                scenes: ['警察总部', '机器人'],
                images: ['sv2_hq_1.jpg'],
                visitInfo: {
                    openTime: '办公时间',
                    admission: '外部参观免费',
                    transportation: 'ゆりかもめ台场站'
                }
            }
        ]
    },

    // 超时空要塞
    'macross': {
        id: 'macross',
        title: '超时空要塞',
        titleEn: 'Macross',
        year: 1982,
        director: '石黒昇',
        description: '宇宙战争与歌声',
        poster: 'https://example.com/macross_poster.jpg',
        locations: [
            {
                id: 'macross_city',
                name: '超时空要塞都市',
                nameEn: 'Macross City',
                description: '要塞内部的都市',
                longitude: 139.7673,
                latitude: 35.6812,
                address: '东京都',
                scenes: ['宇宙要塞', '未来都市'],
                images: ['macross_city_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '各线东京站'
                }
            }
        ]
    },

    // 宇宙战舰大和号
    'space_battleship_yamato': {
        id: 'space_battleship_yamato',
        title: '宇宙战舰大和号',
        titleEn: 'Space Battleship Yamato',
        year: 1974,
        director: '松本零士',
        description: '拯救地球的宇宙之旅',
        poster: 'https://example.com/space_battleship_yamato_poster.jpg',
        locations: [
            {
                id: 'earth_defense_force_hq',
                name: '地球防卫军总部',
                nameEn: 'Earth Defense Force HQ',
                description: '地球防卫的指挥中心',
                longitude: 139.7673,
                latitude: 35.6812,
                address: '东京都千代田区',
                scenes: ['军事基地', '宇宙战争'],
                images: ['defense_hq_1.jpg'],
                visitInfo: {
                    openTime: '参观需预约',
                    admission: '免费',
                    transportation: 'JR山手线东京站'
                }
            }
        ]
    },

    // 银河英雄传说
    'legend_of_galactic_heroes': {
        id: 'legend_of_galactic_heroes',
        title: '银河英雄传说',
        titleEn: 'Legend of the Galactic Heroes',
        year: 1988,
        director: '石黒昇',
        description: '银河系的政治与战争',
        poster: 'https://example.com/legend_of_galactic_heroes_poster.jpg',
        locations: [
            {
                id: 'iserlohn_fortress',
                name: '伊谢尔伦要塞',
                nameEn: 'Iserlohn Fortress',
                description: '银河回廊的要塞（原型：现代建筑）',
                longitude: 139.7673,
                latitude: 35.6812,
                address: '东京都',
                scenes: ['宇宙要塞', '战略据点'],
                images: ['space_fortress_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '各线东京站'
                }
            }
        ]
    },

    // 装甲骑兵
    'armored_trooper_votoms': {
        id: 'armored_trooper_votoms',
        title: '装甲骑兵',
        titleEn: 'Armored Trooper VOTOMS',
        year: 1983,
        director: '高橋良輔',
        description: '基里科的战争故事',
        poster: 'https://example.com/armored_trooper_votoms_poster.jpg',
        locations: [
            {
                id: 'uoodo_city',
                name: '乌欧多市',
                nameEn: 'Uoodo City',
                description: '基里科流浪的都市',
                longitude: 139.7036,
                latitude: 35.6938,
                address: '东京都新宿区',
                scenes: ['未来都市', '机甲战斗'],
                images: ['future_city_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR山手线新宿站'
                }
            }
        ]
    },

    // 太空堡垒
    'robotech': {
        id: 'robotech',
        title: '太空堡垒',
        titleEn: 'Robotech',
        year: 1985,
        director: 'Carl Macek',
        description: '机器人与外星人的战争',
        poster: 'https://example.com/robotech_poster.jpg',
        locations: [
            {
                id: 'sdf1_macross',
                name: 'SDF-1超时空要塞',
                nameEn: 'SDF-1 Macross',
                description: '人类的宇宙战舰',
                longitude: 139.7762,
                latitude: 35.6297,
                address: '东京都江东区',
                scenes: ['宇宙战舰', '机器人'],
                images: ['sdf1_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'ゆりかもめ台场站'
                }
            }
        ]
    },

    // 魔神英雄传
    'mashin_hero_wataru': {
        id: 'mashin_hero_wataru',
        title: '魔神英雄传',
        titleEn: 'Mashin Hero Wataru',
        year: 1988,
        director: '井内秀治',
        description: '战部渡的异世界冒险',
        poster: 'https://example.com/mashin_hero_wataru_poster.jpg',
        locations: [
            {
                id: 'soukaizan',
                name: '创界山',
                nameEn: 'Soukaizan',
                description: '异世界的圣山（原型：富士山）',
                longitude: 138.7274,
                latitude: 35.3606,
                address: '静冈县富士宮市',
                scenes: ['异世界', '圣山'],
                images: ['mount_fuji_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR东海道线富士站'
                }
            }
        ]
    },

    // 勇者王
    'gaogaigar': {
        id: 'gaogaigar',
        title: '勇者王',
        titleEn: 'GaoGaiGar',
        year: 1997,
        director: '米たにヨシトモ',
        description: '凯的勇者机器人',
        poster: 'https://example.com/gaogaigar_poster.jpg',
        locations: [
            {
                id: 'gut_headquarters',
                name: 'GGG总部',
                nameEn: 'GGG Headquarters',
                description: '勇者机器人基地',
                longitude: 139.7673,
                latitude: 35.6812,
                address: '东京都千代田区',
                scenes: ['机器人基地', '勇者'],
                images: ['ggg_hq_1.jpg'],
                visitInfo: {
                    openTime: '参观需预约',
                    admission: '免费',
                    transportation: 'JR山手线东京站'
                }
            }
        ]
    },

    // 变形金刚
    'transformers': {
        id: 'transformers',
        title: '变形金刚',
        titleEn: 'Transformers',
        year: 1985,
        director: '森下孝三',
        description: '汽车人与霸天虎的战争',
        poster: 'https://example.com/transformers_poster.jpg',
        locations: [
            {
                id: 'autobot_base',
                name: '汽车人基地',
                nameEn: 'Autobot Base',
                description: '汽车人的秘密基地',
                longitude: 139.7762,
                latitude: 35.6297,
                address: '东京都江东区',
                scenes: ['机器人基地', '变形'],
                images: ['autobot_base_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'ゆりかもめ台场站'
                }
            }
        ]
    },

    // 魔动王
    'granzort': {
        id: 'granzort',
        title: '魔动王',
        titleEn: 'Granzort',
        year: 1989,
        director: '井内秀治',
        description: '大地的魔动王传说',
        poster: 'https://example.com/granzort_poster.jpg',
        locations: [
            {
                id: 'earth_tear',
                name: '地球之泪',
                nameEn: 'Earth Tear',
                description: '魔动王的力量源泉',
                longitude: 139.7673,
                latitude: 35.6812,
                address: '东京都',
                scenes: ['魔法', '地球之力'],
                images: ['earth_power_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '各线东京站'
                }
            }
        ]
    },

    // 魔法骑士
    'magic_knight_rayearth': {
        id: 'magic_knight_rayearth',
        title: '魔法骑士',
        titleEn: 'Magic Knight Rayearth',
        year: 1994,
        director: '平野俊弘',
        description: '三位少女的异世界冒险',
        poster: 'https://example.com/magic_knight_rayearth_poster.jpg',
        locations: [
            {
                id: 'cephiro_castle',
                name: '塞菲罗城堡',
                nameEn: 'Cephiro Castle',
                description: '异世界的魔法城堡',
                longitude: 139.7454,
                latitude: 35.6586,
                address: '东京都港区',
                scenes: ['魔法城堡', '异世界'],
                images: ['magic_castle_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '都营大江户线赤羽桥站'
                }
            }
        ]
    },

    // 天空之城
    'castle_in_the_sky': {
        id: 'castle_in_the_sky',
        title: '天空之城',
        titleEn: 'Castle in the Sky',
        year: 1986,
        director: '宫崎骏',
        description: '寻找天空之城拉普达',
        poster: 'https://example.com/castle_in_the_sky_poster.jpg',
        locations: [
            {
                id: 'mining_town',
                name: '矿山小镇',
                nameEn: 'Mining Town',
                description: '巴鲁工作的小镇',
                longitude: 139.2394,
                latitude: 35.7606,
                address: '埼玉县秩父市',
                scenes: ['矿山', '小镇'],
                images: ['mining_town_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '秩父铁道秩父站'
                }
            }
        ]
    },

    // 风之谷
    'nausicaa': {
        id: 'nausicaa',
        title: '风之谷',
        titleEn: 'Nausicaä of the Valley of the Wind',
        year: 1984,
        director: '宫崎骏',
        description: '娜乌西卡的环保故事',
        poster: 'https://example.com/nausicaa_poster.jpg',
        locations: [
            {
                id: 'valley_of_wind',
                name: '风之谷',
                nameEn: 'Valley of the Wind',
                description: '娜乌西卡的家乡',
                longitude: 138.7274,
                latitude: 35.3606,
                address: '静冈县富士宮市',
                scenes: ['风车', '自然'],
                images: ['wind_valley_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR东海道线富士站'
                }
            }
        ]
    },

    // 红猪
    'porco_rosso': {
        id: 'porco_rosso',
        title: '红猪',
        titleEn: 'Porco Rosso',
        year: 1992,
        director: '宫崎骏',
        description: '飞行员波鲁克的故事',
        poster: 'https://example.com/porco_rosso_poster.jpg',
        locations: [
            {
                id: 'adriatic_sea',
                name: '亚得里亚海',
                nameEn: 'Adriatic Sea',
                description: '波鲁克飞行的海域（原型：东京湾）',
                longitude: 139.7762,
                latitude: 35.6297,
                address: '东京都江东区',
                scenes: ['飞行', '海洋'],
                images: ['tokyo_bay_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'ゆりかもめ台场海滨公园站'
                }
            }
        ]
    },

    // 魔女宅急便
    'kikis_delivery_service': {
        id: 'kikis_delivery_service',
        title: '魔女宅急便',
        titleEn: 'Kiki\'s Delivery Service',
        year: 1989,
        director: '宫崎骏',
        description: '小魔女琪琪的成长',
        poster: 'https://example.com/kikis_delivery_service_poster.jpg',
        locations: [
            {
                id: 'koriko_town',
                name: '柯里柯镇',
                nameEn: 'Koriko Town',
                description: '琪琪生活的海边小镇',
                longitude: 139.6394,
                latitude: 35.4560,
                address: '神奈川县横滨市',
                scenes: ['海边小镇', '魔女'],
                images: ['seaside_town_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR根岸线樱木町站'
                }
            }
        ]
    },

    // 龙猫
    'totoro': {
        id: 'totoro',
        title: '龙猫',
        titleEn: 'My Neighbor Totoro',
        year: 1988,
        director: '宫崎骏',
        description: '小月和小梅与龙猫的故事',
        poster: 'https://example.com/totoro_poster.jpg',
        locations: [
            {
                id: 'satsuki_house',
                name: '小月的家',
                nameEn: 'Satsuki\'s House',
                description: '姐妹俩的新家',
                longitude: 139.4130,
                latitude: 35.7542,
                address: '埼玉县所沢市',
                scenes: ['乡村', '家庭'],
                images: ['country_house_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '西武新宿线所沢站'
                }
            }
        ]
    },

    // 幽灵公主
    'princess_mononoke': {
        id: 'princess_mononoke',
        title: '幽灵公主',
        titleEn: 'Princess Mononoke',
        year: 1997,
        director: '宫崎骏',
        description: '阿席达卡与桑的环保传说',
        poster: 'https://example.com/princess_mononoke_poster.jpg',
        locations: [
            {
                id: 'iron_town',
                name: '铁镇',
                nameEn: 'Iron Town',
                description: '黑帽大人统治的工业城镇',
                longitude: 139.2394,
                latitude: 35.7606,
                address: '埼玉县秩父市',
                scenes: ['工业城镇', '环保'],
                images: ['industrial_town_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '秩父铁道秩父站'
                }
            }
        ]
    },

    // 哈尔的移动城堡
    'howls_moving_castle': {
        id: 'howls_moving_castle',
        title: '哈尔的移动城堡',
        titleEn: 'Howl\'s Moving Castle',
        year: 2004,
        director: '宫崎骏',
        description: '苏菲与哈尔的魔法故事',
        poster: 'https://example.com/howls_moving_castle_poster.jpg',
        locations: [
            {
                id: 'market_town',
                name: '市场小镇',
                nameEn: 'Market Town',
                description: '苏菲工作的帽子店所在地',
                longitude: 139.7036,
                latitude: 35.6938,
                address: '东京都新宿区',
                scenes: ['市场', '帽子店'],
                images: ['market_town_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR山手线新宿站'
                }
            }
        ]
     },

    // 起风了
    'the_wind_rises': {
        id: 'the_wind_rises',
        title: '起风了',
        titleEn: 'The Wind Rises',
        year: 2013,
        director: '宫崎骏',
        description: '堀越二郎的飞机设计梦想',
        poster: 'https://example.com/the_wind_rises_poster.jpg',
        locations: [
            {
                id: 'mitsubishi_aircraft_factory',
                name: '三菱飞机工厂',
                nameEn: 'Mitsubishi Aircraft Factory',
                description: '二郎工作的飞机制造厂',
                longitude: 139.7673,
                latitude: 35.6812,
                address: '东京都',
                scenes: ['飞机工厂', '设计'],
                images: ['aircraft_factory_1.jpg'],
                visitInfo: {
                    openTime: '工厂参观需预约',
                    admission: '免费',
                    transportation: '各线东京站'
                }
            }
        ]
    },

    // 悬崖上的金鱼姬
    'ponyo': {
        id: 'ponyo',
        title: '悬崖上的金鱼姬',
        titleEn: 'Ponyo',
        year: 2008,
        director: '宫崎骏',
        description: '波妞与宗介的友情',
        poster: 'https://example.com/ponyo_poster.jpg',
        locations: [
            {
                id: 'cliff_house',
                name: '悬崖上的房子',
                nameEn: 'Cliff House',
                description: '宗介的家',
                longitude: 139.6394,
                latitude: 35.4560,
                address: '神奈川县',
                scenes: ['悬崖', '海边'],
                images: ['cliff_house_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR东海道线'
                }
            }
        ]
    },

    // 借东西的小人阿莉埃蒂
    'arrietty': {
        id: 'arrietty',
        title: '借东西的小人阿莉埃蒂',
        titleEn: 'The Secret World of Arrietty',
        year: 2010,
        director: '米林宏昌',
        description: '小人阿莉埃蒂的秘密世界',
        poster: 'https://example.com/arrietty_poster.jpg',
        locations: [
            {
                id: 'old_house',
                name: '古老的房子',
                nameEn: 'Old House',
                description: '小人们居住的房子',
                longitude: 139.4130,
                latitude: 35.7542,
                address: '埼玉县',
                scenes: ['古宅', '小人世界'],
                images: ['old_house_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '西武新宿线'
                }
            }
        ]
    },

    // 来自虞美人之坡
    'from_up_on_poppy_hill': {
        id: 'from_up_on_poppy_hill',
        title: '来自虞美人之坡',
        titleEn: 'From Up on Poppy Hill',
        year: 2011,
        director: '宫崎吾朗',
        description: '昭和时代的青春故事',
        poster: 'https://example.com/from_up_on_poppy_hill_poster.jpg',
        locations: [
            {
                id: 'poppy_hill_house',
                name: '虞美人之坡的房子',
                nameEn: 'Poppy Hill House',
                description: '海的家',
                longitude: 139.6394,
                latitude: 35.4560,
                address: '神奈川县横滨市',
                scenes: ['坡道', '昭和时代'],
                images: ['poppy_hill_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR根岸线'
                }
            }
        ]
    },

    // 辉夜姬物语
    'the_tale_of_princess_kaguya': {
        id: 'the_tale_of_princess_kaguya',
        title: '辉夜姬物语',
        titleEn: 'The Tale of the Princess Kaguya',
        year: 2013,
        director: '高畑勋',
        description: '竹取物语的现代演绎',
        poster: 'https://example.com/the_tale_of_princess_kaguya_poster.jpg',
        locations: [
            {
                id: 'bamboo_forest',
                name: '竹林',
                nameEn: 'Bamboo Forest',
                description: '辉夜姬被发现的竹林',
                longitude: 139.4130,
                latitude: 35.7542,
                address: '埼玉县',
                scenes: ['竹林', '古代'],
                images: ['bamboo_forest_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '西武新宿线'
                }
            }
        ]
    },

    // 回忆中的玛妮
    'when_marnie_was_there': {
        id: 'when_marnie_was_there',
        title: '回忆中的玛妮',
        titleEn: 'When Marnie Was There',
        year: 2014,
        director: '米林宏昌',
        description: '杏奈与玛妮的友情',
        poster: 'https://example.com/when_marnie_was_there_poster.jpg',
        locations: [
            {
                id: 'marsh_house',
                name: '湿地的房子',
                nameEn: 'Marsh House',
                description: '玛妮居住的神秘房子',
                longitude: 139.6394,
                latitude: 35.4560,
                address: '神奈川县',
                scenes: ['湿地', '神秘'],
                images: ['marsh_house_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR东海道线'
                }
            }
        ]
    },

    // 萤火虫之墓
    'grave_of_the_fireflies': {
        id: 'grave_of_the_fireflies',
        title: '萤火虫之墓',
        titleEn: 'Grave of the Fireflies',
        year: 1988,
        director: '高畑勋',
        description: '战争中兄妹的悲剧',
        poster: 'https://example.com/grave_of_the_fireflies_poster.jpg',
        locations: [
            {
                id: 'kobe_station',
                name: '神户车站',
                nameEn: 'Kobe Station',
                description: '清太死去的地方（原型：东京站）',
                longitude: 139.7673,
                latitude: 35.6812,
                address: '东京都千代田区',
                scenes: ['车站', '战争'],
                images: ['tokyo_station_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR山手线东京站'
                }
            }
        ]
    },

    // 岁月的童话
    'only_yesterday': {
        id: 'only_yesterday',
        title: '岁月的童话',
        titleEn: 'Only Yesterday',
        year: 1991,
        director: '高畑勋',
        description: '妙子的回忆之旅',
        poster: 'https://example.com/only_yesterday_poster.jpg',
        locations: [
            {
                id: 'countryside_farm',
                name: '乡村农场',
                nameEn: 'Countryside Farm',
                description: '妙子体验农村生活的地方',
                longitude: 139.4130,
                latitude: 35.7542,
                address: '埼玉县',
                scenes: ['农村', '回忆'],
                images: ['countryside_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '西武新宿线'
                }
            }
        ]
    },

    // 百变狸猫
    'pom_poko': {
        id: 'pom_poko',
        title: '百变狸猫',
        titleEn: 'Pom Poko',
        year: 1994,
        director: '高畑勋',
        description: '狸猫保卫家园的故事',
        poster: 'https://example.com/pom_poko_poster.jpg',
        locations: [
            {
                id: 'tama_hills',
                name: '多摩丘陵',
                nameEn: 'Tama Hills',
                description: '狸猫们的家园',
                longitude: 139.4130,
                latitude: 35.7542,
                address: '东京都多摩市',
                scenes: ['丘陵', '自然'],
                images: ['tama_hills_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '京王线多摩中心站'
                }
            }
        ]
    },

    // 猫的报恩
    'the_cat_returns': {
        id: 'the_cat_returns',
        title: '猫的报恩',
        titleEn: 'The Cat Returns',
        year: 2002,
        director: '森田宏幸',
        description: '小春的猫之国冒险',
        poster: 'https://example.com/the_cat_returns_poster.jpg',
        locations: [
            {
                id: 'cat_kingdom',
                name: '猫之国',
                nameEn: 'Cat Kingdom',
                description: '猫咪们的王国',
                longitude: 139.7673,
                latitude: 35.6812,
                address: '东京都',
                scenes: ['猫之国', '奇幻'],
                images: ['cat_kingdom_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '各线东京站'
                }
            }
        ]
    },

    // 地海战记
    'tales_from_earthsea': {
        id: 'tales_from_earthsea',
        title: '地海战记',
        titleEn: 'Tales from Earthsea',
        year: 2006,
        director: '宫崎吾朗',
        description: '亚刃的奇幻冒险',
        poster: 'https://example.com/tales_from_earthsea_poster.jpg',
        locations: [
            {
                id: 'earthsea_port',
                name: '地海港口',
                nameEn: 'Earthsea Port',
                description: '奇幻世界的港口城市',
                longitude: 139.6394,
                latitude: 35.4560,
                address: '神奈川县横滨市',
                scenes: ['港口', '奇幻'],
                images: ['fantasy_port_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR根岸线樱木町站'
                }
            }
        ]
    },

    // 侧耳倾听
    'whisper_of_the_heart': {
        id: 'whisper_of_the_heart',
        title: '侧耳倾听',
        titleEn: 'Whisper of the Heart',
        year: 1995,
        director: '近藤喜文',
        description: '雯与圣司的青春故事',
        poster: 'https://example.com/whisper_of_the_heart_poster.jpg',
        locations: [
            {
                id: 'seiseki_sakuragaoka',
                name: '圣迹樱丘',
                nameEn: 'Seiseki-Sakuragaoka',
                description: '雯居住的住宅区',
                longitude: 139.4461,
                latitude: 35.6547,
                address: '东京都多摩市',
                scenes: ['住宅区', '青春'],
                images: ['seiseki_sakuragaoka_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: '京王线圣迹樱丘站'
                }
            }
        ]
    },

    // 心之谷
    'the_kingdom_of_dreams_and_madness': {
        id: 'the_kingdom_of_dreams_and_madness',
        title: '心之谷',
        titleEn: 'The Kingdom of Dreams and Madness',
        year: 2013,
        director: '砂田麻美',
        description: '吉卜力工作室纪录片',
        poster: 'https://example.com/the_kingdom_of_dreams_and_madness_poster.jpg',
        locations: [
            {
                id: 'studio_ghibli',
                name: '吉卜力工作室',
                nameEn: 'Studio Ghibli',
                description: '宫崎骏的动画工作室',
                longitude: 139.5647,
                latitude: 35.7056,
                address: '东京都小金井市',
                scenes: ['工作室', '创作'],
                images: ['studio_ghibli_1.jpg'],
                visitInfo: {
                    openTime: '参观需预约',
                    admission: '1000日元',
                    transportation: 'JR中央线武蔵小金井站'
                }
            }
        ]
    },

    // 红辣椒
    'paprika': {
        id: 'paprika',
        title: '红辣椒',
        titleEn: 'Paprika',
        year: 2006,
        director: '今敏',
        description: '梦境与现实的交错',
        poster: 'https://example.com/paprika_poster.jpg',
        locations: [
            {
                id: 'psychiatric_institute',
                name: '精神医学研究所',
                nameEn: 'Psychiatric Institute',
                description: '千叶敦子工作的研究所',
                longitude: 139.7673,
                latitude: 35.6812,
                address: '东京都',
                scenes: ['研究所', '梦境'],
                images: ['research_institute_1.jpg'],
                visitInfo: {
                    openTime: '办公时间',
                    admission: '外部参观免费',
                    transportation: '各线东京站'
                }
            }
        ]
    },

    // 千年女优
    'millennium_actress': {
        id: 'millennium_actress',
        title: '千年女优',
        titleEn: 'Millennium Actress',
        year: 2001,
        director: '今敏',
        description: '藤原千代子的人生回忆',
        poster: 'https://example.com/millennium_actress_poster.jpg',
        locations: [
            {
                id: 'movie_studio',
                name: '电影制片厂',
                nameEn: 'Movie Studio',
                description: '千代子拍摄电影的地方',
                longitude: 139.7036,
                latitude: 35.6938,
                address: '东京都新宿区',
                scenes: ['电影制片厂', '回忆'],
                images: ['movie_studio_1.jpg'],
                visitInfo: {
                    openTime: '参观需预约',
                    admission: '免费',
                    transportation: 'JR山手线新宿站'
                }
            }
        ]
    },

    // 东京教父
    'tokyo_godfathers': {
        id: 'tokyo_godfathers',
        title: '东京教父',
        titleEn: 'Tokyo Godfathers',
        year: 2003,
        director: '今敏',
        description: '三个流浪者的圣诞奇迹',
        poster: 'https://example.com/tokyo_godfathers_poster.jpg',
        locations: [
            {
                id: 'shinjuku_park',
                name: '新宿公园',
                nameEn: 'Shinjuku Park',
                description: '流浪者们居住的公园',
                longitude: 139.7036,
                latitude: 35.6938,
                address: '东京都新宿区',
                scenes: ['公园', '流浪者'],
                images: ['shinjuku_park_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR山手线新宿站'
                }
            }
        ]
    },

    // 妄想代理人
    'paranoia_agent': {
        id: 'paranoia_agent',
        title: '妄想代理人',
        titleEn: 'Paranoia Agent',
        year: 2004,
        director: '今敏',
        description: '都市传说与心理恐怖',
        poster: 'https://example.com/paranoia_agent_poster.jpg',
        locations: [
            {
                id: 'musashino_city',
                name: '武藏野市',
                nameEn: 'Musashino City',
                description: '少年球棒事件发生的城市',
                longitude: 139.5647,
                latitude: 35.7056,
                address: '东京都武藏野市',
                scenes: ['都市', '心理恐怖'],
                images: ['musashino_city_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR中央线武蔵境站'
                }
            }
        ]
    },

    // 完美蓝调
    'perfect_blue': {
        id: 'perfect_blue',
        title: '完美蓝调',
        titleEn: 'Perfect Blue',
        year: 1997,
        director: '今敏',
        description: '偶像未麻的心理惊悚',
        poster: 'https://example.com/perfect_blue_poster.jpg',
        locations: [
            {
                id: 'shibuya_district',
                name: '涩谷区',
                nameEn: 'Shibuya District',
                description: '未麻活动的娱乐区域',
                longitude: 139.7016,
                latitude: 35.6581,
                address: '东京都涩谷区',
                scenes: ['娱乐区', '心理惊悚'],
                images: ['shibuya_1.jpg'],
                visitInfo: {
                    openTime: '全天开放',
                    admission: '免费',
                    transportation: 'JR山手线涩谷站'
                }
            }
        ]
    }
};

// 获取所有动漫列表
function getAllAnime() {
    return Object.values(ANIME_DATA);
}

// 根据ID获取动漫信息
function getAnimeById(id) {
    return ANIME_DATA[id];
}

// 获取所有地点
function getAllLocations() {
    const locations = [];
    Object.values(ANIME_DATA).forEach(anime => {
        anime.locations.forEach(location => {
            locations.push({
                ...location,
                animeId: anime.id,
                animeTitle: anime.title
            });
        });
    });
    return locations;
}

// 根据关键词搜索
function searchAnimeAndLocations(keyword) {
    const results = {
        anime: [],
        locations: []
    };
    
    const lowerKeyword = keyword.toLowerCase();
    
    Object.values(ANIME_DATA).forEach(anime => {
        // 搜索动漫
        if (anime.title.toLowerCase().includes(lowerKeyword) || 
            anime.titleEn.toLowerCase().includes(lowerKeyword) ||
            anime.director.toLowerCase().includes(lowerKeyword)) {
            results.anime.push(anime);
        }
        
        // 搜索地点
        anime.locations.forEach(location => {
            if (location.name.toLowerCase().includes(lowerKeyword) ||
                location.nameEn.toLowerCase().includes(lowerKeyword) ||
                location.description.toLowerCase().includes(lowerKeyword) ||
                location.address.toLowerCase().includes(lowerKeyword)) {
                results.locations.push({
                    ...location,
                    animeId: anime.id,
                    animeTitle: anime.title
                });
            }
        });
    });
    
    return results;
}

// 导出数据和函数
window.ANIME_DATA = ANIME_DATA;
window.getAllAnime = getAllAnime;
window.getAnimeById = getAnimeById;
window.getAllLocations = getAllLocations;
window.searchAnimeAndLocations = searchAnimeAndLocations;