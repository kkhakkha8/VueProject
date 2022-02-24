// API links - https://jsonplaceholder.typicode.com/todos/1


let request = new XMLHttpRequest();


//Async old method this will work last cuz readystatechange 
request.addEventListener("readystatechange",()=>{
    // console.log(request,request.readyState);
    if(request.readyState===4){
        console.log(request.responseText);
    }
    
});


request.open("GET",' https://jsonplaceholder.typicode.com/todos');
request.send();