let guestName=prompt("İsminizi Girin!: ")
let printName=document.querySelector("span#myName")
if (guestName) {
    printName.innerHTML=guestName
}
else{
    alert("Boş bırakılamaz. Lütfen adınızı giriniz.")
    location.reload();
}

function showTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let days = [
        "Pazar",
        "Pazartesi",
        "Salı",
        "Çarşamba",
        "Perşembe",
        "Cuma",
        "Cumartesi",
      ];
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('myClock').innerHTML =  h + ":" + m + ":" + s + days[today.getDay()];
    setTimeout(showTime, 1000);

  }

  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
  showTime()