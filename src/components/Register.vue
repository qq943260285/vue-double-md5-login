<template>
  <div id="Register">

    <el-row>
      <el-col :xs="2" :sm="5" :md="6" :lg="8" :xl="9">
        <div class="grid-content "></div>
      </el-col>
      <el-col :xs="20" :sm="14" :md="12" :lg="8" :xl="6">
        <el-card class="box-card" shadow="hover">
          <div style='text-align:center'>
            <img src='http://iph.href.lu/150x64?text=注册logo&fg=fff&bg=92B59A'>
          </div>
          <div>

            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width=0>
              <el-form-item prop="name">
                <el-input
                  class="input-var"
                  placeholder="用户名"
                  v-model="ruleForm.name"
                  clearable>
                  <i slot="prefix" class="el-input__icon el-icon-user"></i>
                </el-input>
              </el-form-item>


              <el-form-item prop="password">
                <el-input
                  class="input-var"
                  placeholder="请输入密码"
                  v-model="ruleForm.password"
                  show-password>
                  <i slot="prefix" class="el-input__icon el-icon-lock"></i>
                </el-input>
              </el-form-item>

              <el-form-item prop="checkPassword">
                <el-input
                  class="input-var"
                  placeholder="请确认密码"
                  v-model="ruleForm.checkPassword"
                  show-password>
                  <i slot="prefix" class="el-input__icon el-icon-lock"></i>
                </el-input>
              </el-form-item>

              <!--<el-form-item prop="mobile">-->
              <!--<el-input-->
              <!--class="input-var"-->
              <!--placeholder="手机"-->
              <!--v-model="ruleForm.mobile"-->
              <!--clearable>-->
              <!--<i slot="prefix" class="el-input__icon el-icon-mobile-phone"></i>-->
              <!--</el-input>-->
              <!--</el-form-item>-->

              <el-form-item prop="email">
                <el-input
                  class="input-var"
                  placeholder="邮箱"
                  v-model="ruleForm.email"
                  clearable>
                  <i slot="prefix" class="el-input__icon el-icon-message"></i>
                </el-input>
              </el-form-item>

              <el-form-item prop="code">
                <el-input
                  class="input-var"
                  placeholder="验证码"
                  v-model="ruleForm.code"
                  clearable>
                  <i slot="prefix" class="el-input__icon el-icon-key"></i>
                </el-input>
              </el-form-item>

              <el-form-item>
                <el-button type="success" class='input-btn' @click='register("ruleForm")'>注册</el-button>
                <el-button type="info" class='input-btn' @click='login'>已有账户</el-button>
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
    name: "Register",
    data() {
      return {
        ruleForm: {
          name: "",
          password: "",
          checkPassword: "",
          mobile: "",
          email: "",
          code: ""
        },
        rules: {
          name: [
            {
              validator: (rule, value, callback) => {
                console.log(regexp.MOBILE_REGEXP.test(value), value)
                if (value === '') {
                  callback(new Error('请输入用户名'));
                } else if (!regexp.USER_NAME_REGEXP.test(value)) {
                  callback(new Error('请输入正确的用户名[数字、字母、-、_，4-16位]'));
                } else if (regexp.MOBILE_REGEXP.test(value)) {
                  callback(new Error('用户名不能为手机'));
                }
                else {
                  this.axios({
                    method: api.existname.type,
                    url: api.existname.url,
                    params: {
                      name: value
                    }
                  })
                    .then((response) => {
                      console.log(response)
                      if (response.data) {
                        console.log(response.data)
                        switch (response.data.code) {
                          case '200':
                            if(response.data.data)
                              callback(new Error('用户名已存在'));
                            else
                            callback();
                            break
                          case '500':
                            callback(new Error('服务器出错'));
                            break;
                          default:
                            callback();
                        }
                      }
                    })
                    .catch((error) => {
                      this.$message.error('请求出错了哦');
                    });


                }
              },
              trigger: ['change']
            },
            // {
            //   validator: (rule, value, callback) => {
            //     if (value === '') {
            //       callback(new Error('请输入用户名'));
            //     } else if (!regexp.USER_NAME_REGEXP.test(value)) {
            //       callback(new Error('请输入正确的用户名[4-16]'));
            //     } else {
            //       callback();
            //     }
            //   },
            //   trigger: ['blur']
            // }
          ],
          password: [
            {
              validator: (rule, value, callback) => {
                if (value === '') {
                  callback(new Error('请输入密码'));
                } else {
                  if (this.ruleForm.checkPass !== '') {
                    this.$refs['ruleForm'].validateField('checkPassword');
                  }
                  callback();
                }
              },
              trigger: ['blur', 'change']
            }
          ],
          checkPassword: [
            {
              validator: (rule, value, callback) => {
                if (value === '') {
                  callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.password) {
                  callback(new Error('两次输入密码不一致'));
                } else {
                  callback();
                }
              },
              trigger: ['blur', 'change']
            }
          ],
          // mobile: [
          //   {
          //     validator: (rule, value, callback) => {
          //       if (value === '') {
          //         callback(new Error('请输入手机'));
          //       } else if (!regexp.MOBILE_REGEXP.test(value)) {
          //         callback(new Error('请输入正确的手机'));
          //       } else {
          //         callback();
          //       }
          //     },
          //     trigger: ['blur', 'change']
          //   }
          // ],
          email: [
            {
              validator: (rule, value, callback) => {
                if (value === '') {
                  callback(new Error('请输入邮箱'));
                } else if (!regexp.EMAIL_REGEXP.test(value)) {
                  callback(new Error('请输入正确的邮箱'));
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
                console.log(value)
                if (value === '') {
                  callback(new Error('请输入验证码'));
                } else if (!regexp.CODE_REGEXP.test(value)) {
                  callback(new Error('请输入正确的验证码'));
                } else {
                  callback();
                }
              },
              trigger: ['blur', 'change']
            }
          ],
        }
      }
    },
    methods: {
      login() {
        this.$router.push({path: "/login"})
      },
      register(formName) {
        console.log(this.$refs[formName])
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.axios({
              method: api.register.type,
              url: api.register.url,
              data: {
                name: this.ruleForm.name,
                pass: md5(this.ruleForm.checkPassword),
                email: this.ruleForm.email,
                code: this.ruleForm.code
              }
            })
              .then((response) => {
                console.log(response)
                if (response.data) {
                  console.log(response.data)
                  switch (response.data.code) {
                    case '200':
                      this.$message({
                        message: '注册成功',
                        type: 'success'
                      });
                      this.$router.push({path: "/login"})
                      break
                    case '500':
                      this.$message({
                        message: '注册失败',
                        type: 'warning'
                      })
                      break;
                    default:
                      this.$message({
                        message: response.data.msg,
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
    }

  }
</script>

<style scoped>

  #Register {
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
