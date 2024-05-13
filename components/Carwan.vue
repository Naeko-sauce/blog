<script setup lang="ts">
import { TresCanvas } from '@tresjs/core';
import { OrbitControls } from '@tresjs/cientos'
import Cars from './custom/Cars.vue';
import { ref, onMounted } from 'vue';

const scale = ref(1); // 初始缩放比例

onMounted(() => {
  const container = document.querySelector('.e');

  // 监听滚轮事件
  container.addEventListener('wheel', handleWheel);

  function handleWheel(event) {
    // 阻止页面滚动
    event.preventDefault();

    // 计算新的缩放比例
    const delta = event.deltaY > 0 ? -0.1 : 0.1; // 根据滚轮方向调整缩放大小
    scale.value = Math.max(0.1, scale.value + delta); // 缩放限制最小值为0.1

    // 应用缩放变换
    container.style.transform = `scale(${scale.value})`;
  }
});

</script>

<template>
  <div class="e">
  <TresCanvas shadows clear-color='rgb(0,0,0)' >
    <TresPerspectiveCamera :position="[3,4,5]" :fov='70'/>

    <OrbitControls :target="[0,0,0,0]" :max-polar-angle="1.45"/>
    <Suspense>
      <!-- <Car /> -->
      <Cars />
      <!-- <Angel /> -->
    </Suspense>
    <Suspense>
    <Ground />
  </Suspense>
  <Suspense>
    <!-- <f/> -->
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
    :color='[0.1,0.5,0.7]'
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
  height: 600px;
}
</style>
