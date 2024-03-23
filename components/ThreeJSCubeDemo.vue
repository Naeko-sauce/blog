<script lang="ts" setup>
import { onMounted } from "vue";

import * as THREE from "three";

// 目标：了解three.js最基本的内容, 哥哥不会连这个都不会吧，真是杂~鱼❤️呢~~~

const width = 800; // 方块宽度
const height = 800; // 方块高度
let angle = 0; // 添加一个角度变量来控制圆周运动

onMounted(() => {
  const scene = new THREE.Scene(); // 创建场景
  const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000); // 创建相机

  camera.position.set(0, 0, 10); // 设置相机位置
  scene.add(camera);

  const cubeGeometry = new THREE.BoxGeometry(1, 1, 1); // 创建几何体
  const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
  const cube = new THREE.Mesh(cubeGeometry, cubeMaterial); // 根据几何体和材质创建物体
  scene.add(cube); // 将几何体添加到场景中

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // 初始化渲染器
  renderer.setSize(width, height); // 设置渲染的尺寸大小
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

<style scoped></style>
