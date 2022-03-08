const progressSection = document.querySelector(".progress-section"),
    progressBar = document.querySelectorAll(".progress-bar"),
    counterSection = document.querySelector(".counter-section"),
    counterValue = document.querySelectorAll(".counter-section h3");

ScrollOut({
    targets: ".progress-section,.counter-section",
});
window.addEventListener("scroll", () => {
    // Progress
    if (progressSection.dataset.scroll == "in") {
        progressBar.forEach((el) => {
            let valueNow = el.getAttribute("aria-valuenow");
            let counterSpan = el.parentElement.parentElement.querySelector(
                ".progress-value span"
            );
            el.style.width = valueNow + "%";
            let counterOne = setInterval(() => {
                if (Number(counterSpan.textContent) < valueNow) {
                    counterSpan.innerHTML = Number(counterSpan.textContent) + 1;
                } else {
                    clearInterval(counterOne);
                }
            }, 500);
        });
    } else {
        progressBar.forEach((el) => {
            el.style.width = 0 + "%";
            el.parentElement.parentElement.querySelector(
                ".progress-value span"
            ).innerHTML = 0;
        });
    }
    // Counter
    if (counterSection.dataset.scroll == "in") {
        counterValue.forEach((el) => {
            let counterTwo = setInterval(() => {
                if (Number(el.innerText) < el.dataset.counter) {
                    el.innerText = Number(el.innerText) + 5;
                } else {
                    clearInterval(counterTwo);
                }
            }, 500);
        });
    } else {
        counterValue.forEach((el) => {
            el.innerText = 0;
        });
    }
});
// Portfolio
let filterListItems = document.querySelectorAll(".list-group li"),
    filtersImages = document.querySelectorAll(".filterd-images a");

filterListItems.forEach((list) => {
    list.addEventListener("click", () => {
        document.querySelector(".list-group li.active").classList.remove("active");
        list.classList.add("active")
        let filtedValue = list.dataset.filter;
        filtersImages.forEach(image => {
            if (image.classList.contains(filtedValue)) {
                image.classList.remove("hidden")
                image.classList.add("active")
            } else {
                image.classList.remove("active")
                image.classList.add("hidden")
            }
        })
    });
});
// light gallery
lightGallery(document.getElementById('lightgallery'), {

});