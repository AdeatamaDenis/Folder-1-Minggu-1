//querySelector
var denis = document.querySelector(".denis");
denis.style.backgroundColor = "#0088b9";
denis.style.color = "#fff";
denis.style.textAlign = "center";
denis.style.padding = "10px";

// querySelectorAll 
var garuda = document.querySelectorAll(".garuda");
for(var i = 0; i < garuda.length; i++){
    garuda[i].style.padding = "8px";
    garuda[i].style.textAlign = "center";
    garuda[i].style.fontSize = "16px";
}
garuda[0].style.backgroundColor = "red";
garuda[1].style.backgroundColor = "white";
garuda[2].style.backgroundColor = "green";