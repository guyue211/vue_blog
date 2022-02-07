<template>
<div class="Count">
    <div class="top">
        <img src="../../assets/image/统计.png"/><span> 本站统计</span>
    </div>
    <div class="statistical">
        <div class="text"><span class="a">文章数目：</span><span class="b">{{statistics1.Articles}}</span></div>
        <div class="text"><span class="a">已运行时间：</span><span class="b">{{statistics1.operationHours}}天</span></div>
        <div class="text"><span class="a">本站访客数：</span><span class="b">{{statistics1.numberOfVisitors}}</span></div>
        <div class="text"><span class="a">本站总访问量：</span><span class="b">{{statistics1.views}}</span></div>
        <div class="text"><span class="a">最后更新时间：</span><span class="b">{{statistics1.latestUpdate}}</span></div>
    </div>
</div>
</template>

<script>

    export default {
        name: "Count",
        data(){
            return{
                statistics1: {}
            }
        },
        props:['statistics'],
        watch: {
            statistics(val) {
                this.statistics1 = val;
            }
        }
    }
</script>

<style scoped>
    .Count{
        height: 100%;
        width: 100%;
    }
.top{
    text-align: left;
    position: relative;
    top: 2%;
    left: 5%;
    width: 100%;
}
.top img,.top span{
    vertical-align: middle;
}
.top span{
    position: relative;
    top: 1px;
}
.a{
    float: left;
    position: relative;
    left: 6%;
}
    .b{
        float: right;
        position: relative;
        right: 10%;
    }
    .statistical{
        margin-top: 5%;
        height: 80%;
        width: 100%;
    }
    .text{
        margin-top: 5px;
        width: 100%;
        height: 15%;
        font-size: 12px;
        opacity: 0.5;
    }
</style>