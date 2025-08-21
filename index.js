let mens = document.querySelector(".nav-men");
mens.addEventListener("click", () => {
  window.location.href = "mens.html"; 
  console.log("he clicked mens phage")
});
 window.addEventListener("DOMContentLoaded", () => {
  let mens = document.querySelector(".nav-men");
  
});

let profile = document.querySelector(".nav-profile");
profile.addEventListener("click", () => {
  window.location.href = "profile.html"; 
});

let women = document.querySelector(".nav-women");
women.addEventListener("click", () => {
  window.location.href = "womens.html"; 
});
let home= document.querySelector(".nav-home");
home.addEventListener("click", () => {
  window.location.href = "index.html"; 
});
let wishlist= document.querySelector(".list");
wishlist.addEventListener("click", () => {
  window.location.href = "wishlist.html"; 
});
let kids = document.querySelector(".nav-kid");
kids.addEventListener("click", () => {
  window.location.href = "kids.html";
});

let Box = document.querySelector(".box1");
Box.addEventListener("click", () => {
  window.location.href = "kids.html";  
});
let Box2 = document.querySelector(".box2");
Box2.addEventListener("click", () => {
  window.location.href = "womens.html";  
});
let Box3 = document.querySelector(".box3");
Box3.addEventListener("click", () => {
  window.location.href = "mens.html";  
});

let Box4 = document.querySelector(".box4");
Box4.addEventListener("click", () => {
  window.location.href = "womens.html";  
});
let Box5 = document.querySelector(".box5");
Box5.addEventListener("click", () => {
  window.location.href = "mens.html";  
});
document.addEventListener('DOMContentLoaded', () => {
  const backLink = document.getElementById('backLink');
  backLink.addEventListener('click', (e) => {
   
    if (window.history.length > 1) {
      e.preventDefault();        
      window.history.back();
    }

  });
});
document.addEventListener('DOMContentLoaded', () => {
  const backLinkprofile = document.getElementById('backLinkprofile');
  backLinkprofile.addEventListener('click', (e) => {
   
    if (window.history.length > 1) {
      e.preventDefault();        
      window.history.back();
    }

  });
});




let regbtn = document.querySelectorAll(".regbtn");
regbtn.addEventListener("click", () => {
  window.location.href = "index.html";  
});

 