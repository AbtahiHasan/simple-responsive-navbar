//select elements
let navlink = document.querySelector(".navlink");
let toggleBar = document.querySelector(".toggle-bar");

toggleBar.onclick = function(){
    navlink.classList.toggle("active");
}