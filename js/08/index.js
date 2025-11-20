

// 2️⃣ Add / Remove / Replace Elements

// Add new paragraph
// document.getElementById("addBtn").addEventListener("click", function() {
//   const para = document.createElement("p");
//   const text = document.createTextNode("This is a new paragraph added dynamically!");
//   para.appendChild(text);
//   document.getElementById("div1").appendChild(para);
// });
// document.getElementById("addBtn")
// .addEventListener("click",function(){
//     const para =document.createElement("p");
//     const text = document.createTextNode("hello ibrahim")
//     para.appendChild(text);
//     document.getElementById("div1")
// .appendChild(para);
// })

// document.getElementById("removeBtn")
// .addEventListener("click",function(){
//     const div =document.getElementById("div1");
//     const lastPara =div.lastElementChild;
//     if(lastPara) div.removeChild(lastPara)
// });


// Remove paragraph
// document.getElementById("removeBtn").addEventListener("click", function() {
//   const div = document.getElementById("div1");
//   const lastPara = div.lastElementChild;
//   if (lastPara) div.removeChild(lastPara);
// });

// Replace heading
// document.getElementById("replaceBtn").addEventListener("click", function() {
//   const newHeading = document.createElement("h2");
//   newHeading.textContent = "I am a new replaced heading!";
//   const oldHeading = document.getElementById("mainHeading");
//   document.body.replaceChild(newHeading, oldHeading);
// });



// 1️⃣ Show Date on Button Click
// document.getElementById("myBtn").addEventListener("click", displayDate);

// function displayDate() {
//   document.getElementById("demo").innerHTML = Date();
// }


// 3️⃣ Form Handling
// document.getElementById("submitBtn").addEventListener("click", function() {
//   const value = document.getElementById("username").value;
//   const value1 = document.getElementById("fathername").value;
//   const value2 = document.getElementById("grandfathername").value;
//   document.getElementById("output").innerText = "You entered: " + value +value1 +value2;
// });

// 4️⃣ Dark Mode Toggle
document.getElementById("toggleModeBtn").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});



document.getElementById("submitBtn").addEventListener("click",function name() {
  const value =document.getElementById("username").value;
  const value1 =document.getElementById("fathername").value;
  const value2 =document.getElementById("grandfathername").value;
  document.getElementById("output").innerText ="you enter the following"+value+value1+value2
});

