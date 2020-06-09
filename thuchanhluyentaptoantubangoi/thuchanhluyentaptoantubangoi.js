function tinhTong() {
  let a = document.getElementById('a').value;
  let b = document.getElementById('b').value;
  let tong= parseInt(a) + parseInt(b);
  document.getElementById('tong').value= tong;
  result = (a + b < 4) ? 'Below' : 'Over';
  alert(result);
}

 