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
      const delete_task = document.querySelectorAll(".deletebtn");
      console.log(delete_task);
      delete_task.forEach((btn) =>{
      console.log(btn);
        btn.addEventListener("click", ()=>{
          btn.parentNode.remove();
        })
      })
    }
  }
};

inputdata.addEventListener("keypress", addfunction);
mybtn.addEventListener("click", addfunction);

