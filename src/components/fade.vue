<template>
  <transition name="fade">
    <p><router-link to="/">go to web One</router-link></p>
  </transition>
</template>
<script>
</script>
<style lang="less" scoped>

  p {
    width: 100%;
    height: 300px;
    background-color: #969696;
    color: #44b899;
    text-align: center;
    font-size: 50px;
  }

  .fade-enter-active{
    opacity: 1;
    transition: all 0.3s;
  }

  .fade-enter{
    opacity: 1;
    transform: translate3d(100%, 0, 0);
  }
  .fade-leave{
    opacity: 0;
  }
</style>
