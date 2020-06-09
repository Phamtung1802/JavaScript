
      let isLeapYear = false;
      function nhangiatri(){
        year = document.getElementById('year').value
        isDivisibleBy4 = year % 4 == 0;
      }   
  
      function kiemtra() 
        {
      
         if (isDivisibleBy4==true) {
            let isDivisibleBy100 = year % 100 == 0;
            if (isDivisibleBy100==true) {
              let isDivisibleBy400 = year % 400 == 0;
              if (isDivisibleBy400==true) {
                isLeapYear = true;
              }
            } else {
              isLeapYear = false;
            }
          }
          console.log(isDivisibleBy4)
          if (isLeapYear==true) {
           document.getElementById('result').innerHTML=(year + ' is a leap year');
          } 
          else {
            document.getElementById('result').innerHTML=(year + ' is NOT leap year');
          }
        } 
        



     