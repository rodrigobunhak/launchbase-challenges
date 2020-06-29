const cards = document.querySelectorAll(".courses .course")
const course = document.querySelector(".center .course")

for (const card of cards) {
  card.addEventListener("click", function() {
    window.location.href = `/course?id=${card.id}`
  })
}

course.addEventListener("click", function() {
  const url = course.querySelector("a").textContent
  window.location.href = `${url}`
})