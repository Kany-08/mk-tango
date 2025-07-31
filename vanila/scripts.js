const button = document.querySelector(".first-screen__action");
const modal = document.querySelector(".modal");

const closeBtn = document.createElement("span");
closeBtn.textContent = "❌";
closeBtn.style.cursor = "pointer";

modal.append(closeBtn);

button.addEventListener("click", (e) => {
  modal.classList.add("modal_active");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("modal_active");
});
