<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-show="swiperList.length">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="image-item" :src="item.imgUrl" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'HomeCarousel',
    props: {
      swiperList: {
        type: Array,
        default: []
      },
    },
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true,
          autoplay: 5000
        }
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background #fff
  .image-item
    width 100%
</style>