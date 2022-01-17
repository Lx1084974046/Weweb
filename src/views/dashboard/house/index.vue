<template>
  <div class="house-icon">
    <img class="logo-img" src="../../../assets/icon/home-icon.png" alt="" />
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from 'vue';
export default {
  name: '',
  setup() {
    const state = reactive({});
    onMounted(() => {});
    return {
      ...toRefs(state)
    };
  }
};
</script>
<style lang="less" scoped>
@import './index.less';
</style>