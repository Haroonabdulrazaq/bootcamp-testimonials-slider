const prev = document.getElementById("prev");
const next = document.getElementById("next");
const tanyaTestimony = document.getElementById("tanya-testimony");
const tanyaAuthor = document.getElementById("tanya-author");
const tanyaImg = document.getElementById("tanya-img");

prev.addEventListener("click", (event) => {
  tanyaTestimony.textContent =
    " If you want to lay the best foundation best possible I'd recommend you take the course. The depth the instrcto go through is incredible,I now feel so confident about starting up as a professional Developer.";
  tanyaAuthor.innerHTML =
    " John Tarkpor <span >Junior Front-End Developer</span>";
  tanyaImg.classList.add("disappear");
});

next.addEventListener("click", (event) => {});

// tanyaTestimony.classList.add("disappear");
// tanyaAuthor.classList.add("disappear");
// tanyaImg.classList.add("disappear");
