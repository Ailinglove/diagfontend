<template>
  <div>
    <div class="left"><case-data></case-data></div>
    <div class="right"></div>

  </div>

</template>

<script>
  import CaseData from "./casedata"
    export default {
        name: "index",
      components:{
          CaseData
      }
    }
</script>

<style scoped>
  .left{
    width:40%;
    padding: 20px 50px;
  }

</style>
