const app = Vue.createApp({
    //template:"<h2>Hi There</h2>"
    data(){
        return {
            books:[
                {
                    author:"Aung Aung",
                    title:"book 1",
                    age: 33
                },
                {
                    author:"Mg Mg",
                    title:"book 2",
                    age:44
                },
                {
                    author:"Kyaw Kyaw",
                    title:"book 3",
                    age:55
                }
            ],
            showBook:true,
            link:"http://www.google.com"
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

const link = Vue.createApp({
    data() {
        return {
            link:"http://www.google.com"
        }
    }
})
link.mount('#link');