<template>
  <div class="banner-wrapper">
    <div class="banner-content" @click="showGallery">
      <img :src="bannerImage" class="banner-image" alt="">
      <div class="content">
        <div class="desc">{{ sightName }}</div>
        <div class="pics">
          <span class="iconfont banner-icon">&#xe692;</span>
        </div>
      </div>
    </div>
    <banner-gallery 
      v-show="isGalleryShow"
      :gallery-images="galleryImages"
      @hide="hideGallery"></banner-gallery>
  </div>
</template>

<script>
  import BannerGallery from './Gallery.vue'
  export default {
    props: {
      bannerImage: {
        type: String,
        default: ''
      },
      sightName: {
        type: String,
        default: ''
      },
      galleryImages: {
        type: Array,
        default: []
      }
    },
    components: {
      BannerGallery
    },
    data() {
      return {
        isGalleryShow: false
      }
    },
    methods: {
      showGallery() {
        this.isGalleryShow = true
      },
      hideGallery(val) {
        this.isGalleryShow = val
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .banner-wrapper
    .banner-content
      position relative
      .banner-image
        width 100%
      .content
        display flex
        width 100%
        color #fff
        font-weight 700
        justify-content space-between
        position absolute
        bottom 0
        padding 10px 0
        background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
        .desc
          margin-left 10px
        .pics
          margin-right 10px
</style>