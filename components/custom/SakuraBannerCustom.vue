<script setup lang="ts">
import { TresCanvas } from '@tresjs/core';
import { OrbitControls } from '@tresjs/cientos'
</script>

<template>
  <div class="e">
  <TresCanvas shadows clear-color='rgb(0,0,0)' >
    <TresPerspectiveCamera :position="[3,2,5]" :fov='50'/>

    <OrbitControls :target="[0,0,0,0]" :max-polar-angle="1.45" :enable-zoom="false"/>
    <Suspense>
      <Car />
      <!-- <Cars /> -->
    </Suspense>
    <Suspense>
    <Ground />
  </Suspense>
  <Suspense>
    <f/>
  </Suspense>
    <TresSpotLight
    :color='[2,0.25,0.7]'
    :intensity="250"
    :angle="0.6"
    :penumbra="0.5"
    :distance="100"
    :position='[5,5,0]'
    />
    <TresSpotLight
    :color='[0.14,0.5,0.7]'
    :intensity="400"
    :angle="0.6"
    :penumbra="0.5"
    :distance="100"
    :position='[-5,5,0]'
    />
    <TresAmbientLight :intensity="2" color="#ffffff" />
    <!-- <TresDirectionalLight cast-shadow :position="[0, 2, 0]" :intensity="20" /> -->
  </TresCanvas>
</div>
</template>
<style scoped>
.e{
  width: 100%;
  height: 1000px;
}
</style>
