<template>
  <div>
    <home-header></home-header>
    <home-carousel :swiper-list="swiperList"></home-carousel>
    <home-icons :icon-list="iconList"></home-icons>
    <home-recommend :recommend-list="recommendList"></home-recommend>
    <home-weekend :weekend-list="weekendList"></home-weekend>
  </div>
</template>

<script>
  import HomeHeader from './components/Header.vue'
  import HomeCarousel from './components/Carousel.vue'
  import HomeIcons from './components/Icons.vue'
  import HomeRecommend from './components/Recommend.vue'
  import HomeWeekend from './components/Weekend.vue'
  import { getRequestData } from '../../common/js/requestData'
  export default {
    name: 'Home',
    components: {
      HomeHeader,
      HomeCarousel,
      HomeIcons,
      HomeRecommend,
      HomeWeekend
    },
    data() {
      return {
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: []
      }
    },
    mounted() {
      getRequestData('/api/index.json').then(res => {
        res = res.data
        console.log(res);
        if (res.ret && res.data) {
          const data = res.data
          this.swiperList = data.swiperList
          this.iconList = data.iconList
          this.recommendList = data.recommendList
          this.weekendList = data.weekendList
        }
      }).catch(err => {
      })
    }
  }
</script>

<style scoped>

</style>