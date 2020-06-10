let y = window.innerHeight;
let x = window.innerWidth ;
let imgObj = null;
console.log('x='+x)
console.log('y='+y)
function yes(){
  alert('<3')
}
function laygiatrixy() {
  newX= Math.floor(Math.random()*x);
  newY= Math.floor(Math.random()*y);
}
function no(){
  imgObj = document.getElementById('no');
  imgObj.style.left = "0px";
  imgObj.style.top = "0px";
  laygiatrixy();
  document.getElementById('no').style.left= newX+'px';
  document.getElementById('no').style.top= newY+'px';
  console.log(newX);
  console.log(newY);
} 