//Take de elemen with DOM
const input = document.getElementById('input');
const list = document.getElementById('list-container');
const inputName = document.getElementById('inputName');
// console.log(inputName);

// Add task to screen
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
    // displayData();
}, false);


// CLICK BUTTON WITH ENTER and will display the list of task
input.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        AddTask();
    }
});


//When user clik enter the name will be set as they input
inputName.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
        saveName();
    }
}); 


// Save Name
function saveName(){
    const inptName = inputName.value.trim();
    if(inptName !== ''){
        localStorage.setItem("UserName", inptName);
    }
}




// Display Name
function displayName(){
    const nama = localStorage.getItem("UserName");
    if(nama){
        inputName.value = nama;
    }
}
displayName();



// We can save the data, so if we refreh the web the data it's not removed too
function saveData(){
    localStorage.setItem("Data", list.innerHTML);
}

// Take data from lokal storage, when the web refrehed
function displayData(){
    list.innerHTML = localStorage.getItem("Data");
}
displayData();

// I use when i want to clear temp in localstorage, or to clear all the localstorage
// localStorage.clear();
