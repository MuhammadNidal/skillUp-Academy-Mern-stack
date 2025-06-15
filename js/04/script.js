let message = "Hello World";
console.log(message);


// // string methods
console.log(message.length); // length of the string
console.log(message.toUpperCase()); // convert to uppercase
console.log(message.toLowerCase()); // convert to lowercase
console.log(message.includes("orld"));
console.log(message.charAt(7));
console.log(message.slice(2,7));



// concetenation


let message1="whats your name";
let message2="my name is skill up academy";

let message3 = "our skill academy is "+ message1 + " " +"and alst name is " + message2;
console.log(message3);




// template literals
let firstName = "Skill Up";
let lastName = "Academy";
let fullName =`Our academy name is ${firstName} and last name is ${lastName}`;
console.log(fullName);





// string concatenation
// let firstName = "Skill Up";
// let lastName = "Academy";
// let fullName =  "my name " + firstName + "" + lastName;
// console.log(fullName);

// // template literals

// let firstName2 = "Skill Up";
// let lastName2 = "Academy";      
//  let fullName2 = `My name is  ${firstName2 } and last name is ${lastName2}`;
//     console.log(fullName2);
 



// Event handling

function alertMessage(){
    alert("Hello World");
}
function showMessage(){
    document.getElementById("message").innerHTML = "Hello World";
}


// Switch case example
let day =7;
switch(day){
    case 1:
    console.log("Monday");
    break;
    case 2:
    console.log("Tuesday");
    break;
    case 3:
    console.log("Wednesday");
    break;
     case 7:
    console.log("sunday");

    default:
    console.log("Invalid day");
    
}