
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
 * @returns {Promise<boolean>} 返回一个 Promise，成功时解析为 true，失败时拒绝并返回错误信息
 */
function loadSvg(){
  // 创建并返回一个新的 Promise 对象
  // Promise 是一种处理异步操作的对象，它代表一个尚未完成但预计将来会完成的操作
  // 它有三种状态：pending(进行中)、fulfilled(已成功)和rejected(已失败)
  // 详细文档: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise
  return new Promise((resolve, reject) => {
    // resolve 和 reject 是两个函数参数:
    // - resolve: 当异步操作成功完成时调用，将Promise状态改为fulfilled
    // - reject: 当异步操作失败时调用，将Promise状态改为rejected
    
    // 使用 fetch API 获取 SVG 文件
    // fetch 是浏览器提供的现代网络请求API，用于从服务器获取资源
    // 它返回一个Promise，这个Promise会在请求响应后被解析
    // '/city.svg' 是请求的URL路径，这里是相对路径，指向网站根目录下的city.svg文件
    // 详细文档: https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API
    fetch('/city.svg')
      // .then() 方法用于处理Promise成功的情况
      // 它接收一个回调函数作为参数，这个函数会在Promise解析(resolve)时被调用
      // 回调函数的参数是Promise解析的结果，这里是fetch请求的Response对象
      // .then()本身也返回一个新的Promise，允许链式调用
      // 详细文档: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
      .then((Response) => {
        // Response参数是fetch请求的响应对象，包含响应状态、头信息和数据
        
        // 检查响应状态是否正常
        // Response.ok 是一个布尔属性，当HTTP状态码在200-299范围内时为true
        // 这是一种快速检查请求是否成功的方法
        // 详细文档: https://developer.mozilla.org/zh-CN/docs/Web/API/Response/ok
        if (!Response.ok) {
          // 如果响应不正常(状态码不在200-299范围内)，抛出错误
          // throw语句用于抛出一个用户定义的异常
          // 当throw被执行时，当前函数的执行将会被停止，控制流程会转到最近的catch块
          // 这里创建了一个新的Error对象，包含错误信息和HTTP状态码
          // 详细文档: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/throw
          throw new Error(`SVG 加载失败: ${Response.status}`);
        }
        
        // 将响应转换为文本格式
        // Response.text()方法读取响应流并将其转换为文本
        // 它返回一个Promise，解析为响应体的完整文本内容
        // 对于SVG文件，这将返回SVG的XML文本内容
        // 详细文档: https://developer.mozilla.org/zh-CN/docs/Web/API/Response/text
        return Response.text();
        // 这个return的值会作为下一个.then()回调函数的输入参数
      })
      
      // 处理获取到的SVG文本内容
      // 这个.then()接收上一个Promise返回的文本内容(SVG的XML文本)
      // svg参数就是完整的SVG文件内容，以文本字符串形式表示
      .then((svg) => {
        // 获取用于放置SVG的容器元素
        // getElementById是DOM API的方法，用于获取具有指定ID的元素
        // 这里查找ID为'bg_city'的元素，这个元素应该在HTML模板中定义
        // 详细文档: https://developer.mozilla.org/zh-CN/docs/Web/API/Document/getElementById
        const bgCity = document.getElementById('bg_city');
        
        // 检查容器元素是否存在
        if(bgCity){
          // 将SVG内容插入到容器中
          // innerHTML属性用于设置或获取元素的HTML或XML内容
          // 这里将SVG的XML文本直接设置为容器的innerHTML，浏览器会自动解析这些XML并创建相应的DOM元素
          // 详细文档: https://developer.mozilla.org/zh-CN/docs/Web/API/Element/innerHTML
          bgCity.innerHTML = svg;
          
          // 获取插入后的SVG元素
          // querySelector是DOM API的方法，用于查找匹配指定CSS选择器的第一个元素
          // 这里查找#bg_city容器内的svg元素
          // as SVGElement是TypeScript的类型断言，告诉编译器这个元素是SVG类型
          // 这样可以访问SVG特有的属性和方法
          // 详细文档: https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelector
          // TypeScript类型断言: https://www.typescriptlang.org/docs/handbook/basic-types.html#type-assertions
          const bgSvg = document.querySelector('#bg_city svg') as SVGElement;
          
          // 检查SVG元素是否成功插入并找到
          if(bgSvg){
            // 设置SVG的基础属性，调整其在页面中的显示方式
            
            // setAttribute方法用于设置元素的属性值
            // 详细文档: https://developer.mozilla.org/zh-CN/docs/Web/API/Element/setAttribute
            
            // 设置宽度为100%，使SVG水平方向填满容器
            // 这确保SVG能够自适应容器的宽度变化
            bgSvg.setAttribute("width", "100%");
            
            // 设置高度为100vh，使SVG高度等于视口高度
            // vh是视口高度单位，100vh表示视口(浏览器可见区域)的100%高度
            // 这确保SVG在垂直方向上填满整个视口
            // 详细文档: https://developer.mozilla.org/zh-CN/docs/Web/CSS/length#vh
            bgSvg.setAttribute("height", "100vh");
            
            // 设置宽高比保持方式
            // preserveAspectRatio属性指定SVG视图框如何适应指定的容器
            // xMidYMid meet的含义:
            // - xMid: 在水平方向上居中对齐
            // - YMid: 在垂直方向上居中对齐
            // - meet: 保持宽高比，确保整个SVG可见(可能会有空白)
            // 详细文档: https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/preserveAspectRatio
            bgSvg.setAttribute("preserveAspectRatio", "xMidYMid meet");
            
            // 输出成功信息到控制台，便于调试
            // console.log方法向Web控制台输出一条信息
            // 详细文档: https://developer.mozilla.org/zh-CN/docs/Web/API/Console/log
            console.log("SVG 加载成功");
            
            // 解析Promise为成功状态，并返回true
            // resolve函数将Promise状态设置为fulfilled(已完成)
            // 调用resolve表示异步操作已成功完成
            // 传入的参数(这里是true)将作为Promise的结果值
            // 详细文档: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
            resolve(true);
          } else {
            // 如果找不到SVG元素，拒绝Promise
            // 这可能是因为插入的内容不是有效的SVG，或者选择器没有匹配到元素
            // reject函数将Promise状态设置为rejected(已拒绝)
            // 调用reject表示异步操作已失败
            // 传入的参数(这里是错误信息字符串)将作为Promise的拒绝原因
            // 详细文档: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject
            reject("SVG 元素未找到");
          }
        } else {
          // 如果找不到容器元素，拒绝Promise
          // 这可能是因为HTML模板中没有id为'bg_city'的元素
          reject("bg_city 容器未找到");
        }
      })
      
      // .catch()方法用于处理Promise链中的错误
      // 它会捕获链中任何位置抛出的错误或拒绝的Promise
      // 详细文档: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch
      .catch(error => {
        // error参数包含错误信息，可能是:
        // 1. fetch请求失败的错误
        // 2. Response.ok检查中抛出的错误
        // 3. 解析响应文本时的错误
        
        // 将错误信息输出到控制台
        // console.error方法向Web控制台输出一条错误信息
        // 与console.log不同，它会以红色文本显示，并可能包含堆栈跟踪
        // 详细文档: https://developer.mozilla.org/zh-CN/docs/Web/API/Console/error
        console.error("SVG 加载错误:", error);
        
        // 拒绝Promise并传递错误信息
        // 这将使整个loadSvg函数返回的Promise进入rejected状态
        // 调用此函数的代码可以通过.catch()或try/catch捕获这个错误
        reject(error);
      });
  });
}

