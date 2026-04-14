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

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const value = input.value.trim();

  if (value !== "") {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = value;

    checkbox.addEventListener("change", function () {
      li.classList.toggle("done");
    });

    li.appendChild(checkbox);
    li.appendChild(span);

    list.appendChild(li);
    input.value = "";
  }
});

const przyciski = document.querySelectorAll(".usun");

przyciski.forEach(przycisk => {
    przycisk.addEventListener("click", function() {
        this.parentElement.remove();
    });
});