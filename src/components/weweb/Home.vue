<template>
  <div class="home-container">
    <div class="swiper-box">
      <swiper
        :autoplay="swiper_options.autoplay"
        :direction="swiper_options.direction"
        :loop="swiper_options.loop"
        :speed="swiper_options.speed"
        :loopedSlides="swiper_options.loopedSlides"
        :pagination="swiper_options.pagination"
        :effect="swiper_options.effect"
        :coverflowEffect="swiper_options.coverflowEffect"
        :centeredSlides="swiper_options.centeredSlides"
        :slides-per-view="swiper_options.slidesPerView"
        class="swiper"
      >
        <swiper-slide class="test1" v-for="(item, index) in 3" :key="index">{{
          'Slide' + index
        }}</swiper-slide>
      </swiper>
    </div>
    <div class="tab-box">
      <div :class="'item item' + index" v-for="(item, index) in 8" :key="index">
        <i class="tab-inner"></i>
        <span>{{ 'item' + index }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue.js';
import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import SwiperCore, { Autoplay, Pagination, EffectCoverflow } from 'swiper';
SwiperCore.use([Autoplay, Pagination, EffectCoverflow]);
import { reactive, toRefs, onMounted } from 'vue';
export default {
  name: '',
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    let swiper_options = reactive({
      autoplay: true,
      direction: 'vertical',
      speed: 500, //切换过渡速度
      loop: true,
      slidesPerView: 'auto', //解决最后一张切换到第一张中间的空白
      loopedSlides: 5,
      centeredSlides: true, //设置slide居中
      effect: 'coverflow',
      pagination: {
        clickable: true
      },
      coverflowEffect: {
        rotate: 0, //slide做3d旋转时Y轴的旋转角度。默认50。
        stretch: 10, //每个slide之间的拉伸值（距离），越大slide靠得越紧。 默认0。
        depth: 10, //slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
        modifier: 1 //depth和rotate和stretch的倍率，相当于            depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
        // slideShadows: false, //开启slide阴影。默认 true。
      }
    });
    const state = reactive({});
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    onMounted(() => {
      console.log('3.-组件挂载到页面之后执行-------onMounted');
    });
    return {
      onSwiper,
      onSlideChange,
      swiper_options,
      ...toRefs(state)
    };
  }
};
</script>
<style lang="less">
.swiper-wrapper {
  width: 100%;
  height: 100%;
}
.swiper-pagination {
  width: 10px !important;
  left: 10px !important;
}
.test1 {
  height: 70%;
  background-color: yellow;
  opacity: 0.3;
}
</style>
<style lang="less" scoped>
.home-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .swiper-box {
    width: 50%;
    height: 90%;
    .swiper {
      width: 100%;
      height: 100%;
      .test1 {
        height: 70%;
        background-color: yellow;
        opacity: 0.3;
      }
    }
  }
  .tab-box {
    width: 48%;
    height: 90%;
    overflow-y: auto;
    .item {
      width: 94%;
      height: 20%;
      margin-bottom: 2%;
      position: relative;
      display: flex;
      align-items: center;
      span {
        font-size: 20px;
        color: #fff;
        background-color: rgba(0, 0, 0, 0.2);
        margin-left: 10%;
      }
      .tab-inner {
        width: 16%;
        height: 30%;
        clip-path: polygon(0 0, 100% 0, 80% 100%, 0 100%);
        position: absolute;
        top: 0;
        left: 0;
      }
    }
    .item0,
    .item4 {
      .tab-inner {
        background-image: linear-gradient(135deg, #ff9f73 0%, #ff5846 70%);
      }
      background: url('../../assets/module/home/tab1.jpeg');
      background-size: 100% 100%;
    }
    .item1,
    .item5 {
      .tab-inner {
        background-image: linear-gradient(135deg, #fb77e1 0%, #c052ff 70%);
      }
      background: url('../../assets/module/home/tab2.jpeg');
      background-size: 100% 100%;
    }
    .item2,
    .item6 {
      .tab-inner {
        background-image: linear-gradient(135deg, #dbfc76 0%, #93cd47 70%);
      }
      background: url('../../assets/module/home/tab3.jpeg');
      background-size: 100% 100%;
    }
    .item3,
    .item7 {
      .tab-inner {
        background-image: linear-gradient(135deg, #ff9f73 0%, #ff5846 70%);
      }
      background: url('../../assets/module/home/tab4.jpeg');
      background-size: 100% 100%;
    }
  }
}
</style>
