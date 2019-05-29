<template>
  <div id='Login'>
    <el-row>
      <el-col :xs="2" :sm="5" :md="6" :lg="8" :xl="9">
        <div class="grid-content "></div>
      </el-col>
      <el-col :xs="20" :sm="14" :md="12" :lg="8" :xl="6">
        <el-card class="box-card" shadow="hover">
          <div style='text-align:center'>
            <img src='http://iph.href.lu/150x64?text=登录logo&fg=fff&bg=92B59A'>
          </div>
          <div>

            <el-form :rules="rules" :model='ruleForm' ref="ruleForm">

              <el-form-item prop="account" label-width=0>
                <el-input class="input-var" placeholder="用户名/手机/邮箱" v-model="ruleForm.account" clearable>
                  <i slot="prefix" class="el-input__icon el-icon-user"></i>
                </el-input>
              </el-form-item>

              <el-form-item prop="password" label-width=0>
                <el-input class="input-var" placeholder="请输入密码" v-model="ruleForm.password" show-password>
                  <i slot="prefix" class="el-input__icon el-icon-lock"></i>
                </el-input>
              </el-form-item>

              <el-form-item label-width=0>
                <el-button type="success" class='input-btn' @click="login('ruleForm')">登录</el-button>
                <el-button type="info" class='input-btn' @click='register'>注册</el-button>
              </el-form-item>

            </el-form>

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

  </div>
</template>

<script>
  import 'element-ui/lib/theme-chalk/display.css';
  import md5 from 'md5';
  import api from '@/constant/api'
  import regexp from '@/constant/regexp'

  export default {
    name: "Login",
    data() {
      return {
        ruleForm: {
          account: "",
          password: "",
          code: '',
        },
        rules: {
          account: [
            {
              validator: (rule, value, callback) => {
                if (value === '') {
                  callback(new Error('请输入用户名/手机/邮箱'));
                } else if (!(regexp.MOBILE_REGEXP.test(value) || regexp.EMAIL_REGEXP.test(value) || regexp.USER_NAME_REGEXP.test(value))) {
                  callback(new Error('请输入正确的用户名[4-16]/手机/邮箱'));
                } else {
                  callback();
                }
              },
              trigger: ['blur', 'change']
            }
          ],
          password: [
            {
              validator: (rule, value, callback) => {
                if (value === '') {
                  callback(new Error('请输入密码'));
                } else {
                  callback();
                }
              },
              trigger: ['blur', 'change']
            }
          ],
          code: [
            {
              validator: (rule, value, callback) => {
                callback();
              }
              , trigger: 'blur'
            }
          ]
        }
      }
    },
    methods: {
      register: function () {
        // console.log("123")
        this.$router.push({path: '/register'});
      },
      login(formName) {
        console.log(this.$refs[formName])
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.axios({
              method: api.login.type,
              url: api.login.url,
              data: {
                account: this.ruleForm.account,
                pass: md5(this.ruleForm.password),
                code: this.ruleForm.code
              }
            })
              .then((response) => {
                console.log(response)
                if (response.data) {
                  switch (response.data.code) {
                    case '200':
                      this.$message({
                        message: '登录成功',
                        type: 'success'
                      });
                      break
                    case '500':
                      this.$message({
                        message: '登录失败，请输入正确的账户或密码',
                        type: 'warning'
                      })
                      break;
                    default:
                      this.$message({
                        message: '其他',
                        type: 'warning'
                      })
                  }
                }
              })
              .catch((error) => {
                this.$message.error('请求出错了哦');
              });

          }
          else {
            this.$message({
              message: '请输入正确信息',
              type: 'warning'
            })
            return false;
          }
        });
      }
      // gobackTop() {
      //   window.scroll(0, 0);
      // }
    }
  }
</script>

<style scoped>
  #Login{
    height: 100%;
    width: 100%;
  }
  .box-card {
    border-radius: 10px;
    background-color: #ffffff99;
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
