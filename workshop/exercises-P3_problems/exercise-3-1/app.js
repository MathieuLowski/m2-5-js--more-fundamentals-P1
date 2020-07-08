// Exercise 3-1
// ------------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Guidelines
// - write only one event listener
// - use a switch statement

//We select the buttons from html so we can work with them here.
const buttons = document.querySelector("#btn-list");
// Box change = function used to manipulate the button on event.
const boxChange = (i) => {
  //we target each btn to put in the switch statement
  let buttonId = i.target.id;
  //we create another variable allowing us to apply changes on the btns
  let buttonEl = document.getElementById(buttonId);
  switch (buttonId) {
    case "btn-1":
      buttonEl.style.opacity = 0;
      break;
    case "btn-2":
      buttonEl.style.backgroundColor = "crimson";
      break;
    case "btn-3":
      buttonEl.style.backgroundColor = "lightblue";
      break;
    case "btn-4":
      buttonEl.classList = "jitters";
      break;
  }
};
//call the event so the browser can wait for it to happen and launch function
buttons.addEventListener("click", boxChange);
