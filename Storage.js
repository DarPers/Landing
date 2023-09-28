window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage)

function setLocalStorage() {
    localStorage.setItem('mode', mode);
    console.log(mode);
};

function getLocalStorage() {

    var mode = 1;    
    if (localStorage.getItem('mode')) {
        mode = localStorage.getItem('mode');
        InitMode(mode);
    }
    else{
        InitMode(mode);
    }

    return mode;
};
