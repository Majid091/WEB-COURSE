// let mydiv = document.querySelector('#c1');

// let newElement = document.createElement('span');

// newElement.textContent = "i am paragraph just added through javascript";


// mydiv.insertAdjacentElement('beforebegin', newElement);




let cssElement = document.getElementById('c1');

// // console.log(cssElement.style);

// //1. using style attribute to change css
// cssElement.style.backgroundColor = 'blue';

// //2. using csstext to change css of the element
// cssElement.style.cssText = "Background-color: black, color:white";

// //3. using setattribute to change css styling
// cssElement.setAttribute('class', 'hello');
// cssElement.setAttribute('style', "background-color: red");


// //4. using classname to change name of the class
// cssElement.className = "majid";
// console.log(cssElement.style);


//5. using classlist to get class name list or add or remove the specific class or can see the specific element contains the specific class or not
cssElement.classList.add('hello');

//cssElement.classList.toggle('hello');
cssElement.classList.contains('hello')
console.log(cssElement);