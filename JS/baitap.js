/** Bài tập 1
 *  // ** Tính tiền lương nhân viên
    // * Đầu vào
    // - số tiền lương (Luong) 1 ngày
    // - số ngày (Date) nhân viên làm việc
    // * Xử lý
    // - Gán giá trị Lương 1 ngày 100.000đ (var ngayLuong)
    // - Cho nhập và Khai báo bao nhiêu ngày làm việc (var ngayLam)
    // - Tính var tienLuong lương là lấy số ngày đã khai báo nhân cho 1 ngày lương
    // * Đầu ra 
    // - show kết quả
 * 
*/

document.getElementById("btn__KetQua1").onclick = function () {
//   console.log("is clicked btnKetQua1");
  var ngayLuong = 100000;
  var ngayLam = document.getElementById("txtNgayLuong").value;
  var tienLuong = ngayLuong * ngayLam;

  // Show kết quả
  var pKetQua1 = "Tiền lương của bạn là :\t" + tienLuong + " VND";
  console.log(pKetQua1);
  document.getElementById("footer__BaiTap1").innerHTML = pKetQua1;
};

/** Bài tập 2
 *  // ** Tính giá trị trung bình của tổng 5 số
    // * Đầu vào
    // - nhập 5 số
    // 
    // * Xử lý
    // - Gán giá trị con số mà user nhập vào
    // - tổng 5 con số
    // - chia 5 cho tổng 5 con số để lấy giá trị trung bình
    // 
    // * Đầu ra 
    // - show kết quả
*/

document.getElementById("btn__KetQua2").onclick = function () {
//   console.log("is clicked btnKetQua2");
  var number_1 = document.getElementById("txtNumber__1").value * 1;
  var number_2 = document.getElementById("txtNumber__2").value * 1;
  var number_3 = document.getElementById("txtNumber__3").value * 1;
  var number_4 = document.getElementById("txtNumber__4").value * 1;
  var number_5 = document.getElementById("txtNumber__5").value * 1;
  var numberTong = number_1 + number_2 + number_3 + number_4 + number_5;
  var numberTB = numberTong / 5;

  // Show kết quả
  var pKetQua2 =
    "<p>Kết quả tổng 5 số là :" +
    numberTong +
    "<br/>Kết quả Trung Bình là: " +
    numberTB +
    " </p>";
  document.getElementById("footer__BaiTap2").innerHTML = pKetQua2;
};

/** Bài tập 3
 * // ** Tính chuyển đổi ngoại tệ
    // * Đầu vào
    // - nhập số USD
    // 
    // * Xử lý
    // - Gán giá trị con số mà user nhập vào 
    // - Nhân với giá trị 1USD = 23.500VND
    // 
    // * Đầu ra 
    // - Trả kết quả VND
*/

document.getElementById("btn__KetQua3").onclick = function () {
   // console.log("is clicked btnKetQua3");
   var VND = 23500;
   var amountUSD = document.getElementById("amountUSD").value;
   var amountVND = VND * amountUSD;
   //Convert
   var currentFormat = new Intl.NumberFormat('vn-VN');
   var tienVND = currentFormat.format(amountVND);
   //Tạo thẻ p + kết quả
   document.getElementById("footer__BaiTap3").innerHTML = "";
   var P3 = document.createElement("p");
   P3.innerHTML = "Chuyển Đổi \t" +amountUSD+ "$ <br>= " +amountVND+ " VND";
   document.getElementById("footer__BaiTap3").appendChild(P3);
};

/** Bài tập 4
 * // ** Tính Chu Vi và Diện Tích HCN
    // * Đầu vào
    // - nhập số đo Chiều Dài
    // - nhập số đo Chiều Rộng
    // * Xử lý
    // - Tính ra Chu Vi (Dài + Rộng)*2 của HCN
    // - Tính ra Diện tích của HCN
    // * Đầu ra 
    // - Trả kết quả 
*/

document.getElementById("btn__KetQua4").onclick = function () {
   // console.log("is clicked btnKetQua4");
   var chieuDai = document.getElementById("txtchieuDai").value;
   var chieuRong = document.getElementById("txtchieuRong").value;
   //Str to Int
   chieuDai = parseInt(chieuDai);
   chieuRong = parseInt(chieuRong);
   //Tính
   var chuVi = (chieuDai + chieuRong) *2
   var dienTich = chieuDai * chieuRong
   //Kết Quả
   var pKetQua4 = "Chu Vi của HCN là :\t" + chuVi + "<br /> Diện Tích của HCN là :\t" +dienTich;
   document.getElementById("footer__BaiTap4").innerHTML = pKetQua4;
};

/** Bài Tập 5
 * // ** Tính tổng 2 ký số
    // * Đầu vào
    // - nhập số n 
    // - 
    // * Xử lý
    // - Tách số hàng đơn vị: n%10
    // - Tách số hàng chục: Math.floor(n/10)
    // - 
    // * Đầu ra 
    // - Trả kết quả 
*/

document.getElementById("btn__KetQua5").onclick = function () {
   console.log("is clicked btnKetQua5");
   var n = document.getElementById("2__so").value;
   var hangDV = n % 10;
   var hangChuc = Math.floor(n / 10);
   var tongKySo = hangDV + hangChuc;
   var pKetQua5 = "Tổng 2 ký số là: " + tongKySo
   document.getElementById("footer__BaiTap5").innerHTML = pKetQua5;

};