<template>
    <div>
        <nav id="navigation">
            <span style="top: 12px"><a href="#">孤月的小站</a></span>
            <div class="nav">
                <div class="items">
                    <div class="item"><a href="#">搜索</a></div>
                    <div class="item"><router-link to="/">主页</router-link></div>
                    <div class="item"><router-link to="/Article/1">闲言碎语</router-link></div>
                    <div class="item"><a href="#">时间轴</a></div>
                    <div class="item"><a href="javascript:; " style="cursor: default; opacity: 0.5" title="没做好" >店铺</a></div>
                    <div class="item"><a href="#">友链</a></div>
                </div>
            </div>
        </nav>

    </div>
</template>

<script>
    import $ from "jquery";

    let aa = 0;
    export default {
        name: "Nav",
        mounted() {
            window.addEventListener('scroll', this.scrollHandle);//绑定页面滚动事件
        },
        methods: {
            scrollHandle(e) {
                let top = e.srcElement.scrollingElement.scrollTop;    // 获取页面滚动高度
                if (top > aa) {
                    $('#navigation').css('top', '-50px');
                } else {
                    $('#navigation').css('top', '0');
                }

                aa = top;

            }
        }
    }


</script>

<style scoped>
    #navigation {
        position: fixed;
        left: 0;
        top: 0;
        height: 3rem;
        transition: top .4s;
        width: 100%;
        opacity: 0.6;
        background-color: #FFFFFF;
    }

    span {
        font-size: 1.25rem;
        font-weight: bold;
        position: relative;
        left: 5rem;
    }

    span a {
        text-decoration: none;
        color: #5ea444;
    }

    .nav {
        display: inline-block;
        float: right;
        padding-right: 2rem;
        width: 50%;
        font-weight: bold;
        font-size: 1.25rem;
        line-height: 30px;
        height: 100%;
        text-align: center;
    }

    .item {
        position: relative;
        margin-left: 0.6rem;
        height: 100%;
        display: inline;
        top: 0.6rem;
        right: 5rem;
        transform: translate(-50%, -50%);
    }

    .items {
        height: 100%;
        left: 10rem;
        position: relative;

    }

    .item a {
        text-decoration: none;
        text-transform: uppercase;
        color: #5ea444;
        font-weight: bold;
        transition: .5s;
        text-align: center;
        align-items: center;
    }

    .items .item a:before {
        top: 0;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-top: 1px solid #719d44;
        border-bottom: 1px solid #719d44;
        transform: scaleY(2);
        opacity: 0;
        transition: .5s;
        z-index: -1;
    }

    .items .item a:hover:before {
        transform: scaleY(1.5);
        opacity: 1.2;
    }

    .items .item a:after {
        top: 0;
        left: 0;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: #28a48b;
        transform: scale(0);
        transition: .5s;
        z-index: -1;

    }

    .items .item a:hover:after {
        transform: scale(1);
    }

    .items .item a:hover {
        color: #fff;
    }


</style>
