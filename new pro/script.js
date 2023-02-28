const dom = {
  new: document.getElementById("new"),
  add: document.getElementById("add"),
  tasks: document.getElementById("tasks"),
  count: document.getElementById("count"),
};
//Масив завдань.
const tasks = [];

if (localStorage.length > 0) {
  for (let i = 0; i < localStorage.length; i++) {
    let index = localStorage.key(i);
    tasks.push(JSON.parse(localStorage.getItem(index)));
  }
  tasksRender(tasks);
}

//Відслідковуємо "Click" за кнопкою додати завдання.
dom.add.onclick = () => {
  const newTaskText = dom.new.value;
  if (newTaskText && isNotHaveTask(newTaskText, tasks)) {
    addTask(newTaskText, tasks);
    dom.new.value = "";
    tasksRender(tasks);
  }
};

//Функція додавання завдання.
function addTask(text, list) {
  const timestamp = Date.now();
  const task = {
    id: timestamp,
    text,
    isComplete: false,
  };
  console.log(list);
  list.push(task);
  localStorage.setItem(timestamp, JSON.stringify(task));
}

// Перевірка існування задачі в масиві задач.
function isNotHaveTask(text, list) {
  let isNotHave = true;

  list.forEach((task) => {
    if (task.text === text) {
      alert("Завдання вже існує!");
      isNotHave = false;
    }
  });

  return isNotHave;
}

//Функція виведення списку завдань.
function tasksRender(list) {
  let htmlList = "";

  list.forEach((task) => {
    const cls = task.isComplete ? "todo_task todo_task_complete" : "todo_task";
    const checked = task.isComplete ? " checked" : "";

    const taskHtml = `
            <div id="${task.id}" class="${cls}">
                    <label class="todo_checkbox">
                       <input type="checkbox" ${checked} >
                       <div class="todo__checkbox-div" ></div>
                    </label>
                    <div class="todo_task-text"> ${task.text} </div>
                    <div class="todo__task-del">-</div>
                </div>
                `;

    htmlList = htmlList + taskHtml;
  });
  dom.tasks.innerHTML = htmlList;

  renderTasksCount(list);
}

// Відслідковуємо "Click" по "Checkbox"  завдання.
dom.tasks.onclick = (event) => {
  const target = event.target;
  const isCheckboxEl = target.classList.contains("todo__checkbox-div");
  const isDeleteEl = target.classList.contains("todo__task-del");

  if (isCheckboxEl) {
    const task = target.parentElement.parentElement;
    const taskId = task.getAttribute("id");
    changeTaskStatus(taskId, tasks);
    tasksRender(tasks);
  }
  if (isDeleteEl) {
    const task = target.parentElement;
    const taskId = task.getAttribute("id");
    deleteTask(taskId, tasks);
    tasksRender(tasks);
  }
};

// Функція зміни статусу завдань.
function changeTaskStatus(id, list) {
  let temporary = { ...JSON.parse(localStorage.getItem(id)) };
  localStorage.removeItem(temporary.id);
  if (temporary.isComplete) {
    temporary.isComplete = false;
  } else {
    temporary.isComplete = true;
  }
  localStorage.setItem(id, JSON.stringify(temporary));

  list.forEach((task) => {
    if (task.id == id) {
      task.isComplete = !task.isComplete;
    }
  });
}

//Функція видалення завдання.
function deleteTask(id, list) {
  list.forEach((task, idx) => {
    if (task.id == id) {
      localStorage.removeItem(id);
      list.splice(idx, 1);
    }
  });
}

//Функція виведення кількості завдань.
function renderTasksCount(list) {
  dom.count.innerHTML = list.length;
}
