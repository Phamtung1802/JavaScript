let a = 0;
let b = 0;
let c = 0;
let d = 0;
let ma =1;
function check(){
  if ((a+b+c+d==4)){
    alert('you win');
}
}
function changePic1(){
  if(ma<4){ma++;
  }
  else{
    ma=1;
  }
  console.log(ma);
  switch (ma) {
    case 1:
    document.getElementById('anh1').src ="2.jpg";
    console.log(ma);
    a =0;
    check()
    break;
    case 2:
    document.getElementById('anh1').src ="3.jpg";
    a =0;
    check()
    break;
    case 3:
    document.getElementById('anh1').src ="4.jpg";
    a =0;
    check()
    break;
    case 4:
    document.getElementById('anh1').src ="1.jpg";
    a = 1;
    check()
    break;
    default:
      console.log('imgObj1');
      break;
  }
}
function changePic2(){
  if(ma<4){ma++;
  }
  else{
    ma=1;
  }
  switch (ma) {
    case 1:
    document.getElementById('anh2').src ="2.jpg";
    b =1;
    check()
    break;
    case 2:
    document.getElementById('anh2').src ="3.jpg";
    b =0;
    check()
    break;
    case 3:
    document.getElementById('anh2').src ="4.jpg";
    b =0;
    check()
    break;
    case 4:
    document.getElementById('anh2').src ="1.jpg";
    b = 0;
    check()
    break;
    default:
      break;
  }
}
function changePic3(){
  if(ma<4){ma++;
  }
  else{
    ma=1;
  }
  switch (ma) {
    case 1:
    document.getElementById('anh3').src ="2.jpg";
    c =0;
    check()
    break;
    case 2:
    document.getElementById('anh3').src ="3.jpg";
    c =1;
    check()
    break;
    case 3:
    document.getElementById('anh3').src ="4.jpg";
    c =0;
    check()
    break;
    case 4:
    document.getElementById('anh3').src ="1.jpg";
    c =0;
    check()
    break;
    default:
      break;
  }
}
function changePic4(){
  if(ma<4){ma++;
  }
  else{
    ma=1;
  }
  switch (ma) {
    case 1:
    document.getElementById('anh4').src ="2.jpg";
    d =0;
    check()
    break;
    case 2:
    document.getElementById('anh4').src ="3.jpg";
    d =0;
    check()
    break;
    case 3:
    document.getElementById('anh4').src ="4.jpg";
    d =1;
    check()
    break;
    case 4:
    document.getElementById('anh4').src ="1.jpg";
    d = 0;
    check()
    break;
    default:
      break;
  }
}