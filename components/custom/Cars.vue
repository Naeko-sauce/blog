<template>
  <primitive :object='sc'></primitive>
</template>

<script setup lang="ts">
import { useGLTF } from '@tresjs/cientos'
import { useRenderLoop, useTexture } from '@tresjs/core'
import * as THREE from 'three'
const {sc} = await useGLTF('/mods/scene.gltf', { draco: true })
console.log(sc);
sc.scale.set(0.005, 0.005, 0.005)
</script>
