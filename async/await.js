// await keyword 

// fetch('https://jsonplaceholder.typicode.com/todos')
// .then((data)=>{
//     if (data.status === 404) {
//         throw new Error('Ur link is not avaliable');
//     }
//     return data.json()//return a promise   
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err.message);
// })

let getJson = async () => { // async function always return a Promise
    let response = await fetch('https://jsonplaceholder.typicode.com/todos');// for every Promise object return ,use await keyword
    let datas = await response.json(); // for every Promise object return ,use await keyword
    return datas;// datas is a Promise
}

getJson().then((datas)=>{
    console.log(datas);
});