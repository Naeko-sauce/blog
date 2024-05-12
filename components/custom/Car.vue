<template>
  <primitive :object="scene"></primitive>
</template>

<script setup lang="ts">
import { useGLTF } from '@tresjs/cientos'
import { useRenderLoop, useTexture } from '@tresjs/core'
import * as THREE from 'three'
const { scene } = await useGLTF('/modl/scene.gltf', { draco: true })

scene.scale.set(0.005, 0.005, 0.005)
// console.log(scene)
// scene.traverse((child:any)=>{
//   if(child.isMesh){
//     child.castShadow = true
//     child.receiveShadow = true
//     child.material.envMapIntensity = 2
//   }
// })
const { onLoop } = useRenderLoop()

onLoop(({ elapsed }) => {
  // 将在每一帧运行 ~ 60FPS（取决于您的显示器）
  const gr = scene.children[0].children[0].children[0]
  gr.children[0].rotation.x = elapsed * 2
  gr.children[2].rotation.x = elapsed * 2
  gr.children[4].rotation.x = elapsed * 2
  gr.children[6].rotation.x = elapsed * 2
})
</script>
