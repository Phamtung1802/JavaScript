
 function tinhThang() {
  let thang = parseInt(document.getElementById('thang').value);
  switch (thang) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      alert('Tháng '+thang+' có 31 ngày');
      break;
    case 4:
    case 6:
    case 9:
    case 11:
        alert('Tháng '+thang+' có 30 ngày');
      break;
    case 2:
      alert('Tháng '+thang+' có 28 hoặc 29 ngày');
  }
 }