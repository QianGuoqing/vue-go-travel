<template>
  <div class="detail-wrapper">
    <detail-banner 
      :banner-image="bannerImg" 
      :sight-name="sightName"
      :gallery-images="galleryImgs"></detail-banner>
    <detail-header></detail-header>
    <detail-ticket :category-list="categoryList"></detail-ticket>
  </div>
</template>

<script>
  import { getRequestData } from '../../common/js/requestData'
  import DetailBanner from './components/Banner.vue'
  import DetailHeader from './components/Header.vue'
  import DetailTicket from './components/Ticket.vue'
  export default {
    data() {
      return {
        bannerImg: '',
        categoryList: [],
        galleryImgs: [],
        sightName: ''
      }
    },
    components: {
      DetailBanner,
      DetailHeader,
      DetailTicket
    },
    mounted() {
      getRequestData('/api/detail.json').then(res => {
        res = res.data
        console.log(res)
        if (res.ret && res.data) {
          const data = res.data
          this.bannerImg = data.bannerImg
          this.categoryList = data.categoryList
          this.galleryImgs = data.gallaryImgs
          this.sightName = data.sightName
        }
      })
    }
  }
</script>

<style lang="stylus" scoped>
  .detail-wrapper
    height 2000px
</style>