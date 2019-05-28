<template>
  <div id='Login'>
    <el-container>
      <el-header></el-header>
      <el-main>
        <el-row :gutter="10">
          <el-col :xs="2" :sm="5" :md="6" :lg="8" :xl="9">
            <div class="grid-content "></div>
          </el-col>
          <el-col :xs="20" :sm="14" :md="12" :lg="8" :xl="6">
            <el-card class="box-card" shadow="hover">
              <div style='text-align:center'>
                <img src='http://iph.href.lu/150x64?text=登录logo&fg=fff&bg=92B59A'>
              </div>
              <div>
                <el-row class='row-div'>
                  <el-input
                    class="input-var"
                    placeholder="用户名/手机/邮箱"
                    v-model="account"
                    clearable>
                    <i slot="prefix" class="el-input__icon el-icon-user"></i>
                  </el-input>
                </el-row>
                <el-row class='row-div'>
                  <el-input
                    class="input-var"
                    placeholder="请输入密码"
                    v-model="password"
                    show-password>
                    <i slot="prefix" class="el-input__icon el-icon-lock"></i>
                  </el-input>
                </el-row>
                <el-row class='row-div'>
                  <el-col :span="12">
                    <el-button type="info" class='input-btn' @click='register'>注册</el-button>
                  </el-col>
                  <el-col :span="12">
                    <el-button type="success" class='input-btn' @click='login'>登录</el-button>
                  </el-col>
                </el-row>
              </div>
            </el-card>
          </el-col>
          <el-col :xs="2" :sm="5" :md="6" :lg="8" :xl="9">
            <div class="grid-content"></div>
          </el-col>
        </el-row>
        <!--xs、sm、md、lg 和 xl-->
        <!--xs	<768px-->
        <!--sm	≥768px-->
        <!--md	≥992px-->
        <!--lg	≥1200px-->
        <!--xl	≥1920px-->
        <!--hidden-xs-only - 当视口在 xs 尺寸时隐藏-->
        <!--hidden-sm-only - 当视口在 sm 尺寸时隐藏-->
        <!--hidden-sm-and-down - 当视口在 sm 及以下尺寸时隐藏-->
        <!--hidden-sm-and-up - 当视口在 sm 及以上尺寸时隐藏-->
        <!--hidden-md-only - 当视口在 md 尺寸时隐藏-->
        <!--hidden-md-and-down - 当视口在 md 及以下尺寸时隐藏-->
        <!--hidden-md-and-up - 当视口在 md 及以上尺寸时隐藏-->
        <!--hidden-lg-only - 当视口在 lg 尺寸时隐藏-->
        <!--hidden-lg-and-down - 当视口在 lg 及以下尺寸时隐藏-->
        <!--hidden-lg-and-up - 当视口在 lg 及以上尺寸时隐藏-->
        <!--hidden-xl-only - 当视口在 xl 尺寸时隐藏-->

      </el-main>
      <el-footer></el-footer>
    </el-container>


  </div>
</template>

<script>
  import 'element-ui/lib/theme-chalk/display.css';
  import md5 from 'md5';
  import api from '@/constant/api'

  export default {
    name: "Login",
    data() {
      return {
        account: "",
        password: "",
        code: ''
      }
    },
    methods: {
      register: function () {
        console.log("123")
        this.$router.push({path: '/register'});
      },
      login: function () {
        this.axios({
          method: api.login.type,
          url: api.login.url,
          data: {
            account: this.account,
            pass: md5(this.password),
            code: this.code
          }
        }).then(function (response) {
          console.log(response);
        })
          .catch(function (error) {
            console.log(error);
          });
      }
      // gobackTop() {
      //   window.scroll(0, 0);
      // }
    }
  }
</script>

<style scoped>
  .box-card {
    border-radius: 10px

  }

  .row-div {
    margin: 10px 0;
  }

  .input-btn {
    width: 98%;
    margin: 1%;
  }

  .input-var {
    float: left;
  }

  .input-span {
    float: left;
  }

  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
