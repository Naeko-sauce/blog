
<script setup lang="ts">
// 导入 Vue 的生命周期钩子函数
import { onMounted } from 'vue';
// 导入 GSAP 动画库的核心功能
import gsap from 'gsap';
// 导入 GSAP 的滚动触发插件，用于创建滚动驱动的动画
import ScrollTrigger from 'gsap/ScrollTrigger';

/**
 * 加载 SVG 文件并将其插入到页面中
 * 该函数通过 fetch API 获取 SVG 文件内容，然后将其添加到 DOM 中
 */
function loadSvg(){
  // 使用 fetch API 获取 SVG 文件
  fetch('/city.svg')
  // 将响应转换为文本格式
  .then((Response) => {return Response.text()})
  // 处理获取到的 SVG 文本内容
  .then((svg)=>{
    // 获取用于放置 SVG 的容器元素
    const bgCity = document.getElementById('bg_city');
    if(bgCity){
      // 将 SVG 内容插入到容器中
      bgCity.innerHTML = svg;
      // 获取插入后的 SVG 元素
      const bgSvg = document.querySelector('#bg_city svg') as SVGElement;
      if(bgSvg){
        // 设置 SVG 的基础属性
        // 设置宽度为 100%，使其填充父容器
        bgSvg.setAttribute("width", "100%");
        // 设置高度为 100%，使其填充父容器
        bgSvg.setAttribute("height", "100%");
        // 设置宽高比保持方式，确保 SVG 内容居中且保持比例
        bgSvg.setAttribute("preserveAspectRatio", "xMidYMid meet");
        // 以下代码被注释掉，原本用于设置 SVG 的视口
        // bgSvg.setAttribute("viewBox", "0 0 1920 1080");
      }
    }
  })}

/**
 * 设置滚动触发的动画序列
 * 该函数创建一个 GSAP 时间轴，并添加多个动画效果
 * 这些动画会在用户滚动页面时触发
 */
function setAnimationScroll(){
  // 注册 ScrollTrigger 插件，告诉 GSAP 我们要使用滚动触发功能
  gsap.registerPlugin(ScrollTrigger);
  
  // 创建一个时间轴实例，相当于一个动画容器，可以按顺序放入多个动画
  let runAnimation = gsap.timeline({
    // scrollTrigger 配置决定了动画如何随着页面滚动而播放
    scrollTrigger: {
     // trigger 指定哪个元素作为触发点，这里是 SVG 容器
     trigger: "#bg_city",
     
     // start 定义动画开始的位置
     // "top top" 表示：当触发元素的顶部碰到视口顶部时开始动画
     start: "top top",
     
     // end 定义动画结束的位置
     // "+=1000" 表示：从开始位置再向下滚动 1000 像素时结束动画
     end: "+=1500",
     
     // scrub 设为 true 表示动画进度会跟随滚动位置
     // 用户向下滚动，动画前进；向上滚动，动画倒退
     scrub: true,
     
     // pin 设为 true 表示在动画播放期间，触发元素会固定在视口中
     // 这样用户滚动时，元素不会离开屏幕，只有动画在变化
     pin: true,
    }
  })
  
  // 添加第一组动画（SVG 整体效果）
  runAnimation.add([
    // 将 SVG 放大到 1.5 倍，持续 2 秒
    gsap.to("#bg_city svg", {
      scale: 1.5,
      duration: 2
    }),
    // 将 full_city 元素淡出，持续 1 秒
    gsap.to("#full_city", {
      opacity: 0,
      duration: 1
    }),
  ])
  // 添加第二组动画（建筑外部元素）
  .add([
    // 将 building_top 元素向上移动并淡出
    gsap.to("#building_top", {
      y: -200,
      opacity: 0,
      duration: 2
    }),
    // 将 wall_side 元素向左移动并淡出
    gsap.to("#wall_side", {
      duration: 2,
      x: -200,
      opacity: 0
    }),
    // 将 wall_front 元素向右下移动并淡出
    gsap.to("#wall_front", {
      duration: 2,
      x: 200, 
      y: 200,
      opacity: 0
    })
  ])
  // 添加第三组动画（建筑内部元素）
  .add([
    // 将 interior_wall_side 元素向左移动并淡出
    gsap.to("#interior_wall_side", {
      duration: 2,
      x: -200,
      opacity: 0
    }),
    // 将 interior_wall_top 元素向上移动并淡出
    gsap.to("#interior_wall_top", {
      duration: 2,
      y: -200,
      opacity: 0
    }),
    // 将 interior_wall_side_2 元素淡出
    gsap.to("#interior_wall_side_2", {
      duration: 2,
      opacity: 0
    }),
    // 将 interior_wall_front 元素淡出
    gsap.to("#interior_wall_front", {
      duration: 2,
      opacity: 0
    })
  ]);
}

/**
 * 组件挂载完成后执行的函数
 * 在 DOM 准备好后加载 SVG 并设置动画
 */
onMounted(() => {
  // 调用加载 SVG 的函数
  loadSvg();
  
  // 设置延时器，等待 SVG 加载完成后执行动画
  // 延迟 100 毫秒是为了确保 DOM 已经完成更新
  setTimeout(() => {
    // 调用动画设置函数
    setAnimationScroll();
  }, 100);
});

// 以下注释说明了之前的代码问题
// 移除了自调用的代码，避免无限递归
// setAnimationScroll()
</script>

<template>
  <!-- 主要内容容器 -->
  <div class="banner">
    <!-- SVG 将被插入到这个 div 中 -->
    <div id="bg_city"></div>
  </div>
  <!-- 添加额外的滚动空间 -->
  <div class="scroll-space">end</div>
  <!-- 页脚组件 -->
  <SakuraPostFooter />
</template>

<style scoped>
/* 添加额外的滚动空间 */
.scroll-space {
  height: 50vh;
  width: 100%;
}
/* 主容器样式 */
.banner {
  /* 使用相对定位，作为内部元素的定位参考 */
  position: relative;
  /* 设置最小高度为视口高度，确保有足够的滚动空间 */
  min-height: 300vh;
}
</style>
