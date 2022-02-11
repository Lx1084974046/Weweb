<template>
  <div class="video-box">
    <a-space c v-for="(item, index) in videoList" size="large" :key="index">
      <a-form-item name="video" label="视频描述">
        <a-input v-model:value="item.text" placeholder="视频描述" />
      </a-form-item>
      <a-form-item name="video" label="视频封面">
        <a-input
          v-model:value="item.url"
          placeholder="视频封面"
          style="width: 300px"
        />
      </a-form-item>
      <a-form-item name="video" label="视频链接">
        <a-input
          v-model:value="item.videoSrc"
          placeholder="视频链接"
          style="width: 300px"
        />
      </a-form-item>
      <MinusCircleOutlined @click="removeVideo(index)" />
    </a-space>
    <a-button
      style="width: 200px"
      type="dashed"
      class="add-btn"
      @click="addVideo"
    >
      <PlusOutlined />
      Add Video
    </a-button>
  </div>
</template>

<script>
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons-vue';
import { reactive, toRefs, onMounted } from 'vue';
export default {
  name: '',
  components: {
    MinusCircleOutlined,
    PlusOutlined
  },
  props: {
    videoList: Array
  },
  setup(props, { emit }) {
    const state = reactive({});
    const addVideo = () => {
      let list = props.videoList;
      list.push({ videoSrc: '', text: '', url: '' });
      emit('update:videoList', list);
    };
    const removeVideo = (index) => {
      let list = props.videoList;
      list.splice(index, 1);
      emit('update:videoList', list);
    };
    onMounted(() => {});
    return {
      addVideo,
      removeVideo,
      ...toRefs(state)
    };
  }
};
</script>
<style lang="less" scoped>
.video-box {
  display: flex;
  flex-direction: column;
  .ant-space {
    margin-bottom: 20px;
    .ant-form-item {
      margin-bottom: 0;
    }
  }
}
</style>