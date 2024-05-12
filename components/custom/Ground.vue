<template>
  <plane :args="[30,30]">
  <TresMeshStandardMaterial
  :env-map-intensity="0"
  :map="tex[0]"
  :normal-map="tex[1]"
  :normal-scale="new THREE.Vector2(0.15,0.15)"

  :dithering="true"
  :color="[0.015,0.015,0.015]"
  :roughness="0.7"
  :metalness="1"
  />
  </plane>
</template>
<script setup lang="ts">
import { Plane } from '@tresjs/cientos';
import { useRenderLoop, useTexture } from '@tresjs/core'
import * as THREE from 'three'
const tex = await useTexture(
  [
    '/textures/a.jpg',
    '/textures/b.jpg'
  ]
)
console.log(tex);

tex.forEach((t) => {
  t.wrapS = t.wrapT = THREE.RepeatWrapping
  t.repeat.set(5,5)
  t.offset.set(0,0)
});
const {onLoop} =  useRenderLoop()
onLoop(({  elapsed }) => {
  // 将在每一帧运行 ~ 60FPS（取决于您的显示器）
  tex.forEach((t)=>{
    t.offset.set(0,-(elapsed*0.127) %1 )
  })
})
</script>
