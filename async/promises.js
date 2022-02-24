let getTodos = (resource)=>{
    return new Promise((resolve,reject)=>{
        let request = new XMLHttpRequest();
        //Async old method this will work last cuz readystatechange 
        request.addEventListener("readystatechange",()=>{
        // console.log(request,request.readyState);
        if(request.readyState === 4 && request.status === 200){
            let datas = JSON.parse(request.responseText); // change JSON to JS object
            //callback(datas,undefined);
            resolve(datas);
        } else if (request.status === 404 ){
            //callback(undefined,"Your link is not avaliable");
            reject("Something going wrong");
        }
        });
        request.open("GET",resource);
        request.send();   
    
    });

}

getTodos('/async/hak.json')
.then((data)=>{
    console.log(data);
    getTodos('/async/hak2.json')
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    })
})
.catch((error)=>{
    console.log(error);
});

// return Promise

getTodos('/async/hak.json')
.then((data)=>{
    console.log(data);
    return getTodos('/async/hak2.json'); // return promise here so use then to catch data again
})
.then((data2)=>{
    console.log(data2);
})
.catch((error)=>{
    console.log(error);
});