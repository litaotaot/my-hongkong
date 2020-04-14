let mixin = {
    data(){
        return{
            LoadingPage:null
        }
    },
    methods:{
        //打开加载页函数
        Openloading(){
            this.LoadingPage = this.$loading({
                lock:true,
                text:"正在加载中...",
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            })
        },
        //关闭加载页
        Closeloading(){
            this.LoadingPage.close();
        }
    }
}

export default mixin;