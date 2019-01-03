### 2. Clock in JS & CSS:
#### What I have learned:
#### 1. CSS:
- How transform, transition, ransform-origin, transition-timing-function works:
```
.hand {
    width: 50%;
    height: 6px;
    background: black;
    position: absolute;
    top: 50%;
    transform: rotate(90deg);
    transform-origin: 100%;
    transition: all .05s;
    transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
}
```
#### 2. JS for these clock hands:
```
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}
setInterval(setDate, 1000);
setDate();

```
#### 3. HTML file:
```
<div class="clock">
    <div class="clock-face">
        <div class="hand hour-hand"></div>
        <div class="hand min-hand"></div>
        <div class="hand second-hand"></div>
    </div>
</div>
```
