<template>
    <div class="HomeMain">
        <div class="body" id="body">
            <div class="contents">
                    <mavon-editor class="markdown"
                                  :value="Article.content"
                                  :subfield = "prop.subfield"
                                  :defaultOpen = "prop.defaultOpen"
                                  :toolbarsFlag = "prop.toolbarsFlag"
                                  :editable="prop.editable"
                                  :scrollStyle="prop.scrollStyle"
                                  :boxShdow="prop.boxShadow"
                                  :previewBackground="prop.previewBackground"
                    ></mavon-editor>
                <div class="introduces">
                    <div class="introduce">
                        <div class="title">
                            <span>{{ Article.title }}</span>
                        </div>
                        <div class="address">
                            <a :href="href">{{href}}</a>
                        </div>
                        <div class="text">
                            <div class="auth">
                                <span>作者</span><br>
                                <span class="span1">孤月</span>
                            </div>
                            <div class="releaseTime ">
                                <span>发布于</span><br>
                                <span class="span1">{{ Article.releaseTime }}</span>
                            </div>
                            <div class="updateTime ">
                                <span>更新于</span><br>
                                <span class="span1">{{ Article.updateTime }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="labels" >
                        <a :href="label.id" v-for="label in Article.labels" :key="label.id"><div class="label"><span>{{ label.name }}</span></div></a>
                    </div>
                </div>
                <hr>
                <a :href="seesaw[length-2].id"  v-if="length>1"><div class="images"> <img :src="seesaw[length-2].imageUrl">
                <div class="last">
                    <span>上一篇</span><br>
                    <span>{{ seesaw[length-2].title }}</span>
                </div>
                </div></a>
                <a :href="seesaw[length-1].id" v-if="length<=2" ><div class="images"> <img :src="seesaw[length-1].imageUrl">
                    <div class="next">
                        <span v-if="seesaw[length-1].id>Article.id">下一篇</span><span v-else>上一篇</span><br>
                        <span>{{ seesaw[length-1].title }}</span>
                    </div></div></a>
                <hr>
                <div class="recommend">
                    <svg t="1627545591009" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2021" width="32" height="32"><path d="M596.45 462.32c52.43 0 103.59-0.28 154.74 0.22 11.18 0.11 22.81 1.53 33.4 4.94 35.5 11.45 59.12 52.39 51.18 89.82-18.86 88.93-39.02 177.58-57.73 266.54-5.21 24.77-12.05 47.63-33.65 63.25-11.88 8.59-24.21 15.37-39.6 15.36-136-0.12-272.01-0.05-408.01-0.05-1.92 0-3.84-0.26-7.18-0.51-0.25-4.18-0.72-8.27-0.72-12.36 0.14-130.53 0.4-261.06 0.34-391.59 0-8.61 2.13-11.74 11.25-13.22 75.59-12.23 138.48-81.59 144.34-158.02 1.61-20.93 1.75-41.89 10.68-61.89 23.22-51.98 86.22-54.45 119.89-23.09 15.76 14.68 24.43 32.93 28.16 53.99 9.54 53.85 8.32 107.21-6.38 160.08-0.41 1.45-0.35 3.03-0.71 6.53z m-347.61 61.44c-0.07-22.16-11.89-34.99-33.48-35.43-28.5-0.58-57.04-0.63-85.54 0.04-20.49 0.49-32.6 13.15-32.64 33.69-0.2 115.63-0.21 231.26 0.01 346.89 0.04 21.15 12.76 33.26 33.87 33.42 26.56 0.2 53.13 0.1 79.69 0.05 26.8-0.05 38.13-11.56 38.15-38.81 0.04-56.25 0.01-112.5 0.01-168.76-0.01-57.02 0.1-114.06-0.07-171.09z m464.22-128.85c21.53-8.8 42.95-17.89 64.68-26.14 4.53-1.72 10.82-1.83 15.31-0.12 21.72 8.28 43.11 17.45 64.62 26.29 16.84 6.92 23.63 1.93 22.15-16.07-1.89-22.85-4.07-45.69-5.12-68.58-0.25-5.48 2.18-12.19 5.64-16.53 14.5-18.21 29.9-35.69 44.87-53.52 10.04-11.97 7.56-20.28-7.4-24.02-22.91-5.73-46-10.72-68.79-16.88-5.01-1.35-10.46-5.34-13.31-9.68-13.17-20.02-25.41-40.64-38.14-60.94-7.88-12.57-16.62-12.66-24.35-0.2-12.46 20.07-24.95 40.13-36.85 60.52-3.67 6.29-8.31 9.39-15.17 10.95-23.03 5.21-45.99 10.71-68.91 16.4-14.78 3.67-17.17 11.54-7.33 23.15 15.06 17.76 29.86 35.76 45.5 52.99 5.82 6.41 6.91 12.76 6.11 20.77-2.2 22.12-3.83 44.3-5.68 66.45-0.78 17.59 5.57 21.94 22.17 15.16z" p-id="2022"></path></svg>
                    <span>相关推荐</span>
                </div>
                <div class="infoall">
                    <a :href="'/Article/'+RecommendInfo.id" v-for="RecommendInfo in RecommendInfo" :key="RecommendInfo.id">
                        <div class="info"><img :src="RecommendInfo.imageUrl">
                        <div class="date">
                            <svg t="1627550569432"  class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3186" width="16" height="16"><path d="M882.6 960h-740c-28.2 0.6-51.7-21.4-52.9-49.5V201.8c0-28.6 23.2-51.8 51.8-51.8h137.8V81.1c0-9.4 7.6-17.1 17.1-17.1h51.8c9.4-0.3 17.3 7.1 17.6 16.5V150h292.6V81.1c0-9.4 7.6-17.1 17.1-17.1h51.8c9.4-0.3 17.3 7.1 17.6 16.5V150h137.8c28.6 0 51.8 23.2 51.8 51.8v708.7c-1.3 27.7-24.2 49.5-51.9 49.5z m0-740c-0.3-9.3-7.8-16.8-17.1-17.1H744.8v51.8c0 9.4-7.6 17.1-17.1 17.1h-51.8c-9.4 0.3-17.3-7.1-17.6-16.5v-53.5H365.7v51.8c0 9.4-7.6 17.1-17.1 17.1h-51.8c-9.4 0.3-17.3-7.1-17.6-16.5v-52.4H158.5c-9.3 0.3-16.8 7.8-17.1 17.1v122.4h740V218.8l1.2 1.2z m0 170.8h-740v499.8c0 9.4 7.6 17.1 17.1 17.1h705.9c9.4 0 17.1-7.6 17.1-17.1l-0.1-499.8zM779 804.6h-68.9c-9.4 0-17.1-7.6-17.1-17.1v-68.9c0-9.4 7.6-17.1 17.1-17.1H779c9.4 0 17.1 7.6 17.1 17.1v68.9c0.3 9.4-7.1 17.3-16.5 17.6h-0.6v-0.5z m0-189.6h-68.9c-9.4 0-17.1-7.6-17.1-17.1V529c0-9.4 7.6-17.1 17.1-17.1H779c9.4 0 17.1 7.6 17.1 17.1v69c0.3 9.4-7.1 17.3-16.5 17.6h-0.6v-0.6zM555.3 804.6h-68.9c-9.7 0-17.6-7.9-17.6-17.6v-68.3c0.3-9.5 8.1-17.1 17.6-17.1h68.9c9.3 0.3 16.8 7.8 17.1 17.1v68.9c0 9.5-7.6 17.3-17.1 17.6v-0.6z m0-189.6h-68.9c-9.7 0-17.6-7.9-17.6-17.6v-68.3c0.3-9.5 8.1-17.1 17.6-17.1h68.9c9.3 0.3 16.8 7.8 17.1 17.1V598c0 9.5-7.6 17.3-17.1 17.6v-0.6zM331 805.2h-68.9c-9.4 0-17.1-7.6-17.1-17.1v-69.5c0-9.4 7.6-17.1 17.1-17.1H331c9.4 0 17.1 7.6 17.1 17.1v68.9c0.3 9.4-7.1 17.3-16.5 17.6-0.2 0.1-0.4 0.1-0.6 0.1z m0-189.6h-68.9c-9.4 0-17.1-7.6-17.1-17.1V529c0-9.4 7.6-17.1 17.1-17.1H331c9.4 0 17.1 7.6 17.1 17.1v69c0.3 9.4-7.1 17.3-16.5 17.6h-0.6z" p-id="3187" fill="#e6e6e6"></path></svg>
                            {{RecommendInfo.releaseTime }}
                        </div>
                        <div class="title">
                            {{RecommendInfo.title }}
                        </div>
                    </div></a>

                </div>
                <div class="comment">
                    <svg t="1627551189788" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9624" width="28" height="28"><path d="M949.570847 212.673727l-41.801035 41.517579L768.565377 115.843378l41.801035-41.459251c15.340383-15.283078 39.522132-16.084327 53.892421-1.768273l87.024006 86.454024C965.710432 173.382862 964.91123 197.393719 949.570847 212.673727L949.570847 212.673727zM580.373227 579.594491 441.169815 441.244516l306.238706-304.299541 139.205459 138.348951L580.373227 579.594491 580.373227 579.594491zM560.984644 598.869486l-194.863083 55.314817 55.659671-193.666838L560.984644 598.869486 560.984644 598.869486zM236.551554 178.118724c-48.13223 0-87.081311 38.949081-87.081311 87.024006l0 522.372232c0 48.062646 38.962384 87.026052 87.026052 87.026052l522.485819 0c48.063669 0 87.028099-38.963407 87.028099-87.028099L846.010213 439.248046l87.079264-87.028099 0 464.321094c0 80.124875-64.954361 145.078213-145.078213 145.078213L207.468169 961.619254c-80.124875 0-145.078213-64.954361-145.078213-145.078213L62.389956 236.114602c0-80.124875 64.954361-145.078213 145.078213-145.078213l464.435705 0-87.083357 87.083357L236.551554 178.119747 236.551554 178.118724z" p-id="9625" fill="#2c2c2c"></path></svg>
                    <span> 评论</span>
                </div>
                    <Vcomments prop="欢迎留言" cid=0 />
                <div class="messages ">
                    <div class="message" v-for="comment in comments" :key="comment.id">
                        <img src="../../assets/image/1.jpeg"/>
                        <div class="name">
                            <a v-if="comment.url.length>0" :href=" comment.url">{{ comment.name }}</a>
                            <span v-else>{{ comment.name }}</span>

                        </div>
                        <div class="date">{{ comment.releaseTime}}</div>
                        <div class="huifu" @click="replys(comment.id)">回复</div>
                        <div class="text">{{ comment.content }}</div>
                        <div class="vcomment" v-if="commentId===comment.id">
                            <Vcomments v-if="huifu==true" :prop="'@'+comment.name+'         '" :cid="comment.id"/>
                        </div>
                        <div v-if="comment.replys.length>0">
                        <div class="message1"  v-for="(reply,index) in comment.replys"  :key="index">
                            <img src="../../assets/image/1.jpeg"/>
                            <div class="name">
                                <a v-if="reply.url.length>0" :href=" reply.url">{{ reply.name }}</a>
                                <span v-else>{{ reply.name }}</span>
                            </div>
                            <div class="date">{{ reply.releaseTime }}</div>
                            <div class="huifu" @click="replys(comment.id+'.'+reply.id)" >回复</div>
                            <div class="text">{{ reply.content }}</div>
                            <div class="vcomment" v-if="commentId===comment.id+'.'+reply.id " >
                                <Vcomments v-if="huifu==true" :prop="'@'+reply.name+'         '" :cid="comment.id"/>
                            </div>
                        </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>
         <Right id="right"/>


    </div>

</template>

<script>
    import $ from 'jquery'
    import Right from "@/components/right/Right";
    import Vcomments from "@/components/main/vcomments";

    export default {
        name: "ArticleHome",
        components:{
            Right,
            Vcomments
        },
        mounted() {
            this.monitor();


        },

        computed: {
            prop () {
                return {
                    subfield: false,// 单双栏模式
                    defaultOpen: 'preview',//edit： 默认展示编辑区域 ， preview： 默认展示预览区域
                    editable: false,//是否允许编辑
                    toolbarsFlag: false,
                    scrollStyle: true,//滚动条  只支持chromes
                    boxShadow:false,//边框阴影
                    previewBackground: '#fff',//预览框背景色
                }
            }
        },
        methods:{
            getSeesaw:function(id){
                this.$axios.get("/api/home/Article/seesaw",{params:{id:id}}).then((res)=>{
                    if (res.data.code == 200){
                        this.seesaw=res.data.data
                        this.length=this.seesaw.length
                    }
                });
            },
            getRecommend:function (sid){
                this.$axios.get("/api/home/Article/recommend",{params:{sid:sid}}).then((res)=>{
                    if (res.data.code===200){
                        this.RecommendInfo=res.data.data;
                    }
                })
            },
            getComments:function (aid){
                this.$axios.get("/api/home/Article/comments",{params:{aid:aid}}).then((res)=>{
                    if (res.data.code == 200){
                        this.comments=res.data.data

                    }
                });
            },
            replys:function (cid){
                if (this.huifu){
                    $('#right').css('height',1300);
                }
                console.log(cid)
                this.huifu=!this.huifu
                this.commentId=cid
            },
            monitor:function (){
                // 直接导入使用，也可以在main.js中引入
                const elementResizeDetectorMaker = require("element-resize-detector");
                // 创建实例，无参数
                const erd = elementResizeDetectorMaker();
                // 创建实例带参数
                const erdUltraFast = elementResizeDetectorMaker({// eslint-disable-line no-unused-vars
                    strategy: "scroll",
                    callOnAdd: true,
                    debug: true
                });
                //监听id为test的元素 大小变化
                erd.listenTo(document.getElementById("body"), function(element) {
                    const height = element.offsetHeight;
                    const height1 = $('#right').height();
                    if(height1<height){
                        $('#right').css('height',height);
                    }

                });
            }

        },
        data(){
            return{
                huifu:false,
                //文章信息
                Article:{},
                //相邻文章
                seesaw:[
                    {id:0},
                    {id:0}
                ],
                length:2,
                //当前网址
                href:window.location.href,
                //推荐文章
                RecommendInfo:[],
                //评论
                comments:[],
                //评论id
                commentId:0
            }
        },
        props:['info'],
        watch:{
            info:function (val){
                this.Article=val
                console.log( this.Article)
                //查相邻文章
                this.getSeesaw(val.id)
                //查推荐文章
                this.getRecommend(this.Article.sort.id)
                //查评论
                this.getComments(val.id)
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
    }

    .right {
       float: right;
        width: 24%;
        position: relative;
        left: 2%;
    }

    .body > div {
        border-radius: 15px;
        margin: 1.5% auto 0;

    }


    .body .contents {
        width: 100%;
        height: auto;
        background-color: #FFFFFF;
        box-shadow: 0 3px 8px 6px rgba(7,17,27,0.1);
        transition: all 0.5s;
        position: relative;
        right: 3%;
        padding: 2%;

    }
    .body .contents:hover{
        box-shadow: 0 3px 8px 6px rgba(7,17,27,0.3);
    }
    .markdown {
        width: 100%;
        /* 暂时未限制高度 height: 500px;*/
        border: none !important;
        box-shadow:none !important;
    }
    .body .contents .introduces{
        margin: 10px auto;
        width: 90%;
    }
    .body .contents .introduces .introduce{
        height: 130px;
        border-radius: 100px;
        background-color: #EFF1F3;
        border: 1px solid #eeeeee;
    }
    .body .contents .introduces .introduce .title{
        margin: 5px auto;
        overflow: hidden;
        white-space: nowrap;
        text-overflow:ellipsis;
        height: 20%;
        width: 80%;
    }
    .body .contents .introduces .introduce .title span{
        font-size: 21px;
        position: relative;
        font-weight: 600;
        opacity: 0.8;
        top: 10%;

    }
    .body .contents .introduces .introduce .address{
        margin: 5px auto;
        height: 15%;
        width: 80%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow:ellipsis;
    }
    .body .contents .introduces .introduce .text{
        margin: 0 auto;
        width: 80%;
        height: 40%;
    }
    .body .contents .introduces .introduce .text .auth,.text .releaseTime,.text .updateTime{
        display: inline-block;
        width: 20%;
        height: 100%;
    }
    .body .contents .introduces .introduce .text .auth span,.text .releaseTime span,.text .updateTime span{
        position: relative;
        display: block;
        top: 15%;
    }
    .span1{
       margin-top: -10px;
        display: block;
    }
    .body .contents .introduces .labels{
        margin: 10px auto;
        width: 80%;
        height: 30px;
    }
    .body .contents .introduces .labels .label{
        text-align: center;
        padding: 0 0.6rem;
        width: auto;
        height: 90%;
        border-radius: 0.6rem;
        border:  1px  #00c4b6 solid ;
        margin-left: 1%;
        float: left;
        transition: all 0.5s;
    }
    body .contents .introduces .labels a span{
        transition: all 0.5s;
        position: relative;
        top: 12%;
        text-align: center;
        font-size: 90%;
    }
    body .contents .introduces .labels a:hover .label{
        background-color: #ff7242;
    }
    body .contents .introduces .labels .label:hover span{
        color: #ffffff;
    }
    a{
        color: #00c4b6!important;
    }
    hr{
        opacity: 0.2;
        width: 93%;
    }
    .contents .images{
        display: inline-block;
        width: 45%;
        height: 150px;
        background-color: black;
        overflow: hidden;
    }
    .contents .images img,.contents .info img{
        width: 100%;
        height: 100%;
        opacity: 0.5;
        transition: all 0.6s;
        object-fit: cover;
    }
    .next,.last{
        font-size: 14px;
        color: white;
        margin: 0 auto;
        position: relative;
        top: -60%;
        height: 40px;
        width: 85%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow:ellipsis;
        font-weight: 500;
        font-family: 正楷,sans-serif;
    }
    .next{
        text-align: right;

    }
    .last{
        text-align: left;
    }
    .contents .images:hover img{
        transform: scale(1.1);
        opacity: 1;
    }
    .contents .recommend,.contents .comment{
        text-align: left;
        margin: 5px auto;
        height: 30px;
        width: 90%;
        font-weight: 700;
    }
    .contents .recommend span,.contents .comment span{
        position: relative;
        top: -6px;
        font-family: 正楷, sans-serif;
    }
    .contents .infoall{
        margin: 10px auto;
        width: 90%;
        height: auto;
        display: inline-block;
    }
    .contents .info{
        float: left;
        height: 180px;
        margin-left: 0.7%;
        margin-top: 0.7%;
        width: 32%;
        background-color: black;
        overflow: hidden;
        border-radius: 5px;
    }
    .contents .info:hover img{
        opacity: 1;
        transform: scale(1.15);
    }
    .contents .info .date,.contents .info .title{
        font-family: 正楷, sans-serif;
        font-size: 13px;
        transition: all 0.6s;
        margin: 0 auto;
        position: relative;
        top: -65%;
        height: 15%;
        width: 80%;
        color: white;
        z-index: 2;
    }
    .contents .info .title{
        overflow: hidden;
        text-overflow: ellipsis;
        height: 30%;
    }
    .contents .info .date svg{
        position: relative;
        top: 2px;
    }




    .contents .messages{
        margin: 20px auto 0;
        width: 90%;
        border-radius: 10px;
        border: #f0f0f0 1px solid;
        font-size: 13px;
    }
    .contents .messages img{
        transition: all 0.6s;
    }
    .contents .messages img:hover{
        transform: rotate(360deg);

    }
    .contents .messages .message{
        width: 100%;
        margin: 10px auto;
        text-align: left;
    }
    .messages .message img{
        width: 50px;
        height: 50px;
        border-radius: 50px;
        position: relative;
        top: 5px;
        left: 3%;
    }
    .messages .message .name{
        display: block;
        position: relative;
        font-weight: 600;
        opacity: 0.5;
        left: 80px;
        top: -35px;
        text-align: left;
        font-size: 14px;
    }
    .messages .message1 .name{
        left: 75px;
    }
    .messages .message .date{
        display: block;
        position: relative;
        top: -28px;
        left: 75px;
        opacity: 0.5;
    }
    .messages .message1 .date{
        left: 70px;
    }
    .messages .message .text{
        font-weight: 600;
        opacity: 0.6;
        background-color: #EEEEEE;
        border-radius: 15px;
        padding: 5px 10px;
        position: relative;
        width: 80%;
        word-break:break-all;
        top: -20px;
        left: 10%;
    }
    .messages .message .huifu{
        height: 20px;
        font-size: 15px;
        position: relative;
        float: right;
        top: -45px;
        right: 10%;
        color: #ff7242;
    }
    .messages .message .message1{
        margin: -8px auto 0;
        width: 80%;
    }
    .vcomment{
        margin: 0 auto;
        text-align: center;
    }
    .messages .name>a{
        color: black !important;
        transition: color 0.3s;
    }
    .messages .name>a:hover{
        color: #ff7242 !important;
    }
</style>