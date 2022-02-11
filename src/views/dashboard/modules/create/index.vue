<template>
  <div class="module-create">
    <div class="create-btn" @click="showModel">
      <plus-outlined />
      <span>新增社区模版</span>
    </div>
    <a-card
      v-for="item in webList"
      :key="item"
      hoverable
      class="card-item"
      @click="router.push({ name: 'config', query: { id: item.code } })"
    >
      <template #cover>
        <i class="img-logo1" v-if="gameCode == 'wangzhe'"></i>
        <i class="img-logo2" v-if="gameCode == 'cf'"></i>
        <i class="img-logo3" v-if="gameCode == 'lol'"></i>
      </template>
      <a-card-meta :title="item.name">
        <template #description>
          <div class="desc-box">
            <!-- <a-tag color="purple" class="tag-des">
              <span>创建时间:</span>
              {{ 123 }}
            </a-tag> -->
            <a-tag color="orange" class="tag-des">
              <span>专题Code:</span>
              {{ item.code }}
            </a-tag>
          </div>
        </template>
      </a-card-meta>
    </a-card>
    <a-modal
      v-model:visible="modelVisible"
      title="新增社区模版"
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
function getRangeCode(len = 6) {
  var orgStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let returnStr = '';
  for (var i = 0; i < len; i++) {
    returnStr += orgStr.charAt(Math.floor(Math.random() * orgStr.length));
  }
  return returnStr;
}
import { useRouter } from 'vue-router';
import { message } from 'ant-design-vue';
import { PlusOutlined } from '@ant-design/icons-vue';
import { reactive, toRefs, ref, onMounted } from 'vue';
export default {
  name: '',
  components: {
    PlusOutlined
  },
  setup() {
    const formRef = ref(null);
    const router = useRouter();
    const state = reactive({
      modalFormState: {},
      modelVisible: false,
      gameCode: localStorage.getItem('gameCode'),
      webList: localStorage.getExpire('webList')[
        localStorage.getItem('gameCode')
      ]
        ? localStorage.getExpire('webList')[localStorage.getItem('gameCode')]
        : []
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
    if (!localStorage.getItem('gameCode')) {
      router.push({ path: '/' });
    }
    const getChangeList = () => {
      state.webList =
        localStorage.getExpire('webList')[localStorage.getItem('gameCode')];
    };
    const addOkChange = async () => {
      await formRef.value.validate();
      console.log('通过验证');
      let gameCode = localStorage.getItem('gameCode');
      console.log(localStorage.getExpire('webList'));
      state.modalFormState.code = getRangeCode();
      if (localStorage.getExpire('webList').hasOwnProperty(gameCode)) {
        let obj = localStorage.getExpire('webList');
        obj.gameCode.push(state.modalFormState);
        localStorage.setExpire('webList', obj);
      } else {
        let obj = localStorage.getExpire('webList');
        obj[gameCode] = [state.modalFormState];
        localStorage.setExpire('webList', obj);
      }
      message.success('创建成功');
      state.modelVisible = false;
      await formRef.value.resetFields();
      getChangeList();
    };
    const showModel = () => {
      state.modelVisible = true;
    };
    onMounted(() => {
      console.log(localStorage.getExpire('webList'), 99999);
    });
    return {
      formRef,
      router,
      rules,
      addOkChange,
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
  margin-bottom: 2px !important;
}
</style>
<style lang="less" scoped>
@import './index.less';
</style>