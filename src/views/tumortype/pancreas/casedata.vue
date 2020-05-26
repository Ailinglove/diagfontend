<template>
    <el-table :data="data" style="">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column v-for="item in tableTitle"
        :prop="item.prop" :width="item.width" :label="item.label"
      >
        <div class="status" v-if="item.prop==='status'">
          {{item.status}}
        </div>
      </el-table-column>
    </el-table>
</template>

<script>
  import caseItem from "./caseItem";
    export default {
        name: "CaseData",
      components:{
          caseItem
      },
      data(){
          return{
            tableTitle:[
              {prop:'id',label:'编号',width:'100'},
              {prop:'gender',label:'性别',width:'100'},
              {prop:'age',label:'年龄',width:'100'},
              {prop:'modality',label:'模态',width:'100'},
              {prop:'class',label:'诊断分类结果',width:'180'},
              {prop:'seg',label:'诊断分割结果',width:'180'},
              {prop:'status',label:'状态',width:'50'},
              ],
            data:[

              {id:1,gender:1,age:58,modality:'CT',class:'类别1',seg:0,status:0},
              {id:2,gender:0,age:28,modality:'CT',class:'类别1',seg:0,status:0},
              {id:3,gender:0,age:34,modality:'CT',class:'类别1',seg:0,status:0},
              {id:4,gender:1,age:38,modality:'CT',class:'类别1',seg:0,status:0},
              {id:5,gender:0,age:23,modality:'CT',class:'类别1',seg:0,status:0},
              {id:6,gender:1,age:67,modality:'CT',class:'类别1',seg:0,status:0},
              {id:7,gender:1,age:57,modality:'CT',class:'类别1',seg:0,status:0},
            ],

          }
      },
      filters:{

      },
      methods:{
          gender(value){
          if(value===0){
            return '女'
          }else{
            return '男'
          }
        }},
      created(){
        this.data.map(item=>{
          item.gender=this.gender(item.gender)
        })
      }

    }
</script>

<style scoped>
  .status{
    width: 20px;height: 20px;
    border-radius: 50%;
    background: #999999;

  }

</style>
