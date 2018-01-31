<template>
  <header>
    <h1>
      {{title}}
    </h1>
  </header>
</template>

<script>
  export default {
    name: 'header',
    data () {
      return {
        title:"Vue.js demo"
      }
    },
    /*beforeCreate:function () {
      alert("组件实例化之前实现的函数");
    },
    created:function () {
      alert("组件实例化完成，页面为显示");
    },
    beforeMount:function () {
      alert("组件挂载前，页面扔未显示");
    },
    mounted:function () {

    },
    beforeUpdate:function () {

    },
    updated:function () {

    },
    beforeDestroy:function () {
      alert("组件销毁前")
    },
    destroyed:function () {
      alert("组件销毁")
    }*/

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  header{
    background: lightgreen;
    padding: 10px;
  }
  h1{
    color: black;
    text-align: center;
  }
</style>
