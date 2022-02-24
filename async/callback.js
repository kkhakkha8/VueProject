let getTodos = (callback)=>{
    let request = new XMLHttpRequest();


//Async old method this will work last cuz readystatechange 
request.addEventListener("readystatechange",()=>{
    // console.log(request,request.readyState);
    if(request.readyState===4 && request.status ===200){
        callback(request.responseText,undefined);
    } else if (request.status === 404 ){
        callback(undefined,"Your link is not avaliable");
    }
    
});


request.open("GET",' https://jsonplaceholder.typicode.com/todos');
request.send();


}

// getTodos((data,err)=>{
//     console.log(data,err);
// });

getTodos((data,err)=>{
    if(data) {
        console.log(data);
    } else {
        console.log(err);
    }
})