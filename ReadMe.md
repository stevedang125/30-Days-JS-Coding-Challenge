### 30-Days-JS-Coding-Challenge
- Fun [projects](https://github.com/stevedang125/30-Days-JS-Coding-Challenge/tree/master/projects) in JavaScript && CSS :)

### 1. [Drum Kit](https://github.com/stevedang125/30-Days-JS-Coding-Challenge/tree/master/projects/01-Drum%20Kit):
- [Cheat Sheet](https://github.com/stevedang125/30-Days-JS-Coding-Challenge/blob/master/projects/01-Drum%20Kit/CheatSheet.md):
#### What I have learned:
1. (HTML) Custom attribute data-key, kbd tag, audio tag:
```
<link rel="stylesheet" href="./drum-kit.css">
```
```
<div data-key="65" class="key">
    <kbd>A</kbd>
    <span class="sound">slap</span>
</div>
<audio data-key="65" src="sounds/slap.wav"></audio>
```
```
<!-- JavaScript -->
<script src="./drum-kit.js"></script>
```

2. (JS) Reference to the custom attribute with querySelector:
```
// Look for a match audio selector with ES6 temple string ${}
    // to get the custom attribute data-key 
// i.e.: 
// select audio[data-key="65"] from: 
// <audio data-key="65" src="sounds/clap.wav"></audio>

const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);

// Get the key that's playing to add the .playing class animation
const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
```

3. (JS) Rewind the audio back to 0 for a faster run:
```
// rewind to the start
audio.currentTime = 0; 
audio.play();
```

4. (JS) Add/Remove styling class to an element:
```
// add animation to the playing key: add/remove/toggle
key.classList.add('playing');

function removeTransition(event) {
    // skip it if it's not a transform
    // if (event.propertyName !== 'transform') return;
    this.classList.remove('playing');        
};
```

5. (JS) Add an event listener to all the elements:
```
// Get all the keys:
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// Listening to key up events
window.addEventListener('keydown', playSound);
```

6. (CSS) New rules from CSS:
```
transition: all .07s;
text-shadow: 0 0 5px black;
text-transform: uppercase;
letter-spacing: .1rem;
```
