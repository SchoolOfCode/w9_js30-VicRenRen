// console.log("Victor's Drum Kit JS30 challenge!");
// We are making a javascript drumkit that responds to keyboard keys when pressed by a human.
// By 'responds' we mean produce sound, just like real drums!
// keycode.info gives a number associated with key pressed, works with most keys and with most languages but it aint perfect
// 1.Firstly we need to listen for keydown event
// What is window?
// The window object represents the browser's window.
// The window object represents an open window in a browser.
// funtion(e) -> `e` stands for an event
// that event tells us all sorts of data, like keyCode
//2. Now we gotta edit the function so when called we can select an audio element
//we gonna add an attribute selector and focus on data attribute data-key
// we are using e.kayCode so when clicked it gives us correct key code
// remember about quotes!!!
// its data-key="65" not data-key=65
// now we are getting coresponding audio element assosiated with pressed keys
// if there is no audio element assosicated with a key we'll get null
// andded if statement when there is no autio element it stops
//3. since we have audio element we can now play it
// when key is pressed more than once we dont want for the audtio to fishinsh, we want it to start over
//4. its time to add animation!
// animation stays because when clicked we are just adding it but we are never remove it after its done
// if you use timeout it is safer to keep it only in one place, either css or javascript, to not risk it going out of sync
//RECAP TIME! What is a click event? Click event is when you click something and it will fire off the event sying someone clicked me
// Whats happening now? We want the animation fhen finished to reverse back
// we created a function that removes prievously added playing that in css was doing the animation
//

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // stops the entire function
  audio.currentTime = 0; // rewind to the start
  audio.play();
  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return; // skip if not transormed
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);
