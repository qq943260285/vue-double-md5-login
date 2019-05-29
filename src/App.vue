<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    // 解决安卓手机调出来软键盘，屏幕背景被挤压的问题
    created() {
      // 获取当前可视区域的高度
      const height = document.documentElement.clientHeight;
      // 在页面整体加载完毕时
      window.onload = function () {
        // 把获取到的高度赋值给根div
        document.getElementById('app').style.minHeight = `${height}px`;
      };
    },

  }
</script>

<style>
  html,body{
    margin: 0;
    padding: 0;
    background: url("https://api.xygeng.cn/bing/1920.php") no-repeat;
  }
  #app {
    height: 100%;
    align-items: center;
    justify-content: center;
    width: 100%;
    display: flex;
  }
</style>
