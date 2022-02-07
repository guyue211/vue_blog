<template>
    <div class="right">
        <div class="summary">
            <Summary :statistics="statistics"/>
        </div>
        <div class="bulletin">
            <Bulletin :statistics="statistics"/>
        </div>
        <div class="float">
            <div class="newest " id="newest" >
                <Newest/>
            </div>
            <div class="label  " id="label" >
                <Label/>
            </div>
            <div class="count " id="count" >
                <Count :statistics="statistics" />
            </div>
        </div>

    </div>
</template>

<script>
    import Summary from "@/components/right/summary";
    import Bulletin from "@/components/right/bulletin";
    import Newest from "@/components/right/newest";
    import Label from "@/components/right/label";
    import Count from "@/components/right/count";
    export default {
        name: "Right",
        components: {Count, Label, Newest, Bulletin, Summary},
        data(){
            return{
                statistics:{},
            }
        },
        mounted() {
            this.$axios.get('/api/right/statistics').then((res)=>{
                if (res.data.code===200){
                    this.statistics=res.data.data;
                    console.log(this.statistics)
                }
            });
        }
    }
</script>

<style scoped>
    .right{
        overflow: visible;
    }
    .float{
        position: -webkit-sticky;
        position: sticky;
        top: 10px;

    }
    .right>div:not(.float),.float>div{
        border-radius: 15px;
        margin: 10px auto 0;
        border: 1px solid #FFFFFF;
        background-color: #FFFFFF;
        z-index: 1;
        box-shadow: 0 3px 8px 6px rgba(7,17,27,0.1);
        transition: all 0.5s;
    }
    .right>div:hover:not(.float),.float>div:hover{
        box-shadow: 0 3px 8px 6px rgba(7,17,27,0.3);

    }
    .right>div{
        height: auto;
    }
    .right .newest{
        height: 300px;
    }
    .right .count{
        height: 150px;
    }
</style>