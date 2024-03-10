<template>
  <div id="index">
    <dv-full-screen-container class="bg">
      <dv-loading v-if="loading">Loading...</dv-loading>
      <!--     最外层-->
      <div v-else class="host-body">

        <div class="d-flex jc-center">
          <dv-decoration-10 style="width:33.3%;height:.0625rem;" />
          <div class="d-flex jc-center">
            <dv-decoration-8 :color="['#568aea', '#000000']" style="width:2.5rem;height:.625rem;" />
            <div class="title">
              <span class="title-text">数据可视化平台</span>
              <dv-decoration-6
                  class="title-bototm"
                  :reverse="true"
                  :color="['#50e3c2', '#67a1e5']"
                  style="width:3.125rem;height:.1rem;"
              />
            </div>
            <dv-decoration-8
                :reverse="true"
                :color="['#568aea', '#000000']"
                style="width:2.5rem;height:.625rem;"
            />
          </div>
          <dv-decoration-10 style="width:33.3%;height:.0625rem; transform: rotateY(180deg);" />
        </div>

        <!-- 标题选项层-->
        <div class="d-flex jc-between px-2">
          <div class="d-flex" style="width: 40%">
            <div
                class="react-right ml-4"
                style="width: 6.25rem; text-align: left;background-color: #0f1325;"
                @click="currentTab = 0"
                :class="{ 'active': currentTab === 0 }"
            >
              <span class="react-before"></span>
              <span class="text" style="margin-left: 70px;">数据分析</span>
            </div>
            <div class="react-right ml-3" style="background-color: #0f1325;"
                 @click="currentTab = 1"
                 :class="{ 'active': currentTab === 1 }"
            >
              <span class="text">滚动预测</span>
            </div>
          </div>
          <div style="width: 40%" class="d-flex"
               @click="currentTab = 2"
               :class="{ 'active': currentTab === 2 }"
          >
            <div class="react-left  mr-3">
              <span class="text fw-b">接口说明文档</span>
            </div>
            <div
                class="react-left mr-4"
                style="width: 6.25rem; background-color: #0f1325; text-align: right;"
            >
              <span class="react-after"></span>
              <span class="text">{{currentDateTime}}</span>
            </div>
          </div>
        </div>
        <!-- 身体部分1-->
        <div class="body-box" v-if="currentTab === 0">
          <!-- 第三行数据 -->
          <div class="content-box">
            <div>
              <dv-border-box-12>
                <centerLeft1 />
              </dv-border-box-12>
            </div>

            <div>
              <center />
            </div>
            <!-- 中间 -->

            <div>
              <dv-border-box-13>
                <centerRight1 />
              </dv-border-box-13>
            </div>
          </div>

          <!-- 第四行数据 -->
          <div class="bototm-box">
            <dv-border-box-13>
              <bottomLeft />
            </dv-border-box-13>

          </div>
        </div>
        <!-- 身体部分2-->
        <div class="body-box" v-if="currentTab === 1">
          <!-- 身体部分3-->
          <!-- 第四行数据 -->
          <div class="bototm-box2">
            <dv-border-box-13>
              <bottomLeft />
            </dv-border-box-13>

          </div>
        </div>
        <div class="body-box" v-if="currentTab === 2">

        </div>




      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      loading: false,
      error: ''
    }
  },
  methods: {
    async login() {
      // 显示加载中提示
      this.loading = true

      try {
        // 发送登录请求，验证用户名和密码是否正确
        if (this.username !== 'admin' || this.password !== '123456') {
          // 设置错误提示
          this.error = '用户名或密码不正确'
        } else {
          // 如果验证成功，使用 this.$router.push('/') 方法跳转到首页
        }
      } catch (error) {
        // ...
      } finally {
        // 隐藏加载中提示
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
@import "../assets/scss/index.scss";
/*.login {*/
/*  display: flex;*/
/*  flex-direction: column;*/
/*  align-items: center;*/
/*  margin-top: 50px;*/
/*  background-image: url("/src/assets/pageBg.png");*/
/*  background-size: cover;*/
/*}*/
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 100%;
}
label {
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: bold;
}
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 16px;
  margin-bottom: 20px;
}
input[type="text"]:focus,
input[type="password"]:focus {
  border-bottom: 2px solid #007aff;
  outline: none;
}
button[type="submit"] {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #007aff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}
button[type="submit"]:hover {
  background-color: #0062cc;
}
.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}
.spinner {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 5px solid #ccc;
  border-top-color: #007aff;
  animation: spin 0.8s linear infinite;
}
.text {
  margin-top: 10px;
  font-size: 16px;
}
.error {
  margin-top: 10px;
  color: #ff0000;
  font-size: 16px;
}
</style>
