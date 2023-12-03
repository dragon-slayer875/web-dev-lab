const navBarElems = Array.from(document.querySelector(".navbar").children);

navBarElems.forEach((elem) => {
    elem.addEventListener("click", () => {
        navBarElems.forEach((elem) => {
            elem.classList.remove("active");
        });
        elem.classList.add("active");
        location.href = `${elem.id}.html`;
    });
});
