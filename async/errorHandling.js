let getJson = async () => { // async function always return a Promise
    let response = await fetch('https://jsonplaceholder.typicode.com/todos');// for every Promise object return ,use await keyword

    if(response.status === 404) {
        throw new Error("No Url Found");
    }
    let datas = await response.json(); // for every Promise object return ,use await keyword
    return datas;// datas is a Promise
}

getJson().then((datas)=>{
    console.log(datas);
})
.catch((err)=>{
    console.log(err.message);
});