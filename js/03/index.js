// let marks=69;


// if(marks <=40){
//     console.log("You are pass");
// }
// else if (marks <=60 ){
// console.log("You  grade B");

// }


// else if (marks <=70 ){
//     console.log("You grade A");

// }
// else if (marks =80 ){
//     console.log("You grade A+");
// }
// else{
//     console.log("You are fail");
// }

// let age= 79;
// if (age >= 18){
//     console.log("You are eligible to vote");
// }
// else if (age < 18){
//     console.log("You are not eligible to vote");
// }
// else{
//     console.log("You are not eligible to vote");
// }


// // objects


// let student = {

//     name :"abdullah",
//     age : 20,
//     rollno : 123,
//     subject : "maths",
//     marks : 80,

// }
// // console.log(student);

// // dot notation access the data
// console.log(student.age);
// // console.log(student.name);
 

// // bracket notation access the data

// // console.log(student["age"]);
// // console.log(student["name"]);



// // addition in object

// // student.gender="female",
// // console.log(student.gender);
// // student.age= 21;
// // console.log(student.age);
// // delete student.gender;
// // console.log(student);


// let fruits =["apple", "banana", "orange", "mango"];
// console.log(fruits);


// // console.log(fruits[0]);
// // console.log(fruits[1]);
// console.log(fruits[2]);
 

// fruits.push("grapes");
// console.log(fruits);

// fruits.pop();
// console.log(fruits);


// fruits.shift();
// console.log(fruits);

// fruits.unshift("apple");
// console.log(fruits);



// console.log(fruits.length);















let name= 22;

if (name === 11 && name ==="nidal"){ 
    console.log("hello from skill UP Academy");
}
else if (name === 122|| name == 22) {   
console.log("skillsssssss ");
}
else if (name ==112) {
    console.log("web dev"); 
}
else
    {
    console.log("from other condition"); 
}






// Switch statment

Academy=2

switch (Academy) {
    case 1:
        console.log("hello from monday")
        break;

        case 2:
                    console.log("hello from tuesday");
  break; 
 case 3 :
console.log("hello from wedeneday");

    break;
    default:
        console.log("not found");
        
        break;
}



const schoolInforamtion ={
    stdName :"kamran",
    fatherNamwe :"khan",
    RollNO :22,
    MobileNummber :"0381038102381"
}
// console.log(schoolInforamtion);
// console.log(schoolInforamtion.fatherNamwe);
// console.log(schoolInforamtion.stdName);
// console.log(schoolInforamtion["MobileNummber"]="20420342304723");
// console.log(schoolInforamtion);
// console.log(delete schoolInforamtion.MobileNummber);
// schoolInforamtion.id =22;
// console.log(schoolInforamtion);

console.log(JSON.stringify(schoolInforamtion));
// console.log(JSON.parse(schoolInforamtion));












// Arrays

const fruits = ["apple","mango","peach", "banana",22];
console.log(fruits);
console.log(fruits[2]);
console.log(fruits[0]);
console.log(fruits.length);


// Types of Arrays methods
// pop

console.log(fruits.pop());
// push
console.log(fruits.push("grapes"));

// shift
console.log(fruits.shift());
// unshift
console.log(fruits.unshift("kiwi"));

console.log(fruits);
// reverse
console.log(fruits.reverse());
console.log(fruits.sort());
// join
console.log(fruits.join("    "));
// slice
console.log(fruits.slice(0,1));

console.log(fruits.slice(0,4));


// splice
console.log(fruits.splice(1,2,"gul khan","shahan"));
console.log(fruits);


// inlcude
console.log(fruits.includes("mango"));
// indexof
console.log(fruits.indexOf("mango"));







let vegetable = ["potato","onion","bringal","peas"]
console.log(vegetable);
vegetable.forEach(name=>console.log(name));



let numbers = [1, 2, 3, 4];

number=numbers.map(number => number*2)
console.log(number);


let numbers1 = [10, 25, 30, 45, 50];
number2=numbers1.filter(num=>num>25)
console.log(number2);









