function kiemTraChia() {
  a = document.getElementById('a').value;
  b = document.getElementById('b').value;
  if (a%b==0) {
    alert('a chia het cho b')
  }
  else{
    alert('a khong chia het cho b')
  }
}

function kiemTraTuoi() {
  tuoi = document.getElementById('tuoi').value;
  if (tuoi>=15) {
  document.getElementById('lop10').innerHTML='Đủ tuổi vào lớp 10'
  }
  else{
  document.getElementById('lop10').innerHTML='Không đủ tuổi vào lớp 10'
  }

}
function kiemTraSo() {
  soNguyen = document.getElementById('soNguyen').value;
  if (soNguyen>0) {
  document.getElementById('soNguyenkq').innerHTML=('số '+soNguyen +' lớn hơn 0');
  }
  else if(soNguyen<0){
  document.getElementById('soNguyenkq').innerHTML=('số '+soNguyen +' nhỏ hơn hơn 0');
  }
  else{
    document.getElementById('soNguyenkq').innerHTML=('số '+soNguyen +' bằng 0');
  }

}
function kiemTraMax() {
  so1 = document.getElementById('so1').value;
  so2 = document.getElementById('so2').value;
  so3 = document.getElementById('so3').value;

  if ((so1>so2)&&(so1>so3)) {
  document.getElementById('Maxkq').innerHTML=('số '+so1 +' là số lớn nhất');
  }
  else if((so2>so1)&&(so2>so3)){
    document.getElementById('Maxkq').innerHTML=('số '+so2 +' là số lớn nhất');
  }
  else if((so3>so1)&&(so3>so2)){
    document.getElementById('Maxkq').innerHTML=('số '+so3 +' là số lớn nhất');
  }
  else{ document.getElementById('Maxkq').innerHTML=('không có số lớn nhất');}
  }
function xepLoai() {
  dauKi = document.getElementById('dauKi').value;
  giuaKi = document.getElementById('giuaKi').value;
  cuoiKi = document.getElementById('cuoiKi').value;
  diemPhay= (dauKi*0.15+giuaKi*0.25+cuoiKi*0.60);
  diemPhayLamTron= diemPhay.toFixed(2);
  document.getElementById('diemPhay').innerHTML=('Điểm phẩy:'+ diemPhayLamTron);
  document.getElementById('xepLoai').innerHTML=(diemPhayLamTron>=8)?('Loại Giỏi'):((diemPhayLamTron>=6)?('Loại Khá'):(diemPhayLamTron>=4.5)?('Loại trung bình'):('Loại yếu'));
}
function kiemTraHoaHong() {
  doanhSo = document.getElementById('doanhSo').value;
  hoaHong = doanhSo;
  if (doanhSo>100000000) {
  hoaHong = doanhSo*0.05;
  document.getElementById('hoaHong').innerHTML=('Tiền Hoa Hồng: '+hoaHong);
  }
  else if(doanhSo>70000000){
    hoaHong = doanhSo*0.04;
    document.getElementById('hoaHong').innerHTML=('Tiền Hoa Hồng: '+hoaHong);
  }
  else{
    hoaHong = doanhSo*0.03;
    document.getElementById('hoaHong').innerHTML=('Tiền Hoa Hồng: '+hoaHong);
  }
}
function kiemTraCuoc() {
  soPhut = document.getElementById('soPhut').value;
  phiThueBao = 25000;
  gia50PhutDau = 600;
  gia150Phutsau = 400;
  giaSau200Phut = 200;
  thoiLuongdu = soPhut;
  tongTien= 0;
  if (soPhut>200) {
  thoiLuongdu = soPhut-200;
  tongTien=phiThueBao+gia50PhutDau*50+gia150Phutsau*150+thoiLuongdu*giaSau200Phut
  document.getElementById('giaCuoc').innerHTML=('Giá cước: '+tongTien);
  }
  else if(soPhut>50){
    thoiLuongdu = soPhut-50;
    tongTien=phiThueBao+gia50PhutDau*50+thoiLuongdu*150;
    document.getElementById('giaCuoc').innerHTML=('Giá cước:'+tongTien);
  }
  else{
    tongTien=phiThueBao+soPhut*600;
    document.getElementById('giaCuoc').innerHTML=('Giá cước:'+tongTien);
  }
}

  
    
 