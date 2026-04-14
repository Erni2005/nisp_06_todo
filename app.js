const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");

form.addEventListener("submit", function (e) {
  e.preventDefault(); 

  const value = input.value.trim();

  if (value !== "") {
    const li = document.createElement("li");
    li.textContent = value;

    list.appendChild(li);
    input.value = ""; 
  }
});