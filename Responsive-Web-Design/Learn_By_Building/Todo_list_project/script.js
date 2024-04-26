const newTask = document.getElementsByClassName("list-items");
const newTaskInput = document.getElementById("new-task");
const addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click",()=>{
    const myNewTask = newTaskInput.value;
    if (myNewTask !== ""){
        const addItem = document.createElement("li");
        addItem.innerText = myNewTask;
        const delBtn = createElement('button');
        delBtn.innerText = 'X';
        delBtn.classList.add("del-btn");
        delBtn.addEventListener("click", function(){
            addItem.remove()
        });
        addItem.appendChild(delBtn);
        newTask.appendChild(addItem);
        newTaskInput.value = "";

    }
});