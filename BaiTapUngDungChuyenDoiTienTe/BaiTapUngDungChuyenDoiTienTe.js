
        function Convert1() {
            Sotien = parseInt(document.getElementById('Amount').value);
            DonviDen = document.getElementById('To').value;
            DonviDi = document.getElementById('From').value;
            if ((DonviDi=="USD")&&(DonviDen=="VND"))
            {
               ketqua = Sotien*23170;
               console.log("ketqua= "+ketqua);
            }
            else if ((DonviDi=="VND")&&(DonviDen=="USD")) {
                ketqua = Sotien/23170;
                console.log("ketqua= "+ketqua);
            }
            else{
                ketqua=Sotien;
            }
            console.log(ketqua);    
            final = ketqua.toFixed(2);
            console.log(final);
            document.getElementById('result').innerHTML = ("Result: " + final +" "+ DonviDen);
        } 
        



     