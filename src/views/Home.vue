<template>
  <div class="welcome">
    <House />
  </div>
</template>

<script>
import House from '../views/dashboard/house/index';
import { reactive, toRefs, onMounted } from 'vue';
export default {
  name: '',
  components: { House },
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
.welcome {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>