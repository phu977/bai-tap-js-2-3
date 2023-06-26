function tinhluong(){
    var luong1Ngày = document.getElementById("luong-1-ngay").value*1;
    var soNgayLam = document.getElementById("so-ngay-lam").value*1;
    var tienLuong = 0;
    tienLuong = soNgayLam *luong1Ngày;
    document.getElementById("result").innerHTML = `<p class='py-5 text-primary'>Tiền lương: ${tienLuong.toLocaleString()} VND</p>`;
}