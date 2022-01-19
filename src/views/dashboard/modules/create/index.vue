<template>
  <div>创建</div>
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
<style scoped>
</style>