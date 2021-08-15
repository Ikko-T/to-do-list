const addButton = document.querySelector(".todo-button");
const todoInput = document.querySelector(".todo-input");

const addTodo = () => {
  alert("タスク追加:${todoInput.value}");
};

addButton.addEventListener("click", addTodo);
