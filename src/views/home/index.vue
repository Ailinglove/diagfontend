<template>
  <div>
    <header>
       <span>智能辅助诊断系统</span>
    </header>
    <main>
      <div id="left"><left></left></div>
      <div id="right"><tumor-type></tumor-type></div>

    </main>
<!--    <footer>-->
<!--      底部信息-->
<!--    </footer>-->

  </div>


</template>

<script>
  import TumorType from "./TumorType";
  import Left from "./left"
  export default {
    name: "index",
    components:{
      TumorType,Left
    }
  }
</script>

<style scoped>
  header{
    background-color: #42b983;
    height: 70px;
    line-height: 70px;
    text-align: center;
    font-size: 25px;
    font-weight: bold;
  }
  #left{

    /*background: #cccccc;*/
    width:13%;

  }
  main{

    height: 100%;
    display: flex;

  }
  #right{
    height: 2000px;

  }
</style>
