<template>
  <footer id="footer">
    <p>
      {{copytight}}
    </p>
  </footer>
</template>

<script>
  export default {
    name: 'footer',
    data () {
      return {
        copytight:"Copy right 2017Vue demo"
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  footer{
    background: black;
    padding: 20px;
  }
  p{
    color: lightgreen;
    text-align: center;
  }
</style>
