<template>
  <primitive :object='scene'></primitive>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAnimations, useGLTF } from '@tresjs/cientos'

const { scene, animations } = await useGLTF('/models/angel/scene.gltf')
scene.scale.set(100, 100, 100)

// const { scene, animations } = await useGLTF(
//   'https://raw.githubusercontent.com/Tresjs/assets/main/models/gltf/ugly-naked-bunny/ugly-naked-bunny-animated.gltf',
// )

const { actions } = useAnimations(animations, scene)

const currentAction = ref(actions.anim)
console.log(currentAction);
currentAction.value.play()
console.log(scene);
</script>
