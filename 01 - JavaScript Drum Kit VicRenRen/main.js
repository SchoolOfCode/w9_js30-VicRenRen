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

window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  audio.currentTime = 0; // rewind to the start
  if (!audio) return; // stops the entire function
  audio.play();
  key.classList.add("playing");
});
