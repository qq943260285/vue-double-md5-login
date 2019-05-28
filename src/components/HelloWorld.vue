<template>
  <div class="hello">
    <h1>{{ msg }}{{md5}}</h1>
    <h2>{{info}}</h2>
    <div style='height: 500px;background-color: aqua'></div>
    <div style='height: 500px;background-color: aquamarine'></div>
    <input @blur.prevent="inputLoseFocus"/>
    <button @click='get401'>请求</button>
  </div>
</template>

<script>
  import md5 from 'md5';
  import api from '@/constant/api'

  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        md5: md5('xyzs'),
        info:"---"
      }
    },
    methods: {
      get401() {
        this.axios.get(api.get401.url).then(function (response) {
          console.log(response);
        })
      },
      inputLoseFocus() {
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 100);
      },
    },
    mounted: function () {
      // //获取原窗口的高度
      // var originalHeight=document.documentElement.clientHeight ||document.body.clientHeight;
      // window.onresize=function(){
      //   //键盘弹起与隐藏都会引起窗口的高度发生变化
      //   var resizeHeight=document.documentElement.clientHeight || document.body.clientHeight;
      //   if(resizeHeight-0<originalHeight-0){
      //     //当软键盘弹起，在此处操作
      //     this.info='软键盘弹起'
      //   }else{
      //     //当软键盘收起，在此处操作
      //     this.info='当软键盘收起'
      //   }
      // }
    },


  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
