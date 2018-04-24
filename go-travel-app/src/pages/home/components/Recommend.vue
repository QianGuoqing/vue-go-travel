<template>
  <div class="recommend-wrapper">
    <div class="banner">热销推荐</div>
    <ul class="recommend-list">
      <li class="recommend-item" v-for="item in recommendList" :key="item.id">
        <img :src="item.imgUrl" class="image" alt="">
        <div class="description">
          <h1 class="title">{{ item.title }}</h1>
          <p class="desc">{{ item.desc }}</p>
          <div class="button">查看详情</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      recommendList: {
        type: Array,
        default: []
      },
    },
  }
</script>

<style lang="stylus" scoped>
  .recommend-wrapper
    margin-top 10px
    .banner
      background #eee
      padding 12px 10px
      font-weight 700
    .recommend-list
      .recommend-item
        display flex
        border-bottom 1px solid #eee
        .image
          width 95px
          height 95px
          padding 10px
        .description
          .title
            margin-top 10px
            font-size 16px
            font-weight 700
          .desc
            margin-top 10px
            font-size 14px
            color #aaa
          .button
            display inline-block
            margin-top 10px
            background deepskyblue 
            color #fff
            font-size 12px
            padding 5px
            border-radius 4px
</style>