<template>
  <div class="ticket-wrapper">
    <div class="ticket-list">
      <div class="ticket-item" v-for="item in categoryList" :key="item.title">
        <div class="title">{{ item.title }}</div>
        <div v-if="item.children" class="item-chilren">
        <detail-ticket :category-list="item.children"></detail-ticket>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailTicket',
    props: {
      categoryList: {
        type: Array,
        default: []
      },
    }
  }
</script>

<style lang="stylus" scoped>
  .ticket-wrapper
    .ticket-list
      .ticket-item
        padding 10px
        font-size 16px
        // border-bottom 1px solid #eee
</style>