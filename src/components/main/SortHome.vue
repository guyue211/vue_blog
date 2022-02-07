<template>
    <div class="HomeMain">
        <div class="body" id="body">
            <div class="main">
                <div class="sorts">分类({{number}})</div>
                <router-link :to="{name:'SortInfo',query:{id:sort.id,name:sort.name}}" v-for="(sort,index) in Sorts" :key="index">
                    <div class="sort">
                        <span class="span1" style="opacity: 0.6;font-weight: 600">{{ sort.name }}</span><span style="opacity: 0.6">({{ sort.count[0] }})</span>
                    </div>
                </router-link>
            </div>

        </div>
        <Right id="right"/>
    </div>
</template>

<script>
    import Right from "@/components/right/Right";
    export default {
        name: "SortHome",
        components:{ Right},
        data(){
            return{
                Sorts:[],
                number:0,
            }
        },
        mounted() {
            this.getSorts();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        },
        methods:{
            getSorts(){
                this.$axios.get("/api/Collect/Sort").then((res)=>{
                    if (res.data.code===200){
                        this.Sorts=res.data.data.Sorts
                        this.number=res.data.data.number
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .HomeMain {
        margin: 0 auto;
        width: 56%;
        text-align: center;
        height: auto;
    }

    .body {
        display: inline-block;
        width: 76%;
        height: auto;
        font-family: 正楷, sans-serif;
    }

    .right {
        float: right;
        width: 24%;
        position: relative;
        left: 2%;
    }
    .body .main{
        width: 100%;
        background-color: #FFFFFF;
        box-shadow: 0 3px 8px 6px rgba(7,17,27,0.1);
        transition: all 0.5s;
        position: relative;
        right: 3%;
        padding: 2%;
        border-radius: 15px;
        margin: 1.5% auto 0;
    }
    .body .main:hover{
        box-shadow: 0 3px 8px 6px rgba(7,17,27,0.3);
    }
    .main .sorts{
        font-size: 30px;
        font-weight: 700;
        margin-top: 20px;
        width: 100%;
        opacity: 0.5;
        margin-bottom: 20px;
    }
    .main .sort:before{
        z-index: 2;
        position: absolute;
        left: 9%;
        margin-top: 10px;
        transition: all 0.3s ease-out;
        width: 6px;
        height: 6px;
        border: 3px solid #49b1f5;
        border-radius: 20px;
        background: transparent;
        content: '';
    }
    .main .sort{
        text-align: left;
        padding-left: 10%;
        height: 40px;
        line-height: 30px;

    }

    .main .sort:hover:before{
        border: 3px solid #ff7242;
    }
    .main .sort span{
        transition: all 0.3s;
    }
    .main .sort:hover .span1{
        margin-left: 10px;
    }
    .main .sort:hover span{
        color: #49b1f5;
    }
</style>