const user = {
    name: "John",
    age: 30,
    rollno: 101,
}

console.log(user);
// console.log(Object.entries(user));


console.log(Object.entries(user));
console.log(Object.values(user));
console.log(Object.keys(user));



// const studentInformation = {
//     name: "John",
//     age: 30,
//     rollno: 101,
// }

// console.log(Object.values(studentInformation));
// console.log(Object.keys(studentInformation));




// try and catch in js 
a=10
try{
    if (a)
        console.log("a is 10"); 
}

catch(err){
    console.log("Error: " + err.message);
}

// a=10;
// try {
//     if(a=11)
//         console.log("data is show " ,a);     

// } catch (err) {
//     console.log("Error :",err.message);
      
// }

// try {
//   let a = 10;
//   console.log(b);  
// } catch (err) {
//   console.log("Error caught:", err.message);
// }
// console.log("Continue after try...catch");



try {
    let name = "abdullah";
    console.log(name);
    
} catch (error) {
    console.log("Error caught:", error.message);
    
    
}
finally {
    console.log("This will always execute, regardless of an error.");
}
