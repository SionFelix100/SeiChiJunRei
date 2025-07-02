/**
 * 后期处理控制类
 * postProcessController.js
 */
let lastStage = null;

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

const handleSnow = (rainSpeed, viewerInstance) => {
    removeStage(viewerInstance);
    var rain = new Cesium.PostProcessStage({
        name: "hi_snow",
        fragmentShader: FS_Snow,
        uniforms: {
            rainSpeed, //雪速
        },
    });
    const viewer = viewerInstance || window.viewer || (window.cesiumViewer && window.cesiumViewer.viewer);
    if (viewer && viewer.scene) {
        viewer.scene.postProcessStages.add(rain);
        lastStage = rain;
    }
};

// 雨
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

// 添加雨
const handleRain = (rainWidth, rainSpeed, viewerInstance) => {
    removeStage(viewerInstance);
    var rain = new Cesium.PostProcessStage({
        name: "hi_rain",
        fragmentShader: FS_Rain,
        uniforms: {
            tiltAngle: 0.4, // 倾斜角度
            rainSize: 0.2, // 雨大小
            rainWidth, //雨长度
            rainSpeed, //雨速
        },
    });
    const viewer = viewerInstance || window.viewer || (window.cesiumViewer && window.cesiumViewer.viewer);
    if (viewer && viewer.scene) {
        viewer.scene.postProcessStages.add(rain);
        lastStage = rain;
    }
};



//移除
const removeStage = (viewerInstance) => {
    const viewer = viewerInstance || window.viewer || (window.cesiumViewer && window.cesiumViewer.viewer);
    if (lastStage && viewer && viewer.scene) {
        viewer.scene.postProcessStages.remove(lastStage);
        lastStage = null;
    }
};

// 导出函数供其他模块使用
if (typeof window !== 'undefined') {
    window.PostProcessController = {
        handleSnow,
        handleRain,
        removeStage
    };
}