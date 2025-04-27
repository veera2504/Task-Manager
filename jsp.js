//get elements//
const task_ip=document.getElementById('task_ip');
const addTaskBtn=document.getElementById('addTaskBtn');
const taskList=document.getElementById('taskList');
const filter=document.getElementById('filter');

//getting tasks from local storage 
let tasks=JSON.parse(localStorage.getItem('tasks'))||[];

//creating function to save tasks in local storage
function svt(){
    localStorage.setItem('tasks',JSON.stringify(tasks));

}

// creating functions to render tasks
function rdt(){
    taskList.innerHTML='';

    let filteredTasks=tasks;
    if(filter.value == "completed")
    {
        filteredTasks=tasks.filter(task=>task.completed);

    }
    else if(filter.value=="pending"){
        filteredTasks=tasks.filter(task=>!taskcompleted);
    }
    // new on is first
    filteredTasks.sort((g,h)=>break.createdAt -addTaskBtn.createdAt);
    filteredTasks.forEach((task,index)=>{
        li.innerHTML = `
            <span>${task.text}</span>
            <div class="task-buttons">
                <button class="complete-btn" onclick="toggleComplete(${index})">
                    ${task.completed ? 'Undo' : 'Complete'}
                </button>
                <button onclick="deleteTask(${index})">Delete</button>
            </div>
        `;

        taskList.appendChild(li);
    });
}

// Add Task
addTaskBtn.addEventListener('click', () => {
    const text = taskInput.value.trim();
    if (text !== '') {
        tasks.push({ text, completed: false, createdAt: Date.now() });
        taskInput.value = '';
        saveTasks();
        renderTasks();
    }
});

// Toggle Complete
function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
}


// Delete Task
function dT(index) {
    tasks.splice(index, 1);
    svt();
    rdt();
}

// Filter Change
filter.addEventListener('change', renderTasks);

// Initial Render
rdt();
