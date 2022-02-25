const app = Vue.createApp({
    //template:"<h2>Hi There</h2>"
    data(){
        return {
            title:"You don't know JS",
            age:33,
            author:"Hla Aung Khan",
            showBook:true
        }
    },
    methods:{
        mouseoverHandler(event,data){
            console.log("Mouseover Working",event.type,data);
        },
        mouseLeaveHandler(event){
            console.log("Mouse Leaving",event.type);
        },
        dblclickHandler(event){
            console.log("db click is working",event.type);
        }
    }
});

app.mount('#app');