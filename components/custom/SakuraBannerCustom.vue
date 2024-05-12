<script setup lang="ts">
import { TresCanvas } from '@tresjs/core';
import { OrbitControls } from '@tresjs/cientos'
</script>

<template>
  <div class="e">
  <TresCanvas  >
    <TresPerspectiveCamera :fov='50'/>
    <OrbitControls />
    <Suspense>
      <Car />
    </Suspense>
    <TresAmbientLight :intensity="2" color="#ffffff" />
  </TresCanvas>
</div>
</template>
<style scoped>
.e{
  width: 100%;
  height: 1000px;
}
</style>
