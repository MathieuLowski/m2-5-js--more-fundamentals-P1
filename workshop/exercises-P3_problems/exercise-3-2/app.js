// Exercise 3-2
// ------------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Hint:
// create a toggleColor function
// Because we are now going to work with the opacity and background of the buttons,
// they need to be set here. So that they are referenceable via the the style attribute.
// initialize the background color for all of the buttons in here. (for loop)
const buttons = document.querySelector("#btn-list");
for (let id = 1; id < 5; id++) {
  let updateButton = document.getElementById(`btn-${id}`);
  updateButton.style.opacity = "100";
  updateButton.style.backgroundColor = "yellow";
}
const toggleColor = (id, color) => {
  let btnEl = document.getElementById(id);
  let colorNow = btnEl.style.backgroundColor;
  btnEl.style.backgroundColor = colorNow === "yellow" ? color : "yellow";
};

const boxClick = (i) => {
  const btnId = i.target.id;
  const btnEl = document.getElementById(btnId);
  switch (btnId) {
    case "btn-1":
      btnEl.style.opacity = btnEl.style.opacity === "100" ? "0" : "100";
      break;
    case "btn-2":
      toggleColor(btnId, "crimson");
      break;
    case "btn-3":
      toggleColor(btnId, "lightblue");
      break;
    case "btn-4":
      btnEl.classList.toggle("jitters");
      break;
    default:
      break;
  }
};

buttons.addEventListener("click", boxClick);
