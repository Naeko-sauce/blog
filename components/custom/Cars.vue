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
// 监听滚轮事件
window.addEventListener('wheel', handleWheel);

function handleWheel(event) {
  event.preventDefault();
  const delta = event.deltaY > 0 ? 1 : -1; // 根据滚轮方向调整
  scale.value = Math.max(100, scale.value + delta); // 限制最小缩放值为50
  scene.scale.set(scale.value, scale.value, scale.value); // 更新模型的缩放
}

onLoop(({ elapsed }) => {
  const gr = scene.children[0].children[0].children[0].children[0]
  gr.children[44].rotation.x = elapsed * 2
  gr.children[46].rotation.x = elapsed * 2
  gr.children[50].rotation.x = elapsed * 2
  gr.children[51].rotation.x = elapsed * 2

});
</script>
