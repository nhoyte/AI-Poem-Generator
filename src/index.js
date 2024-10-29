let formSubmit = document.querySelector("#submit-form");
formSubmit.addEventListener("submit", generateSong);

function generateSong(event) {
  event.preventDefault();

  new Typewriter("#song", {
    strings: "Song lyrics will be inserted here once we integrate with AI API!",
    autoStart: true,
  });
}
