


function playSound(event) {
    // Look for a match audio selector with ES6 temple string ${}
    // to get the custom attribute data-key 
    // i.e.: 
    // select audio[data-key="65"] from: 
    // <audio data-key="65" src="sounds/clap.wav"></audio>
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    // Get the key that's playing to add the .playing class animation
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    
    // stop if there's no key found | null
    if(!audio) return;
    // rewind to the start
    audio.currentTime = 0; 
    audio.play();

    // add animation to the playing key: add/remove/toggle
    key.classList.add('playing');
};
    
function removeTransition(event) {
    // skip it if it's not a transform
    // if (event.propertyName !== 'transform') return;
    this.classList.remove('playing');        
};

// Get all the keys:
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// Listening to key up events
window.addEventListener('keydown', playSound);
