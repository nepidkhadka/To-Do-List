let inputdata = document.querySelector("input");
let mybtn = document.querySelector("#btn");

const addfunction = (event) => {
  if (event.keyCode == 13 || event.type === "click") {
    if (inputdata.value.length == 0) {
      alert("Please Enter Your Task");
    } else {
      document.querySelector(
        "#tasks"
      ).innerHTML += `<div class="individual-task">${
        document.querySelector("input").value
      }</div>`;
      inputdata.value = "";
    }
  }
};

inputdata.addEventListener("keypress", addfunction);
mybtn.addEventListener("click", addfunction);
