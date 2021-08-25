/////////// CALENDAR //////////////
const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth() + 1;
const currentDate = today.getDate();

const day = today.getDay();
const days = ['日', '月', '火', '水', '木', '金', '土'];
const currentDay = days[day];

document.write(currentYear + '年' + currentMonth + '月' + currentDate + '日' + currentDay + '曜日');

//////////// TODO LIST //////////////
const addButton = document.querySelector('.todo-button');
const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-list');

const addTodo = () => {
  // 空欄ならタスクを追加しない
  if (todoInput.value === '') return;

  const newTodo = document.createElement('li');

  // タスク名
  const todoContent = document.createElement('span');
  todoContent.innerText = todoInput.value;
  todoContent.addEventListener('click', editTodo);
  todoContent.classList.add('todo-content');
  newTodo.appendChild(todoContent);

  // 完了ボタン
  todoList.appendChild(newTodo);
  const checkButton = document.createElement('button');
  checkButton.addEventListener('click', switchState);
  checkButton.innerHTML = '<i class="far fa-square"></i>';
  checkButton.classList.add('check-button');
  newTodo.appendChild(checkButton);

  // 削除ボタン
  const deleteButton = document.createElement('button');
  deleteButton.addEventListener('click', deleteTodo);
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  deleteButton.classList.add('delete-button');
  newTodo.appendChild(deleteButton);

  // 上記内容をlistへ追加
  todoList.appendChild(newTodo);

  // 入力フォームの値を消去
  todoInput.value = '';
};

const switchState = (e) => {
  const checkButton = e.target.closest('.check-button');

  if (checkButton.dataset.state !== 'complete') {
    checkButton.innerHTML = '<i class="far fa-check-square"></i>';
    checkButton.dataset.state = 'complete';
  } else {
    checkButton.innerHTML = '<i class="far fa-square"></i>';
    checkButton.dataset.state = '';
  }
};

const deleteTodo = (e) => {
  const confirmation = confirm('削除しますか？');
  const todoList = e.target.closest('li');

  if (confirmation) {
    todoList.remove();
  } else {
    return false;
  }
};

const saveTodoContent = (e) => {
  const itemToSave = e.target;
  const textValue = itemToSave.value;
  if (textValue !== '') {
    itemToSave.parentNode.textContent = textValue;
  }
};

const editTodo = (e) => {
  const itemToEdit = e.target;

  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.classList.add('editbox');
  input.setAttribute('value', itemToEdit.textContent);
  itemToEdit.textContent = '';
  itemToEdit.appendChild(input);

  const editContent = itemToEdit.querySelector('.editbox');

  editContent.addEventListener('blur', saveTodoContent);
};

addButton.addEventListener('click', addTodo);