/**
 * 组件挂载完成后执行的函数
 * 在 DOM 准备好后加载 SVG 并设置动画
 * onMounted 是 Vue 3 Composition API 提供的生命周期钩子，在组件挂载到 DOM 后执行
 * 详细文档: https://cn.vuejs.org/api/composition-api-lifecycle.html#onmounted
 */
onMounted(() => {
  // 调用加载 SVG 的函数，并等待加载完成
  // 这里调用前面定义的 loadSvg 函数，它返回一个 Promise
  loadSvg()
    // .then() 处理 Promise 成功的情况
    // 当 SVG 成功加载并插入到 DOM 中后，这个回调函数会被执行
    // 详细文档: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
    .then(() => {
      // 输出日志，表示 SVG 已加载完成，准备设置动画
      console.log("SVG 加载完成，开始设置动画");
      
      // 增加延迟，确保 DOM 完全更新
      // setTimeout 是一个全局函数，用于在指定的毫秒数后执行一次回调函数
      // 这里的延迟是为了确保 SVG 元素完全渲染到 DOM 中，避免动画设置时出现问题
      // 详细文档: https://developer.mozilla.org/zh-CN/docs/Web/API/setTimeout
      setTimeout(() => {
        // 延迟 500 毫秒后调用设置动画的函数
        setAnimationScroll();
      }, 500); // 500 毫秒 = 0.5 秒
    })
    // .catch() 处理 Promise 失败的情况
    // 如果 SVG 加载过程中出现任何错误，这个回调函数会被执行
    // 详细文档: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch
    .catch(error => {
      // 输出错误信息到控制台
      // error 参数包含了错误的详细信息
      console.error("无法设置动画:", error);
    });
});

