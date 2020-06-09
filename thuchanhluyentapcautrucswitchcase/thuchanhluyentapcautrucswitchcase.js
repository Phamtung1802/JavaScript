
 function checkbrowser() {
  let browsers = document.getElementById('browser').value;
  switch (browsers) {
    case 'Edge':
      alert("You've got the Edge!");
    break;
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      alert('Okay we support these browsers too');
    break;
    default:
      alert('We hope that this page looks ok!');
  } 
}
function checknumber() {
  let a = document.getElementById('checkNumber').value;
  console.log(a);
  switch (parseInt(a)) {
    case 0:
      alert('0');
    break;
    case 1:
      alert('1');
    break;
    case 2:
    case 3:
      alert('2,3');
    break;
    
    default:
      alert('khong phai 1, 2 hoac 3');
  } 
}
function compare() {
  let b = document.getElementById('compareNum').value;
  console.log(b);
  if (b > 0){
    alert(1);
  }
  else if (b < 0){
    alert(-1);
  }
  else{
    alert(0);
  }
}
 