<template>
  <primitive :object="scene"></primitive>
</template>

<script setup lang="ts">
import { useGLTF } from '@tresjs/cientos'

const { scene } = await useGLTF('/modl/scene.gltf', { draco: true })

scene.scale.set(0.005, 0.005, 0.005)
console.log(scene)
</script>
