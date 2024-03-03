let todoItemsContainer = document.getElementById("todoItemsContainer");
let todoList = [{
        text: "Learn HTML",
        uniqueNo: 1
    },
    {
        text: "Learn CSS",
        uniqueNo: 2
    },
    {
        text: "Learn JavaScript",
        uniqueNo: 3
    }
];
let todoCount = todoList.length;

function onDeleteItem(todoElId) {
    let itemEl = document.getElementById(todoElId);
    todoItemsContainer.removeChild(itemEl);
}

function onStatusChange(checkboxId, labelId) {
    let checkboxEl = document.getElementById(checkboxId);
    let labelEl = document.getElementById(labelId);
    labelEl.classList.toggle("checked");
}

function createAndAppendTodo(todo) {
    let checkboxId = "checkbox" + todo.uniqueNo;
    let labelId = "label" + todo.uniqueNo;
    let todoElId = "todo" + todo.uniqueNo;
    console.log(todoElId);
    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoElement.id = todoElId;
    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkboxId;
    inputElement.onclick = function() {
        onStatusChange(checkboxId, labelId);
    }
    inputElement.classList.add("checkbox-input");
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", checkboxId);
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelElement.id = labelId;
    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIcon.onclick = function() {
        onDeleteItem(todoElId);
    }
    deleteIconContainer.appendChild(deleteIcon);
}

for (let todo of todoList) {
    createAndAppendTodo(todo);
}


let addBtn = document.getElementById("addTodoButton");

function onAddTodo() {
    let userInputEl = document.getElementById("todoUserInput");
    let userInputValue = userInputEl.value;
    console.log(userInputValue);
    if (userInputValue === "") {
        alert("Invalid input");
        return;
    }

    let addTodo = {
        text: userInputValue,
        uniqueNo: todoCount + 1
    };
    createAndAppendTodo(addTodo);
    userInputEl.value = "";
}
addBtn.onclick = function() {
    onAddTodo();
}
