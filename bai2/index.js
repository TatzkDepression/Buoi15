function giatienduoi50kw(soKW) {
  var duoi50kw = 500;
  if (soKW <= 50) {
    return soKW * duoi50kw;
  } else {
    return 50 * duoi50kw;
  }
}
function giatientren50kw(soKW) {
  var tren50kw = 650;
  if (soKW <= 50) {
    return 0;
  } else if (soKW <= 100) {
    return (soKW - 50) * tren50kw;
  } else {
    return 50 * tren50kw;
  }
}
function giatientren100kw(soKW) {
  var tren100kw = 850;
  if (soKW <= 100) {
    return 0;
  } else if (soKW <= 200) {
    return (soKW - 100) * tren100kw;
  } else {
    return 100 * tren100kw;
  }
}
function giatientren200kw(soKW) {
  var tren200kw = 1100;
  if (soKW <= 200) {
    return 0;
  } else if (soKW <= 350) {
    return (soKW - 200) * tren200kw;
  } else {
    return 150 * tren200kw;
  }
}
function giatientren350kw(soKW) {
  var tren350kw = 1300;
  if (soKW <= 350) {
    return 0;
  } else {
    return (soKW - 350) * tren350kw;
  }
}
function submit() {
  var hoten = document.getElementById("hovaten").value;
  var soKW = document.getElementById("so-kw").value * 1;
  var tiendienduoi50kw = giatienduoi50kw(soKW);
  var tiendientren50kw = giatientren50kw(soKW);
  var tiendientren100kw = giatientren100kw(soKW);
  var tiendientren200kw = giatientren200kw(soKW);
  var tiendientren350kw = giatientren350kw(soKW);

  var tongtiendien =
    tiendienduoi50kw +
    tiendientren50kw +
    tiendientren100kw +
    tiendientren200kw +
    tiendientren350kw;

  document.getElementById("result").innerHTML = `
  <h1>${hoten}</h1>
    <h1>Tiền điện phải trả: ${tongtiendien.toLocaleString()}</h1>`;
}
