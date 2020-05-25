<template>
  <div>
    <row-tab-bar-item path="/home" activeColor="blue">
      <img slot="item-icon" src="~/assets/img/home/home.png" alt="">
      <img slot="item-icon-active" src="~assets/img/home/home.png" alt="">
      <div slot="item-text">首页</div>
    </row-tab-bar-item>

    <row-tab-bar-item path="/catagroy" activeColor="blue">
      <img slot="item-icon" src="~/assets/img/home/home.png" alt="">
      <img slot="item-icon-active" src="~assets/img/home/home.png" alt=""><div slot="item-text">分类</div>
    </row-tab-bar-item>
    <row-tab-bar-item path="/cart" activeColor="blue">
      <img slot="item-icon" src="@/assets/img/home/home.png" alt="">
      <img slot="item-icon-active" src="@/assets/img/home/home.png" alt=""><div slot="item-text">购物车</div>
    </row-tab-bar-item>
    <row-tab-bar-item path="/profile" activeColor="blue">
      <img slot="item-icon" src="@/assets/img/home/home.png" alt="">
      <img slot="item-icon-active" src="@/assets/img/home/home.png" alt=""><div slot="item-text">我的</div>
    </row-tab-bar-item>
  </div>
</template>

<script>
  import RowTabBar from "@/components/common/rowtabbar/rowtabbar.vue";
  import RowTabBarItem from "@/components/common/rowtabbar/rowtabbaritem.vue";


  export default {
    name: "MainRowBar",
    components:{

      RowTabBar,
      RowTabBarItem
    }
  }
</script>

<style scoped>

</style>
