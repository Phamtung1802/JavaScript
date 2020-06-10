
let Nut1="1";
let Nut2="2";
let Nut3="3";
let NutCong="+";
let Nut4="4";
let Nut5="5";
let Nut6="6";
let NutTru="-";
let Nut7="7";
let Nut8="8";
let Nut9="9";
let NutNhan="X";
let NutClear="Clear";
let Nut0="0";
let Nutchia="/";
let Current=null;
let a ="button";
so1="0";
so2="0";
toantu="+";
bieuthuc="";
function checkOp() {
  if 
    (manhinh.includes('+')||manhinh.includes('-')||manhinh.includes('*')||manhinh.includes('/')) 
    { manhinh="";
    }
  }
function  P1(){
  manhinh = document.getElementById("hienThi").innerHTML
  checkOp();
  document.getElementById("hienThi").innerHTML=manhinh+Nut1;
  console.log(manhinh);
}
function  P2(){
  manhinh = document.getElementById("hienThi").innerHTML
  checkOp();
  document.getElementById("hienThi").innerHTML=manhinh+Nut2;
  console.log(manhinh);
}
function  P3(){
  manhinh = document.getElementById("hienThi").innerHTML;
  checkOp();
  document.getElementById("hienThi").innerHTML=manhinh+Nut3;
  console.log(manhinh);
}

function  P4() {
  manhinh = document.getElementById("hienThi").innerHTML;
  checkOp();
  document.getElementById("hienThi").innerHTML=manhinh+Nut4;
  console.log(manhinh);
}
function  P5() {
  manhinh = document.getElementById("hienThi").innerHTML;
  checkOp();
  document.getElementById("hienThi").innerHTML=manhinh+Nut5;
  console.log(manhinh);
}
function  P6() {
  manhinh = document.getElementById("hienThi").innerHTML;
  checkOp();
  document.getElementById("hienThi").innerHTML=manhinh+Nut6;
  console.log(manhinh);
}
function  P7() {
  manhinh = document.getElementById("hienThi").innerHTML;
  checkOp();
  document.getElementById("hienThi").innerHTML=manhinh+Nut7;
  console.log(manhinh);
}
function  P8() {
  manhinh = document.getElementById("hienThi").innerHTML;
  checkOp();
  document.getElementById("hienThi").innerHTML=manhinh+Nut8;
  console.log(manhinh);
}
function  P9() {
  manhinh = document.getElementById("hienThi").innerHTML;
  checkOp();
  document.getElementById("hienThi").innerHTML=manhinh+Nut9;
  console.log(manhinh);
}
function  PZero () {
  manhinh = document.getElementById("hienThi").innerHTML;
  checkOp();
  document.getElementById("hienThi").innerHTML=manhinh+Nut0;
  console.log(manhinh);
}
function  PPlus() {
  so1= document.getElementById('hienThi').innerHTML;
  document.getElementById("hienThi").innerHTML=("");
  console.log('so 1='+ typeof(so1) );
  console.log(so1);
  toantu="+";
  document.getElementById("hienThi").innerHTML=("+");
  console.log('toantu='+ typeof(toantu) );
}
function  PSub() {
  so1= document.getElementById('hienThi').innerHTML;
  document.getElementById("hienThi").innerHTML=("");
  console.log('so 1='+ typeof(so1) );
  console.log(so1);
  toantu="-";
  console.log('toantu='+ typeof(toantu) );
  document.getElementById("hienThi").innerHTML=("-");
  console.log('toantu=' +toantu);
}
function  PMulti() {
  so1= document.getElementById('hienThi').innerHTML;
  document.getElementById("hienThi").innerHTML=("");
  console.log('so 1='+ typeof(so1) );
  console.log(so1);
  toantu="*";
  
  document.getElementById("hienThi").innerHTML=("*");
  console.log('toantu='+ typeof(toantu) );
}
function  PDivide() {
  so1= document.getElementById('hienThi').innerHTML;
  document.getElementById("hienThi").innerHTML=("");
  console.log('so 1='+ typeof(so1) );
  console.log(so1);
  toantu="/";
  document.getElementById("hienThi").innerHTML=("/");
  console.log('toantu='+ typeof(toantu) );
}

function  PEqual(){
  var so2 = document.getElementById('hienThi').innerHTML;
  document.getElementById('hienThi').innerHTML="";
  console.log('so 1='+ typeof(so1) );
  console.log('so 1='+ so1);
  console.log('so 2='+ typeof(so2));
  console.log('so 2='+ so2);
  console.log('toantu='+ typeof(toantu) );
  console.log('toan tu khi tinh'+toantu);
  bieuthuc= so1+toantu+so2;
  document.getElementById('hienThi').innerHTML= eval(bieuthuc);
  console.log('Bieu Thuc='+bieuthuc);
  console.log(bieuthuc);
  //document.getElementById("hienThi").innerHTML=(parseInt(ketqua));
}
  function  PClear(){
    document.getElementById("hienThi").innerHTML=("");
    so1="0";
    so2="0";
    toantu="+";
    bieuthuc="";
  }