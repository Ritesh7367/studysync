let mode=document.querySelector("#mode");
mode.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
})

let curr = "offswitch";
mode.addEventListener("click",()=>{
    if(curr === "offswitch"){
        curr = "onnswitch";
    mode.innerHTML="<i class='fa-solid fa-toggle-on'></i>";}
    else{
        curr ="offswitch";
        mode.innerHTML="<i class='fa-solid fa-toggle-off'></i>";
    }
})

let nav = document.querySelector(".nav");
let menuIcon = document.querySelector(".menu-icon");
menuIcon.addEventListener("click",()=>{
    nav.classList.toggle("active");
})
menuIcon.addEventListener("click",()=>{
    menuIcon.classList.toggle("clickmenu")
})
let start = document.querySelector(".strt");
let signup= document.querySelector(".signup");
start.addEventListener("click",(Event)=>{
    Event.stopPropagation();
    signup.classList.toggle("act");
})
document.body.addEventListener("click",()=>{
    signup.classList.remove("act");
})
signup.addEventListener("click", (event) => {
  event.stopPropagation();
});
let login=document.querySelector(".login");
let loginpage=document.querySelector("#loginpage");
let signuppage=document.querySelector("#signuppage");
loginpage.addEventListener("click",(event)=>{
    event.stopPropagation();
    login.classList.toggle("act");
    signup.classList.remove("act");
})
signuppage.addEventListener("click",(event)=>{
    event.stopPropagation();
    signup.classList.toggle("act");
    login.classList.remove("act");
})
document.body.addEventListener("click",()=>{
    login.classList.remove("act");
})
login.addEventListener("click", (event) => {
  event.stopPropagation();
});
let news=document.querySelector("#news");
news.addEventListener("click",()=>{
    alert("subscribed succesfully");
})