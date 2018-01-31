<!--1,模板，html机构-->
<template>
  <div id="translateOutput">
    <h2>{{translatedText}}</h2>
  </div>
</template>
<!--2，行为，逻辑处理-->
<script>
  //局部注册组件

  export default {
    name: 'translateOutput',
    props:[
      "translatedText"
    ]
  }
</script>
<!--3，样式，解决样式-->
<style scoped>

</style>
