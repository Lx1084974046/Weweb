<template>
  <div class="video-container">
    <div class="left-container">
      <iframe
        class="video-box"
        type="text/html"
        :src="'https://www.youtube.com/embed/?loop=1&playlist=' + 'PYnTn2T10SQ'"
        frameborder="0"
      ></iframe>
      <span>描述：dhaugdsjahdjak</span>
    </div>
    <div class="right-container">
      <div
        class="box box1"
        style="
          background: url(https://shp.qpic.cn/cfwebcap/0/db55b9e375f22055246a9f4008fb4a5b/0/?width=640&height=400);
          background-size: 100% 100%;
        "
      >
        <i class="play"></i>
      </div>
      <div
        class="box box2"
        style="
          background: url(https://shp.qpic.cn/cfwebcap/0/065b2931dad0ed3cd8f8fac43fc13005/0/?width=1246&height=852);
          background-size: 100% 100%;
        "
      >
        <i class="play"></i>
      </div>
      <div
        class="box box3"
        style="
          background: url(https://shp.qpic.cn/cfwebcap/0/19d7aae0865989f46a8b202cac2f08a7/0/?width=877&height=536);
          background-size: 100% 100%;
        "
      >
        <i class="play"></i>
      </div>
      <div
        class="box box1"
        style="
          background: url(https://shp.qpic.cn/cfwebcap/0/db55b9e375f22055246a9f4008fb4a5b/0/?width=640&height=400);
          background-size: 100% 100%;
        "
      >
        <i class="play"></i>
      </div>
      <div
        class="box box2"
        style="
          background: url(https://shp.qpic.cn/cfwebcap/0/065b2931dad0ed3cd8f8fac43fc13005/0/?width=1246&height=852);
          background-size: 100% 100%;
        "
      >
        <i class="play"></i>
      </div>
      <div
        class="box box3"
        style="
          background: url(https://shp.qpic.cn/cfwebcap/0/19d7aae0865989f46a8b202cac2f08a7/0/?width=877&height=536);
          background-size: 100% 100%;
        "
      >
        <i class="play"></i>
      </div>
      <div
        class="box box1"
        style="
          background: url(https://shp.qpic.cn/cfwebcap/0/db55b9e375f22055246a9f4008fb4a5b/0/?width=640&height=400);
          background-size: 100% 100%;
        "
      >
        <i class="play"></i>
      </div>
      <div
        class="box box2"
        style="
          background: url(https://shp.qpic.cn/cfwebcap/0/065b2931dad0ed3cd8f8fac43fc13005/0/?width=1246&height=852);
          background-size: 100% 100%;
        "
      >
        <i class="play"></i>
      </div>
      <div
        class="box box3"
        style="
          background: url(https://shp.qpic.cn/cfwebcap/0/19d7aae0865989f46a8b202cac2f08a7/0/?width=877&height=536);
          background-size: 100% 100%;
        "
      >
        <i class="play"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, toRefs, onMounted } from 'vue';
export default {
  name: '',
  setup() {
    let videoNum = ref(0);
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
.video-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .right-container,
  .left-container {
    width: 48%;
    height: 90%;
  }
  .right-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: flex-start;
    overflow-y: auto;
    .box {
      width: 49%;
      height: 33%;
      margin-bottom: 10px;
      border: 1px solid rgba(220, 220, 220, 0.2);
      display: flex;
      justify-content: center;
      align-items: center;
      .play {
        width: 32px;
        height: 32px;
        background: url('../../assets/module/video/play.png');
        background-size: 100% 100%;
      }
    }
  }
  .left-container {
    display: flex;
    flex-direction: column;
    .video-box {
      width: 100%;
      height: 70%;
    }
    span {
      font-size: 16px;
      color: #ccc;
      margin-top: 6px;
      width: 100%;
      text-align: left;
    }
  }
}
</style>