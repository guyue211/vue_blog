<template>
    <div class="home">
        <div class="header">
            <MiddleText />
        </div>
        <div class="main">
           <HomeMain/>
        </div>
            </div>

</template>

<script>

    import MiddleText from "@/components/header/MiddleText";
    import HomeMain from "@/components/main/HomeMain";
    export default {
        name: "Home",
        components: {HomeMain, MiddleText},
    }
</script>

<style scoped>
    .home{
        height: auto;

    }
.header{
    height: 937px;
    background:url("../assets/image/header.png") no-repeat 0 0;
    background-size:100% 100%;
}
.main{
    height: auto;
    background-image: linear-gradient(to left , #E6F7F5, #F9EEF4);
    z-index: 1;
    padding-bottom: 50px;
    min-height: 1300px;
}

</style>