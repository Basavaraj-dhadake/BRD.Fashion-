// let mens = document.querySelector(".nav-men");
// mens.addEventListener("click", () => {
//   window.location.href = "mens.html"; 
//   console.log("he clicked mens phage")
// });
 window.addEventListener("DOMContentLoaded", () => {
  let mens = document.querySelector(".nav-men");
  if (mens) {
    mens.addEventListener("click", () => {
      window.location.href = "mens.html"; 
      console.log("he clicked mens page");
    });
  } else {
    console.error("Element '.nav-men' not found.");
  }
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
let kids= document.querySelector(".nav-kid");
kids.addEventListener("click", () => {
  window.location.href = "kids.html"; 
});
