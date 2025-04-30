const form = document.querySelector(".login-form");
form.addEventListener("submit", onSubmit);
function onSubmit(event) {
  event.preventDefault();

  const formData = new FormData(form);

  const data = {};

  for (const [name, value] of formData.entries()) {
    const cutValue = value.trim();
    if (!cutValue) {
      alert("All form fields must be filled in");
      return;
    }
    data[name] = cutValue;
  }
  console.log(data);

  form.reset();
}
