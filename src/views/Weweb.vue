<template>
  <div class="weweb-container">
    <div class="header"></div>
    <div class="box-content">
      <div class="a-slider">
        <div
          :class="currentNav === index ? 'nav nav-active' : 'nav'"
          v-for="(item, index) in navList"
          :key="item"
          @click="changeNav(index)"
        >
          <Icon :icon="item.icon" />
          <span>{{ item.title }}</span>
        </div>
      </div>
      <div class="content">
        <Home />
      </div>
    </div>
  </div>
</template>

<script>
import Home from '../components/weweb/Home';
import Icon from '@/layout/icon';
import { reactive, toRefs, onMounted, computed } from 'vue';
export default {
  name: '',
  components: {
    Icon,
    Home
  },
  setup() {
    const state = reactive({
      navList: [
        { title: '首页', icon: 'home-4-line', isShow: true },
        { title: '介绍', icon: 'newspaper-line', isShow: true },
        { title: '活动', icon: 'gift-2-line', isShow: true },
        { title: '商城', icon: 'money-cny-circle-line', isShow: false },
        { title: '视频', icon: 'play-circle-line', isShow: true }
      ]
    });
    const stateInfo = reactive({
      currentNav: 0,
      navList: computed(() => state.navList.filter((item) => item.isShow))
    });
    const changeNav = (index) => {
      stateInfo.currentNav = index;
    };
    window.addEventListener(
      'orientationchange',
      function () {
        if (window.orientation == 0 || window.orientation == 180)
          alert('请使用手机横屏访问');
      },
      false
    );
    onMounted(() => {});
    return {
      changeNav,
      ...toRefs(stateInfo)
    };
  }
};
</script>
<style lang="less" scoped>
.weweb-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: linear-gradient(
    160deg,
    #191970 20%,
    rgba(0, 0, 0, 0.9) 80%
  );

  .header {
    width: 100%;
    height: 18%;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0px 1px 10px rgba(0, 191, 255, 0.8);
    z-index: 9;
  }
  .box-content {
    width: 100%;
    height: 82%;
    display: flex;
    justify-content: space-between;
    .a-slider {
      width: 18%;
      height: 100%;
      background: rgba(0, 0, 0, 0.3);
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      .nav {
        flex: 1;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        color: #fff;
        box-sizing: content-box;
        border-bottom: 2px solid #000;
      }
      .nav-active {
        border-right: 2px solid rgba(0, 191, 255);
        color: rgb(0, 191, 255);
      }
    }
    .content {
      width: 80%;
      height: 100%;
    }
  }
}
</style>