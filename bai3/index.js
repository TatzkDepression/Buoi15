function submit() {
  var hoten = document.getElementById("hovaten").value;
  var thuNhap1Nam = document.getElementById("thuNhapNam").value * 1;
  var phuThuoc = document.getElementById("nguoiPhuThuoc").value * 1;
  var thuNhapChiuThue = thuNhap1Nam - 4000000 - phuThuoc * 1600000;

  function thueduoi60(thuNhapChiuThue) {
    var duoi60 = 0.05;
    if (thuNhapChiuThue <= 60000000) {
      return thuNhapChiuThue * thueduoi60;
    } else {
      return 60 * duoi60;
    }
  }
  function thueden120(thuNhapChiuThue) {
    var thuetu120 = 0.1;
    if (thuNhapChiuThue < 60000000) {
      return 0;
    } else if (thuNhapChiuThue <= 120000000) {
      return (thuNhapChiuThue - 60000000) * thuetu120;
    } else {
      return 60000000 * thuetu120;
    }
  }
  function thuetu210(thuNhapChiuThue) {
    var thuetu210 = 0.15;
    if (thuNhapChiuThue <= 120000000) {
      return 0;
    } else if (thuNhapChiuThue <= 210000000) {
      return (thuNhapChiuThue - 120000000) * thuetu210;
    } else {
      return 90000000 * thuetu210;
    }
  }
  function thuetu384(thuNhapChiuThue) {
    var thuetu384 = 0.2;
    if (thuNhapChiuThue <= 210000000) {
      return 0;
    } else if (thuNhapChiuThue <= 384000000) {
      return (thuNhapChiuThue - 210000000) * thuetu384;
    } else {
      return 174000000 * thuetu384;
    }
  }
  function thuetu624(thuNhapChiuThue) {
    var thuetu624 = 0.25;
    if (thuNhapChiuThue <= 384000000) {
      return 0;
    } else if (thuNhapChiuThue <= 624000000) {
      return (thuNhapChiuThue - 384000000) * thuetu624;
    } else {
      return 240000000 * thuetu624;
    }
  }
  function thuetu960(thuNhapChiuThue) {
    var thuetu960 = 0.3;
    if (thuNhapChiuThue <= 624000000) {
      return 0;
    } else if (thuNhapChiuThue <= 960000000) {
      return (thuNhapChiuThue - 624000000) * thuetu960;
    } else {
      return 336000000 * thuetu960;
    }
  }
  function thuetren960(thuNhapChiuThue) {
    var thuetren960 = 0.35;
    if (thuNhapChiuThue <= 960000000) {
      return 0;
    } else {
      return (thuNhapChiuThue - 960000000) * thuetren960;
    }
  }
  var thueDuoi60 = thueduoi60(thuNhapChiuThue);
  var thueDen120 = thueden120(thuNhapChiuThue);
  var thueTu210 = thuetu210(thuNhapChiuThue);
  var thueTu384 = thuetu384(thuNhapChiuThue);
  var thueTu624 = thuetu624(thuNhapChiuThue);
  var thueTu960 = thuetu960(thuNhapChiuThue);
  var thueTren960 = thuetren960(thuNhapChiuThue);
  var tienThue =
    thueDuoi60 +
    thueDen120 +
    thueTu210 +
    thueTu384 +
    thueTu624 +
    thueTu960 +
    thueTren960;
  document.getElementById("result").innerHTML = `
  <h1>${hoten}</h1>
  <h1>Tổng tiền thuế: ${tienThue.toLocaleString()}</h1>`;
}
