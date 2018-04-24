<template>
  <div class="weekend-wrapper">
    <div class="banner">周末去哪儿</div>
    <ul class="weekend-list">
      <li class="weekend-item" v-for="item in weekendList" :key="item.id">
        <img :src="item.imgUrl" class="image" alt="">
        <h1 class="title">{{ item.title }}</h1>
        <p class="desc">{{ item.desc }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      weekendList: {
        type: Array,
        default: []
      },
    },
  }
</script>

<style lang="stylus" scoped>
  .weekend-wrapper
    .banner
      background #eee
      padding 12px 10px
      font-weight 700
    .weekend-list
      .weekend-item
        width 100%
        .image
          width 100%
          height 50%
        .title
          font-size 16px
          font-weight 700
          padding 10px
        .desc
          font-size 14px
          padding 0 0 10px 10px
</style>