<template>
  <a-layout-header class="header" style="background: #fff">
    <menu-unfold-outlined
      v-if="collapsed"
      class="trigger"
      @click="changeCollapsed"
    />
    <menu-fold-outlined v-else class="trigger" @click="changeCollapsed" />
  </a-layout-header>
</template>

<script>
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue';
import { reactive, toRefs, onMounted } from 'vue';
export default {
  name: '',
  props: ['collapsed'],
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined
  },
  setup(props, { emit }) {
    const state = reactive({});
    const changeCollapsed = () => {
      emit('changeCollapsed');
    };
    onMounted(() => {});
    return {
      changeCollapsed,
      ...toRefs(state)
    };
  }
};
</script>
<style lang='less' scoped>
.header {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0;
  padding-left: 20px;
}
</style>