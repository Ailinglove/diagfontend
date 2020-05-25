<template>
  <div>
    <header>
      <h1>智能辅助诊断系统</h1>
    </header>
    <main>
      <tumor-type></tumor-type>
    </main>
    <footer>
      底部信息
    </footer>

  </div>


</template>

<script>
  import TumorType from "./TumorType";
  export default {
    name: "index",
    components:{
      TumorType
    },
    data(){
      return {
        TumorTypeItemData:[
          {"id":1,"img":require('@/assets/img/home/home.png'),"name":'胰腺癌'},
          {"id":2,"img":require('@/assets/img/home/home.png'),"name":'乳腺癌'},
          {"id":3,"img":require('@/assets/img/home/home.png'),"name":'肺癌'},
          {"id":4,"img":require('@/assets/img/home/home.png'),"name":'待定癌'},
 ]
      }
    }
  }
</script>

<style scoped>
  header{
    background-color: #42b983;
    height: 100px;
    margin: 0;
    padding: 0;
  }
</style>
