const footerYear = document.querySelectorAll(".year");
footerYear.forEach(copyright => {
    copyright.innerHTML = new Date().getFullYear();
});

const date = document.querySelectorAll(".date");
date.forEach(modify => {
    modify.innerHTML = new Date(document.lastModified);
});