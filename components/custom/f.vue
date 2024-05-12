<template>
  <!-- <TresMesh :rotation-x="-Math.PI / 2" :position-y="0.01">
    <TresPlaneGeometry  />
    <TresMeshBasicMaterial
    color="#ffffff"
    :opacity="0.5"
    :transparent="true"

    />
  </TresMesh> -->
</template>
<script setup lang="ts">
import { useTexture } from '@tresjs/core';
import * as THREE from 'three'
const dif = useTexture([
  '/textures/d.jpg'
])
// dif.wrapS = diffuse.wrapT = THREE.RepeatWrapping
// dif.anisotropy = 4
// dif.repeat.set(30,30)
// dif.offset.ste(0,0)
</script>
