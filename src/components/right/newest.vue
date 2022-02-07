<template>
<div class="wests">
    <div class="west"><img src="../../assets/image/文章管理.png"/><span> 最新文章</span></div>
    <div class="timeline">
        <a :href="'/Article/'+latestArticle.id" v-for="latestArticle in latestArticles" :key="latestArticle.id"><div class="article">
            <div class="photo"><img :src="latestArticle.imageUrl" class="img"/></div>
            <div class="title">j{{ latestArticle.title }}</div>
            <span>{{ latestArticle.releaseTime }}</span>
        </div></a>

    </div>
</div>

</template>

<script>
    export default {
        name: "Newest",
        data(){
            return{
                latestArticles:[]
            }
        },
        methods:{
            info:function (){
                this.$axios.get("/api/right/latestArticles").then((res)=>{
                    if (res.data.code===200){
                        this.latestArticles=res.data.data
                        console.log(res.data.data)
                    }
                })
            }
        },
        mounted() {
           this.info();
        }
    }
</script>

<style scoped>
    .wests{
        width: 100%;
        height: 100%;
    }
    .timeline{
        height: 89%;
        width: 100%;
        position: relative;
        top: 5%;
    }
    .timeline::after{
        content: '';
        position: absolute;
        width: 2px;
        height: 85%;
        left: 10%;
        top: 5%;
        z-index: 1;
        background-color: #49b1f5;
    }
    .west{
        text-align: left;
        position: relative;
        top: 2%;
        left: 5%;
        width: 100%;
    }
.west span{
    position: relative;
    top: 3px;
    font-size: 18px;
    font-weight: 500;
}
.timeline .article{
    width: 80%;
    position: relative;
    left: 15%;
    height: 21%;
    top: 2%;
    margin-top: 1%;
    border-radius: 10px;
}
    .article:before{
        position: absolute;
        left: -8.5%;
        top: 40%;
        width: 0.3rem;
        height: 0.3rem;
        border: 0.15rem solid #49b1f5;
        border-radius: 0.5rem;
        background: #fff;
        content: '';
        -webkit-transition: all 0.2s ease-in-out;
        -moz-transition: all 0.2s ease-in-out;
        -o-transition: all 0.2s ease-in-out;
        -ms-transition: all 0.2s ease-in-out;
        transition: all 0.2s ease-in-out;
        z-index: 2;
    }

    .article:hover:before{
        border: 0.15rem solid #ff7242;
    }
    .photo{
        float: left;
        overflow: hidden;
        width: 30%;
        height: 100%;
    }
    .article .img{
        float: left;
        position: relative;
        width: 100%;
        height: 100%;
        transition: all 0.8s;
    }
    .article span{
        font-size: 8px;
        opacity: 0.4;
        vertical-align: middle;
        position: relative;
        left: -15%;
        top: 10%;
    }
    .article .title{
        position: relative;
        top: 15%;
        font-size: 12px;
        display:-webkit-box;
        -webkit-box-orient:vertical;
        -webkit-line-clamp:2;
        overflow: hidden;
        text-overflow:ellipsis;
        width: 60%;
        height: 52%;
        opacity: 0.6;
    }
    .article:hover .title{
        color: #ff7242;
    }
    .article:hover .photo img{
        transform: scale(1.2);
    }
    a:link { color: black; text-decoration: none; }/* 未访问的链接 */
    a:hover { color: black; text-decoration: none; }/* 鼠标移动到链接上 */
</style>