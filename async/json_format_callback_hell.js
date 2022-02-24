let getTodos = (callback)=>{
    let request = new XMLHttpRequest();


//Async old method this will work last cuz readystatechange 
request.addEventListener("readystatechange",()=>{
    // console.log(request,request.readyState);
    if(request.readyState === 4 && request.status === 200){
        let datas = JSON.parse(request.responseText); // change JSON to JS object
        callback(datas,undefined);
    } else if (request.status === 404 ){
        callback(undefined,"Your link is not avaliable");
    }
    
});


request.open("GET",'/async/hak.json');
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