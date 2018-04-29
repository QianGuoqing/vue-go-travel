<template>
  <div class="header-wrapper">
    <router-link tag="div" to="/" class="back-header" v-show="showHeader">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
    <div 
      class="info-header" v-show="!showHeader"
      :style="{opacity: opacity}">
      <router-link tag="div" to="/" class="iconfont header--back">&#xe624;</router-link>
      <div class="title">景点详细</div>
      <div class="space"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showHeader: true,
        opacity: 0
      }
    },
    methods: {
      handleScroll() {
        let top = document.documentElement.scrollTop
        if (top >= 60) {
          this.showHeader = false
          if (top <= 160) {
            this.opacity = (top - 60) / 100
          }
        } else {
          this.showHeader = true
        }
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    },
    unmounted() {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style lang="stylus" scoped>
  .header-wrapper
    width 100%
    position fixed
    top 0
    right 0
    bottom 0
    left 0
    height 80px
    .back-header
      height 40px
      .header-back
        line-height 40px
        height 40px
        width 40px
        text-align center
        color #fff
        font-weight 700
        background rgba(0, 0, 0, 0.5)
        border-radius 50%
    .info-header
      height 40px
      background #00bcd4
      line-height 40px
      text-align center
      font-weight 700
      color #fff
      display flex
      .header--back
        flex 0 0 40px
      .title
        flex 1
      .space
        flex 0 0 40px
</style>