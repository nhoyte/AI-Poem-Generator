let formSubmit = document.querySelector("#submit-form");
formSubmit.addEventListener("submit", generatePoem);

function generatePoem(event) {
  event.preventDefault();

  let topicInput = document.querySelector("#poem-topic");
  let prompt = `Generate a short rhyming poem about ${topicInput.value}`;
  let context =
    "Please generate a poem with a minimum of 4 lines and maximum of 6 lines about the given topic. Please structure your answer in basic HTML format: <p>answer</p>.";
  let apiKey = "b00377005017b9aacft302b5od1aa426";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log(prompt);
  console.log(context);

  axios.get(apiUrl).then(displayPoem);
}

function displayPoem(response) {
  console.log(response.data);
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
  });
}
