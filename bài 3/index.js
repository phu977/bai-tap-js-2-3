function quydoitien() {
    var soTienUsd = document.getElementById("so-tien-usd").value*1;
    var USDmacdinh = 23500;
    var quydoi = soTienUsd * USDmacdinh ;
    var tienquydoi = new Intl.NumberFormat('vn-VN').format(quydoi)
    document.getElementById("result").innerHTML = `<p>Tiền quy đổi: ${tienquydoi} VND</p>`
}