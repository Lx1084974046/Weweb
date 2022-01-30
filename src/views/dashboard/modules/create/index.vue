<template>
  <div class="module-create">
    <div class="create-btn">
      <plus-outlined />
      <span>新增社区模版</span>
    </div>
  </div>
</template>

<script>
import { PlusOutlined} from '@ant-design/icons-vue';
import { reactive, toRefs, onMounted } from 'vue';
export default {
  name: '',
  components:{
    PlusOutlined
  },
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
.module-create{
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: flex-start;
  .create-btn{
    width: 300px;
    height: 200px;
    border: 1px dashed #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    span{
      margin-left: 2px;
    }
  }
}
</style>