const user = {
    name: "John",
    age: 30,
    rollno: 101,
}

console.log(user);
console.log(Object.entries(user));

const studentInformation = {
    name: "John",
    age: 30,
    rollno: 101,
}

console.log(Object.values(studentInformation));
console.log(Object.keys(studentInformation));




// try and catch in js 

try{
    if (a=10)
        console.log("a is 10");
  
}
catch(err){
    console.log("Error: " + err.message);
}



try {
  let a = 10;
  console.log(b);  
} catch (err) {
  console.log("Error caught:", err.message);
}
console.log("Continue after try...catch");



try {
    let name = "abdullah";
    console.log(name);
    
} catch (error) {
    console.log("Error caught:", error.message);
    
    
}
finally {
    console.log("This will always execute, regardless of an error.");
}


function name(name ,age) {
    console.log("Name: " + name);
    console.log("Age: " + age);

    
}
console.log(
    name("abdullah", 20));
    console.log(
    name("Uzair", 20));


    function add(a, b) {
        return a + b;
    }

    console.log(add(5, 10)); // Output: 15
    console.log(add(20, 30)); // Output: 50




    const person = (a ,b)=>{
return a *b;
    }
    console.log(person(5, 10)); // Output: 50
    console.log(person(20, 30)); // Output: 600


    const multiply = (a, b) => a 
    * b;
    console.log(multiply(5, 10)); // Output: 50
    console.log(multiply(20, 30)); // Output: 600




let a =[1, 2, 3, 4, 5];

// let b=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let b=[...a,6, 7, 8, 9, 10];

console.log("sum of a and b",b);

// let c =[...a,...b,11,12,13,14,15];
const user1 = 
{ 
    name: "Nidal",
     age: 22
    
    };
const newUser = { ...user1, city: "Peshawar",location: "Pakistan" };

console.log("New User:", newUser);


const [firstvalue, ...rest] = [10, 20, 30, 40];

console.log("first valuie" ,firstvalue);  // 10
console.log("remaining data ",rest);   // [20, 30, 40]


    // const { name, ...others } = { name: "Nidal", age: 22, city: "Peshawar" };

    // console.log(name);    // Nidal
    // console.log(others);  // { age: 22, city: "Peshawar" }
