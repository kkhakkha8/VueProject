const app = Vue.createApp({
    //template:"<h2>Hi There</h2>"
    data(){
        return {
            books:[
                {
                    author:"Aung Aung",
                    title:"book 1",
                    age: 33,
                    img:"img/Mina.jpg",
                    isFav:false
                },
                {
                    author:"Mg Mg",
                    title:"book 2",
                    age:44,
                    img:"img/Mina2.jpg",
                    isFav:false
                },
                {
                    author:"Kyaw Kyaw",
                    title:"book 3",
                    age:55,
                    img:"img/momo.jpg",
                    isFav:false
                }
            ],
            showBook:true,
            nightMode:false
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
            link:"http://www.google.com",
           
        }
    }
})
link.mount('#link');