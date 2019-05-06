<template>
  <div id="app">
    <p><img src="./assets/logo.png"></p>
    <div>
      <button @click="goGO">前进</button>
      <button @click="goBack">后退</button>
      <button @click="goHome">返回首页</button>
    </div>
    <router-link to="/">home</router-link>|
    <router-link to="/home1">home1</router-link>|
    <router-link to="/Params/198/jasmyn nb">Params</router-link>|
    <router-link to="/">gohome</router-link>|
    <router-link to="/Params/198/jasmyn nb">goParams</router-link>|
    <router-link to="hi1">hi1</router-link>|
    <router-link to="/jasmyn">jaxmyn</router-link>|
    <router-link to="/123">我是瞎写的</router-link>|
  
    <transition name="fade" mode="out-in">
    <router-view></router-view>
   </transition>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goBack(){
      this.$router.go(-1);
    },
    goGO(){
      this.$router.go(1);
    },
    goHome(){
      this.$router.push("/")
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter{
  opacity: 0px;

}
.fade-enter-active{
  transition: opacity .5s;

}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  opacity: 0;
  transition: opacity .5s;
}
</style>
