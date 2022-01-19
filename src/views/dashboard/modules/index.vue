<template>
  <router-view></router-view>
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
<style scoped>
</style>