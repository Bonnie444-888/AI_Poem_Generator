function displayPoem(response) {
  console.log("Poem generated");

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let promptInput = document.querySelector("#user-prompt");
  let apiKey = "c7bafob10t4b2f7e01b7bfdba1fa34ec";
  let context =
    "You are a romantic Poem expert and love to write short poems. Your mission is to generate a 4 line in basic HTML.Do NOT include the html title at the top of the poem. Make sure to follow the user instructions. Sign the poem with 'Shecodes AI' inside a <strong> element";
  let prompt = `User instructions: Generate a poem about ${promptInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
