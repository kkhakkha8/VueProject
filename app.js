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
        changeName(){
            this.author = random([A-z]);
        }
    }
});

app.mount('#app');