let h1 = document.querySelector("h1");

document.addEventListener("keydown", function(evt) {
    
    if(evt.key === " ") {
        h1.textContent = "SPC";
    } else {
        h1.textContent = evt.key;
    }
});