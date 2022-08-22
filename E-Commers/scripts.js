
//click any image  then change image index 

var Mainimage=document.getElementById("main");
var smallimage=document.getElementsByClassName("small-image");

smallimage[0].onclick = function(){
    Mainimage.src =smallimage[0].src;
}

smallimage[1].onclick = function(){
    Mainimage.src =smallimage[1].src;
}

smallimage[2].onclick = function(){
    Mainimage.src =smallimage[2].src;
}

smallimage[3].onclick = function(){
    Mainimage.src =smallimage[3].src;
}
