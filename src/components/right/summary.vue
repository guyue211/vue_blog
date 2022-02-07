<template>
<div>
    <div class="Avatar"><img src="../../assets/image/1.jpeg" alt="s"/></div>
    <div class="info">
        <h3>孤月</h3>
        <div class="count" >
            <div><p>文章</p><span>{{statistics.Articles}}</span></div>
            <div><p>分类</p><span>{{ statistics.Sorts }}</span></div>
            <div><p>标签</p><span>{{ statistics.Labels }}</span></div>
        </div>
        <a href="#"><button>QQ群</button></a>
    </div>
</div>
</template>

<script>
    export default {
        name: "Summary",
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
    div{
        z-index: 1;
    }
.Avatar{
    margin: 0 auto;
    width: 50%;
    height: 40%;
}
.Avatar img{
    margin-top: 5%;
    height: 100%;
    width: 100%;
    border-radius: 80px;
}
.info{
    width: 100%;
    height: 50%;
}
.info h3{
    font-size: 1.4rem;
    color: #ff7242;
    margin: 5% auto;
}
.info .count div{
    z-index: 1;
    position: relative;
    top: 10%;
    left: 10%;
    float: left;
    width: 27%;
    height: 20%;
}
.info a button{
    margin-top: 5%;
    width: 85%;
    height: 35px;
    border-radius: 20px;
    background-color: #49b1f5;;
    border: #FFFFFF 1px solid;
    color: #FFFFFF;
}
.info a button:hover{
    background-color: #ff7242;
    transition: background-color 0.3s;
}
</style>