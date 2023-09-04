const input = document.getElementById('input');
const list = document.getElementById('list-container');

function AddTask(){
    if(input.value === ''){
        alert("You not yet enter the task!!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        list.appendChild(li); //this is for displaying the user input
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // this is the name of cross icon
        li.appendChild(span);
    }
    input.value = "";
    saveData();
}

// When user click the list of they task
list.addEventListener('click', function(s){
    if(s.target.tagName === "LI"){
        s.target.classList.toggle("cheked");
        saveData();
    }
    else if(s.target.tagName === "SPAN"){
        s.target.parentElement.remove();
        saveData();
    }
}, false);


// We can save the data, so if we refreh the web the data it's not removed too
function saveData(){
    localStorage.setItem("Data", list.innerHTML);
}
function disData(){
    list.innerHTML = localStorage.getItem("Data");
}
disData();