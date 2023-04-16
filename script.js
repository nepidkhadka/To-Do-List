let inputdata = document.querySelector("input");

document.querySelector("#btn").onclick = function(){
    if(inputdata.value.length == 0){
        alert("Please Enter Your Task");
        console.log(inputdata);
    }else{
        document.querySelector("#tasks").innerHTML += `<div class="individual-task">${document.querySelector("input").value}</div>`;
        inputdata.value= "";

    }   
}