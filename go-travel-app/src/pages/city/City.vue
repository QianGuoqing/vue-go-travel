<template>
  <div class="city-wrapper">
    <div class="header">
      <div class="info">
        <div 
          class="iconfont back-icon" 
          @click="goToHome">&#xe624;</div>
        <div class="title">城市选择</div>
        <div class="space"></div>
      </div>
      <div class="search">
        <input 
          placeholder="输入城市名或拼音" 
          type="text" 
          class="search-input"
          v-model="keyword">
      </div>
    </div>
    <div ref="searchWrapper">
      <ul class="search-list" v-show="showSearchList">
        <li 
          class="search-item" 
          v-for="(item, index) in searchedCityList" 
          :key="index"
          @click="chooseCity(item.name)">{{ item.name }}</li>
        <li v-show="isNoData" class="search-item">没有搜索结果</li>
      </ul>
    </div>
    <div class="city-content" ref="wrapper">
      <div class="content">
        <div class="place">
          <div class="banner">当前城市</div>
          <div class="cities">
            <div class="city">{{ city }}</div>
          </div>
          <div class="place">
            <div class="banner">当前城市</div>
            <div class="cities">
              <div 
                class="city" 
                v-for="city in hotCities" 
                :key="city.id"
                @click="handleChangeCity(city.name)">{{ city.name }}</div>
            </div>
          </div>
          <div class="place" v-for="(city, key) in cities" :key="key">
            <div 
              class="banner"
              :ref="key">{{ key }}</div>
            <ul class="city-list">
              <li 
                class="city-item" 
                v-for="item in city" 
                :key="item.id"
                @click="handleChangeCity(item.name)">{{ item.name }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <ul class="alphabet">
      <li 
        class="alphabet-item" 
        v-for="letter in letters" 
        :key="letter"
        @click="goToAlphabetCity(letter)"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd">{{ letter }}</li>
    </ul>
  </div>
</template>

<script>
  import { getRequestData } from '../../common/js/requestData'
  import { mapMutations } from 'vuex'
  import BScroll from 'better-scroll'
  import {
    mapState
  } from 'vuex'
  export default {
    name: 'City',
    data() {
      return {
        keyword: '',
        cities: {},
        hotCities: [],
        touchStatus: false,
        letter: '',
        searchedCityList: [],
        isNoData: false
      }
    },
    watch: {
      letter() {
        if (this.letter) {
          const element = this.$refs[this.letter][0]
          this.scroll.scrollToElement(element)
        }
      },
      keyword() {
        let list = []
        if (this.keyword === '') {
          this.searchedCityList = []
          return
        }
        for (let key in this.cities) {
          this.cities[key].forEach((city, index) => {
            if (city.name.indexOf(this.keyword) > -1 || city.spell.indexOf(this.keyword) > -1) {
              list.push(city)
            }
          })
        }
        if (this.keyword.length !== 0 && list.length === 0) {
          this.isNoData = true
        } else {
          this.isNoData = false
        }
        console.log(this.isNoData)
        this.searchedCityList = list
      }
    },
    methods: {
      ...mapMutations(['changeCity']),
      goToHome() {
        this.$router.push('/')
      },
      goToAlphabetCity(letter) {
        this.letter = letter
      },
      chooseCity(city) {
        this.changeCity(city)
        this.keyword = ''
        this.$router.push('/')
      },
      handleChangeCity(city) {
        this.changeCity(city)
        this.$router.push('/')
      },
      handleTouchStart() {
        this.touchStatus = true
      },
      handleTouchMove(e) {
        if (this.touchStatus) {
          let startY = this.$refs['A'][0].offsetTop
          let moveY = e.touches[0].clientY
          let alphabetIndex = Math.ceil(((moveY - startY) / 20)) + 2
          if (alphabetIndex >= 0 && alphabetIndex < this.letters.length) {
            this.scroll.scrollToElement(this.$refs[this.letters[alphabetIndex]][0])
          }
        }
      },
      handleTouchEnd() {
        this.touchStatus = false
      },
      _getData(url) {
        getRequestData(url).then(res => {
          res = res.data
          console.log(res);
          if (res.ret && res.data) {
            const data = res.data
            this.cities = data.cities
            this.hotCities = data.hotCities
          }
        })
      }
    },
    computed: {
      ...mapState(['city']),
      letters() {
        let letters = []
        for (let key in this.cities) {
          letters.push(key)
        }
        return letters
      },
      showSearchList() {
        return this.searchedCityList.length || this.isNoData
      }
    },
    mounted() {
      this._getData('/api/city.json')
      this.scroll = new BScroll(this.$refs.wrapper)
      // this.searchScroll = new BScroll(this.$refs.searchWrapper)
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../assets/styles/variables.styl';
  .city-wrapper
    .header
      background $bgColor
      color #fff
      text-align center
      height 70px
      .info
        display flex
        .back-icon
          flex 0 0 35px
          line-height 35px
          font-weight 700
        .title
          flex 1
          font-weight 700
          line-height 35px
          font-size 16px
        .space
          flex 0 0 35px
      .search
        margin 3px 10px 0 10px
        position relative
        .search-input
          height 28px
          display inline-block
          width 100%
          border-radius 3px
          text-align center
          color #666
          font-size 12px
          padding 0 10px
    .search-list
      position absolute
      top 70px
      left 0
      right 0
      bottom 0
      z-index 10
      background #eee
      .search-item
        padding 10px
        border-bottom 1px solid #eee
        background #fff
    .city-content
      position absolute
      top 70px
      left 0
      right 0
      bottom 0
      overflow hidden
      .content
        .place
          .banner
            background #eee
            color #666
            padding 10px
            font-weight 700
          .cities
            display flex
            flex-flow wrap
            text-align center
            .city
              width 28%
              border 1px solid #ccc
              padding 5px
              margin 5px
              border-radius 3px
          .city-list
            .city-item
              padding 10px
              border-bottom 1px solid #eee
    .alphabet
      position absolute
      right 10px
      z-index 2
      top 50%
      transform translateY(-50%)
      color $bgColor
      text-align center
      .alphabet-item
        line-height 20px
        height 20px
</style>