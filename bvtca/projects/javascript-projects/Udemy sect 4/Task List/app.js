//Define UI vars

const form = document.querySelector(`#task-form`);
const taskList = document.querySelector(`.collection`);
const clearBtn = document.querySelector(`.clear-tasks`);
const filter = document.querySelector(`#filter`);
const taskInput = document.querySelector(`#task`);

//Load all event Listeners
loadEventListeners();

//Load all event listeners
function loadEventListeners() {
    //Dom Load Event
    document.addEventListener('DOMContentLoaded', getTasks);
    //add task event
    form.addEventListener('submit', addTask);
    //remove task event
    taskList.addEventListener('click', removeTask);
    //clear task event
    clearBtn.addEventListener('click', clearTasks)
    //Filter tasks event
    filter.addEventListener('keyup', filterTasks);
}

//GEt Tasks from LS
function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task){
    //create li element
    const li = document.createElement('li');
    //add class
    li.className = "collection-item";
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    //create new link element
    const link = document.createElement('a');
    //add class
    link.className = 'delete-item secondary-content';
    //add icon html
    link.innerHTML = `<i class = "fa fa-remove"></i>`;
    //append the link to 
    li.appendChild(link);

    //append li to ul
    taskList.appendChild(li);

    });
}

//add task
function addTask(e) {
    if (taskInput.value === '') {
        alert('Add a task');
    }

    //create li element
    const li = document.createElement('li');
    //add class
    li.className = "collection-item";
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    //create new link element
    const link = document.createElement('a');
    //add class
    link.className = 'delete-item secondary-content';
    //add icon html
    link.innerHTML = `<i class="bi bi-x"></i>`;
    //append the link to 
    li.appendChild(link);

    //append li to ul
    taskList.appendChild(li);

    //Store in Ls
    storeTaskInLocalStorage(taskInput.value);

    //clear input
    taskInput.value = '';

    e.preventDefault();
}

// store task
function storeTaskInLocalStorage(task) {
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));


}

//Remove Task
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if(confirm('Are you Sure?')){
        e.target.parentElement.parentElement.remove();

        //remove from LS
        removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}

//remove from LS
function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getitem('tasks'));
    }
    tasks.forEach(function(task, index){
        if(taskItem.texrContent === task){
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}


// clear tasks
function clearTasks(){ 
   //taskList.innerHTML = '';

    //Faster
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
    //Clear from LS
    clearTasksFromLocalStorage();

    
}


//Filter Tasks
function filterTasks(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll(`.collection-item`).forEach
    (function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}
