var accordionButton = document.querySelectorAll(".accordion-button");
var blurContainer = document.getElementById("blur-container");

// Accordion function
accordionButton.forEach(button => {
    button.addEventListener("click", function() {
        button.classList.toggle("accordion-button-active");
    });
});

// Tooltip / Popover
var blurContainer = document.getElementById("blur-container");
var popup = document.getElementById("popup");

function toggle() {
    blurContainer.classList.toggle("active");
    popup.classList.toggle("active");
}