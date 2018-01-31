<!--1,模板，html机构-->
<template>
  <div id="app">
    <h1>在线翻译</h1>
    <h5>简单 / 易用 / 便捷</h5>
    <translate-form v-on:formSubmit="translateText"></translate-form>
    <tranalate-output v-text="translatedText"></tranalate-output>
  </div>
</template>
<!--2，行为，逻辑处理-->
<script>
//局部注册组件
import TranslateForm from './components/TranslateForm'
import TranalateOutput from './components/TranslateOutput'
export default {
  name: 'app',
  data:function () {
    return{
      translatedText:""
    }
  },
  components:{
    TranslateForm,
    TranalateOutput
  },
  methods: {
    translateText: function (text,language) {
      //alert(text+"为什么");
      this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180131T054027Z.7ca4a520b159a255.97888458de0a3a0558db1d75c3c3f8049deb0663&lang='+language+'&text='+text)
        .then((response)=>{
          this.translatedText=response.body.text[0];
        })
    }
  }
}
</script>
<!--3，样式，解决样式-->
<style scoped>

</style>
