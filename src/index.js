function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let promptInput = document.querySelector("#user-prompt");
  let apiKey = "c7bafob10t4b2f7e01b7bfdba1fa34ec";
  let context =
    "You are a romantic Poem expert and love to write short poems. Your mission is to generate a 4 line in basic HTML. Seperate the lines using a <br /> element. Please Do NOT ever include the html title at the top of the poem. Make sure to follow the user instructions. Sign the poem with 'Shecodes AI' inside a <strong> element";
  let prompt = `User instructions: Generate a poem about ${promptInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">I am Generating your poem about ${promptInput.value} give me a second ⏳...</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
