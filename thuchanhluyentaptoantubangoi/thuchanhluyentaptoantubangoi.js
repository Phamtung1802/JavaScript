function tinhTong() {
  let a = document.getElementById('a').value;
  let b = document.getElementById('b').value;
  let tong= parseInt(a) + parseInt(b);
  document.getElementById('tong').value= tong;

  if ((tong < 4)){
    result=('Below')
  } else{
    result=('Over')
  }
  alert(result);
}