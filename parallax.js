// eivyx parallax effect

const heroImage=document.querySelector(".hero img");

window.addEventListener("scroll",()=>{

let scrollY=window.scrollY;

heroImage.style.transform="translateY("+scrollY*0.3+"px)";

});