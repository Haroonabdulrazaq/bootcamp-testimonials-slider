const prev = document.getElementById("prev");
const next = document.getElementById("next");
const tanya = document.getElementById("tanya-wrapper");
const john = document.getElementById("john-wrapper");

prev.addEventListener("click", (event) => {
  tanya.classList.remove("tanya-wrapper");
  tanya.classList.add("disappear");

  john.classList.remove("disappear");
  john.classList.add("john-wrapper");
});

next.addEventListener("click", (event) => {
  tanya.classList.add("tanya-wrapper");
  tanya.classList.remove("disappear");

  john.classList.add("disappear");
  john.classList.remove("john-wrapper");
});
