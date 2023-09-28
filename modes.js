var btn =document.querySelector(".button1");
var mode = getLocalStorage();
btn.addEventListener("click", function ChangeMode(){
    mode = mode * -1;
    setLocalStorage();
    InitMode(mode);
});

function InitMode(mode){
    var bodyElements = document.querySelectorAll("body");
    var textBlockElements = document.querySelectorAll(".title .date .info .title_block .row .tag .name");
    if(mode == -1){
        bodyElements.forEach(element => {
            element.classList.add('dark-mode');
        });
        textBlockElements.forEach(element => {
            element.classList.add('dark-mode');
        });
    }
    else{
        bodyElements.forEach(element => {
            element.classList.remove('dark-mode');
        });
        textBlockElements.forEach(element => {
            element.classList.remove('dark-mode');
        });
    }
}


