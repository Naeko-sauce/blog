<script lang="ts" setup>
import { onMounted } from "vue";
import * as THREE from 'three'

onMounted(() => {
const scene = new THREE.Scene()
const  w = 1000
const h = 1000
// 创建透视相机，他的设计是模仿人眼看到的
const camera = new THREE.PerspectiveCamera(75,w /h,0.1,1000)
//设置渲染器
const renderer = new THREE.WebGLRenderer({
  antialias:true,alpha:true
})

renderer.setSize(w,h)
camera.position.setZ(30)
const cont = document.getElementById("bg")!
cont.appendChild(renderer.domElement)

// 创建图形
const geometry = new THREE.TorusGeometry(10,3,16,100)
const material = new THREE.MeshBasicMaterial({color:0xFF6347})
const torus = new THREE.Mesh(geometry,material)
scene.add(torus)
//创建光源
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);
const gr = new THREE.GridHelper(200,50)
// const con  = new OrbitControls(camera,renderer.domElement)
function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(200).fill().forEach(addStar);
function am(){
requestAnimationFrame(am)
torus.rotation.x += 0.01;
torus.rotation.y += 0.005;
torus.rotation.z += 0.01;
// con.update
renderer.render(scene,camera)
}
am()
})
</script>
<template>

  <div id="bg">

  </div>

</template>

<style scoped>
.a{

}
</style>

