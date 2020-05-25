<template>
  <div id="app">
    <router-view></router-view>

  </div>
</template>

<script>
import Home from "@/views/home"
export default {
  name: 'App',
  components: {
    Home

  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
