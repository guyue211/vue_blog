<template>
  <div class="center">
    <!--<h2>孤月</h2>-->
    <vue-typed-js  :strings="['愿所有的美好都如期而遇.', '出自 xxx']" :typeSpeed="130" :startDelay="1500"
                  :autoInsertCss="true" :loop=" true "
                  :backSpeed="30" :smartBackspace="true">
      <span class="typing"></span>
    </vue-typed-js>
  </div>
</template>

<script>
  export default {
    name: "MiddleText",
  }
</script>

<style scoped>
  .center {
    position: relative;
    top: 46%;
    text-align: center;
  }

  .center h2 {
    font-weight: bold;
   color: #771f17;
    font-size: 25px;
    font-family: 楷体,serif;
    align-items: center;
    text-align: center;
  }

  .typed-element{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 15px;
    font-size: 25px;
    color: #719d44;
    text-align: center;
  }

  .typing {
    display:inline-block;
    float: left;
    text-align: center;
    background: linear-gradient(-45deg, #ee7752, #ce3e75, #23a6d5, #23d5ab);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  /*输入符号*/
  .typed-element .typed-cursor{
    display:inline-block;
    color: #eee;
    float: left;
  }
</style>
