let inputdata = document.querySelector("input");
let mybtn = document.querySelector("#btn");


const addfunction = (event) => {
  if (event.keyCode == 13 || event.type === "click") {
    if (inputdata.value.length == 0) {
      alert("Please Enter Your Task");
    } else {
      document.querySelector(
        "#tasks"
      ).innerHTML += 
      `<div class="task-list">
      <div class="individual-task">${
        document.querySelector("input").value
      }</div>
      <div class="deletebtn"><i class="fa-solid fa-trash"></i></div>
      </div>
      `;
      inputdata.value = "";

    // Local Storage 
      const tasklist = document.querySelectorAll(".individual-task");
      console.log(tasklist);
      const taskindex = tasklist.length-1;
      console.log(taskindex);
      taskdata = tasklist[taskindex].textContent;
      console.log(taskdata)
      localStorage.setItem(taskindex,taskdata);


      // Delete Part
      const delete_task = document.querySelectorAll(".deletebtn");
      delete_task.forEach((btn) =>{
        btn.addEventListener("click", ()=>{
          btn.parentNode.remove();
        })
      })
    }
  }
};

// Event Call

inputdata.addEventListener("keypress", addfunction);
mybtn.addEventListener("click", addfunction);


