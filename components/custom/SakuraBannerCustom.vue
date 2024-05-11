<script lang="ts" setup>
import { onMounted } from "vue";
import * as THREE from 'three'
onMounted(() => {
const scene = new THREE.Scene()

// 创建透视相机，他的设计是模仿人眼看到的
const camera = new THREE.PerspectiveCamera(75,window.innerHeight / window.innerWidth,0.1,1000)
//设置渲染器
const renderer = new THREE.WebGLRenderer({
  antialias:true,alpha:true
})

renderer.setSize(window.innerWidth,window.innerHeight)
camera.position.setZ(30)
const cont = document.getElementById("bg")!
cont.appendChild(renderer.domElement)

// 创建图形
const geometry = new THREE.TorusGeometry(10,3,16,100)
const material = new THREE.MeshBasicMaterial({color:0xFF6347,wireframe:true})
const torus = new THREE.Mesh(geometry,material)
scene.add(torus)
function am(){
requestAnimationFrame(am)
torus.rotation.x += 0.01;
torus.rotation.y += 0.005;
torus.rotation.z += 0.01;
renderer.render(scene,camera)
}
am()
})
</script>
<template>
  <div id="bg" />
</template>

<style scoped>
.a{

}
</style>

