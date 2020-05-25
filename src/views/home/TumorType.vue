<template>
  <div>
    <ul>
      <li v-for="data in TumorTypeItemData">

        <TumorTypeItem>

          <img slot="intro-img" :src="data.img" alt="" style="width:200px;height: 200px;">
          <div slot="intro-text"> {{data.name}}</div>
        </TumorTypeItem>
      </li>
    </ul>

  </div>


</template>

<script>
  import MainRowBar from "../../components/content/mainRowBar/mainrowbar";
  import TumorTypeItem from "./TumorTypeItem";
  export default {
    name: "TumorType",
    components:{
      MainRowBar,
      TumorTypeItem
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
  ul{
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    align-items: center;


  }
  ul>li{
    list-style: none;
    display: inline-block;
    width: 300px;
    height: 300px;
    background-color:#ccc;
    margin: 10px;
    padding-top: 30px;

  }
</style>
