<template>
  <div class="config-box">
    <div class="config-data">
      <a-form ref="formRef" :model="formData">
        <a-form-item label="一级菜单项" labelAlign="left" name="menu">
          <div class="switch-list">
            <div class="switch">
              <span>首页</span>
              <a-switch v-model:checked="formData.menuList[0]" />
            </div>
            <div class="switch">
              <span>介绍</span>
              <a-switch v-model:checked="formData.menuList[1]" />
            </div>
            <div class="switch">
              <span>活动</span>
              <a-switch v-model:checked="formData.menuList[2]" />
            </div>
            <div class="switch">
              <span>视频</span>
              <a-switch v-model:checked="formData.menuList[3]" />
            </div>
            <div class="switch">
              <span>商城</span>
              <a-switch v-model:checked="formData.menuList[4]" />
            </div>
          </div>
        </a-form-item>
        <a-tabs v-model:activeKey="activeKey">
          <a-tab-pane key="1" tab="首页" v-if="formData.menuList[0]"
            ><Carousel
              v-model:carouselImg="formData.carouselImg"
              v-model:newsList="formData.newsList"
          /></a-tab-pane>
          <a-tab-pane
            key="2"
            tab="介绍"
            force-render
            v-if="formData.menuList[1]"
            >Content of Tab Pane 2</a-tab-pane
          >
          <a-tab-pane key="3" tab="活动" v-if="formData.menuList[2]"
            >Content of Tab Pane 3</a-tab-pane
          >
          <a-tab-pane key="4" tab="视频" v-if="formData.menuList[3]"
            ><Video v-model:videoList="formData.videoList"
          /></a-tab-pane>
          <a-tab-pane key="5" tab="商城" v-if="formData.menuList[4]"
            >Content of Tab Pane 3</a-tab-pane
          >
        </a-tabs>
      </a-form>
    </div>
  </div>
</template>

<script>
import Carousel from './Carousel';
import Video from './Video';
import { reactive, toRefs, ref, onMounted } from 'vue';
export default {
  name: '',
  components: {
    Carousel,
    Video
  },
  setup() {
    const formRef = ref(null);
    const state = reactive({
      activeKey: '1',
      formData: {
        menuList: [true, true, true, true, false],
        carouselImg: [{ value: '' }],
        newsList: [{ title: '', url: '' }],
        videoList: [{ videoSrc: '', url: '', text: '' }]
      }
    });
    onMounted(() => {
      console.log('3.-组件挂载到页面之后执行-------onMounted');
    });
    return {
      ...toRefs(state)
    };
  }
};
</script>
<style lang="less" scoped>
@import './index.less';
</style>