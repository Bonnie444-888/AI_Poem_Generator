function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings:
      "Give me a second while I generate a beautiful peace of poetry for you",
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
