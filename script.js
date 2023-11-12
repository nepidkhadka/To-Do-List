let inputdata = document.querySelector("input");
let mybtn = document.querySelector("#btn");

const fetchInitialData = () => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => {
    document.querySelector("#tasks").innerHTML += `<div class="task-list">
        <div class="individual-task">${task.taskName}</div>
        <div class="deletebtn"><i class="fa-solid fa-trash"></i></div>
      </div>`;
  });

  const delete_task = document.querySelectorAll(".deletebtn");
  delete_task.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      btn.parentNode.remove();
      tasks.splice(index, 1); 
      saveTasks(tasks); 
    });
  });
};

const saveTasks = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const addTask = (taskName) => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push({ taskName });
  console.log(tasks)
  saveTasks(tasks);
};

const addfunction = (event) => {
  if (event.keyCode == 13 || event.type === "click") {
    if (inputdata.value.length == 0) {
      alert("Please Enter Your Task");
    } else {
      document.querySelector("#tasks").innerHTML += `<div class="task-list">
      <div class="individual-task">${
        document.querySelector("input").value
      }</div>
      <div class="deletebtn"><i class="fa-solid fa-trash"></i></div>
      </div>
      `;

      addTask(inputdata.value);
      inputdata.value = "";

      // Delete Part
      const delete_task = document.querySelectorAll(".deletebtn");
      delete_task.forEach((btn) => {
        btn.addEventListener("click", () => {
          btn.parentNode.remove();
          tasks.splice(index, 1);
          saveTasks(tasks);
        });
      });
    }
  }
};

// Event Call
inputdata.addEventListener("keypress", addfunction);
mybtn.addEventListener("click", addfunction);
document.addEventListener("DOMContentLoaded", fetchInitialData);
