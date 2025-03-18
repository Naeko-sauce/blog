---
top: 1
title: 3d方块旋转
cover: https://modls.s3.bitiful.net/img%2F%E6%94%B6%E8%97%8F%E9%87%8F5992%E7%94%BB%E5%B8%88%E7%94%BB%E5%B8%88JW%E4%BD%9C%E5%93%8175910324_p0.jpg

---

### 大风车吱呀吱哟哟地转

<ThreeJSCubeDemo />

### 实现代码
``` vue

<script lang="ts" setup>
import { onMounted } from "vue";
import { useWindowSize } from '@vueuse/core' // Vue 工具集，封装了很多的常用方法

import * as THREE from "three";


// 在Vue环境不推荐直接使用window方法get窗口大小哦
// const width = window.innerWidth; // 方块宽度
// const height = window.innerHeight; // 方块高度

// 改为
// const window = useWindowSize()
// const width = window.width
// const height = window.height

// 可以简写为
const {width, height} = useWindowSize() // 解构, 因为内容是ref对象所以要.value获取对象的值

let angle = 0; // 添加一个角度变量来控制圆周运动

onMounted(() => {
  const scene = new THREE.Scene(); // 创建场景
  const camera = new THREE.PerspectiveCamera(75, width.value / height.value, 0.1, 1000); // 创建相机

  camera.position.set(0, 0, 10); // 设置相机位置
  scene.add(camera);

  const cubeGeometry = new THREE.BoxGeometry(1, 1, 1); // 创建几何体
  const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
  const cube = new THREE.Mesh(cubeGeometry, cubeMaterial); // 根据几何体和材质创建物体
  scene.add(cube); // 将几何体添加到场景中

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // 初始化渲染器
  renderer.setSize(width.value, height.value); // 设置渲染的尺寸大小
  renderer.autoClear = false; // 禁用自动清除
  renderer.setClearAlpha(0.1); // 设置清除的透明度，用于控制残影的持续性

  const container = document.getElementById("three-js-container")!; // 将webgl渲染的canvas内容添加到body
  container.appendChild(renderer.domElement);

  function animateCube() {
    requestAnimationFrame(animateCube);

    // 圆周运动的参数设置
    const radius = 5; // 设置旋转半径
    cube.position.x = Math.sin(angle) * radius;
    cube.position.y = Math.cos(angle) * radius;

    // 保留绕自身轴的旋转
    cube.rotation.x += 2;
    cube.rotation.y += 2.01;
    cube.rotation.z += 3.01;

    angle += 8; // 更新角度变量，控制旋转速度

    renderer.render(scene, camera);
  }

  animateCube();
  animateCube();
  animateCube();
});
</script>

<template>
  <div class="flex justify-center">
    <div id="three-js-container" />
  </div>
</template>

<style scoped>
</style>

```