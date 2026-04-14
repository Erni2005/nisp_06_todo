class TodoApp {
  constructor() {
    this.form = document.getElementById("task-form");
    this.input = document.getElementById("task-input");
    this.list = document.getElementById("task-list");

    this.tasks = this.loadTasks();

    this.init();
  }

  init() {
    this.render();

    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.addTask();
    });
  }

  addTask() {
    const value = this.input.value.trim();

    if (!value) return;

    const task = {
      id: Date.now(),
      text: value,
      done: false
    };

    this.tasks.push(task);
    this.saveTasks();
    this.render();

    this.input.value = "";
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.saveTasks();
    this.render();
  }

  toggleTask(id) {
    this.tasks = this.tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    );

    this.saveTasks();
    this.render();
  }

  saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  loadTasks() {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
  }

  createTaskElement(task) {
  const li = document.createElement("li");

  if (task.done) {
    li.classList.add("done");
  }

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = task.done;

  checkbox.addEventListener("change", () => {
    this.toggleTask(task.id);
  });

  const span = document.createElement("span");
  span.textContent = task.text;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Usuń";

  deleteBtn.addEventListener("click", () => {
    if (!checkbox.checked) {
      alert("Najpierw zaznacz zadanie ✔");
      return;
    }

    this.deleteTask(task.id);
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  return li;
}

  render() {
    this.list.innerHTML = "";

    this.tasks.forEach(task => {
      const taskElement = this.createTaskElement(task);
      this.list.appendChild(taskElement);
    });
  }
}

new TodoApp();