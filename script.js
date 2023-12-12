const navBarElems = Array.from(document.querySelector(".navbar").children);

navBarElems.forEach((elem) => {
    elem.addEventListener("click", () => {
        navBarElems.forEach((elem) => {
            elem.classList.remove("nav-active");
        });
        elem.classList.add("nav-active");
        location.href = `${elem.id}.html`;
    });
});
