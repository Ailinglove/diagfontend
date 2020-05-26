<template>
  <ul>
    <li v-for="data in nav">
      <img :src="data.img" alt="">
      {{data.value}}
    </li>
  </ul>
</template>

<script>
    export default {
        name: "index",
      data(){
          return{
            nav:[
              {"id":1,"img":require('@/assets/img/home/left/icon-statistics.png'),"name":'value1',value:"item1"},
              {"id":2,"img":require('@/assets/img/home/left/icon-statistics.png'),"name":'value2',value:"item2"},
              {"id":3,"img":require('@/assets/img/home/left/icon-statistics.png'),"name":'value3',value:"item3"},
              {"id":4,"img":require('@/assets/img/home/left/icon-statistics.png'),"name":'value4',value:"item4"},
            ]
          }
      }

    }
</script>

<style scoped>
  :root{
    --img-size:20px;
    --bg-color:#4a4a4a;
  }
  img{
    width: 30px;
    height: 30px;
  }
  ul{
    list-style: none;

  }
  li{
    height: 50px;
    margin: 10px 0;
    border-bottom: 1px solid rgba(100,100,100,0.1);
    width: 100%;
    padding-left: 20%;
    /*border: rgba(100,100,100,1);*/

  }
  li:first-child{
    margin-top: 50px;

  }
  li:hover{
    cursor: pointer;
    box-shadow: 5px 1px 5px #4a4a4a;
  }
</style>
