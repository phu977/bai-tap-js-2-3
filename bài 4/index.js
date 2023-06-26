function tinhdientichchuvi() {
    var chieudai = document.getElementById("chieu-dai").value * 1;
    var chieurong = document.getElementById("chieu-rong").value * 1;
    var dientich = chieudai * chieurong;
    var chuvi = (chieudai + chieurong) * 2;
    document.getElementById("result").innerHTML = `<p class='py-5 text-primary'>Diện tích : ${dientich.toLocaleString()}; chu vi: ${chuvi.toLocaleString()}</p>`;
}