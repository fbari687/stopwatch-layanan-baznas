// Mendapatkan elemen-elemen checkbox
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    changeParentClass(checkbox);
  });
});

function changeParentClass(checkbox) {
  const parent = checkbox.parentNode;

  if (checkbox.checked) {
    parent.classList.add("active");
  } else {
    parent.classList.remove("active");
  }
}

// Ambil elemen yang diperlukan
let modal = document.getElementById("modalSelesai");
let btn = document.getElementById("selesai");
let btnBlm = document.getElementsByClassName("belumBtn")[0];
let btnYa = document.getElementsByClassName("iyaBtn")[0];

// Ketika tombol diklik, buka modal
btn.addEventListener("click", function () {
  modal.style.display = "flex";
  modal.children[0].style.display = "flex";
});

btnYa.addEventListener("click", function () {
  modal.children[0].style.display = "none";
  modal.children[1].style.display = "flex";
});

btnBlm.addEventListener("click", function () {
  modal.style.display = "none";
});

// Jika pengguna mengklik di luar area modal, tutup modal
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    modal.children[1].style.display = "none";
  }
});
