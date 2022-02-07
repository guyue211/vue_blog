<template>
    <div class="HomeMain">
        <div class="body" id="body">
            <div class="recommend">
                <Recommend style="margin: 0;"/>
            </div>
            <div class="sort">
                <Sort/>
            </div>
            <div class="contents">


                <div class="content" v-for="(info,index) in Articleinfo" :key="index" :class="{'div1':index%2 === 1}">
                    <a :href="'/Article/'+info.id">
                        <div class="img">
                            <img :src="info.imageUrl"/>
                        </div>
                    </a>
                    <div class="text">
                        <a :href="'/Article/'+info.id">
                            <div class="title">
                                <span>{{ info.title }}</span>
                            </div>
                        </a>
                        <div class="present">
                            <svg t="1627366060035" class="icon svg1" viewBox="0 0 1024 1024" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg" p-id="1388" width="16" height="16">
                                <path d="M296.28 318.93c25.61 0 45.31-19.7 45.31-45.31v-132c0-23.64-19.7-45.31-45.31-45.31-25.61 0-45.31 19.7-45.31 45.31v132c0 25.61 19.7 45.31 45.31 45.31zM668.62 578.98h94.56c11.82 0 21.67-9.85 21.67-21.67v-61.07c0-11.82-9.85-21.67-21.67-21.67h-94.56c-11.82 0-21.67 9.85-21.67 21.67v61.07c-1.97 11.82 7.88 21.67 21.67 21.67zM668.62 762.2h94.56c11.82 0 21.67-9.85 21.67-21.68v-61.07c0-11.82-9.85-21.67-21.67-21.67h-94.56c-11.82 0-21.67 9.85-21.67 21.67v61.07c-1.97 11.83 7.88 21.68 21.67 21.68zM773.03 273.62c0 3.94-1.97 5.91 0 7.88v-7.88zM725.75 318.93c25.61 0 45.31-19.7 45.31-45.31v-132c0-23.64-19.7-45.31-45.31-45.31-25.61 0-45.31 19.7-45.31 45.31v132c1.97 25.61 21.67 45.31 45.31 45.31zM463.73 578.98h94.56c11.82 0 21.67-9.85 21.67-21.67v-61.07c0-11.82-9.85-21.67-21.67-21.67h-94.56c-11.82 0-21.67 9.85-21.67 21.67v61.07c0 11.82 9.85 21.67 21.67 21.67zM260.81 578.98h94.57c11.82 0 21.67-9.85 21.67-21.67v-61.07c0-11.82-9.85-21.67-21.67-21.67h-94.57c-11.82 0-21.67 9.85-21.67 21.67v61.07c-1.97 11.82 9.85 21.67 21.67 21.67zM260.81 762.2h94.57c11.82 0 21.67-9.85 21.67-21.68v-61.07c0-11.82-9.85-21.67-21.67-21.67h-94.57c-11.82 0-21.67 9.85-21.67 21.67v61.07c-1.97 11.83 9.85 21.68 21.67 21.68zM463.73 762.2h94.56c11.82 0 21.67-9.85 21.67-21.68v-61.07c0-11.82-9.85-21.67-21.67-21.67h-94.56c-11.82 0-21.67 9.85-21.67 21.67v61.07c0 11.83 9.85 21.68 21.67 21.68z"
                                      p-id="1389" fill="#858585"></path>
                                <path d="M847.9 177.09h-47.28v96.54c0 39.4-33.49 70.92-72.89 70.92s-72.89-31.52-72.89-70.92v-96.54H369.17v96.54c0 39.4-33.49 70.92-72.89 70.92-39.41 0-72.89-31.52-72.89-70.92v-96.54H176.1c-43.34 0-76.83 35.46-76.83 76.84v598.9c0 41.37 33.49 74.86 76.83 74.86h671.8c41.37 0 76.83-33.49 76.83-74.86v-598.9c0-41.38-35.46-76.84-76.83-76.84z m9.85 675.73c0 5.91-3.94 9.85-9.85 9.85H176.1c-5.91 0-9.85-3.94-9.85-9.85V378.04h691.5v474.78z"
                                      p-id="1390" fill="#858585"></path>
                            </svg>
                            <span>发布于{{ info.releaseTime }}</span>
                            <span class="Separate">|</span>
                            <svg t="1627367026352" class="icon svg2" viewBox="0 0 1024 1024" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg" p-id="3568" width="16" height="16">
                                <path d="M170.24 172.8m54.5792 0l187.8016 0q54.5792 0 54.5792 54.5792l0 187.8016q0 54.5792-54.5792 54.5792l-187.8016 0q-54.5792 0-54.5792-54.5792l0-187.8016q0-54.5792 54.5792-54.5792Z"
                                      fill="#2c2c2c" p-id="3569"></path>
                                <path d="M172.8 554.24m54.5792 0l187.8016 0q54.5792 0 54.5792 54.5792l0 187.8016q0 54.5792-54.5792 54.5792l-187.8016 0q-54.5792 0-54.5792-54.5792l0-187.8016q0-54.5792 54.5792-54.5792Z"
                                      fill="#2c2c2c" p-id="3570"></path>
                                <path d="M556.8 175.36m54.5792 0l187.8016 0q54.5792 0 54.5792 54.5792l0 187.8016q0 54.5792-54.5792 54.5792l-187.8016 0q-54.5792 0-54.5792-54.5792l0-187.8016q0-54.5792 54.5792-54.5792Z"
                                      fill="#2c2c2c" p-id="3571"></path>
                                <path d="M705.28 697.6m-148.48 0a148.48 148.48 0 1 0 296.96 0 148.48 148.48 0 1 0-296.96 0Z"
                                      fill="#2c2c2c" p-id="3572"></path>
                            </svg>
                            <router-link :to="{name:'SortInfo',query:{id:info.sort.id,name:info.sort.name}}"><span>{{ info.sort.name }}</span> </router-link>
                            <br>
                            <svg style="margin-right: 5px" t="1627367267481" class="icon svg3" viewBox="0 0 1024 1024" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg" p-id="4536" width="14" height="14">
                                <path d="M980.2 488.5V88.7c0-22.6-18.3-41-41-41H535.7c-13 0-24.6 6.1-32.1 15.5l-438 438c-20.7 25-20.8 61.2-0.4 86.3L440 962.4c25.3 21.4 62.4 21.4 87.7 0.1l26.3-26.3c0.4-0.4 0.9-0.9 1.3-1.4l43.5-43.5L229.5 522c-16-16-16-41.9 0-57.9s41.9-16 57.9 0l369.3 369.3 311.6-311.6c9.2-9.1 13.1-21.5 11.9-33.3z m-308.5 3.3c-77.3 0-140-62.7-140-140s62.7-140 140-140 140 62.7 140 140-62.7 140-140 140z"
                                      fill="#2c2c2c" p-id="4537"></path>
                            </svg>
                            <div class="labels_div" v-for="(label,index1) in info.labels"
                                  :key="index1">
                                 <a :href="label.id" ><span>{{ label.name }}</span></a>
                                <span v-if="info.labels.length>index1+1">-</span>
                            </div>

                        </div>
                    </div>
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
</template>

