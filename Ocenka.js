const stars = document.querySelectorAll("#stars span");
let rating = 0;
stars.forEach(s => {
  s.addEventListener("mouseover", () => paint(parseInt(s.dataset.v)));
  s.addEventListener("click", () => {
    rating = parseInt(s.dataset.v);
    paint(rating);
    const labels = ["", "Ужасно 😞", "Плохо 😐", "Норм 🙂", "Хорошо 😊", "Шедевр! 🤩"];
    document.getElementById("result").textContent = labels[rating];
  });
});
document.getElementById("stars").addEventListener("mouseleave", () => paint(rating));
function paint(n) {
  stars.forEach((s, i) => s.classList.toggle("active", i < n));
}