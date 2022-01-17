<template>
  <div class="home-container">
    <div class="swiper-box">
      <swiper
        :autoplay="swiper_options.autoplay"
        :loop="swiper_options.loop"
        :speed="swiper_options.speed"
        :pagination="swiper_options.pagination"
        :spaceBetween="swiper_options.spaceBetween"
        :coverflowEffect="swiper_options.coverflowEffect"
        :centeredSlides="swiper_options.centeredSlides"
        :slidesPerView="swiper_options.slidesPerView"
        class="swiper"
        effect="coverflow"
      >
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue.js';

import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/modules/scrollbar/scrollbar.min.css';
import { reactive, toRefs, onMounted } from 'vue';
export default {
  name: '',
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    let swiper_options = reactive({
      autoplay: {
        disableOnInteraction: false, // 鼠标滑动后继续自动播放
        delay: 4000 //4秒切换一次
      },
      speed: 500, //切换过渡速度
      loop: true,
      slidesPerView: 'auto', //解决最后一张切换到第一张中间的空白
      centeredSlides: true, //设置slide居中
      spaceBetween: 20,
      coverflowEffect: {
        // rotate: 0, //slide做3d旋转时Y轴的旋转角度。默认50。
        stretch: 50, //每个slide之间的拉伸值（距离），越大slide靠得越紧。 默认0。
        depth: 100, //slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
        modifier: 1 //depth和rotate和stretch的倍率，相当于            depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
        // slideShadows: false, //开启slide阴影。默认 true。
      },
      navigation: {
        nextElRef: '.swiper-button-next',
        prevElRef: '.swiper-button-prev'
      },
      pagination: {
        clickable: true
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
<style lang="less" scoped>
.home-container {
  width: 100%;
  height: 100%;
  display: flex;
  .swiper-box {
    width: 40%;
    height: 90%;
    .swiper {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
