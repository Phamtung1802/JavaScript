let imgObj = null;
window.onload = function init() {
    imgObj = document.getElementById('myImage');
    console.log(imgObj);
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
}
function moveRight() {
    imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
}