function loaikhach() {
  var khachhang = document.getElementById("khachhang").value;
  if (khachhang == "cn") {
    document.getElementById("bangTinh").style.display = "block";
    document.getElementById("makhachhang").style.display = "block";
    document.getElementById("soconnect").style.display = "none";
  }
  if (khachhang == "dn") {
    document.getElementById("bangTinh").style.display = "block";
    document.getElementById("makhachhang").style.display = "block";
    document.getElementById("soconnect").style.display = "block";
  }
}
function tinhtien() {
  var khachhang = document.getElementById("khachhang").value;
  var serikhach = document.getElementById("makhachhang").value;
  var phixulyhoadon = 0;
  var phidichvucoban = 0;
  var thuekenhcaocap = 0;
  var kenhcaocap = document.getElementById("kenhcaocap").value * 1;

  function tienCap(khachhang) {
    if (khachhang == "cn") {
      phixulyhoadon = 4.5;
      phidichvucoban = 20.5;
      thuekenhcaocap = 7.5;
      return phixulyhoadon + phidichvucoban + thuekenhcaocap * kenhcaocap;
    } else if (khachhang == "dn") {
      phixulyhoadon = 15;
      thuekenhcaocap = 50;
      var soconnet = document.getElementById("soketnoi").value * 1;
      if (soconnet <= 10) {
        phidichvucoban = 75;
      } else {
        phidichvucoban = 75 + (soconnet - 10) * 5;
      }
      return phixulyhoadon + phidichvucoban + thuekenhcaocap * kenhcaocap;
    }
  }

  var tinhtien = tienCap(khachhang);
  document.getElementById("result").innerHTML = `
  <h1>Mã Khách hàng:${serikhach}</h1>
  <h1>Tiền Cáp Phải Trả: ${tinhtien}$</h1>`;
}
