---
title: 抽象天体
cover: https://modls.s3.bitiful.net/img%2F%E6%94%B6%E8%97%8F%E9%87%8F3336%E7%94%BB%E5%B8%88%E3%81%82%E3%81%8D%E3%81%BE%E4%BD%9C%E5%93%8164013673_p0.png
---
<donut/>



### 实现代码

``` vue
<script lang="ts" setup>

import { onMounted } from "vue";
import * as THREE from 'three'

onMounted(() => {
  const scene = new THREE.Scene()

 
  const w = 800
  const h = 800

  const camera = new THREE.PerspectiveCamera(75, w/h, 0.1, 1000)

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
  })

  renderer.setSize(w, h)
  camera.position.setZ(30)
  const cont = document.getElementById("bg")!
  cont.appendChild(renderer.domElement)

  const geometry = new THREE.TorusGeometry(10, 1.5, 10, 100)


  const material = new THREE.MeshBasicMaterial({color: 0xFF6347, wireframe: true})

  const torus = new THREE.Mesh(geometry, material)
  scene.add(torus)

  const pointLight = new THREE.PointLight(0xffffff, 1);
  pointLight.position.set(20, 20, 20);
  pointLight.castShadow = true;
  pointLight.distance = 10;
  pointLight.decay = 2;

 
  const ambientLight = new THREE.AmbientLight(0xffffff, 1);
  scene.add(pointLight, ambientLight);


  function addStar() {
    const geometry = new THREE.SphereGeometry(0.25, 24, 24);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const star = new THREE.Mesh(geometry, material);

  
    const [x, y, z] = Array(3)
      .fill(0)
      .map(() => THREE.MathUtils.randFloatSpread(100));

    star.position.set(x, y, z);
    scene.add(star);
  }

  
  Array(200).fill(0).forEach(addStar);

 
  const moontex = new THREE.TextureLoader().load('https://modls.s3.bitiful.net/3d%2Fimg-donut%2Fmoon.jpg')
  const nor = new THREE.TextureLoader().load('https://modls.s3.bitiful.net/3d%2Fimg-donut%2Fnormal.jpg')

 
  const moon = new THREE.Mesh(
    new THREE.SphereGeometry(5, 32, 32),
    new THREE.MeshStandardMaterial({
      map: moontex,      
      normalMap: nor     
    })
  )

  scene.add(moon)

  
  const bac = new THREE.TextureLoader().load('https://modls.s3.bitiful.net/3d%2Fimg-donut%2Fspace.jpg')
  scene.background = bac

  
   torus.rotation.x += 5;
   scene.add(torus)
  function am() {
    requestAnimationFrame(am)
    moon.rotation.x += 0.01;    
    torus.rotation.z += 0.05;   
    moon.rotation.z += 0.01;    
    renderer.render(scene, camera)
  }

 
  am()
})
</script>

<template>
<div class="flex justify-center">
  <div id="bg" />
</div>
</template>

<style scoped>
.a {

}
</style>


```