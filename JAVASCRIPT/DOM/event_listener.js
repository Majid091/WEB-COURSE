//1. change content of element on specific event
// let element = document.getElementById("fdiv");

// function action(){
//     let element = document.getElementById("fheading");
//     element.textContent = "second heading";
// }
// element.addEventListener('click',action);
// //element.removeEventListener('click', action);

//***~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~***//

// //2. change the element default behaviour

// let element = document.getElementById('link1');

// function changelink(event){
//     let element = document.getElementById('link1');
//     event.preventDefault();
//     element.textContent = "the link is clicked!!!";

// }
// element.addEventListener('click', changelink);

//***~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~***//

//3(i). clicked on element and it will tell us that on which element we clicked

// let element = document.getElementById('fdiv');

// function clickelement(event){
//     alert("the element that you clicked its text is: "+ event.target.textContent);
// }

// element.addEventListener('click', clickelement);


//3(ii). now i want to not print paragraph text only print span text

let element = document.getElementById('fdiv');

function spantextonly(event){
    if(event.target.nodeName==='SPAN'){
        alert("this is only span text-->" + event.target.textContent);
    }    
}

element.addEventListener('click', spantextonly);