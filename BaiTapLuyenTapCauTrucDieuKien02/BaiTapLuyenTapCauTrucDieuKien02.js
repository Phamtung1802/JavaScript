
function chuyenDoiNhietDo() {
 let a = parseInt(document.getElementById('doC').value);
 document.getElementById('doiNhietDo').innerHTML = ((a*9/5+32+'<sup>o</sup>F'));
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function doiChieuDai() {
  let chieudai = parseInt(document.getElementById('chieuDai').value);
  let donvi= (document.getElementById('donVi').value);
  console.log(donVi.value);
  if (donVi.value=="m"){ 
    quiDoi= chieudai* 3.2808;
    document.getElementById('doiChieuDai').innerHTML= quiDoi+' feet';
  }
  else  { 
    quiDoi= chieudai/ 3.2808;
    document.getElementById('doiChieuDai').innerHTML=quiDoi+' met';
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function tinhDienTichHinhVuong() {
  let chieudai = parseInt(document.getElementById('chieuDaiCanh').value);
  if (chieudai=="0"){ 
    alert('chiều dài cạnh không được bằng 0')
  }
  else  { 
    document.getElementById('dienTichHinhVuong').innerHTML='Diện tích là '+chieudai*chieudai+('m<sup>2<sup>');
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function dientichTamGiacVuong() {
  let canhdai = parseInt(document.getElementById('canhDai').value);
  let canhngan = parseInt(document.getElementById('canhNgan').value);
  if ((canhdai*canhngan)==0){ 
    alert('chiều dài cạnh không được bằng 0')
  }
  else  { 
    document.getElementById('dienTamGiacVuong').innerHTML='Diện tích là: '+((canhdai*canhngan)/2)+('m<sup>2<sup>');
  }
}
function dientichHinhChuNhat() {
  let canh1 = parseInt(document.getElementById('canh1').value);
  let canh2 = parseInt(document.getElementById('canh2').value);
  if ((canh1*canh2)==0){ 
    alert('chiều dài cạnh không được bằng 0')
  }
  else  { 
    document.getElementById('dientichHinhChuNhat').innerHTML='Diện tích là: '+((canh1*canh2))+('m<sup>2<sup>');
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function phuongTrinhBac1() {
  let a = parseInt(document.getElementById('thamSo_a').value);
  let b = parseInt(document.getElementById('thamSo_b').value);
  let c = parseInt(document.getElementById('thamSo_c').value);
  if (a==0){ 
    if(b==0){
      if(c==0){
        document.getElementById('phuongTrinhBac1').innerHTML=('Phương trình vô số nghiệm');
      }
      else{
        document.getElementById('phuongTrinhBac1').innerHTML=('Phương trình vô nghiệm');
      }
    }
    else { if(b==c) {
           document.getElementById('phuongTrinhBac1').innerHTML=('Phương trình vô số nghiệm')
           }
           else{
            document.getElementById('phuongTrinhBac1').innerHTML=('Phương trình vô nghiệm')
           }
    }
  }
  else  { 
    document.getElementById('phuongTrinhBac1').innerHTML='Phương trình 1 nghiệm X= '+((b-c)/a);
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function phuongTrinhBac2() {
  let d = parseInt(document.getElementById('thamSo_d').value);
  let e = parseInt(document.getElementById('thamSo_e').value);
  let f = parseInt(document.getElementById('thamSo_f').value);
  let g = parseInt(document.getElementById('thamSo_g').value);
  if (d==0){
    if(e==0){
      if(f==0){
        if(g==0){
          document.getElementById('phuongTrinhBac2').innerHTML='Phương trình vô số nghiệm';
        }
        else{
          document.getElementById('phuongTrinhBac2').innerHTML='Phương trình vô nghiệm';
        }
      }
      else{
        if (g==f){
          document.getElementById('phuongTrinhBac2').innerHTML='Phương trình vô nghiệm';
        }
        else { 
          document.getElementById('phuongTrinhBac2').innerHTML='Phương trình vô nghiệm';
        }
      }
    }
    else {
      document.getElementById('phuongTrinhBac2').innerHTML='Phương trình 1 nghiệm X=' +((g-f)/e);
    }
  }
  else{
    delta= ((e*e)+4*d*f);
    x1=(-f-Math.sqrt(delta))/(2*d)
    console.log('x1= '+x1);
    x2=(-f+Math.sqrt(delta))/(2*d)
    document.getElementById('phuongTrinhBac2').innerHTML='Phương trình 2 nghiệm X<sub>1</sub>=' +x1+', X<sub>2</sub>= '+x2;
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function dieuKienTamgiac() {
  let a = parseInt(document.getElementById('canh_a').value);
  let b = parseInt(document.getElementById('canh_b').value);
  let c = parseInt(document.getElementById('canh_c').value);
  if ((a>0)&&(b>0)&&(c>0)&&((a+b)>c)&&((b+c)>a)&&((a+c)>b)) {
    document.getElementById('dieuKienTamgiac').innerHTML='Đúng là tam giác';
  }
  else{
    document.getElementById('dieuKienTamgiac').innerHTML='Không phải là tam giác';
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function tinhGiaDien() {
  let soDien = parseInt(document.getElementById('so_Dien').value);
  let hoaDon = 0;
  const bac1 = 1678;
  const bac2 = 1734;
  const bac3 = 2014;
  const bac4 = 2536;
  const bac5 = 2834;
  const bac6 = 2927;
   
  if (soDien>400){
    hoaDon = (50*bac1)+(50*bac2)+(100*bac3)+(100*bac4)+(100*bac5)+(((soDien-400)*bac6))
  }
  else if(soDien>300){
    hoaDon = (50*bac1)+(50*bac2)+(100*bac3)+(100*bac4)+(((soDien-300)*bac5))
  }
  else if(soDien>200){
    hoaDon = (50*bac1)+(50*bac2)+(100*bac3)+(((soDien-200)*bac4));
  }
  else if(soDien>100){
    hoaDon = (50*bac1)+(50*bac2)+(((soDien-100)*bac3));
  }
  else if(soDien>50){
    hoaDon = (50*bac1)+(((soDien-50)*bac2));
  }
  else{
    hoaDon = (soDien*bac1);
  }
  document.getElementById('tinhGiaDien').innerHTML='Tiền điện là '+hoaDon+" VND";
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function tinhThue() {
  let thuNhap = document.getElementById('thu_Nhap').value*0.000001*12;
  console.log(thuNhap);
  let thuNhapChiuThue = thuNhap -(9*12);
  console.log("thunhapchiuthue="+thuNhapChiuThue);
  let thue = 0;
  const bac1 = 0.05;
  const bac2 = 0.1;
  const bac3 = 0.15;
  const bac4 = 0.20;
  const bac5 = 0.25;
  const bac6 = 0.30;
  const bac7 = 0.35;
  const h    = 1000000;
  function hienThi(){
    if(thuNhapChiuThue>0){
      document.getElementById('tinhThue').innerHTML='Tiền Thuế là '+thue+" VND";
    } else{
      document.getElementById('tinhThue').innerHTML='Không phải đóng thuế';
    }
  }
  if (thuNhapChiuThue>0){
    if (thuNhapChiuThue>960){
      thue = ((60*bac1)+(60*bac2)+(96*bac3)+(168*bac4)+(240*bac5)+(336*bac6)+(((thuNhapChiuThue-960)*bac7)))*h;
    }
    else if(thuNhapChiuThue>624){
      thue = ((60*bac1)+(60*bac2)+(96*bac3)+(168*bac4)+(240*bac5)+((thuNhapChiuThue-624)*bac6))*h;
    }
    else if(thuNhapChiuThue>384){
      thue = ((60*bac1)+(60*bac2)+(96*bac3)+(168*bac4)+((thuNhapChiuThue-384))*bac5)*h;
    }
    else if(thuNhapChiuThue>216){
      thue = ((60*bac1)+(60*bac2)+(96*bac3)+((thuNhapChiuThue-216)*bac4))*h;
    }
    else if(thuNhapChiuThue>120){
      thue = ((60*bac1)+(60*bac2)+((thuNhapChiuThue-120)*bac3))*h;
    }
    else if(thuNhapChiuThue>60){
      thue = ((60*bac1)+(((thuNhapChiuThue-60)*bac2))*h);
    }
    else{
      thue = ((thuNhapChiuThue*bac1)*h);
    }
  }
  thue=thue.toFixed(2);
  hienThi();
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
function tinhLai() {
  let loaikihan = document.getElementById('ki_han').value;
  let tiengoc = document.getElementById('tien_gui').value;
  let sokihan = Math.floor(document.getElementById('so_ki_han').value);
  let laisuat=0;
  let ketqua=0;
  switch (loaikihan) {
    case "1":
      laisuat = 1.001;
      break;
    case "2":
      laisuat = 1+(0.04/12);
      break;
    case "3":
      laisuat = 1+(0.045/4);
      break;
    case "4":
      laisuat = 1+(0.049/2);
      break;
    case "5":
      laisuat = 1.065;
      break;
  }
  console.log(document.getElementById('ki_han').value);
  console.log(laisuat);
  ketqua=(tiengoc*Math.pow(laisuat,sokihan)).toFixed(0);
  document.getElementById('tinhLai').innerHTML='Tổng số tiền sau rút là '+ketqua+" VND";
}
 