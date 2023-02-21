const webd = document.getElementById("dropa")
const webdul = document.getElementById("ula")
const dis = document.getElementById("dropb")
const disul = document.getElementById("ulb")
const menu = document.querySelector(".menu")
const content = document.querySelector(".content")
webdul.style.display = "none";
disul.style.display = "none";
// console.log(content)
menu.addEventListener("click",function(){
    if(content.style.display == "block"){
        content.style.display = "none"
    }else{
        content.style.display = "block"
    }
    menu.style = " width: 100%; ";
});
webd.addEventListener("mouseenter", function(){
    webdul.style.display = "block";
});
webd.addEventListener("mouseleave", function(){
    webdul.style.display = "none";
});
dis.addEventListener("mouseenter", function(){
    disul.style.display = "block";
});
dis.addEventListener("mouseleave", function(){
    disul.style.display = "none";
});
dis.addEventListener("touchend", function(){
    if(disul.style.display == "none"){
        disul.style.display = "block"
    }else{
        disul.style.display = "none"
    }
});
webd.addEventListener("touchend", function(){
    if(webdul.style.display == "none"){
        webdul.style.display = "block"
    }else{
        webdul.style.display = "none"
    }
});