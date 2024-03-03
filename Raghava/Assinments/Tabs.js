let aboutEl = document.getElementById("aboutTab");
let timeToVisitEl = document.getElementById("timeToVisitTab");
let attractonsEl = document.getElementById("attractionsTab");

let aboutButtonEl = document.getElementById("aboutButton");
let timeToVisitButtonEl = document.getElementById("timeToVisitButton");
let attractionsButtonEl = document.getElementById("attractionsButton");

timeToVisitEl.classList.add("d-none");
attractonsEl.classList.add("d-none");

function about() {
    timeToVisitEl.classList.add("d-none");
    attractonsEl.classList.add("d-none");
    aboutEl.classList.remove("d-none");

    timeToVisitButtonEl.classList.remove("selected-button");
    attractionsButtonEl.classList.remove("selected-button");
    aboutButtonEl.classList.add("selected-button");
}

function timeToVisit() {
    timeToVisitEl.classList.remove("d-none");
    attractonsEl.classList.add('d-none');
    aboutEl.classList.add("d-none");

    timeToVisitButtonEl.classList.add("selected-button");
    attractionsButtonEl.classList.remove("selected-button");
    aboutButtonEl.classList.remove("selected-button");
}

function attractions() {
    timeToVisitEl.classList.add("d-none");
    attractonsEl.classList.remove('d-none');
    aboutEl.classList.add("d-none");

    timeToVisitButtonEl.classList.remove("selected-button");
    attractionsButtonEl.classList.add("selected-button");
    aboutButtonEl.classList.remove("selected-button");
}
