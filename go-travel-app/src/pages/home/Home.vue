<template>
  <div>
    <home-header></home-header>
    <home-carousel :swiper-list="swiperList"></home-carousel>
  </div>
</template>

<script>
  import HomeHeader from './components/Header.vue'
  import HomeCarousel from './components/Carousel.vue'
  import { getRequestData } from '../../common/js/requestData'
  export default {
    name: 'Home',
    components: {
      HomeHeader,
      HomeCarousel
    },
    data() {
      return {
        swiperList: []
      }
    },
    mounted() {
      getRequestData('/api/index.json').then(res => {
        res = res.data
        console.log(res);
        if (res.ret && res.data) {
          const data = res.data
          this.swiperList = data.swiperList
        }
      }).catch(err => {
      })
    }
  }
</script>

<style scoped>

</style>