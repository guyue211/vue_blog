<template>
    <form  action="javascript:" method="post">
    <div class="vcomments">
        <div class="release ">
            <div class="release_info">
                <input type="text" name="name" placeholder="昵称" maxlength="8" v-model="formData.name">
                <input type="text" name="email" placeholder="邮箱" maxlength="30" v-model="formData.email">
                <input type="text" name="url" placeholder="网址(http://)" maxlength="40" v-model="formData.url">
            </div>
            <div class="release_area">
                <textarea :placeholder="prop" name="text"  maxlength="200" v-model="formData.content"></textarea>
            </div>
            <button @click="axios">提交</button>
        </div>

    </div>
    </form>
</template>

<script>
    export default {
        name: "Vcomments",
        data(){
            return{
              formData: {
                  url:"",
                  email:"",
                  name:"",
                  content:"",
                  releaseTime:new Date().toString()
              },
                msg: '', // 弹出框中的提示语
                judgment:false
            }
        },
        props: ['prop','cid'],
        methods:{
            axios:function (){
                this.alertDia();
                if(this.judgment){
                    return;
                }
                let formData=new FormData();
                formData.append("id", this.cid);
                formData.append("aid", this.$parent.Article.id);
                formData.append("url", this.formData.url);
                formData.append("email", this.formData.email);
                formData.append("name", this.formData.name===""?"未知用户":this.formData.name);
                formData.append("content", (this.prop==="欢迎留言"?'':this.prop)+this.formData.content);
                formData.append("releaseTime", this.formData.releaseTime);
                console.log(formData)
                let config = {
                    headers: {'Content-Type': 'multipart/form-data'}
                };
                this.$axios.post("/api/home/Article/comment",formData,config).then((res)=>{
                    if (res.data.code==200){
                        console.log("成功")
                        let aid=Number(this.$parent.Article.id)
                        console.log(aid)
                        this.$parent.getComments(aid);
                        this.$parent.huifu=false
                        this.formData.content=""
                        this.$message.success(res.data.msg)
                    }else if (res.data.code==403){
                        this.$message.error(res.data.msg)
                    }
                })
            },
            // 提示弹框
             async alertDia() {
                 this.judgment=false
                 const email = "^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$";
                 const url = "[a-zA-z]+://[^\\s]*";
                 if (this.formData.email !== "" && !this.formData.email.match(email)) {
                     this.judgment=true;
                     await this.$message.error("若填写邮箱，需输入正确邮箱!")
                 }
                 if (this.formData.url !== "" && !this.formData.url.match(url)) {
                     this.judgment=true;
                     await this.$message.error("若填写网址，需输入正确网址!")
                 }
                 if (this.formData.content === "") {
                     this.judgment=true;
                     await this.$message.error("评论主体内容不能为空!")
                 }
             },
        }
    }
</script>

<style scoped>
    .alsrtInfo {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 10;
    }
    .profPrompt_test{
        width: 300px;
        overflow: hidden;
        line-height: 28px;
        color: #67C23A;
        position: absolute;
        background-color: #F0F9EB;
        border-radius: 5px;
        padding: 10px 10px;
        text-align: center;
        top: 50%;
        left: 50%;
        font-size: 14px;
        font-family: Gotham-Book,serif;
        /* z-index: 1; */
        transform: translate(-50%, -50%);
    }

    .vcomments{
        height: auto;
        width: 90%;
        margin: 15px auto;
    }
    .vcomments .release .release_area{
        width: 100%;
        height: 65%;
        margin-top: 30px;
    }
    .vcomments .release .release_area textarea{
        width: 95%;
        height: 100%;
        border: 0;
        outline: none;
        font-size: 1.2rem;
        resize: none;
    }
    .vcomments .release button{
        width: 80px;
        height: 25px;
        border: 0;
        background-color: #49b1f5;
        color: white;
        border-radius: 20px;
        float: right;
        margin-right: 10px;
    }
    .vcomments .release{
        width: 100%;
        height: 200px;
        border-radius: 10px;
        border: #f0f0f0 1px solid;
    }
    .vcomments .release .release_info{
        margin: 0;
        float: left;
        width: 100%;
        height: 15%;
    }
    .vcomments .release .release_info input{
        float: left;
        width: 32%;
        height: 25px;
        border: 0;
        border-bottom: #f0f0f0 1px dashed;
        outline: none;
        background-color: rgba(0, 0, 0, 0);
        padding-left:1.3%;
        font-size: 1.05rem;
    }
    .vcomments .release .release_info input:hover{
        border-bottom: #ff7242 1px dashed;
        cursor: text;
    }
    input::-ms-input-placeholder{
        text-align: center;
    }
    input::-webkit-input-placeholder {
        text-align: center;
    }
</style>