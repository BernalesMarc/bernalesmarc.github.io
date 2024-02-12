
document.oncontextmenu = function(e) {
    e.preventDefault();
};


document.onkeydown = function(e) {
    if(e.keyCode == 123) {
        return false;
    }
};

document.body.style.userSelect = 'none';