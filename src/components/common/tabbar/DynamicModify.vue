<template>
  <TabBar>
    <tab-bar-item path="/home" activeColor="blue">
      <img slot="item-icon" src="assets/img/home.png" alt="">
      <img slot="item-icon-active" src="~assets/img/active.png" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/catagroy" activeColor="blue">
      <img slot="item-icon" src="~assets/img/home.png" alt="">
      <img slot="item-icon-active" src="~assets/img/active.png" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="blue">
      <img slot="item-icon" src="~assets/img/home.png" alt="">
      <img slot="item-icon-active" src="~assets/img/active.png" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="blue">
      <img  slot="item-icon" src="../../assets/img/home.png" alt="">
      <img slot="item-icon-active" src="../../assets/img/active.png" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </TabBar>
</template>

<script>
  import TabBar from "./TabBar";
  import TabBarItem from "./TabBarItem";

  export default {
    name: "DynamicModify",
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
