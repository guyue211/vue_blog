<template>
    <div class="home">
        <div class="header" >
            <div class="Sort" v-if="this.$route.query.id==null">分类</div>
            <div class="Sort" v-else>{{ this.$route.query.name }}</div>
        </div>
        <div class="main">
            <router-view/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Sort"
    }
</script>

<style scoped>
    .home{
        height: auto;
    }
    .header{
        height: 400px;
        background: url('https://cdn.jsdelivr.net/gh/wuzhiguang1/bolgfile@2.0/photo/d4df7cf248b245ea20bc85a36f2de698--727859976.jpg') center center;
    }
    .header>.Sort{
        width: 100%;
        height: 100%;
        text-align: center;
        color: white;
        margin: 0 auto;
        position: relative;
        font-size: 30px;
        top: 50%;
    }
    .header:before{
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 400px;
        background-color: rgba(0,0,0,0.5);
        content: '';
    }
    .main{
        height: auto;
        background-image: linear-gradient(to right , #E6F7F5, #F9EEF4,#E6F7F5);
        padding-bottom: 50px;
        z-index: 1;
        min-height: 1500px;
    }
</style>