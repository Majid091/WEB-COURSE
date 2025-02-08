//1. get method

// console.log("message before fetching the data");

// async function getData(){
//     let response = await fetch('https://jsonplaceholder.typicode.com/todos');
//     let data = await response.json();
//     console.log(data);
// }

// getData();
// console.log("message after fetching the data");


//***~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~***//

//2. post method

async function postData(){
    let response = await fetch('https://jsonplaceholder.typicode.com/todos',{
    method: "POST",
    body: JSON.stringify({title:"hjweghbdfhbiwdbhbjhds"})

    });
    let data = await response.json();
    console.log(data);
}
postData();
