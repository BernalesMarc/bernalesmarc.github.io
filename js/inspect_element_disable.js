
document.oncontextmenu = function(e) {
    e.preventDefault();
};


document.onkeydown = function(e) {
    if(e.keyCode == 123) {
        return false;
    }
};

document.addEventListener("keydown", function (e) {
    // Check if the pressed key is 'S' and the Ctrl key is pressed
    if ((e.key === 's' || e.key === 'S') && (e.ctrlKey || e.metaKey)) {
        e.preventDefault(); // Prevent the default behavior (saving)
        console.log("Ctrl+S is disabled");
    }
});

document.body.style.userSelect = 'none';