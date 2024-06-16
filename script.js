const text = document.getElementById("text");
const playBtn = document.querySelector(".fa-play");
const pauseBtn = document.querySelector(".fa-pause");
const submitBtn = document.getElementById("btn");

let audioMessage;

submitBtn.addEventListener("click", () => {
  // Set the text
  audioMessage.text = text.value;

  // Speek the text
  window.speechSynthesis.speak(audioMessage);
});

playBtn.addEventListener("click", () => {
  pauseBtn.style.display = "block";
  playBtn.style.display = "none";

  // Play the audio if it is pause
  if (speechSynthesis.pauseBtn) {
    speechSynthesis.play();
  }
});
pauseBtn.addEventListener("click", () => {
  playBtn.style.display = "block";
  pauseBtn.style.display = "none";

  // Pause if speeking
  speechSynthesis.speaking ? speechSynthesis.pause() : "";
});

window.onload = () => {
  playBtn.style.display = "none";

  if ("speechSynthesis" in window) {
    audioMessage = new SpeechSynthesisUtterance();
  } else {
    alert("Speech Synthesis is not supported");
  }
};
