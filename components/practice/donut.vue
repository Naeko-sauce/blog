<script lang="ts" setup>
/**
 * 导入必要的依赖
 * - onMounted: Vue3的生命周期钩子，用于在组件挂载后执行代码
 * - THREE: Three.js库的所有功能
 */
import { onMounted } from "vue";
import * as THREE from 'three'
// OrbitControls 是一个可选的控制器，用于允许用户旋转/缩放场景
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
onMounted(() => {
  /**
   * 创建场景(Scene)
   * 文档：https://threejs.org/docs/#api/zh/scenes/Scene
   * - 场景是所有3D对象的容器
   * - 使用add()方法添加对象
   * - 使用remove()方法移除对象
   */
  const scene = new THREE.Scene()

  /**
   * 设置渲染尺寸
   * - w: 渲染宽度
   * - h: 渲染高度
   * 这些值会影响渲染分辨率和场景比例
   */
  const w = 800
  const h = 800

  /**
   * 创建透视相机(PerspectiveCamera)
   * 文档：https://threejs.org/docs/#api/zh/cameras/PerspectiveCamera
   * 参数说明：
   * 1. FOV (视野角度): 75度
   * 2. 宽高比: w/h
   * 3. 近裁剪面: 0.1
   * 4. 远裁剪面: 1000
   */
  const camera = new THREE.PerspectiveCamera(75, w/h, 0.1, 1000)

  /**
   * 创建WebGL渲染器
   * 文档：https://threejs.org/docs/#api/zh/renderers/WebGLRenderer
   * 参数说明：
   * - antialias: 开启抗锯齿
   * - alpha: 允许透明背景
   */
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
  })

  /**
   * 配置渲染器和相机
   * - setSize: 设置渲染尺寸
   * - setZ: 设置相机在z轴上的位置
   */
  renderer.setSize(w, h)
  camera.position.setZ(30)

  /**
   * 创建控制器
   * 文档：  /**
   * 创建控制器
   * 文档：URL_ADDRESSjs.org/docs/#examples/zh/controls/OrbitControls
   * 控制器允许用户通过鼠标/触摸操作来旋转/缩放场景
   * - 传入渲染器和相机
   */
  const controls = new OrbitControls(camera,renderer.domElement);

    /**
   * 配置控制器参数
   * - enableDamping: 启用阻尼效果，使控制更平滑
   * - dampingFactor: 阻尼系数，值越小越平滑
   * - enableZoom: 是否允许缩放
   * - autoRotate: 是否自动旋转
   * - autoRotateSpeed: 自动旋转速度
   */
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
controls.enableZoom = true;
controls.minDistance = 30;
controls.maxDistance = 20;
controls.autoRotate = true;
controls.autoRotateSpeed = 5;
  /**
   * 获取DOM容器并添加渲染画布
   * - getElementById: 获取指定id的DOM元素
   * - appendChild: 添加渲染器的canvas元素
   */
  const cont = document.getElementById("bg")!
  cont.appendChild(renderer.domElement)

  /**
   * 创建甜甜圈(环面)几何体
   * 文档：https://threejs.org/docs/#api/zh/geometries/TorusGeometry
   * 参数说明：
   * 1. 半径: 10
   * 2. 管道半径: 3
   * 3. 径向分段数: 16
   * 4. 管道分段数: 100
   */
  const geometry = new THREE.TorusGeometry(10, 1.5, 10, 100)

  /**
   * 创建基础网格材质
   * 文档：https://threejs.org/docs/#api/zh/materials/MeshBasicMaterial
   * 参数说明：
   * - color: 珊瑚红色(0xFF6347)
   * - wireframe: 显示线框模式
   */
  const material = new THREE.MeshBasicMaterial({color: 0xFF6347, wireframe: true})

  /**
   * 创建网格对象
   * - Mesh将几何体和材质组合在一起
   * - 添加到场景中才能被渲染
   */
  const torus = new THREE.Mesh(geometry, material)
  scene.add(torus)

  /**
   * 创建点光源
   * 文档：https://threejs.org/docs/#api/zh/lights/PointLight
   * 参数说明：
   * 1. 颜色: 白色(0xffffff)
   * 2. 强度: 1
   * 配置说明：
   * - position: 光源位置
   * - castShadow: 投射阴影
   * - distance: 光照距离
   * - decay: 衰减率
   */
  const pointLight = new THREE.PointLight(0xffffff, 1);
  pointLight.position.set(20, 20, 20);
  pointLight.castShadow = true;
  pointLight.distance = 10;
  pointLight.decay = 2;

  /**
   * 创建环境光
   * 文档：https://threejs.org/docs/#api/zh/lights/AmbientLight
   * - 均匀照亮场景中的所有物体
   * - 不产生阴影
   */
  const ambientLight = new THREE.AmbientLight(0xffffff, 1);
  scene.add(pointLight, ambientLight);

  /**
   * 创建星星的函数
   * - 使用球体几何体创建星星
   * - 使用标准材质使其能对光照产生反应
   * - 随机设置位置
   */
  function addStar() {
    const geometry = new THREE.SphereGeometry(0.25, 24, 24);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const star = new THREE.Mesh(geometry, material);

    /**
     * 随机生成星星位置
     * - fill(0): 填充数组
     * - map: 映射为随机值
     * - randFloatSpread: 在正负100范围内取随机值
     */
    const [x, y, z] = Array(3)
      .fill(0)
      .map(() => THREE.MathUtils.randFloatSpread(100));

    star.position.set(x, y, z);
    scene.add(star);
  }

  // 创建200颗星星
  Array(200).fill(0).forEach(addStar);

  /**
   * 创建月球
   * - 加载月球表面纹理
   * - 加载法线贴图用于细节表现
   * 文档：https://threejs.org/docs/#api/zh/textures/Texture
   */
  const moontex = new THREE.TextureLoader().load('https://modls.s3.bitiful.net/3d%2Fimg-donut%2Fmoon.jpg')
  const nor = new THREE.TextureLoader().load('https://modls.s3.bitiful.net/3d%2Fimg-donut%2Fnormal.jpg')

  /**
   * 创建月球网格
   * - 使用球体几何体
   * - 使用标准材质并应用纹理
   */
  const moon = new THREE.Mesh(
    new THREE.SphereGeometry(5, 32, 32),
    new THREE.MeshStandardMaterial({
      map: moontex,      // 颜色贴图
      normalMap: nor     // 法线贴图
    })
  )

  scene.add(moon)

  /**
   * 加载并设置背景
   * - TextureLoader用于加载图片纹理
   * - 设置为场景背景
   */
  const bac = new THREE.TextureLoader().load('https://modls.s3.bitiful.net/3d%2Fimg-donut%2Fspace.jpg')
  scene.background = bac

  /**
   * 动画循环函数
   * - requestAnimationFrame确保平滑动画
   * - 更新物体旋转
   * - 渲染场景
   */
   torus.rotation.x += 5;
   scene.add(torus)
  function am() {
    requestAnimationFrame(am)
    moon.rotation.x += 0.01;    // 月球X轴旋转
    torus.rotation.z += 0.05;   // 甜甜圈绕Y轴旋转（横向旋转）
    moon.rotation.z += 0.01;    // 月球Z轴旋转
    renderer.render(scene, camera)
  }

  // 启动动画循环
  am()
})
</script>

<template>
<!-- 
  创建场景容器
  - flex justify-center: 水平居中
  - id="bg": 用于获取DOM元素
-->
<div class="flex justify-center">
  <div id="bg" />
</div>
</template>

<style scoped>
/* 预留的样式空间 */
.a {

}
#bg {
  touch-action: none;  /* 禁用默认触摸行为 */
  height: 50vh;      /* 使用视口高度 */
  max-height: 600px;  /* 设置最大高度 */
  /* overflow: hidden;   防止内容溢出 */
}

/* 在移动端适配 */
@media (max-width: 768px) {
  #bg {
    height: 60vh;    /* 移动端使用60%视口高度 */
  }
}
</style>

