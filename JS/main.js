/**
 * DOM
 */

var username = document.getElementById("txtUsername");
console.log(username.value);

document.getElementById("btnLogin").onclick = function () {
  // var username = document.getElementById("txtUsername");
  var username = document.getElementById("txtUsername").value;
  var password = document.getElementById("txtPassword").value;
  // console.log(username.value);
  // console.log(password);
  var ketQua = "Username là :" + username + "<br />Password là :" + password;
  document.getElementById("footerLogin").innerHTML = ketQua;
};

/**
 * cộng 2 số
 */

document.getElementById("btnCong").onclick = function () {
  /**
   * lấy value số 1
   * lấy value số 2
   * tổng => show tổng
   */
  var number_1 = document.getElementById("txtNumber1").value * 1;
  var number_2 = document.getElementById("txtNumber2").value * 1;
  var tong = number_1 + number_2;

  var ketQuaTong = "Kết Quả Tổng = " + tong;
  // console.log(ketQuaTong);

  //gán kết quả tổng ra thẻ div Thông Báo
  document.getElementById("thongBao").innerHTML = ketQuaTong;

  //style inline cho thẻ div #thông báo
  // document.getElementById("thongBao").style.color = "white";
  // document.getElementById("thongBao").style.backgroundColor = "black";
  // document.getElementById("thongBao").style.fontSize = "30px";
  // document.getElementById("thongBao").style.textAlign = "center";

  // Style add class cho the div#thongBao
  // document.getElementById("thongBao").className = "showInfo";
  document.getElementById("thongBao").classList.add("showInfo");
};

/**
 * Thay đổi ảnh, Sáng Đèn on off.
 */
document.getElementById("btnOff").onclick = function () {
  document.getElementById("imgPic").src = "./images/pic_bulboff.gif";
};

document.getElementById("btnOn").onclick = function () {
  document.getElementById("imgPic").src = "./images/pic_bulbon.gif";
};

document.getElementById("btnDis").onclick = function () {
  // Khóa nút On
  document.getElementById("btnOn").disabled = true;
};

document.getElementById("btnEna").onclick = function () {
  // Mở Khóa nút On
  document.getElementById("btnOn").disabled = false;
};

document.getElementById;

/**
 * Tính tiền tip
 * -Đầu vào
 *  -tongTienThanhToan
 *  -phần trăm tip
 *  -số người chia tip
 *
 * -Xử lý: 100 => 30/100 /3 ==> 10
 *      tongTienThanhToan * phần trăm /100 /soNguoi*/

document.getElementById("btnTinh").onclick = function () {
  var tongTienThanhToan = document.getElementById("txtTongTien").value;
  var phanTramTip = document.getElementById("phanTramTip").value;
  var soNguoiChia = document.getElementById("soNguoi").value;

  var total = (tongTienThanhToan * phanTramTip) / 100 / soNguoiChia;
  // cách 1
  // var ketQua = "Mỗi người tip "+total +"$";
  // cách 2
  // var ketQua = "<div>Mỗi người tip "+total +"$</div>";
  // cách 3
  var ketQua = "<div>";
  ketQua += total;
  ketQua += "$</div>"

  document.getElementById("footerTienTip").innerHTML = ketQua;
};

document.getElementById("btnCreate").onclick = function () {
  // console.log("is clicked")
  // tạo thẻ p
  // var tabP = "<p>Hello Dat</P>";
  // document.getElementById("divContent").innerHTML = tabP;

  // cách 2
  // clear trước để khỏi tạo
  document.getElementById("divContent").innerHTML = "";

  var tabP = document.createElement("p");
  tabP.innerHTML = "Hello Dat";
  document.getElementById("divContent").appendChild(tabP);
};

/**
 * tính trung bình vé Phim
 */

document.getElementById("btnTinhLoiNhuan").onclick = function(){
// Dom tới các thẻ input lấy value

var tenPhim = document.getElementById("txtTenPhim").value;
var PriceAdult = document.getElementById("txtPriceAdult").value;
var PriceKid =  document.getElementById("txtPriceKid").value;
var AdultTicket= document.getElementById("txtAdultTicket").value;
var KidTicket = document.getElementById("txtKidTicket").value;

console.log(tenPhim, PriceAdult, PriceKid, AdultTicket, KidTicket );

// Xử Lý
// Tính Doanh thu
var doanhThu = PriceAdult * AdultTicket + PriceKid * KidTicket;
//tính từ thiện
var tuThien = (doanhThu * 10) /100;
//tính lợi nhuận
var loiNhuan = doanhThu - tuThien;

// format VND
var currentFormat = new Intl.NumberFormat('vn-VN');
var tienVND = currentFormat.format(loiNhuan);

console.log(doanhThu, tuThien , loiNhuan);

console.log(tienVND +" VND")
};

