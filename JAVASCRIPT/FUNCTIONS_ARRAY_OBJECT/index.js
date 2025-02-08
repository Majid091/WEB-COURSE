// simple function

// function greet(){
//     console.log("hello how are you!")
// }
// greet()


// function sum(a, b){
//     console.log("hello i am the function and i will return the sum of a and b");
//     return a+b;
// }
// let add = sum(10, 20);
// console.log(add);


//arrow function

// let arr_fun = (x,y)=>{
//     return x+y;
// }
// let aa = arr_fun(20,87);
// console.log(aa);



// Array Concept

// 1st method
 let arr = [1,22,38,3,5];
// // console.log(arr)
// arr.push('majid'); //-->this will enter this value at last index of array
// arr.pop();  //-->this will drop the last value of array
// arr.shift(); //--> this will remove first value of the array
// arr.unshift('majid khan'); //--> this will add the value on 1st index
// arr.slice(2,6);  //--> this will automatically create the copy of the array as a small slice
// arr.splice(1,2, 'majid'); //--> this will enter the specific value on specific position but if we not specified the location then it will automatically add on 1st position
// //map arrow function --> this function we used it with the array to perform some operation on the values of the array like add all the values multipty it etc
// let arrop = arr.map((number)=>{
//     console.log(number+number);
// });


//filter arrow function--> we also use this with the array and this is used to filter specific values from array like odd or even number etc
let arrfilter = arr.filter((num)=>{
    if(num%2==0){
        console.log("even numbers: ", num)
    }
    else{
        console.log("odd numbers: ", num)
    }
})
console.log(arrfilter)


//2nd method
// let arr = new Array(1,'hello',true);
// console.log(arr);


   //Object

// let obj = {
//     '1':'hello',
//     '2':'hi',
//     '3':'how are',
//     '4':'i am fine'
// };
// console.log(obj);






               // built-in object

// console.log(Math.PI);
// console.log(Math.max(12,344,556,23));
// console.log(Math.min(23,454,23325,54));
// console.log(Math.round(23,45));
// console.log(Math.floor(1.9));
// console.log(Math.ceil(1.1));





                //object cloning

let obj = {
    fname : "majid",
    age : 24,
    wt : 60,
    ht : 5.10
}

          // method# 01

// let obj1 = {...obj};
// console.log("1st object elements are: ", obj);
// console.log("clone object elements are: ", obj1)

          //method # 02
// let obj1 = Object.assign({}, obj)
// console.log("1st object elements are: ", obj);
// console.log("clone object elements are: ", obj1)
