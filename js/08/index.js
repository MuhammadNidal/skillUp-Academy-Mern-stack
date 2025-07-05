document.getElementById("myBtn").addEventListener("click", displayDate);
    function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}

const para = document.createElement("p");
const node = document.createTextNode("This is newpojiuhgyfuoyiufguoifhuoigyiguh.");
para.appendChild(node);
const element = document.getElementById("div1");
element.appendChild(para);