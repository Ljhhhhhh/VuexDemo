<template>
  <div>
    <h3>{{msg}}this is Two.</h3>
    <li v-for="(item,key) in ljh">
      {{key}}:{{item}}
    </li>
    <router-link to="/">go to web One!</router-link>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {
        msg: 'hi~ '
      }
    },
    created() {

    },
    methods: {

    },
    computed:{
      ...mapGetters([
        'ljh'
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
