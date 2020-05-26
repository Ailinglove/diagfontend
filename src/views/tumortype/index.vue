<template>
    <div>
      <div class="tumor-type-header" >
        <ul>
          <li v-for="data in tumortype">{{data.value}}</li>
        </ul>
      </div>

      <router-view>
      </router-view>

    </div>
</template>

<script>
    export default {
        name: "index",
      data(){
          return {
            tumortype:[
              {index:0,value:'胰腺癌',name:'pancreas'},
              {index:1,value:'乳腺癌',name:'breast'},
              {index:2,value:'肺癌',name:'lung'},
              {index:3,value:'肝癌',name:'liver'},
              {index:4,value:'其他',name:'other'}
            ]
          }
      }
    }
</script>

<style scoped>

  .tumor-type-header{
    background: lightsteelblue;
    height: 40px;
    line-height: 40px;
  }

  ul{
    list-style: none;


  }

  li{
    display: inline-block;
    width: 100px;
    text-align: right;
    padding-right: 10px;
    height: 40px;
    line-height: 40px;

    border-right: 1px solid #ccc;
  }
  li:hover{
    background: skyblue;
  }

</style>
