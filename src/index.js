let formSubmit = document.querySelector("#submit-form");
formSubmit.addEventListener("submit", generatePoem);

let topicInput = document.querySelector("#poem-topic");
let h3 = document.querySelector("#title");

function generatePoem(event) {
  event.preventDefault();
  h3.classList.add("loading");
  h3.innerHTML = `Generating poem about ${topicInput.value}...⌛`;
  let poem = document.querySelector("#poem");
  poem.innerHTML = "";

  let prompt = `Generate a short rhyming poem about ${topicInput.value}`;
  let context =
    "Please generate a poem with a minimum of 4 lines and maximum of 6 lines about the given topic. Please structure your answer in basic HTML format: <p>line 1</p> <p>line 2</p> <p>line 3</p> <p>line 4</p>.";
  let apiKey = "b00377005017b9aacft302b5od1aa426";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

function displayPoem(response) {
  h3.classList.remove("loading");
  h3.innerHTML = `Generated Poem: <span class="topic">${topicInput.value}</span>`;

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 60,
  });
}