<script>
    import $ from 'jquery'
    import Right from "@/components/right/Right";
    import Recommend from "@/components/main/recommend";
    import Sort from "@/components/main/sort";

    export default {
        name: "HomeMain",
        components: {Sort, Recommend, Right},
        data() {
            return {
                Articleinfo: [],
                pageinfo: {
                    //总页码
                    totalNumber: 1,
                    //当前页码
                    PageNumber: 1,
                },
            }
        },
        mounted() {
            this.getHeight();
            this.getArticles(1);
        },
        methods: {
            getHeight() {
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
                //body 大小变化
                erd.listenTo(document.getElementById("body"), function (element) {
                    var height = element.offsetHeight;
                    const height1 = $('#right').height();
                    if (height1 < height) {
                        $('#right').css('height', height);
                    }else {
                        $('#right').css('height', 1300);
                    }
                });
        },
        getArticles(num) {
            this.$axios.get("/api/home/Articles",{
                params:{
                    num:num,
                }
            }).then((res)=>{
                if (res.data.code===200){
                   this.Articleinfo=res.data.data.Articles
                    this.pageinfo.totalNumber=res.data.data.pageNum;
                    this.pageinfo.PageNumber=num;
                    $('#right').css('height', 1300);
                    this.getHeight();
                    if (num!==1){
                        window.scrollTo({
                            top: 1350,
                            behavior: "smooth"
                        });
                    }



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
    .labels_div{
        display: inline;
        text-align: center;
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
        width: 100%;
        display: inline-block;
        margin-top: 6px;
    }

    .HomeMain {
        margin: 0 auto;
        width: 56%;
        text-align: center;
        height: auto;
        min-height: 250px;
    }

    .body {
        display: inline-block;
        width: 76%;
    }

    .right {
        float: right;
        width: 24%;
    }

    .body > div {
        border-radius: 15px;
        margin: 1.5% auto 0;

    }

    .body .recommend, .body .sort, .body .contents .content {
        box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.1);
        transition: all 0.5s;
    }

    .body .recommend:hover, .body .sort:hover, .body .contents .content:hover {
        box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.3);

    }

    .body .recommend {
        width: 98%;
        height: 220px;
        border: #FFFFFF 1px solid;
        background-color: #FFFFFF;


    }

    .body .sort {
        width: 98%;
        height: 230px;
        border: #FFFFFF 1px solid;
        background-color: #FFFFFF;
    }

    .body .contents {
        width: 99%;
        height: auto;
    }

    .body .contents .content {
        overflow: hidden;
        border-radius: 15px;
        float: left;
        width: 48%;
        height: 300px;
        margin: 1% 0 1% 0;
        border: #FFFFFF 1px solid;
        background-color: #FFFFFF;
    }


    .content .img {
        height: 68%;
        width: 100%;
        overflow: hidden;
    }

    .content .img img {
        height: 100%;
        width: 100%;
        transition: all 0.8s;

    }

    .content:hover .img img {
        transform: scale(1.2);

    }

    .content .text {
        margin-top: 2%;
        width: 90%;
        height: 35%;
        padding: 0 20px;
    }

    .content .text .title {
        position: relative;
        left: 3%;
        font-size: 20px;
        text-align: left;
        height: 30%;
        width: 100%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;

    }

    .content .text .title span {
        transition: 0.3s;
    }

    .content .text .title span:hover {
        color: #719d44;

    }

    .content .text .present {
        height: 50%;
        width: 100%;
        color: #858585;
        font-size: 70%;
        margin-top: -2%;
        margin-left: 3%;
        text-align: left;

    }

    .content .text .present span {
        color: #858585;
        display: inline-block;
        margin-top: 2%;
        padding-left: 1%;
    }

    .content .text .present .svg1 {
        position: relative;
        top: 4%;
    }

    .content .text .present .svg2 {
        position: relative;
        top: 7%;
    }

    .content .text .present .svg3 {
        position: relative;
        top: 4%;
    }

    .content .text .present .Separate {
        margin: 0.1rem 0.3rem;
    }

    .content .text .present a:hover span {
        color: #ff7242;
        text-decoration: underline;
    }

    .div1 {
        position: relative;
        left: 2.5%;
    }
</style>