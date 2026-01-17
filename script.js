const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", ()=>{
   navLinks.classList.toggle("new-link");
   console.log("hello")
})


