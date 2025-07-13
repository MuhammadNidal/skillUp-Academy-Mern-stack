// // synchronous code example

// console.log("Start");

// function name(name, age ) {
//     console.log("Name: " + name);   
//     console.log("Age: " + age);
    
// }
// console.log(name("abdullah", 20));
// console.log("end of code");


// // asynchronous code example
// console.log("Start");
// setTimeout(() => {
//     console.log("Name: Abdullah");
    
// }, timeout = 3000);
// console.log("End of code");


// // set time out example
//  setTimeout(() => {
//     document.write("Hello, this is a delayed message!");
    
//  }, timeout = 3000);



// //  set interval example

// let count=1;
// const intervalid =setInterval(()=>{
//     console.log("Running... " + count);
//     count++;
// }, 1000);


// setTimeout(() => {
//     clearInterval(intervalid);
//     console.log("Interval cleared after 5 seconds");
// }, timeout = 5000);



// Aysnc and Await Example



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



//  callback in javascript

function greet(name,callback){
    console.log("Hello, " + name);
    callback();
}

function information(){
    console.log("This is a callback function");
}
greet("abdullah",information);




// fetch method in the javascript
fetch('https://jsonplaceholder.typicode.com/posts/4')
.then(respnse=>respnse.json() )
.then(response => {
    console.log(response);
})
.catch(error =>{
    console.error("Error fetching data:", error);
})

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
