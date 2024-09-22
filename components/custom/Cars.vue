<template>
  <primitive :object='scene'></primitive>
</template>

<script setup lang="ts">
import { nextTick } from 'vue'
import { useGLTF } from '@tresjs/cientos'
import { useRenderLoop, useTexture } from '@tresjs/core'
await nextTick()

const { scene } = await useGLTF('https://modls.s3.bitiful.net/car2/scene.gltf', { draco: true })
scene.scale.set(100, 100, 100)
const { onLoop } = useRenderLoop()
console.log(scene);

onLoop(({ elapsed }) => {
  const gr = scene.children[0].children[0].children[0].children[0]
  gr.children[44].rotation.x = elapsed * 2
  gr.children[46].rotation.x = elapsed * 2
  gr.children[50].rotation.x = elapsed * 2
  gr.children[51].rotation.x = elapsed * 2

});
</script>
