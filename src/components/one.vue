<template>
  <div>
    <h1>{{msg}}this is One.</h1>
    <input type="text" v-model="key" placeholder="key">
    <input type="text" v-model="value" placeholder="value">

    <br>
    <span @click="setDoNow">click me</span>
    <br>
    <router-link to="/two">go to web Two!</router-link>
    <br>
    <router-link to="/fade">go to web Fade!</router-link>
    <br>
    <button @click="changeShow">动画</button>
      <Child :val="num" v-show="show"></Child>
    <p>
      <input type="number" v-model="num">
      <span>{{countNum}}</span>
    </p>
  </div>
</template>
<script>
  import {
    mapMutations,
    mapGetters
  } from 'vuex'
  import Child from './child'

  export default {
    data() {
      return {
        show: false,
        msg: 'hello ',
        key: '',
        value: '',
        num: 0
      }
    },
    computed:{
      ...mapGetters([
       'countNum'
      ])
    },
    methods: {
      changeShow() {
        this.show = !this.show
      },
      setDoNow() {
        let doing = {};
        let key = this.key
        let value = this.value
        doing[key] = value
        this.setLJH(doing)
      },
      ...mapMutations({
        setLJH: 'SET_LJH'
      })
    },
    components: {
      Child
    }
  }

</script>
<style lang="less" scoped>
  body,html{
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
  h1 {
    color: #9ae;
    text-align: left;
  }

  a {
    text-align: left;
    color: #11df11;
    text-decoration: none;
  }

  span {
    display: inline-block;
    width: 100px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    background-color: #009a59;
    color: #FFF;
    cursor: pointer;
  }

</style>
