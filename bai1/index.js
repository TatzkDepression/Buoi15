function ketQua() {
  var chuan = document.getElementById("diemChuan").value * 1;
  var toan = document.getElementById("diemToan").value * 1;
  var van = document.getElementById("diemVan").value * 1;
  var anh = document.getElementById("diemAnh").value * 1;
  var khuvuc = document.getElementById("khuVuc").value;
  var doituong = document.getElementById("doiTuong").value;
  var tongDiem = van + toan + anh;
  var diemDoiTuong = 0;

  if (khuvuc === "A") {
    tongDiem += 2;
  } else if (khuvuc === "B") {
    tongDiem += 1;
  } else if (khuvuc === "C") {
    tongDiem += 0.5;
  }

  if (doituong == 1) {
    diemDoiTuong = 2.5;
  } else if (doituong == 2) {
    diemDoiTuong = 1.5;
  } else if (doituong == 3) {
    diemDoiTuong = 1;
  }
  var diemTongket = tongDiem + diemDoiTuong;

  if (van == 0 || toan == 0 || anh == 0) {
    document.getElementById("result").innerHTML = `
    <h2 class="p-2">Bạn Đã rớt do có điểm bằng 0</h2>`;
  } else if (diemTongket >= chuan) {
    document.getElementById("result").innerHTML = `
  <h2 class="p-2">Bạn đã Đậu với số điểm: ${diemTongket}</h2>`;
  } else {
    document.getElementById("result").innerHTML = `
    <h2 class="p-2">Bạn đã rớt với số điểm: ${diemTongket}</h2>`;
  }
}
