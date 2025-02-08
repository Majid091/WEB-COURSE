// try catch method in this method we can easily find an error and show some message on console
// e.g if we have an error in the code or we can say if we have doubt that there will be error in the given code so we pass that code in the try block and we can print that error in the catch block or print other message in the catch block instead of that error

try{
    console.log(x);

}
catch(err){
     //console.log(err); //this will print the error which exist in the code
     console.log("this code contain refrence error")  // this line will print the message which you want to print instead of that error
     
}


//console.log(x)  //there is the error in the code becuase we want to print the (x) but we did not declare it so we can handle it using try catch method
