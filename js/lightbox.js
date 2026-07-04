const zoomImages = document.querySelectorAll(".zoomable");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxClose = document.getElementById("lightbox-close");

zoomImages.forEach((image) => {
    image.addEventListener("click", () => {
        lightboxImg.src = image.src;
        lightboxImg.alt = image.alt;
        lightbox.classList.add("active");
    });
});

lightboxClose.addEventListener("click", () => {
    lightbox.classList.remove("active");
});

lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
        lightbox.classList.remove("active");
    }
});