<!--1,模板，html机构-->
<template>
  <div id="translateForm">
    <form v-on:submit="formsubmit">
      <input type="text" v-model="textToTranslate" placeholder="输入需要翻译的内容"/>
      <select v-model="language">
        <option value="en">English</option>
        <option value="ru">Russian</option>
        <option value="ko">Korean</option>
        <option value="fr">French</option>
      </select>
      <input type="submit" value="翻译"/>
    </form>
  </div>
</template>
<!--2，行为，逻辑处理-->
<script>
  //局部注册组件

  export default {
    name: 'translateForm',
    data:function () {
      return {
        textToTranslate:"",
        language:"",
      }
    },
    methods:{
      formsubmit:function (e) {
        this.$emit("formSubmit",this.textToTranslate,this.language);
        e.preventDefault();
      }
    }

  }
</script>
<!--3，样式，解决样式-->
<style scoped>

</style>
