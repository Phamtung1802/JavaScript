    function hienthidiem(TinhDiem) {
            let DiemLy = document.getElementById('DiemLy').value;
            let DiemHoa = document.getElementById('DiemHoa').value;
            let DiemSinh = document.getElementById('DiemSinh').value;
            console.log(DiemLy, DiemHoa, DiemSinh);
            let TongDiem = parseInt(DiemSinh) +  parseInt(DiemLy) +  parseInt(DiemHoa);
            let TrungBinh = (parseInt(DiemSinh) +  parseInt(DiemLy) +  parseInt(DiemHoa))/3;
            let TrungBinhTron= TrungBinh.toFixed(2);
         
            document.write("Tổng Điểm: " +TongDiem+ "<br>");
            document.write("Điểm Trung Bình: " +TrungBinhTron);
            return false;
        } 
    function quydoi(TinhNhietDo) {
            let DoC = document.getElementById('DoC').value;
            let DoF = (DoC* 1.8)+ 32;
            document.getElementById("NhietDoQuyDoi").innerHTML=(DoF);
            return false;
          
       
        } 

    function DThinhtron() {
                let BanKinh = document.getElementById('BanKinh').value;
                console.log(BanKinh);
                let DienTich=(BanKinh*BanKinh*3.14);
                console.log(DienTich);
                document.getElementById('HinhTron').innerHTML=(DienTich);
                return false;
            
           
        } 
    
        function CVhinhtron() {
            let DuongKinh = document.getElementById('DuongKinh').value;
            console.log(DuongKinh);
            let ChuVi=(DuongKinh*3.14);
            console.log(ChuVi);
            document.getElementById('ChuVi').innerHTML=(ChuVi);
            return false;
        
       
    } 


     