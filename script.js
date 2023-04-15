// console.log("Hello");
let inputdata = document.querySelector('input').value;
console.log(inputdata);



document.querySelector("#btn").onclick = function(){
    if(inputdata.length === 0){
        alert("Please Enter Your Task");
        console.log(inputdata);
    }
}