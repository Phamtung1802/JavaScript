
 function dangNhap(){ 
  let message = document.getElementById('message').value;
  thongBao = ((message=='Employee') ? 'Hello' : ((message =='Director') ? 'Greeting': ((message.length == 0 ) ? 'No Login': null)))
  console.log(thongBao);
  alert(thongBao);
  
 }