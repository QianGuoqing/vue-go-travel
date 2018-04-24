<template>
  <div class="icons-wrapper">
    <swiper :options="swiperOption">
      <swiper-slide class="icon-list" v-for="(page, index) in pages" :key="index">
        <div class="icon-item" v-for="item in page" :key="item.id">
          <div class="icon-wrapper">
            <img :src="item.imgUrl" class="icon" alt="">
          </div>
          <p class="desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  export default {
    props: {
      iconList: {
        type: Array,
        default: []
      },
    },
    data() {
      return {
        swiperOption: {}
      }
    },
    computed: {
      pages() {
        const iconList = this.iconList
        const pages = []
        iconList.forEach((item, index) => {
          const page = Math.floor(index / 8)
          if (!pages[page]) {
            pages[page] = []
          } 
          pages[page].push(item)
        })
        return pages
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .icon-list
    display flex
    flex-flow wrap
    text-align center
    .icon-item
      width 25%
      .icon-wrapper
        width 60px
        height 60px
        margin 10px auto
        .icon
          width 100%
</style>