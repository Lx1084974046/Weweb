<template>
  <div class="module-create">
    <div class="create-btn" @click="showModel">
      <plus-outlined />
      <span>新增社区模版</span>
    </div>
    <a-card
      hoverable
      class="card-item"
      @click="router.push({ name: 'config', query: { id: 456 } })"
    >
      <template #cover>
        <i class="img-logo"></i>
      </template>
      <a-card-meta title="方案一">
        <template #description>
          <div class="desc-box">
            <!-- <a-tag color="purple" class="tag-des">
              <span>创建时间:</span>
              {{ 123 }}
            </a-tag> -->
            <a-tag color="orange" class="tag-des">
              <span>专题Code:</span>
              {{ 'dasdasdasdas' }}
            </a-tag>
          </div>
        </template>
      </a-card-meta>
    </a-card>
    <a-modal
      v-model:visible="modelVisible"
      title="新增社区模版"
      :confirm-loading="confirmLoading"
      cancelText="取消"
      okText="确定"
      @ok="addOkChange"
    >
      <a-form ref="formRef" :model="modalFormState" :rules="rules">
        <a-form-item ref="name" label="微社区名称" name="name">
          <a-input
            v-model:value="modalFormState.name"
            placeholder="请选择产品名称"
          />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { PlusOutlined } from '@ant-design/icons-vue';
import { reactive, toRefs, onMounted } from 'vue';
export default {
  name: '',
  components: {
    PlusOutlined
  },
  setup() {
    const router = useRouter();
    const state = reactive({
      modalFormState: {},
      modelVisible: false
    });
    const rules = {
      name: [
        {
          required: true,
          message: '请输入微社区模版名称',
          trigger: 'blur'
        }
      ]
    };
    const addOkChange = () => {};
    const showModel = () => {
      state.modelVisible = true;
    };
    onMounted(() => {
      console.log('3.-组件挂载到页面之后执行-------onMounted');
    });
    return {
      router,
      rules,
      showModel,
      ...toRefs(state)
    };
  }
};
</script>
<style lang="less">
.ant-card-body {
  padding: 5px;
}
.ant-card-meta-title {
  text-align: left;
  margin-bottom: 0;
}
</style>
<style lang="less" scoped>
@import './index.less';
</style>