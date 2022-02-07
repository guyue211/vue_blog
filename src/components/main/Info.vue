<template>
<div>
    <div class="HomeMain">
        <div class="body" id="body">
            <div class="main1">
                <div class="sort-name" v-if="this.$route.query.id!=null">分类-{{this.$route.query.name}}</div>
                <div class="sort-name" v-else>标签-{{this.$route.query.name}}</div>

                <div class="sort-time">{{ Articleinfo[0].releaseTime.substring(0,4) }}</div>
                <div class="articles" v-for="(info,index) in Articleinfo" :key="index">

                    <router-link :to="{name:'Article',params:{id:info.id}}" ><div class="article" >
                        <img :src="info.imageUrl" width="80px" height="80px" />
                        <svg t="1629293734474" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6915" width="16" height="16"><path d="M102.26688 911.5904h819.46624V400.7936H102.26688v510.7968z m124.27264-714.8544H102.26688v127.488h819.46624v-127.488h-124.42624v15.6928a38.272 38.272 0 0 1-38.33344 38.28736c-21.15584 0-38.32832-17.152-38.32832-38.28736v-15.6928H303.20128v15.6928c0 21.13536-17.17248 38.28736-38.32832 38.28736-21.16096 0-38.33344-17.152-38.33344-38.28736v-15.6928z m733.52704-76.57472A38.272 38.272 0 0 1 998.4 158.44864v791.424a38.272 38.272 0 0 1-38.33344 38.28736H63.93344C42.77248 988.16 25.6 971.008 25.6 949.87264V158.44864c0-21.13536 17.17248-38.28736 38.33344-38.28736h162.60608V63.88736A38.272 38.272 0 0 1 264.87296 25.6a38.272 38.272 0 0 1 38.32832 38.28736v56.27392h417.44384V63.88736A38.272 38.272 0 0 1 758.97344 25.6a38.22592 38.22592 0 0 1 38.33344 38.28736v56.27392h162.7648zM300.2112 508.84608c21.16096 0 38.33344 17.152 38.33344 38.28736 0 21.13024-17.17248 38.28224-38.33344 38.28224H238.73024c-21.16096 0-38.33344-17.152-38.33344-38.28224 0-21.13536 17.17248-38.28736 38.33344-38.28736h61.48096z m242.49856 0c21.16096 0 38.33344 17.152 38.33344 38.28736 0 21.13024-17.17248 38.28224-38.33344 38.28224H481.2288c-21.16096 0-38.33344-17.152-38.33344-38.28224 0-21.13536 17.17248-38.28736 38.33344-38.28736h61.48096z m242.49856 0c21.16096 0 38.33344 17.152 38.33344 38.28736 0 21.13024-17.17248 38.28224-38.33344 38.28224h-61.48096c-21.16096 0-38.33344-17.152-38.33344-38.28224 0-21.13536 17.17248-38.28736 38.33344-38.28736h61.48096z m-484.99712 190.86848c21.16096 0 38.33344 17.152 38.33344 38.28224 0 21.13536-17.17248 38.28736-38.33344 38.28736H238.73024c-21.16096 0-38.33344-17.152-38.33344-38.28736 0-21.13024 17.17248-38.28224 38.33344-38.28224h61.48096z m242.49856 0c21.16096 0 38.33344 17.152 38.33344 38.28224 0 21.13536-17.17248 38.28736-38.33344 38.28736H481.2288c-21.16096 0-38.33344-17.152-38.33344-38.28736 0-21.13024 17.17248-38.28224 38.33344-38.28224h61.48096z m242.49856 0c21.16096 0 38.33344 17.152 38.33344 38.28224 0 21.13536-17.17248 38.28736-38.33344 38.28736h-61.48096c-21.16096 0-38.33344-17.152-38.33344-38.28736 0-21.13024 17.17248-38.28224 38.33344-38.28224h61.48096z" fill="#2c2c2c" p-id="6916"></path></svg>
                        <span>{{ info.releaseTime }}</span><br>
                        <span>{{ info.title }}</span>
                    </div></router-link>
                    <div class="sort-time" v-if="Articleinfo[index+1]!=null && info.releaseTime.substring(0,4)!==Articleinfo[index+1].releaseTime.substring(0,4)">
                        {{ Articleinfo[index+1].releaseTime.substring(0,4) }}</div>
                </div>

                <!--分页-->
                <div class="pagination">
                    <a v-if="pageinfo.PageNumber!==1">
                        <svg t="1629182248777" class="icon" viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" p-id="1013" width="25" height="25">
                            <path d="M689.92 192a47.36 47.36 0 0 1 0 64l-256 256 256 256a47.36 47.36 0 0 1-64 64L334.08 545.92A50.56 50.56 0 0 1 320 512a47.36 47.36 0 0 1 14.08-33.28L622.72 192a47.36 47.36 0 0 1 67.2 0z"
                                  p-id="1014" fill="#bfbfbf"></path>
                        </svg>
                    </a>
                    <a v-for="(page,i) in showPage" :key="i" :class="{active:page===PageNumber}">
                        <div @click="getArticles(page)" class="page-index" v-if="page!==0">{{ page }}</div>
                        <div class="page-omission" v-else><span>...</span></div>
                    </a>
                    <a v-if="pageinfo.PageNumber!==pageinfo.totalNumber">
                        <svg t="1629181921439" class="icon" viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" p-id="3376" width="25" height="25">
                            <path d="M334.08 192a47.36 47.36 0 0 0 0 64l256 256-256 256a47.36 47.36 0 1 0 64 64l288.64-288.64A50.56 50.56 0 0 0 704 512a47.36 47.36 0 0 0-14.08-33.28L401.28 192a47.36 47.36 0 0 0-67.2 0z"
                                  p-id="3377" fill="#bfbfbf"></path>
                        </svg>
                    </a>
                </div>







            </div>
        </div>
        <Right id="right"/>
    </div>
