### 1. Drum Kit:
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

7. One for all:
- HTML:
```
<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Metadata -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- CSS -->
    <link rel="stylesheet" href="./drum-kit.css">
    <title>Document</title>
</head>

<body>
    <div class="keys">
        <!-- data-key: custom attribute -->
        <div data-key="65" class="key">
            <kbd>A</kbd>
            <span class="sound">slap</span>
        </div>

        <div data-key="83" class="key">
            <kbd>S</kbd>
            <span class="sound">hihat</span>
        </div>

        <div data-key="68" class="key">
            <kbd>D</kbd>
            <span class="sound">kick</span>
        </div>

        <div data-key="70" class="key">
            <kbd>F</kbd>
            <span class="sound">openhat</span>
        </div>

        <div data-key="71" class="key">
            <kbd>G</kbd>
            <span class="sound">boom</span>
        </div>

        <div data-key="72" class="key">
            <kbd>H</kbd>
            <span class="sound">ride</span>
        </div>

        <div data-key="74" class="key">
            <kbd>J</kbd>
            <span class="sound">snare</span>
        </div>

        <div data-key="75" class="key">
            <kbd>K</kbd>
            <span class="sound">tom</span>
        </div>

        <div data-key="76" class="key">
            <kbd>L</kbd>
            <span class="sound">tink</span>
        </div>
    </div>

    <!-- data-key: custom attribute -->
    <audio data-key="65" src="sounds/slap.wav"></audio>
    <audio data-key="83" src="sounds/hihat.wav"></audio>
    <audio data-key="68" src="sounds/kick.wav"></audio>
    <audio data-key="70" src="sounds/openhat.wav"></audio>
    <audio data-key="71" src="sounds/boom.wav"></audio>
    <audio data-key="72" src="sounds/ride.wav"></audio>
    <audio data-key="74" src="sounds/snare.wav"></audio>
    <audio data-key="75" src="sounds/tom.wav"></audio>
    <audio data-key="76" src="sounds/tink.wav"></audio>

    <!-- JavaScript -->
    <script src="./drum-kit.js"></script>
</body>

</html>

```
- JS:
```
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

```
- CSS:
```
* {
    margin: 0;
    padding: 0;
}

html, body {
    background-size: cover;
    background: blue;
    font-size: 10px;
    font-family: sans-serif;
}

.keys {
    display: flex;
    flex: 1;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}
.key {
    border: 4px solid black;
    border-radius: 5px;
    margin: 1rem;
    font-size: 1.5rem;
    padding: 1rem .5rem;
    transition: all .07s;
    width: 100px;
    text-align: center;
    color: white;
    background: rgba(0, 0, 0, 0.4);
    text-shadow: 0 0 5px black;
}

.playing {
    transform: scale(1.1);
    border-color: yellow;
    box-shadow: 0 0 10px yellow;
}

kbd {
    display: block;
    font-size: 40px;
}

.sound {
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: .1rem;
    color: #ffc600;
}
```