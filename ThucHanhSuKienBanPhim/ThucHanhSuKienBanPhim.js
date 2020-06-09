
function docReady() {
    window.addEventListener('keydown', moveSelection);
}
function downArrowPressed() {
    var element = document.getElementById("nobita");
    console.log(element.style.top);
    element.style.top = parseInt(element.style.top) + 100 +'px';
}
function upArrowPressed() {
    let element = document.getElementById("nobita");
    console.log(element.style.top);
    element.style.top = parseInt(element.style.top) - 100 + 'px';
}
function rightArrowPressed() {
    var element = document.getElementById("nobita");
    console.log(element.style.left);
    element.style.left = parseInt(element.style.left) + 100 + 'px';
}
function leftArrowPressed() {
    var element = document.getElementById("nobita");
    console.log(element.style.left);
    element.style.left = parseInt(element.style.left) - 100 + 'px';
}
function moveSelection(evt) {
    console.log(evt);
    console.log(evt.keyCode);
    switch (evt.keyCode) {
        case 37:
            leftArrowPressed();
            break;
        case 39:
            rightArrowPressed();
            break;
        case 38:
            upArrowPressed();
            break;
        case 40:
            downArrowPressed();
            break;
    }
}