</div>
</template>

<script>
    import Right from "@/components/right/Right";
    export default {
        name: "Info",
        components:{Right},
        mounted() {
            if (this.$route.query.id!=null){
                this.getArticles(1)
            }else {
                this.getArticles1(1)
            }


        },
        data(){
            return{
                Articleinfo:[],
                pageinfo: {
                    //总页码
                    totalNumber: 1,
                    //当前页码
                    PageNumber: 1,
                },
            }
        },
        methods:{
            getArticles(num) {
                this.$axios.get("/api/home/Articles",{
                    params:{
                        num:num,
                        id:this.$route.query.id!=null?this.$route.query.id:this.$route.query.lid,
                        type:this.$route.query.id!=null?'sid':'lid'
                    }
                }).then((res)=>{
                    if (res.data.code===200){
                        this.Articleinfo=res.data.data.Articles
                        this.pageinfo.totalNumber=res.data.data.pageNum;
                        this.pageinfo.PageNumber=num;
                        window.scrollTo({
                            top: 400,
                            behavior: "smooth"
                        })


                    }
                })
            },
        },
        computed:{
            showPage()
            {
                //总页数
                const pageNum = this.pageinfo.totalNumber;
                //当前页
                const index = this.pageinfo.PageNumber;
                if (pageNum <= 5) return [...new Array(pageNum)].map((v, i) => i + 1);
                if (index <= 2) return [1, 2, 3, 0, pageNum];
                if (index >= pageNum - 1) return [1, 0, pageNum - 2, pageNum - 1, pageNum];
                if (index === 3) return [1, 2, 3, 4, 0, pageNum];
                if (index === pageNum - 2) return [1, 0, pageNum - 3, pageNum - 2, pageNum - 1, pageNum];
                return [1, 0, index - 1, index, index + 1, 0, pageNum]
            }
            ,
            PageNumber()
            {
                return this.pageinfo.PageNumber;
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
        min-width: 700px;
        height: auto;
        font-family: 正楷, sans-serif;
        color: #7b7992;
    }

    .right {
        float: right;
        width: 24%;
        position: relative;
        left: 2%;
    }
    .body .main1{
        width: 100%;
        background-color: #FFFFFF;
        box-shadow: 0 3px 8px 6px rgba(7,17,27,0.1);
        transition: all 0.5s;
        position: relative;
        right: 3%;
        padding: 2%;
        border-radius: 15px;
        margin: 1.5% auto 0;
        text-align: left;
    }
    .body .main1:hover{
        box-shadow: 0 3px 8px 6px rgba(7,17,27,0.3);
    }
    .body .main1>div{
        padding-left: 10%;
    }
    .sort-name:before{
        position: absolute;
        top: 20px;
        left: 5%;
        margin-top: 10px;
        transition: all 0.3s ease-out;
        width: 10px;
        height: 10px;
        border: 6px solid #49b1f5;
        border-radius: 20px;
        background: transparent;
        content: '';
    }
    .sort-name:after{
        position: absolute;
        top: 50px;
        left: 6.1%;
        transition: all 0.3s ease-out;
        width: 2px;
        height: 40px;
         background-color: #49b1f5;
        border-radius: 20px;
        content: '';
    }
    .sort-name{
        font-size: 20px;
        line-height: 20px;
        font-weight: bold;
        position: relative;
        width: 100%;
        padding-top: 30px;
        margin-bottom: 20px;
    }
    .sort-time{
        height: 50px;
        line-height: 50px;
        position: relative;
        font-weight: bold;
        font-size: 18px;
        left: 10px;
        color: #7b7992;
    }

    .sort-time:after{
        position: absolute;
        top: 20px;
        left: 4.9%;
        transition: all 0.3s ease-out;
        width: 6px;
        height: 6px;
        border: 3px solid #ff7242;
        border-radius: 20px;
        background: transparent;
        content: '';

    }
    .articles{
        width: 90%;
    }
    .article:after{
        content: '';
        position: absolute;
        transition: all 0.3s ease-out;
        left: -3.6%;
        top: -18px;
        width: 2px;
        height: 100px;
        background-color: #49b1f5;
        border-radius: 20px;
    }
    .article:before{
        position: absolute;
        transition: all 0.3s ease-out;
        z-index: 1;
        top: 33px;
        left: -4.3%;
        width: 6px;
        height: 6px;
        border-radius: 20px;
        background: white;
        border: 3px solid #49b1f5;
        content: ' ';
    }
    .article{
        position: relative;
        height: 80px;
        margin-bottom: 20px;
    }
    .articles .sort-time{
        top: -10px;
    }
    .articles .sort-time:after{
        left: -5.9%;
        background-color: white;
    }
    .sort-time:hover:after{
        border-color:#49b1f5 ;
    }
    .articles .sort-time:before{
        content: '';
        position: absolute;
        transition: all 0.3s ease-out;
        left: -5%;
        top: -10px;
        width: 2px;
        height: 60px;
        background-color: #49b1f5;
        border-radius: 20px;
    }
    .article:hover:before,.sort-name:hover:before{
        border-color:#ff7242 ;
    }
    .article:hover div{
        padding-left: 10px;
    }
    .article>img{
        float: left;
        width: 80px;
    }
    .article>svg{
        position: relative;
        left: 2%;
        top: 15px;
        opacity: 0.7;
    }
    .article>span{
        font-size: 14px;
        position: relative;
        left: 3%;
        top: 13px;
        color: #969696;
        transition: padding-left 0.5s;
    }
    .article>span:last-child{
        top: 18px;
        font-size: 17px;
        font-weight: bold;
        opacity: 0.7;
        color:#4C4948;
    }
    .article:hover>span:last-child{
        padding-left: 10px;
        color: #28a48b;
    }


    .page-index svg:hover path {
        fill: #00C4B6;
    }

    .page-index {
        position: relative;
        top: -6px;
        font-size: 18px;
        display: inline-block;
        height: 20px;
        padding: 2px 8px;
        border-radius: 5px;
        line-height: 20px;
        transition: all 0.3s;
        font-weight: bold;
        opacity: 0.4;
    }

    .page-omission {
        position: relative;
        top: -6px;
        font-size: 13px;
        display: inline-block;
        height: 20px;
        border-radius: 5px;
        line-height: 20px;
        transition: all 0.3s;
        font-weight: bold;
        opacity: 0.4;
    }

    .active .page-index {
        background-color: #00C4B6;
        transition: none;
        color: white;
        opacity: 1;
    }

    .active .page-index:hover {
        color: white;
    }

    .page-index:hover {
        color: #00C4B6;
    }

    .pagination {
        text-align: center;
        width: 80%;
        display: inline-block;
        margin-top: 6px;
    }
</style>