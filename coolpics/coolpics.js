const menuButton = document.querySelector("#menu-button");
const menu = document.querySelector("#menu");

menuButton.addEventListener("click", () => {
    menu.classList.toggle("hide");
    menu.classList.toggle("show");
});


const gallery = document.querySelector(".gallery");
const modal = document.querySelector("dialog");
const modalImage = modal.querySelector("img");
const closeButton = modal.querySelector(".close-viewer");


gallery.addEventListener("click", openModal);

function openModal(e) {

    const img = e.target;

    if (img.tagName !== "IMG") {
        return;
    }

    const alt = img.getAttribute("alt");

    modalImage.src = "images/norris-full.jpg";
    modalImage.alt = alt;

    modal.showModal();
}


closeButton.addEventListener("click", () => {
    modal.close();
});


modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.close();
    }
});


document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        modal.close();
    }
});