
 let userName = prompt("Who's there?", '');
 if (userName == 'Admin'){
  let Pass = prompt("Password?", '');
  if(Pass =='TheMaster') {
      alert('Welcome');
  }
    else if (Pass.length == 0){
    alert('Canceled');
    }
    else{
      alert('Wrong Password');
    }
  }   
  else if(userName.length==0){
    alert('Canceled');
    }
    else {alert('I Dont Know you');}
          