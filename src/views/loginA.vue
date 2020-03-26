<template>
  <div class="login-page-a">
    <div class="bg-box">
      <div class="login-box" v-show="isLogin">
        <div class="login-from-box">
          <p class="type-title">
            <span class="login-type-picker type-picker">登录</span>
            <span class="type-bar">|</span>
            <span class="regisn-type-picker type-picker" @click="regisnOrLogin(0)">新用户注册</span>
          </p>
          <div class="form-p">
            <div class="from-input-item user-input">
              <input type="text" class="form-input" placeholder="用户名/手机号" maxlength="11" />
            </div>

            <div class="from-input-item pwd-input">
              <input type="text" class="form-input" placeholder="请输入您的密码" maxlength="12" />
            </div>

            <div class="from-input-item graphic-input">
              <input type="text" class="form-input" placeholder="" maxlength="4" />
            </div>
            <a class="login-btn">登录</a>
          </div>
          <div class="tip-p">
            <input type="checkbox" class="tip-check" v-model="remenber"/>
            <span>记住密码</span>
            <a class="forget-btn">忘记密码？</a>
          </div>
        </div>
        <div class="user-picker-box">
          <div class="user-picker-item" @click="userTypePick(0)" :class="userType === 0 ? 'active' : ''">
            <div class="icon-box">
              <div class="gov-icon icon"></div>
            </div>
            <p>政府人员</p>
          </div>
          <div class="user-picker-item" @click="userTypePick(1)" :class="userType === 1 ? 'active' : ''">
            <div class="icon-box">
              <div class="worker-icon icon"></div>
            </div>
            <p>维护人员</p>
          </div>
          <div class="user-picker-item" @click="userTypePick(2)" :class="userType === 2 ? 'active' : ''">
            <div class="icon-box">
              <div class="user-icon icon"></div>
            </div>
            <p>普通用户</p>
          </div>
        </div>
      </div>
      <div class="register-box" v-show="!isLogin">
        <p class="type-title">
          <span class="login-type-picker type-picker" @click="regisnOrLogin(1)">登录</span>
          <span class="type-bar">|</span>
          <span class="regisn-type-picker type-picker">新用户注册</span>
        </p>
        <div class="form-p">
          <div class="form-label notice-label">用户名</div>
          <input type="text" class="form-input" placeholder="请输入用户名" maxlength="8" />

          <div class="form-label notice-label">手机号</div>
          <input type="text" class="form-input" placeholder="请输入手机号" maxlength="11" />

          <div class="form-label notice-label">验证码</div>
          <input type="text" class="form-input margin-rt-5" placeholder="请输入验证码" maxlength="4" />

          <div class="graphic-box"></div>
          <a class="graphic-reload">刷新</a>
        </div>
        <div class="form-p">
          <div class="form-label notice-label">登陆密码</div>
          <input type="password" class="form-input pwd-input" placeholder="请填写6-12位密码" maxlength="12" />

          <div class="form-label notice-label">确认密码</div>
          <input type="password" class="form-input pwd-input margin-rt-0" placeholder="请再次输入密码" maxlength="12" />
        </div>
        <div class="tip-p">
          <input type="checkbox" class="tip-check" v-model="remenber"/>
          <span>阅读并同意</span>
          <a class="agreement">《平台协议》</a>
          <div class="register-btn">注册</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loginA',
  data () {
    return {
      isLogin: true,
      userType: 1,
      remenber: false // 记住密码？
    }
  },
  mounted () {
    this.setRem()
    window.addEventListener('load', this.setRem)
    window.addEventListener('resize', this.setRem)
  },
  methods: {
    setRem () {
      var whdef = 100 / 1920 // 表示1920的设计图,使用100PX的默认值
      var bodyWidth = document.body.clientWidth // 当前窗口的宽度
      var rem = bodyWidth * whdef // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
      document.getElementsByTagName('html')[0].style.fontSize = rem + 'px'
    },
    userTypePick (type) {
      switch (type) {
        case 0:
          this.userType = 0
          break
        case 1:
          this.userType = 1
          break
        case 2:
          this.userType = 2
      }
    },
    regisnOrLogin (type) {
      switch (type) {
        case 0:
          this.isLogin = false
          break
        case 1:
          this.isLogin = true
      }
    }
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
.login-page-a{
  font-size: 100px;
  width: 100%;
  min-height: 100%;
  background-color: #0b213b;
  position: absolute;
  .bg-box{
    position: relative;
    width: 100%;
    height: 10.8rem;
    background: url('~@/assets/img/loginA/login-pageA-bg.png') no-repeat;
    background-size: 100% 100%;
    // 登录和注册公共的样式
    .type-title{
      height: .36rem;
      line-height: .36rem;
      text-align: left;
      font-size: .24rem;
    }
    .form-p{
      height: .53rem;
      line-height: .53rem;
      margin-top: .32rem;
      font-size: 0;
      .form-label{
        display: inline-block;
        font-size: .24rem;
        &.notice-label{
          padding-left: .16rem;
          position: relative;
          &::before{
            position: absolute;
            display: block;
            content: '*';
            color: #fe313c;
            left: 0;
          }
        }
      }
      .form-input{
        vertical-align: top;
        display: inline-block;
        padding-left: .2rem;
        height: .53rem;
        border: none;
        border-radius: .04rem;
        font-size: .22rem;
        color: #fff;
        background: rgba(255, 255, 255, 20%);
        margin-left: .08rem;
      }
      .form-input::placeholder{
        font-weight: 300;
        font-size: .22rem;
        color: #fff;
      }
    }
    .register-box{
      position: absolute;
      left: 2.73rem;
      top: 3.54rem;
      width: 13.76rem;
      height: 5.63rem;
      background: url('~@/assets/img/loginA/loginA-box-bg1.png') no-repeat;
      background-size: 100% 100%;
      padding-top: 1.38rem;
      padding-left: .83rem;
      color: $loginColorA;
      .type-title{
        .type-picker{
          cursor: pointer;
          margin: 0 .18rem;
        }
        .regisn-type-picker{
          color: $loginActiveColorA;
          font-size: .22rem;
        }
        .type-bar{
          color: $loginActiveColorA;
        }
      }
      .form-p{
        .form-input{
          width: 2.35rem;
          margin-right: .2rem;
          &.margin-rt-5{
            margin-right: .05rem;
          }
          &.pwd-input{
            width: 4.2rem;
            margin-right: 0.68rem;
          }
          &.margin-rt-0{
            margin-right: 0;
          }
        }
        .form-input::placeholder{
          font-weight: 300;
          font-size: .22rem;
          color: #fff;
        }
        .graphic-box{
          display: inline-block;
          vertical-align: top;
          width: 1.1rem;
          height: .53rem;
          border-radius: .04rem;
          background: rgba(255, 255, 255, 0.2);
        }
        .graphic-reload{
          font-size: .22rem;
          color: $loginActiveColorA;
          margin-left: .05rem;
        }
      }
      .tip-p{
        position: relative;
        margin-top: .23rem;
        font-size: .22rem;
        color: #fff;
        font-weight: 300;
        .agreement{
          color: $loginActiveColorA;
        }
        .tip-check{
          // position: relative;
          // display: inline-block;
          // width: .2rem;
          // height: .2rem;
          border: .01rem solid #b8c2ca;
          background-color: #fff;
          vertical-align: middle;
          border-radius: .01rem;
        }
        .register-btn{
          position: absolute;
          width: 1.68rem;
          height: .53rem;
          line-height: .53rem;
          background-color: $loginActiveColorA;
          text-align: center;
          color: #0d245f;
          top: 0;
          right: 1.45rem;
          font-weight: 500;
          font-size: .3rem;
          border-radius: .04rem;
          cursor: pointer;
        }
      }
    }
    .login-box{
      position: absolute;
      left: 2.73rem;
      top: 3.54rem;
      width: 13.76rem;
      height: 5.6rem;
      .login-from-box{
        color: $loginColorA;
        position: absolute;
        width: 100%;
        height: 4.43rem;
        left: 0;
        top: 0;
        background: url('~@/assets/img/loginA/loginA-box-bg2.png') no-repeat;
        background-size: 100% 100%;
        padding-top: 1.38rem;
        padding-left: .83rem;
        .type-title{
          .type-picker{
            cursor: pointer;
            margin: 0 .18rem;
          }
          .regisn-type-picker{
            font-size: .22rem;
          }
          .login-type-picker{
            color: $loginActiveColorA;
          }
          .type-bar{
            color: $loginActiveColorA;
          }
        }
        .form-p{
          .from-input-item{
            vertical-align: top;
            position: relative;
            margin-right: .23rem;
            width: 3.24rem;
            height: .53rem;
            display: inline-block;
            &::after{
              content: '';
              position: absolute;
              display: block;
              left: 0;
              top: 0;
              width: .68rem;
              height: .53rem;
              z-index: 2;
            }
            &.user-input::after{
              background: url('~@/assets/img/loginA/loginA-user-input.png') no-repeat;
              background-position: center center;
              background-size: .23rem .25rem;
            }
            &.pwd-input::after{
              background: url('~@/assets/img/loginA/loginA-pwd-input.png') no-repeat;
              background-position: center center;
              background-size: .21rem .25rem;
            }
            &.graphic-input::after{
              background: url('~@/assets/img/loginA/loginA-graph-input.png') no-repeat;
              background-position: center center;
              background-size: .24rem .26rem;
            }
          }
          .form-input{
            width: 3.24rem;
            padding-left: .68rem;
            margin: 0;
            z-index: 1;
          }
          .login-btn{
            display: inline-block;
            width: 1.68rem;
            height: .53rem;
            line-height: .53rem;
            border-radius: .04rem;
            background-color: $loginActiveColorA;
            color: #0d245f;
            font-size: .3rem;
            text-align: center;
          }
        }
        .tip-p{
          width: 100%;
          margin-top: .24rem;
          height: .32rem;
          line-height: .32rem;
          padding-left: 7.66rem;
          font-size: .22rem;
          color: #e3e3e3;
          .forget-btn{
            margin-left: .3rem;
            color: #e3e3e3;
          }
          .tip-check{
            // position: relative;
            // display: inline-block;
            // width: .2rem;
            // height: .2rem;
            border: .01rem solid #b8c2ca;
            background-color: #fff;
            vertical-align: middle;
            border-radius: .01rem;
          }
        }
      }
      .user-picker-box{
        position: absolute;
        top: 3.95rem;
        left: 0;
        width: 100%;
        height: 1.24rem;
        display: flex;
        justify-content: center;
        align-items: center;
        .user-picker-item{
          position: relative;
          cursor: pointer;
          font-size: .14rem;
          color: #cccccc;
          margin: 0 .5rem;
          .icon-box{
            position: relative;
            overflow: hidden;
            width: .82rem;
            height: .82rem;
            .icon{
              position: absolute;
              left: 0;
              width: .82rem;
              height: .82rem;
            }
            .gov-icon{
              background: url('~@/assets/img/loginA/loginA-goverment-icon.png') no-repeat;
              background-size: .58rem .62rem;
              background-position: center center;
            }
            .worker-icon{
              background: url('~@/assets/img/loginA/loginA-worker-icon.png') no-repeat;
              background-size: .59rem .62rem;
              background-position: center center;
            }
            .user-icon{
              background: url('~@/assets/img/loginA/loginA-user-icon.png') no-repeat;
              background-size: .62rem .58rem;
              background-position: center center;
            }
          }
          &:hover,
          &.active{
            transform: scale(1.2);
            transition: all;
            .icon-box{
              .gov-icon{
                background: url('~@/assets/img/loginA/loginA-goverment-active-icon.png') no-repeat;
                background-size: .58rem .62rem;
                background-position: center center;
              }
              .worker-icon{
                background: url('~@/assets/img/loginA/loginA-worker-active-icon.png') no-repeat;
                background-size: .59rem .62rem;
                background-position: center center;
              }
              .user-icon{
                background: url('~@/assets/img/loginA/loginA-user-active-icon.png') no-repeat;
                background-size: .62rem .58rem;
                background-position: center center;
              }
            }
            p{
              color: $loginActiveColorA;
              text-shadow: 0 0 .15rem $loginActiveColorA;
            }
          }
          p{
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
