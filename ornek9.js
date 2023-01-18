let number = 0;
let sayi = 1;
let dizi = new Array();
function arttir() {
  number = number + 1;
  var li = document.createElement("li");
  li.setAttribute("id", "liler");
  var alan = document.querySelector("#alan");
  var sil = document.createElement("button");
  var duzelt = document.createElement("button");
  sil.setAttribute("id", "sil");
  duzelt.setAttribute("id", "duzelt");
  sil.innerHTML =
    "<img id='res2' style='width: 25px; height: 25px'src='resimler/sil.png'>";
  duzelt.innerHTML =
    "<img id='res1' style='width: 25px; height: 25px' src='resimler/duzenle.png'>";
  var text = document.createTextNode("ekle_" + number);
  li.appendChild(text);
  li.appendChild(duzelt);
  li.appendChild(sil);
  alan.appendChild(li);
  duzelt.addEventListener("click", function () {
    li.contentEditable = "true";
  });
  sil.addEventListener("click", function () {
    alan.removeChild(li);
  });
  sayi = 1;
}
function azalt() {
  number = number - 1;
  var li = document.createElement("li");
  li.setAttribute("id", "liler");
  var alan = document.querySelector("#alan");
  var sil = document.createElement("button");
  var duzelt = document.createElement("button");
  sil.setAttribute("id", "sil");
  duzelt.setAttribute("id", "duzelt");
  sil.innerHTML =
    "<img id='res2' style='width: 25px; height: 25px'src='resimler/sil.png'>";
  duzelt.innerHTML =
    "<img id='res1' style='width: 25px; height: 25px' src='resimler/duzenle.png'>";
  var text = document.createTextNode("çıkar_" + number);
  li.appendChild(text);
  li.appendChild(duzelt);
  li.appendChild(sil);
  alan.appendChild(li);
  duzelt.addEventListener("click", function () {
    li.contentEditable = "true";
  });
  sil.addEventListener("click", function () {
    alan.removeChild(li);
  });
  sayi = 1;
}
function reset() {
  number = 0;
  var li = document.createElement("li");
  li.setAttribute("id", "liler");
  var alan = document.querySelector("#alan");
  var sil = document.createElement("button");
  var duzelt = document.createElement("button");
  sil.setAttribute("id", "sil");
  duzelt.setAttribute("id", "duzelt");
  sil.innerHTML =
    "<img id='res2' style='width: 25px; height: 25px'src='resimler/sil.png'>";
  duzelt.innerHTML =
    "<img id='res1' style='width: 25px; height: 25px' src='resimler/duzenle.png'>";
  var text = document.createTextNode("reset_" + number);
  li.appendChild(text);
  li.appendChild(duzelt);
  li.appendChild(sil);
  alan.appendChild(li);
  duzelt.addEventListener("click", function () {
    li.contentEditable = "true";
  });
  sil.addEventListener("click", function () {
    alan.removeChild(li);
  });
  sayi = 1;
}
function temizle() {
  number = 0;
  sayi = 1;
  let li = document.querySelectorAll("ul li");
  for (let i = 0; i < li.length; i++) {
    alan.removeChild(li[i]);
  }
}
window.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("alan").addEventListener("input", function () {
    sayi = 1;
  });
  const girilen = document.querySelector("#ara");
  let yenideger;
  let mevcut;
  girilen.addEventListener("keyup", function () {
    let li = document.querySelectorAll("ul li");
    if (sayi == 1) {
      for (let l = 0; l < li.length; l++) {
        dizi[l] = li[l].innerHTML;
        sayi = 2;
      }
    } else {
      for (let l = 0; l < li.length; l++) {
        li[l].innerHTML = dizi[l];
      }
    }
    let data = this.value;
    yenideger =
      "<span style='color:red; background-color:white'>" + data + "</span>";
    for (let i = 0; i < li.length; i++) {
      if (li[i].innerHTML.indexOf(data) > -1) {
        li[i].style.display = "";
        mevcut = li[i].innerText;
        li[i].innerHTML = mevcut.replace(data, yenideger);
      } else {
        li[i].style.display = "none";
      }
    }
  });
});
