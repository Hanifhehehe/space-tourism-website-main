const scrollContainer = document.querySelectorAll("section").length;

for (var i = 1; i < scrollContainer; i++) {
    document.querySelectorAll("section")[i].addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
    });
}

document.querySelector("nav").addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});