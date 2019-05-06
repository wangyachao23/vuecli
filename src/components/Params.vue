<template>
    <div>
        <h2>{{ msg }}</h2>
        <p>newsId:{{ $route.params.newsId }}</p>
        <p>newsTitle:{{ $route.params.newsTitle }}</p>
    </div>
   </template>
   
   <script>
   export default {
     name: 'hi2',
     data () {
       return {
         msg: 'I am params page!'
       }
     },
     beforeEnter: (to, from, next) => {
       console.log("z准备进入");
       next();
     },
     beforeRouteLeave (to, from, next) {
       console.log("准备离开");
       next();
     }
   }
   </script>
   
   <style scoped>
 
   </style>
   