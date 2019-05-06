<template>
   <div>
       <h2>{{ msg }}</h2>
       <router-view></router-view>
   </div>
  </template>
  
  <script>
  export default {
    name: 'hi',
    data () {
      return {
        msg: 'I am hipage!zzz'
      }
    }
  }
  </script>
  
  <style scoped>

  </style>
  