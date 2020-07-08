// Exercise 3-3
// ----------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// HINT:
// to remove the 'jitters' class, check the length of the classList.
const buttons = document.querySelector("#btn-list");

const reset = () => {
  for (let id = 1; id <= 4; id++) {
    let updateButton = document.getElementById(`btn-${id}`);
    updateButton.style.opacity = "100";
    updateButton.style.backgroundColor = "yellow";

    if (id === 4 && updateButton.classList.length > 0) {
      initButton.classList.remove("jitters");
    }
  }
};
reset();

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
    case "reset":
      reset();
      break;
    default:
      break;
  }
};

buttons.addEventListener("click", boxClick);
