
let result = add(22,33);
console.log(result);

function  add(num1,num2) {
    return num1+num2;
}



const studentName =function(firstName,lastName) {
    // return `hello ${name}`;
    return ` you first name is ${firstName} and last name is ${lastName}`;
}

console.log(studentName("abdullah","khan"));



// Arrow function
// const multiply =(param)=> expression
const multiply =(num1,num2)=> num1 * num2;
console.log(multiply(22,23));



// Call back function
function greetUser(greetUser1){
    console.log("hello from greet user");
    greetUser1();
}

function Academy(){
    console.log("This is a callback function");
};


greetUser(Academy);




function addNNumbers(num1,num2,callback){
   let sum = num1 + num2;
    callback(sum);
}

function displayResult(result){
    console.log("The sum is: " + result);
}   
addNNumbers(5,10,displayResult);



// IIFE (Immediately Invoked Function Expression)
(function(){
    console.log("This is an IIFE function");
}
)();

// https://jsonplaceholder.typicode.com/users/1

// fetch('https://jsonplaceholder.typicode.com/users/1')


// async function



async function getuser(params) {
    console.log("you call the function");
    let respone = await fetch('https://jsonplaceholder.typicode.com/users/1');
    let data = await respone.json();
    console.log(data);
    console.log(data.phone);
    console.log(data.address.geo.lat);

}

getuser();