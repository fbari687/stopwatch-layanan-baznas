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
