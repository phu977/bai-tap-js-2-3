function tinhtrungbinh() {
    var sothu1 = document.getElementById("nhap-so-thu-1").value * 1;
    var sothu2 = document.getElementById("nhap-so-thu-2").value * 1;
    var sothu3 = document.getElementById("nhap-so-thu-3").value * 1;
    var sothu4 = document.getElementById("nhap-so-thu-4").value * 1;
    var sothu5 = document.getElementById("nhap-so-thu-5").value * 1;
    var TB = (sothu1 + sothu2 + sothu3 + sothu4 + sothu5) / 5;
    document.getElementById("result").innerHTML = `<p class='py-5 text-primary'>Gía trị trung bình: ${TB.toLocaleString()}</p>`;
    
}