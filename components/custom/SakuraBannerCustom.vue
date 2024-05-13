<script setup lang="ts">
import { TresCanvas } from '@tresjs/core';
import { OrbitControls } from '@tresjs/cientos'
</script>

<template>
  <div class="e">
  <TresCanvas shadows clear-color='rgb(0,0,0)' >
    <TresPerspectiveCamera :position="[1,4,7]" :fov='60'/>

    <OrbitControls :target="[0,0,0,0]" :max-polar-angle="1.45" :enable-zoom="false"/>
    <Suspense>
      <!-- <Car /> -->
      <!-- <Cars /> -->
      <Angel />
    </Suspense>
    <Suspense>
    <Ground />
  </Suspense>
  <Suspense>
    <!-- <f/> -->
  </Suspense>


    <TresSpotLight

    :intensity="250"
    :angle="0.6"
    :penumbra="0.5"
    :distance="100"
    :position='[5,5,0]'
    />
    <TresSpotLight

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
