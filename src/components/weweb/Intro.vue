<template>
  <div class="intro-container">暂无数据</div>
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
.intro-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ccc;
}
</style>