<template>
  <div id="app">
      <Nav style="z-index: 9999;position: fixed"/>
        <router-view/>
      <Footer style="position: relative;bottom: 0"/>
  </div>
</template>

<style>
    body,ol,ul,h1,h2,h3,h4,h5,h6,p,th,td,dl,dd,form,fieldset,legend,input,textarea,select{margin:0;padding:0}
    body{font:18px"宋体","Arial Narrow",HELVETICA;background:#fff;-webkit-text-size-adjust:100%;}
    a{color:#2d374b;text-decoration:none}
    a:hover,button:hover{cursor: url(https://cdn.jsdelivr.net/gh/sviptzk/HexoStaticFile@latest/Hexo/img/default.cur), auto;

    }
    em{font-style:normal}
    li{list-style:none}
    img{border:0;vertical-align:middle; object-fit: cover;}
    table{border-collapse:collapse;border-spacing:0}
    p{word-wrap:break-word}
    body{cursor: url(https://cdn.jsdelivr.net/gh/sviptzk/HexoStaticFile@latest/Hexo/img/default.cur), auto;}
</style>
<script>
    import Nav from "@/components/nav/Nav";
    import Footer from "@/components/footer/footer";
    export default {
        components: {
            Footer,
            Nav,
        }
    }
</script>