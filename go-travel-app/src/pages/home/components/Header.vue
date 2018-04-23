<template>
  <div class="header">
    <div class="header-icon">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      <span>输入城市/景点/游玩主题</span>
    </div>
    <div class="header-city">
      <span class="city">{{ city }}</span>
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'HomeHeader',
    computed: {
      ...mapState(['city'])
    },
  }
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/variables.styl';
  .header
    width 100%
    height 40px
    background $bgColor
    display flex
    line-height 40px
    color #fff
    text-align center
    .header-icon
      flex 0 0 40px
      font-weight 700
    .header-input
      flex 1
      background #fff
      margin 5px
      border-radius 4px
      color #999
      text-align left 
      line-height 30px
      padding-left 10px
    .header-city
      min-width 40px
      padding 0 10px
      .arrow-icon
        font-size 12px
</style>