/**
 * 设置滚动触发的动画序列
 * 该函数创建一个 GSAP 时间轴，并添加多个动画效果
 * 这些动画会在用户滚动页面时触发
 * GSAP (GreenSock Animation Platform) 是一个强大的 JavaScript 动画库
 * 详细文档: https://greensock.com/docs/
 */
function setAnimationScroll(){
  // 注册 ScrollTrigger 插件，告诉 GSAP 我们要使用滚动触发功能
  // registerPlugin 是 GSAP 的方法，用于注册和激活插件
  // ScrollTrigger 是 GSAP 的一个高级插件，用于创建滚动驱动的动画
  // 详细文档: https://greensock.com/docs/v3/Plugins/ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);
  
  // 创建一个时间轴实例，相当于一个动画容器，可以按顺序放入多个动画
  // timeline 是 GSAP 的方法，用于创建一个时间轴对象
  // 时间轴允许你精确控制多个动画的顺序和时间关系
  // 详细文档: https://greensock.com/docs/v3/GSAP/Timeline
  let runAnimation = gsap.timeline({
    // scrollTrigger 配置决定了动画如何随着页面滚动而播放
    // 这是一个对象，包含了多个控制滚动触发行为的属性
    scrollTrigger: {
     // trigger 指定哪个元素作为触发点，这里是 SVG 容器
     // 当这个元素进入视口时，会触发动画
     // 详细文档: https://greensock.com/docs/v3/Plugins/ScrollTrigger/trigger
     trigger: "#bg_city",
     
     // start 定义动画开始的位置
     // "top top" 表示：当触发元素的顶部碰到视口顶部时开始动画
     // 第一个单词表示触发元素的位置，第二个单词表示视口的位置
     // 详细文档: https://greensock.com/docs/v3/Plugins/ScrollTrigger/start
     start: "top top",
     
     // end 定义动画结束的位置
     // "+=1500" 表示：从开始位置再向下滚动 1500 像素时结束动画
     // += 语法表示相对于开始位置的偏移量
     // 详细文档: https://greensock.com/docs/v3/Plugins/ScrollTrigger/end
     end: "+=1500",
     
     // scrub 设为 true 表示动画进度会跟随滚动位置
     // 用户向下滚动，动画前进；向上滚动，动画倒退
     // 这创建了一种"拖拽"效果，动画进度与滚动位置直接关联
     // 详细文档: https://greensock.com/docs/v3/Plugins/ScrollTrigger/scrub
     scrub: true,
     
     // pin 设为 true 表示在动画播放期间，触发元素会固定在视口中
     // 这样用户滚动时，元素不会离开屏幕，只有动画在变化
     // 这创建了一种"视差"效果，内容固定而动画变化
     // 详细文档: https://greensock.com/docs/v3/Plugins/ScrollTrigger/pin
     pin: true,
    }
  });
  
  // 添加第一组动画（SVG 整体效果）
  // add 方法用于向时间轴添加一组同时播放的动画
  // 详细文档: https://greensock.com/docs/v3/GSAP/Timeline/add()
  runAnimation.add([
    // 将 SVG 放大到 1.5 倍，持续 2 秒
    // gsap.to 创建一个从当前状态到指定状态的动画
    // 第一个参数是目标元素的选择器，第二个参数是动画属性对象
    // 详细文档: https://greensock.com/docs/v3/GSAP/gsap.to()
    gsap.to("#bg_city svg", {
      // scale 属性控制元素的缩放比例，1.5 表示放大到原始大小的 1.5 倍
      scale: 1.5,
      // duration 属性定义动画持续的时间，单位是秒
      // 在滚动触发的动画中，这个值会影响动画的"速度"而非实际持续时间
      duration: 2
    }),
    // 将 full_city 元素淡出，持续 1 秒
    // 这个动画会与上面的放大动画同时进行
    gsap.to("#full_city", {
      // opacity 属性控制元素的透明度，0 表示完全透明（不可见）
      opacity: 0,
      // 这个动画的持续时间是 1 秒，比上面的放大动画短
      duration: 1
    }),
  ])
  // 添加第二组动画（建筑外部元素）
  // 链式调用 add 方法，这组动画会在第一组动画完成后开始
  .add([
    // 将 building_top 元素向上移动并淡出
    gsap.to("#building_top", {
      // y 属性控制元素在垂直方向上的位移，负值表示向上移动
      // -200 表示向上移动 200 像素
      y: -200,
      // 同时将元素淡出（透明度变为 0）
      opacity: 0,
      // 动画持续 2 秒
      duration: 2
    }),
    // 将 wall_side 元素向左移动并淡出
    gsap.to("#wall_side", {
      // 动画持续 2 秒
      duration: 2,
      // x 属性控制元素在水平方向上的位移，负值表示向左移动
      // -200 表示向左移动 200 像素
      x: -200,
      // 同时将元素淡出
      opacity: 0
    }),
    // 将 wall_front 元素向右下移动并淡出
    gsap.to("#wall_front", {
      // 动画持续 2 秒
      duration: 2,
      // 向右移动 200 像素
      x: 200, 
      // 向下移动 200 像素
      y: 200,
      // 同时将元素淡出
      opacity: 0
    })
  ])
  // 添加第三组动画（建筑内部元素）
  // 这组动画会在第二组动画完成后开始
  .add([
    // 将 interior_wall_side 元素向左移动并淡出
    gsap.to("#interior_wall_side", {
      // 动画持续 2 秒
      duration: 2,
      // 向左移动 200 像素
      x: -200,
      // 同时将元素淡出
      opacity: 0
    }),
    // 将 interior_wall_top 元素向上移动并淡出
    gsap.to("#interior_wall_top", {
      // 动画持续 2 秒
      duration: 2,
      // 向上移动 200 像素
      y: -200,
      // 同时将元素淡出
      opacity: 0
    }),
    // 将 interior_wall_side_2 元素淡出
    gsap.to("#interior_wall_side_2", {
      // 动画持续 2 秒
      duration: 2,
      // 只改变透明度，不移动位置
      opacity: 0
    }),
    // 将 interior_wall_front 元素淡出
    gsap.to("#interior_wall_front", {
      // 动画持续 2 秒
      duration: 2,
      // 只改变透明度，不移动位置
      opacity: 0
    })
  ]);
  // 整个动画序列结束
  // 当用户滚动页面时，这些动画会按照定义的顺序和时间依次播放
  // 由于设置了 scrub: true，动画进度会与滚动位置直接关联
}

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
