// select elements
let toggleBtn = document.getElementById("toggle"),
header = document.getElementById("header");
 toggleBtn.onclick = () => {
    header.classList.toggle("active");
 }
