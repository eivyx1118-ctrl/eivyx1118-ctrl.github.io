const ink=document.createElement("div");

ink.style.position="fixed";
ink.style.width="20px";
ink.style.height="20px";
ink.style.borderRadius="50%";
ink.style.pointerEvents="none";
ink.style.background="rgba(255,0,120,0.4)";
ink.style.filter="blur(6px)";

document.body.appendChild(ink);

document.addEventListener("mousemove",(e)=>{

ink.style.left=e.clientX+"px";
ink.style.top=e.clientY+"px";

});