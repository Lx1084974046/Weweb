<template>
  <div class="activity-container">
    <div class="box box1">
      <img
        src="https://ossweb-img.qq.com/upload/adw/image/221/20211130/82879bd478d2efb0639942b82c10afb3.jpeg"
        alt=""
      /><span>商场道具</span>
    </div>
    <div class="box box2">
      <img
        src="https://ossweb-img.qq.com/upload/adw/image/221/20210916/f16248cd1f244cfb8627209d0aadbf82.jpeg"
        alt=""
      /><span>英雄级武器</span>
    </div>
    <div class="box box3">
      <img
        src="https://ossweb-img.qq.com/upload/adw/image/221/20210923/fc12f2f73a3a2b2a4c29a35d1dc3e452.jpeg"
        alt=""
      /><span>稀有道具</span>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from 'vue';
export default {
  name: '',
  setup() {
    const state = reactive({});
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
.activity-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: flex-start;
  padding: 10px;
  overflow-y: auto;
  .box {
    width: 32%;
    height: 48%;
    background-color: rgba(0, 0, 0, 0.5);
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    img {
      width: 100%;
      height: 70%;
    }
    span {
      width: 100%;
      height: 30%;
      display: flex;
      align-items: center;
      font-size: 14px;
      color: #fff;
      padding: 0 6px;
      box-sizing: border-box;
    }
  }
}
</style>