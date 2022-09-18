<template>
  <nav>
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
    |
    <router-link to="/webSocket">webSocket</router-link>
  </nav>
  <router-view/>


  <!--  <div id="div_demo" >-->
  <!--    <span id="span1" v-text="${test.json.name}">111</span>-->
  <!--    <span id="span1" v-text="${test.json.age}">111</span>-->
  <!--    <span id="span1" v-text="${test.json.password}">111</span>-->
  <!--    <span id="span1" v-text="${test.json.address}">111</span>-->
  <!--  </div>-->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
var test2 = "1111"
// let 、 const
//静态变量
//动态变量


</script>
