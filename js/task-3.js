const textInput = document.querySelector("input#name-input");
const output = document.querySelector("span#name-output");
textInput.addEventListener("input", (event) => {
  event.preventDefault();
  const inputValue = event.currentTarget.value.trim();
  if (inputValue !== "") {
    return (output.textContent = inputValue);
  } else {
    return (output.textContent = "Anonymous");
  }
});
