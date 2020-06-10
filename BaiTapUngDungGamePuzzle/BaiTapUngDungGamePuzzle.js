let imgObj1 = null;
let imgObj2 = null;
let imgObj3 = null;
let imgObj4 = null;
let a = 0;
let b = 0;
let c = 0;
let d = 0;
function init() {
    imgObj1 = document.getElementById('anh1').src;
    imgObj2 = document.getElementById('anh2').src;
    imgObj3 = document.getElementById('anh3').src;
    imgObj4 = document.getElementById('anh4').src;
    console.log(imgObj1);
    console.log(imgObj2);
    console.log(imgObj3);
    console.log(imgObj4);
}
function check(){
  if ((a+b+c+d==4)){
    alert('you win');
}
}
function changePic1(){
  imgObj1 = document.getElementById('anh1').src;
  switch (imgObj1) {
    case "file:///C:/Users/ADMIN/Git/JavaScript/BaiTapUngDungGamePuzzle/1.jpg":
    document.getElementById('anh1').src ="file:///C:/Users/ADMIN/Git/JavaScript/BaiTapUngDungGamePuzzle/2.jpg";
    a =0;
    check()
    break;
    case "file:///C:/Users/ADMIN/Git/JavaScript/BaiTapUngDungGamePuzzle/2.jpg":
    document.getElementById('anh1').src ="file:///C:/Users/ADMIN/Git/JavaScript/BaiTapUngDungGamePuzzle/3.jpg";
    a =0;
    check()
    break;
    case "file:///C:/Users/ADMIN/Git/JavaScript/BaiTapUngDungGamePuzzle/3.jpg":
    document.getElementById('anh1').src ="file:///C:/Users/ADMIN/Git/JavaScript/BaiTapUngDungGamePuzzle/4.jpg";
    a =0;
    check()
    break;
    case "file:///C:/Users/ADMIN/Git/JavaScript/BaiTapUngDungGamePuzzle/4.jpg":
    document.getElementById('anh1').src ="file:///C:/Users/ADMIN/Git/JavaScript/BaiTapUngDungGamePuzzle/1.jpg";
    a = 1;
    check()
    break;
    default:
      alert('null');
      break;
  }

}
function changePic2(){
  imgObj2 = document.getElementById('anh2').src;
  switch (imgObj2) {
    case "file:///C:/Users/ADMIN/Git/JavaScript/BaiTapUngDungGamePuzzle/1.jpg":
    document.getElementById('anh2').src ="file:///C:/Users/ADMIN/Git/JavaScript/BaiTapUngDungGamePuzzle/2.jpg";
    b = 1;
    check()
    break;
    case "file:///C:/Users/ADMIN/Git/JavaScript/BaiTapUngDungGamePuzzle/2.jpg":
    document.getElementById('anh2').src ="file:///C:/Users/ADMIN/Git/JavaScript/BaiTapUngDungGamePuzzle/3.jpg";
    b = 0;
    check()
    break;
    case "file:///C:/Users/ADMIN/Git/JavaScript/BaiTapUngDungGamePuzzle/3.jpg":
    document.getElementById('anh2').src ="file:///C:/Users/ADMIN/Git/JavaScript/BaiTapUngDungGamePuzzle/4.jpg";
    b = 0;
    check()
    break;
    case "file:///C:/Users/ADMIN/Git/JavaScript/BaiTapUngDungGamePuzzle/4.jpg":
    document.getElementById('anh2').src ="file:///C:/Users/ADMIN/Git/JavaScript/BaiTapUngDungGamePuzzle/1.jpg";
    b = 0;
    check()
    break;
    default:
      alert('null');
      break;
  }

}
function changePic3(){
  imgObj3 = document.getElementById('anh3').src;
  switch (imgObj3) {
    case "file:///C:/Users/ADMIN/Git/JavaScript/BaiTapUngDungGamePuzzle/1.jpg":
    document.getElementById('anh3').src ="file:///C:/Users/ADMIN/Git/JavaScript/BaiTapUngDungGamePuzzle/2.jpg";
    c = 0;
    check()
    break;
    case "file:///C:/Users/ADMIN/Git/JavaScript/BaiTapUngDungGamePuzzle/2.jpg":
    document.getElementById('anh3').src ="file:///C:/Users/ADMIN/Git/JavaScript/BaiTapUngDungGamePuzzle/3.jpg";
    c = 1;
    check()
    break;
    case "file:///C:/Users/ADMIN/Git/JavaScript/BaiTapUngDungGamePuzzle/3.jpg":
    document.getElementById('anh3').src ="file:///C:/Users/ADMIN/Git/JavaScript/BaiTapUngDungGamePuzzle/4.jpg";
    c = 0;
    check()
    break;
    case "file:///C:/Users/ADMIN/Git/JavaScript/BaiTapUngDungGamePuzzle/4.jpg":
    document.getElementById('anh3').src ="file:///C:/Users/ADMIN/Git/JavaScript/BaiTapUngDungGamePuzzle/1.jpg";
    c = 0;
    check()
    break;
    default:
      alert('null');
      break;
  }
}
function changePic4(){
  imgObj4 = document.getElementById('anh4').src;
  switch (imgObj4) {
    case "file:///C:/Users/ADMIN/Git/JavaScript/BaiTapUngDungGamePuzzle/1.jpg":
    document.getElementById('anh4').src ="file:///C:/Users/ADMIN/Git/JavaScript/BaiTapUngDungGamePuzzle/2.jpg";
    d = 0;
    check()
    break;
    case "file:///C:/Users/ADMIN/Git/JavaScript/BaiTapUngDungGamePuzzle/2.jpg":
    document.getElementById('anh4').src ="file:///C:/Users/ADMIN/Git/JavaScript/BaiTapUngDungGamePuzzle/3.jpg";
    d = 0;
    check()
    break;
    case "file:///C:/Users/ADMIN/Git/JavaScript/BaiTapUngDungGamePuzzle/3.jpg":
    document.getElementById('anh4').src ="file:///C:/Users/ADMIN/Git/JavaScript/BaiTapUngDungGamePuzzle/4.jpg";
    d = 1;
    check()
    break;
    case "file:///C:/Users/ADMIN/Git/JavaScript/BaiTapUngDungGamePuzzle/4.jpg":
    document.getElementById('anh4').src ="file:///C:/Users/ADMIN/Git/JavaScript/BaiTapUngDungGamePuzzle/1.jpg";
    d = 0;
    check()
    break;
    default:
      alert('null');
      break;
  }

}
