<template>
  <div>
    <p>
      <button @click="doMsetCountNum">mSet Count Num</button>
      <button @click="doSetCountNum">Set Count Num</button>
      <label for="">{{countNum}}</label>
    </p>
  </div>
</template>
<script>
  import {
    mapGetters,
    mapMutations,
    mapActions
  } from 'vuex';

  export default {
    props:[
      'val'
    ],
    data(){
      return {
        num:0
      }
    },
    methods: {
      doSetCountNum() {
        console.log(this.val)
        setTimeout(() => {
          this.setCountNum(parseInt(this.val))
        }, 2000);
      },
      doMsetCountNum() {
        setTimeout(() => {
          this.MsetCountNum(parseInt(this.val))
        }, 2000);
      },
      ...mapMutations({
        MsetCountNum: 'SET_COUNT_NUM'
      }),
      ...mapActions([
        'setCountNum'
      ])
    },
    computed: {
      ...mapGetters([
        'countNum'
      ])
    }
  }

</script>
<style lang="less" scoped>


</style>
