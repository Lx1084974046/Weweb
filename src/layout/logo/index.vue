<template>
  <div class="logo-container">
    <div class="icon-logo">
      <img class="logo-img" src="../../assets/icon/aislogo.png" alt="" />
      <span class="logo-title" v-if="!collapsed">Weweb</span>
    </div>
    <div class="game-code">
      <a-select
        v-model:value="gameCode"
        style="width: 100%"
        placeholder="请选择游戏"
        show-search
        :show-arrow="false"
        :defaultActiveFirstOption="true"
        @change="selectChange"
      >
        <template #notFoundContent>
          <span>no data</span>
        </template>
        <a-select-option
          v-for="item in gameCodeList"
          :key="item"
          :value="item.value"
          >{{ item.lable }}</a-select-option
        >
      </a-select>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { ref, reactive, toRefs, onMounted } from 'vue';
export default {
  name: '',
  props: ['collapsed'],
  setup(props, { emit }) {
    const store = useStore();
    const state = reactive({});
    const gameCode = store.state.gameCode;
    const gameCodeList = ref([
      { lable: '王者荣耀', value: 'wangzhe' },
      { lable: '英雄联盟', value: 'lol' },
      { lable: '穿越火线', value: 'cf' }
    ]);
    const selectChange = (value) => {
      localStorage.setItem('gameCode', value);
      emit('upDateMenu');
    };

    onMounted(() => {
      console.log('3.-组件挂载到页面之后执行-------onMounted');
    });
    return { gameCode, gameCodeList, selectChange, ...toRefs(state) };
  }
};
</script>
<style lang="less" scoped>
.logo-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .icon-logo {
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    background-color: black;
    .logo-img {
      width: 42px;
      height: 42px;
    }
    .logo-title {
      padding-left: 5px;
      color: #fff;
      font-size: 30px;
    }
  }
  .game-code {
    width: 100%;
  }
}
</style>