// This is the script file for this project written in Vanilla Js.
// This is the HTML element captured in JS constants for further DOM manipulations...
const buttons = document.querySelectorAll(".ripple");

// This is for button and its ripple effect
buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    // This code will the position of click on the button from viewport
    const x = e.clientX;
    const y = e.clientY;

    // This code will calculate the position of the button from the viewport...
    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    // This code will calculate the position of click from buttons top and left...
    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    // This will add the ripples dynamically in button on click...
    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = yInside + "px";
    circle.style.left = xInside + "px";

    this.appendChild(circle);

    setTimeout(()=> circle.remove(), 500);
  });
});
