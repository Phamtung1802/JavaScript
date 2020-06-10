
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
function checknum() {
  if 
    (manhinh.includes(' '))
    { manhinh="";
    }
  }
function checkOp() {
  if 
    ((manhinh.includes('+')||manhinh.includes('-')||manhinh.includes('*')||manhinh.includes('/'))) 
    { manhinh="";
    }
  }
function  P1(){
  manhinh = document.getElementById("hienThi").innerHTML
  checkOp();
  checknum()
  document.getElementById("hienThi").innerHTML=manhinh+Nut1;
}
function  P2(){
  manhinh = document.getElementById("hienThi").innerHTML
  checkOp();
  checknum()
  document.getElementById("hienThi").innerHTML=manhinh+Nut2;
}
function  P3(){
  manhinh = document.getElementById("hienThi").innerHTML;
  checkOp();
  checknum()
  document.getElementById("hienThi").innerHTML=manhinh+Nut3;
}

function  P4() {
  manhinh = document.getElementById("hienThi").innerHTML;
  checkOp();
  checknum()
  document.getElementById("hienThi").innerHTML=manhinh+Nut4;
}
function  P5() {
  manhinh = document.getElementById("hienThi").innerHTML;
  checkOp();
  checknum()
  document.getElementById("hienThi").innerHTML=manhinh+Nut5;
}
function  P6() {
  manhinh = document.getElementById("hienThi").innerHTML;
  checkOp();
  checknum()
  document.getElementById("hienThi").innerHTML=manhinh+Nut6;
}
function  P7() {
  manhinh = document.getElementById("hienThi").innerHTML;
  checkOp();
  checknum()
  document.getElementById("hienThi").innerHTML=manhinh+Nut7;
}
function  P8() {
  manhinh = document.getElementById("hienThi").innerHTML;
  checkOp();
  checknum()
  document.getElementById("hienThi").innerHTML=manhinh+Nut8;
}
function  P9() {
  manhinh = document.getElementById("hienThi").innerHTML;
  checkOp();
  checknum()
  document.getElementById("hienThi").innerHTML=manhinh+Nut9;
}
function  PZero () {
  manhinh = document.getElementById("hienThi").innerHTML;
  checkOp();
  checknum()
  document.getElementById("hienThi").innerHTML=manhinh+Nut0;
}
function  PPlus() {
  so1= document.getElementById('hienThi').innerHTML;
  document.getElementById("hienThi").innerHTML=("");
('so 1='+ typeof(so1) );
  toantu="+";
  document.getElementById("hienThi").innerHTML=("+");
}
function  PSub() {
  so1= document.getElementById('hienThi').innerHTML;
  document.getElementById("hienThi").innerHTML=("");
  toantu="-";
  document.getElementById("hienThi").innerHTML=("-");
}
function  PMulti() {
  so1= document.getElementById('hienThi').innerHTML;
  document.getElementById("hienThi").innerHTML=("");
  toantu="*";
  document.getElementById("hienThi").innerHTML=("*");
}
function  PDivide() {
  so1= document.getElementById('hienThi').innerHTML;
  document.getElementById("hienThi").innerHTML=("");
  toantu="/";
  document.getElementById("hienThi").innerHTML=("/");
}
function  PEqual(){
  var so2 = document.getElementById('hienThi').innerHTML;
  document.getElementById('hienThi').innerHTML="";
  bieuthuc= so1+toantu+so2;
  document.getElementById('hienThi').innerHTML= ' '+eval(bieuthuc);
}
function  PClear(){
  document.getElementById("hienThi").innerHTML=("");
  so1="0";
  so2="0";
  toantu="+";
  bieuthuc="";
}