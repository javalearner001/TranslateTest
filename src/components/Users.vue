<template>
  <div class="users">
    <h1>hello Vue</h1>
    <ul>
      <li v-for="user in users" v-on:click="user.show = !user.show">
        <h2>{{user.name}}</h2>
        <h3 v-show="user.show">{{user.position}}</h3>
      </li>
    </ul>
  </div>
</template>
<!--传值：string number，
    传引用：array，object-->
<script>
  export default {
    name: 'users',
    props:{
      users:{
        type:Array,
        required:true
      }
    },
    data () {
      return {


      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.users{
  width: 100%;
  max-width: 1200px;
  margin:40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
  ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
  }
  li{
    flex-grow: 1;
    flex-basis: 200px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
  }
</style>
