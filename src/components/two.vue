<template>
  <div>
    <h3>{{msg}}this is Two.</h3>
    <li v-for="(item,key) in ljh" :key="item">
      {{key}}:{{item}}
    </li>
    <router-link to="/">go to web One!</router-link>
    <p>
      <input type="number" v-model="num">
      <button @click="doMsetCountNum">mSet Count Num</button>
      <button @click="doSetCountNum">Set Count Num</button>
      <label for="">{{countNum}}</label>
    </p>
  </div>
</template>
<script>
  import {
    mapGetters,
    mapActions,
    mapMutations
  } from 'vuex'
  export default {
    data() {
      return {
        msg: 'hi~ ',
        num: 0
      }
    },
    created() {

    },
    methods: {
      doSetCountNum() {
        setTimeout(() => {
          this.setCountNum(parseInt(this.num))
        }, 1000);
      },
      doMsetCountNum() {
        setTimeout(() => {
          this.MsetCountNum(-1)
        }, 1000);
      },
      ...mapActions([
        'setCountNum'
      ]),
      ...mapMutations({
        MsetCountNum:'SET_COUNT_NUM'
      })
    },
    computed: {
      ...mapGetters([
        'ljh',
        'countNum'
      ])
    }
  }

</script>
<style lang="less" scoped>
  h3 {
    color: #999;
    text-align: left;
  }

  a {
    text-align: left;
    color: #ff54ad;
    text-decoration: none;
  }

</style>
