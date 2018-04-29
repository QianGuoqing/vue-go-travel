<template>
  <div class="gallery-wrapper">
    <div class="gallery-swiper" @click="hideGallery">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="image in galleryImages" :key="image">
          <img :src="image" class="image" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      galleryImages: {
        type: Array,
        default: []
      },
    },
    data() {
      return {
        swiperOptions: {
          pagination: '.swiper-pagination',
          paginationType: 'fraction',
          observeParents: true,
          observer: true
        }
      }
    },
    methods: {
      hideGallery() {
        this.$emit('hide', false)
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .gallery-wrapper >>> .swiper-pagination-fraction
    color #fff
    font-weight 700
  .gallery-wrapper
    display flex
    flex-direction column
    justify-content center
    background #000
    position fixed
    left 0
    top 0
    right 0
    bottom 0
    z-index 99
    overflow hidden
    .image
      width 100%
</style>