//code 1

// const t1 = performance.now();

// let element = document.getElementById('fdiv');

// for(let i=1; i<=100; i++){
//     let para = document.createElement('p');
//     para.textContent = "i am para " + i;
//     document.body.appendChild(para);
// }

// t2 = performance.now();
// console.log(t2-t1);

//***~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~***//

// //code 2

// const t3 = performance.now();

// let mydiv = document.createElement('div');

// for(let i=1; i<=100; i++){
//     let para = document.createElement('p');
//     para.textContent = "i am second code para "+ i;
//     mydiv.appendChild(para);
// }

// document.body.appendChild(mydiv);

// const t4 = performance.now();

// console.log(t4-t3);



//***~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~***//

//3. using documentfregament

const t5 = performance.now();
let fragment = document.createDocumentFragment();

for(let i=1; i<=100; i++){
        let para = document.createElement('p');
        para.textContent = "i am third code para "+ i;
        fragment.appendChild(para);
    }

document.body.appendChild(fragment);
    
const t6 = performance.now();
console.log(t6-t5);

//sdkmanager "platform-tools" "platforms;android-31"

