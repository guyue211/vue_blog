<template>
    <div class="home">
        <div class="header" :style="{background: 'url('+info.imageUrl+') center center'}" >
            <HeaderText :info="info"/>
        </div>
        <div class="main">
            <ArticleHome :info="info"/>
        </div>
    </div>
</template>

<script>
    import ArticleHome from "@/components/main/ArticleHome";
    import HeaderText from "@/components/header/HeaderText";
    export default {
        name: "Article",
        components:{
            HeaderText,
            ArticleHome
        },
        data(){
            return{
                info:{},
                id:this.$route.params.id
            }
        },
        mounted() {
            this.axios(this.id);
        },
        methods:{
            axios:function (id){
                this.$axios.get("/api/home/Article",{params:{ id:id }}).then((res)=>{
                    if (res.data.code === 200) {
                        this.info=res.data.data;
                    }
                });
            }
        }
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