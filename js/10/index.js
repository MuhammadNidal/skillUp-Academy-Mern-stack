// // sync
// console.log("start");
// function add(a,b) {
//     return a+b
// }
// console.log(add(2,3));

// console.log("end");


// // Async
// console.log("start");

// // setTimeout(()=>{
// //     console.log("you wait for the two second");
    

// // },2000)

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



// // Promises

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
//     .catch(console.log("error show")
//     )
    

// })

// console.log(Promises);



// // setTimeout(() => {
// //   console.log("This runs after 3 seconds");
// // }, 3000);

// // console.log("End");


// // let count = 1;

// // const intervalId = setInterval(() => {
// //   console.log("Running... " + count);
// //   count++;
// // }, 1000);


// let count = 1;

// const intervalId = setInterval(() => {
//   console.log("Running... " + count);
//   count++;
// }, 1000);

// setTimeout(() => {
//   clearInterval(intervalId);
//   console.log("Stopped!");
// }, 5000);



// const user  = {
//     name :"abdullah",
//     class : "bs"
// }

// // console.log(u);

// const jsonshow = JSON.stringify(user);
// console.log(jsonshow);



// fetch

fetch("https://jsonplaceholder.typicode.com/posts/1")
.then(response=>response.json())
.then(data => (console.log("data showe ",data)))
.catch("error")


fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log("Data received:", data))
  .catch(error => console.error("Error:", error));





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