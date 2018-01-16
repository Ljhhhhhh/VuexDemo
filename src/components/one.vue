<template>
  <div>
    <h1>{{msg}}this is One.</h1>
    <input type="text" v-model="key" placeholder="key">
    <input type="text" v-model="value" placeholder="value">
    <span @click="setDoNow">click me</span>
    <router-link to="/two">go to web Two!</router-link>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'

export default {
  data() {
    return {
      msg: 'hello ',
      key:'',
      value:''
    }
  },
  methods: {
    setDoNow() {
      let doing={};
      let key = this.key
      let value = this.value
      doing[key]=value
      this.setLJH(doing)
    },
    ...mapMutations({
      setLJH: 'SET_LJH'
    })
  }
}
</script>
<style lang="less" scoped>
  h1 {
    color: #9ae;
    text-align: left;
  }

  a {
    text-align: left;
    color: #11df11;
    text-decoration: none;
  }
  span{
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
