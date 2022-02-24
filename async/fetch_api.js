// fetch api 

fetch('https://jsonplaceholder.typicode.com/todos')
.then((data)=>{
    return data.json()//return a promise   
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})