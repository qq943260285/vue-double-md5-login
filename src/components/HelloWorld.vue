<template>
  <div class="hello">
    <h1>{{ msg }}{{md5}}</h1>
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
        md5: md5('xyzs')
      }
    },
    methods: {
      get401() {
        this.axios.get(api.get401.url).then(function (response) {
          console.log(response);
        })
      }
    }

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
