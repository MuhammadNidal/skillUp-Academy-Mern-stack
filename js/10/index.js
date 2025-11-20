// ===== SYNCHRONOUS CODE EXAMPLES =====

// // sync
// console.log("start");
// function add(a,b) {
//     return a+b
// }
// console.log(add(2,3));
// console.log("end");

// console.log("Start");
// function name(name, age ) {
//     console.log("Name: " + name);   
//     console.log("Age: " + age);
// }
// console.log(name("abdullah", 20));
// console.log("end of code");


// ===== ASYNCHRONOUS CODE EXAMPLES =====

// // Async
// console.log("start");
// setTimeout(()=>{
//     console.log("you wait for the two second");
// },2000)

// console.log("Start");
// setTimeout(() => {
//     console.log("Name: Abdullah");
// }, timeout = 3000);
// console.log("End of code");

// setTimeout(() => {
//     document.write("Hello, this is a delayed message!");
// }, timeout = 3000);


// ===== FETCH EXAMPLES =====

// const getdata = async (a,b) => {
//     try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data= response.json()
//         console.log("data show ",data);   
//     } catch (error) {
//         console.log("you are error face");        
//     }
// }
// getdata()
// console.log("end");


// ===== PROMISES EXAMPLES =====

// const Promises = new Promise((resolvesssss,rejectsss)=>{
//     let success =true
//     if(success=true){
//         resolvesssss("data show")
//     }
//     else{
//         rejectsss("data reject")
//     }
//     promise
//     .then(console.log("data show success"))
//     .catch(console.log("error show"))
// })
// console.log(Promises);

// const  resolvedate = new Promise((resolve,reject)=>{
//     let success = true;
//     if(success === true)    {
//         resolve("Data received");
//     } else {        
//         reject("Error occurred");
//     }
// });

// promises in javascript
const data = new Promise((resolve,reject)=> {
    let success =true;
    if(1111 ) {
        resolve("Data received successfully");
    }               
    else {
        reject("Error occurred while fetching data");
    }
})
data.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.error(error);
})


// ===== SETTIMEOUT & SETINTERVAL EXAMPLES =====

// setTimeout(() => {
//   console.log("This runs after 3 seconds");
// }, 3000);
// console.log("End");

// let count = 1;
// const intervalId = setInterval(() => {
//   console.log("Running... " + count);
//   count++;
// }, 1000);

// let count=1;
// const intervalid =setInterval(()=>{
//     console.log("Running... " + count);
//     count++;
// }, 1000);

// setTimeout(() => {
//     clearInterval(intervalid);
//     console.log("Interval cleared after 5 seconds");
// }, timeout = 5000);


// ===== JSON EXAMPLES =====

// const user  = {
//     name :"abdullah",
//     class : "bs"
// }
// const jsonshow = JSON.stringify(user);
// console.log(jsonshow);


// ===== CALLBACK EXAMPLES =====

function greet(name,callback){
    console.log("Hello, " + name);
    callback();
}

function information(){
    console.log("This is a callback function");
}
greet("abdullah",information);


// ===== FETCH API EXAMPLES =====

fetch("https://jsonplaceholder.typicode.com/posts/1")
.then(response=>response.json())
.then(data => (console.log("data showe ",data)))
.catch("error")

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log("Data received:", data))
  .catch(error => console.error("Error:", error));

fetch('https://jsonplaceholder.typicode.com/posts/4')
.then(respnse=>respnse.json() )
.then(response => {
    console.log(response);
})
.catch(error =>{
    console.error("Error fetching data:", error);
})

// POST request example
fetch('https://jsonplaceholder.typicode.com/posts',{
method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
 body: JSON.stringify({
    title: 'My Post',
    body: 'This is the post content.',
    userId: 1
  })
})
.then(response => response.json())
  .then(data => console.log("Post created:", data))
  .catch(error => console.error("Error:", error));


// ===== BRAND API FETCH EXAMPLES =====

fetch('https://chedmed.online/api/v1/brand/get')
.then(response =>response.json()
).then(response=>{
    console.log(response);
})
.catch(error =>{
    console.error("Error fetching data:", error);
})

fetch('https://chedmed.online/api/v1/brand/get')
  .then(response => response.json())
  .then(result => {
    // The brand list is inside: result.data.brands
    const brands = result.data.brands;
    displayBrands(brands);
  })
  .catch(error => {
    console.error("Error fetching brands:", error);
  });

function displayBrands(brands) {
  const container = document.getElementById("brand-container");

  brands.map(brand => {
    const brandDiv = document.createElement("div");
    brandDiv.textContent = brand.title_fr + brand.title_en +brand.title_ar; // You can also use title_ar or title_fr
    container.appendChild(brandDiv);
  });
}
