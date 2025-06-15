let marks=69;


if(marks <=40){
    console.log("You are pass");
}
else if (marks <=60 ){
console.log("You  grade B");

}
else if (marks <=70 ){
    console.log("You grade A");

}
else if (marks =80 ){
    console.log("You grade A+");
}
else{
    console.log("You are fail");
}

let age= 79;
if (age >= 18){
    console.log("You are eligible to vote");
}
else if (age < 18){
    console.log("You are not eligible to vote");
}
else{
    console.log("You are not eligible to vote");
}


// objects


let student = {

    name :"abdullah",
    age : 20,
    rollno : 123,
    subject : "maths",
    marks : 80,

}
// console.log(student);

// dot notation access the data
console.log(student.age);
// console.log(student.name);
 

// bracket notation access the data

// console.log(student["age"]);
// console.log(student["name"]);



// addition in object

// student.gender="female",
// console.log(student.gender);
// student.age= 21;
// console.log(student.age);
// delete student.gender;
// console.log(student);


let fruits =["apple", "banana", "orange", "mango"];
console.log(fruits);


// console.log(fruits[0]);
// console.log(fruits[1]);
console.log(fruits[2]);
 

fruits.push("grapes");
console.log(fruits);

fruits.pop();
console.log(fruits);


fruits.shift();
console.log(fruits);

fruits.unshift("apple");
console.log(fruits);



console.log(fruits.length);










