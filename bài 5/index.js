function tinhtong() {
    var so2chuso = document.getElementById("nhap-so").value * 1;
    var donvi = so2chuso % 10;
    var chuc = Math.floor(so2chuso / 10);
    var tong = chuc + donvi;
    document.getElementById("result").innerHTML = `<p class='py-5 text-primary'>${tong}</p>`;
}