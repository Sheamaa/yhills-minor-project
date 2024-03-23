const tasks_list = document.getElementById("tasks");
const input_field = document.getElementById("input-field")
const button = document.getElementById("btn")


document.addEventListener("keypress", (e) => {
    if(e.key == 'Enter') {
        addTask();
    }
});

function addTask() {
    if (input_field.value === "") {
        alert("The Field Is Empty")
        saveTasks()
    }
    else {
        let task = document.createElement("li");
        task.innerHTML = input_field.value;
        tasks_list.appendChild(task); 
        let icon = document.createElement("i");
        icon.classList.add("fa-solid", "fa-trash-can");
        task.appendChild(icon);

        saveTasks()

    }
    input_field.value = "";
}

function saveTasks(){
    localStorage.setItem("info", tasks_list.innerHTML)
}


tasks_list.addEventListener("click", function(e){
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveTasks();
    }
    else if (e.target.tagName === "I" ){
        e.target.parentElement.remove();
        saveTasks();
    }
})

function loadTasks(){
    tasks_list.innerHTML = localStorage.getItem("info")
}

loadTasks();