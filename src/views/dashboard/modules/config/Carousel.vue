<template>
  <div class="carousel-box">
    <a-form-item
      v-bind="formItemLayoutWithOutLabel"
      :label="index === 0 ? '轮播素材' : ''"
      :style="index === 0 ? '' : 'transform:translateX(70px)'"
      labelAlign="left"
      name="carousel"
      v-for="(item, index) in carouselImg"
      :key="item"
    >
      <a-input
        v-model:value="item.value"
        placeholder="please input url"
        style="margin-right: 8px"
      />
      <MinusCircleOutlined
        class="dynamic-delete-button"
        @click="removcarouselImg(index)"
      />
    </a-form-item>
    <a-button type="dashed" class="add-btn" @click="addcarouselImg">
      <PlusOutlined />
      Add Img
    </a-button>
    <a-space v-for="(item, index) in newsList" size="large" :key="index">
      <a-form-item name="news" label="新闻标题">
        <a-input v-model:value="item.title" placeholder="新闻标题" />
      </a-form-item>
      <a-form-item name="news" label="背景图片">
        <a-input
          v-model:value="item.url"
          placeholder="背景图片"
          style="width: 400px"
        />
      </a-form-item>
      <MinusCircleOutlined @click="removeNews(index)" />
    </a-space>
    <a-button type="dashed" class="add-btn" @click="addNews">
      <PlusOutlined />
      Add News
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
    carouselImg: Array,
    newsList: Array
  },
  setup(props, { emit }) {
    const state = reactive({});
    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 12,
          offset: 0
        }
      }
    };
    const addNews = () => {
      let list = props.newsList;
      list.push({ value: '' });
      emit('update:newsList', list);
    };
    const removeNews = (index) => {
      let list = props.newsList;
      list.splice(index, 1);
      emit('update:newsList', list);
    };
    const removcarouselImg = (index) => {
      let list = props.carouselImg;
      list.splice(index, 1);
      emit('update:carouselImg', list);
    };
    const addcarouselImg = () => {
      let list = props.carouselImg;
      list.push({ value: '' });
      emit('update:carouselImg', list);
    };
    onMounted(() => {});
    return {
      formItemLayoutWithOutLabel,
      removeNews,
      addNews,
      removcarouselImg,
      addcarouselImg,
      ...toRefs(state)
    };
  }
};
</script>
<style lang="less">
.carousel-box {
  display: flex;
  flex-direction: column;
  .ant-space {
    margin-bottom: 20px;
    .ant-form-item {
      margin-bottom: 0;
    }
  }
  .ant-form-item-control-input-content {
    display: flex !important;
    align-items: center;
  }
}
</style>
<style lang="less" scoped>
.add-btn {
  width: 120px;
  transform: translateX(70px);
  margin-bottom: 30px;
}
</style>