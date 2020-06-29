const cards = document.querySelectorAll(".course")
const modalOvarley = document.querySelector(".modal-overlay")
const modalContent = document.querySelector(".modal__content")
const iframeElement = document.querySelector("iframe")

const closeModalButton = document.querySelector("#close-modal")
const maximizeModalButton = document.querySelector("#maximize-modal")


for (const card of cards) {
  card.addEventListener("click", function() {
    modalOvarley.classList.add("active")
    iframeElement.src = `https://rocketseat.com.br/${card.id}`
  })
}

closeModalButton.addEventListener("click", function(){
  modalOvarley.classList.remove("active")
  if(modalContent.classList.contains("maximize")){
    modalContent.classList.remove("maximize")
  }
})

maximizeModalButton.addEventListener("click", function(){
  modalContent.classList.add("maximize")
})
