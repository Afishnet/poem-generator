function generatePoem(event) {
  event.preventDefault();
  new Typewriter("#poem", {
    strings: "This raining",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#generator-form");
poemFormElement.addEventListener("submit", generatePoem);
