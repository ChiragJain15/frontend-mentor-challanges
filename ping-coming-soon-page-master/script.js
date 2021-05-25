const field = document.querySelectorAll("input");

const button = document.querySelectorAll("#enter");

console.log(button);

button[0].addEventListener("click", () => {
  const email = field[0].value;
  if (email.includes("[a-z]")) field[0].style.borderColor = "blue";
  else field[0].style.borderColor = "orange";
});
