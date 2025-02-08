      // classes concept

// class first{
//     your_name = "ali"; // public access
//     #age = 24   //private access
    
//     printname(){
//         console.log("your name is: ", this.your_name);
//     }
//     access_cl_var(){
//         console.log("the class variable1 is: ", this.your_name);
//         console.log("the class second private variable is: ", this.#age);
//     }
// }

// let obj = new first();
// console.log(obj.your_name);
// obj.printname();
// obj.access_cl_var();



                  //default values in the function inside the class
// class second{
//     first_name = 'majid';
//     last_name = 'khan';
//     age = 24;
//     #wt = 60;

//     deault_values(val1, val2, val3, val4){
//         val1 = this.first_name;
//         val2 = this.last_name;
//         val3 = this.age;
//         val4 = this.#wt;
//         console.log("my first name is: ", val1);
//         console.log("my last name is: ", val2);
//         console.log("my age is: ", val3);
//         console.log("my weight is about: ", val4);
//     }
// }

// let obj = new second();
// obj.deault_values();


                    //CONSTRUCTOR IN THE CLASS
// class constructor_cl{

//     age = 24;
//     ht = 5.10;
//     wt = 60;
//     constructor(){
//         let a = this.age;
//         let b = this.ht;
//         let c = this.wt;
//         console.log("my exact age is: ", a);
//         console.log("my height is: ", b);
//         console.log("my weight is: ", c);

//     }

// }

// let obj = new constructor_cl();
