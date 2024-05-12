<script setup lang="ts">
import { TresCanvas } from '@tresjs/core';
import {OrbitControls} from '@tresjs/cientos'
</script>

<template>
  <div class="e">
  <TresCanvas clear-color="#82DBC5" >
    <TresPerspectiveCamera/>
    <OrbitControls />
    <TresMesh>
      <TresTorusGeometry :args="[1, 0.5, 16, 32]" />
      <TresMeshBasicMaterial color="orange" />
    </TresMesh>
    <TresAmbientLight :intensity="1" />
  </TresCanvas>
</div>
</template>
<style scoped>
.e{
  width: 100%;
  height: 1000px;
}
</style>
