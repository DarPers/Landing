var pict = document.querySelector(".img");
var mode_pic = 1;
pict.addEventListener("click", function(){
    mode_pic = mode_pic * -1;
    if (mode_pic == -1){
        pict.src = "imgs/img_clothes_3.png";
    }
    else{
        pict.src = "imgs/img_author.png";
    }
});