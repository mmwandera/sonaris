// Create a new SpeechSynthesisUtterance object to represent a speech request
let speech = new SpeechSynthesisUtterance();

// Initialize an empty array to store available voices
let voices = [];

// Select the <select> element from the document
let voiceSelect = document.querySelector('select');

// When the list of available voices changes, update the 'voices' array and set the default voice to the first one
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    // Populate the dropdown list with available voices
    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)))
}

// When a different voice is selected from the dropdown, update the 'speech' object with the chosen voice
voiceSelect.addEventListener('change', (e) => {
    speech.voice = voices[voiceSelect.value];
})

// When the button is clicked, set the 'text' property of the 'speech' object to the content of the <textarea>, and speak the text using the selected voice
document.querySelector('button').addEventListener('click', ()=>{
    speech.text = document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech);
})