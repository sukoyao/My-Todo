// init
let myTodoList = document.querySelector('#my-todo')
let myDoneList = document.querySelector('#my-done')
const todos = ['Hit the gym', 'Read a book', 'Buy eggs', 'Organize office', 'Pay bills']
for (let todo of todos) {
  addItem(todo)
}

// todo list
function addItem(todo) {
  let newItem = document.createElement('li')
  newItem.innerHTML = `
    <label for="todo">${todo}</label>
    <i class="delete fa fa-trash"></i>
  `
  myTodoList.appendChild(newItem)
}

// done list
function doneItem(todo) {
  let newItem = document.createElement('li')
  newItem.innerHTML = `
    <label for="todo" class="checked">${todo}</label>
    <i class="delete fa fa-trash"></i>
  `
  myDoneList.appendChild(newItem)
}

// Create
let inputNew = document.querySelector('#newTodo')
const addBtn = document.querySelector('#addBtn')
addBtn.addEventListener('click', function () {
  let todo = document.querySelector('#newTodo').value.trim()
  if (todo !== '') {
    addItem(todo)
    inputNew.value = ''
  } else {
    alert('內容不能空白，請輸入有效字元或字串!')
  }
})

// keyboardInput
let keyboardInput = document.querySelector('#newTodo')
keyboardInput.addEventListener('keypress', function (e) {
  if (e.keyCode == 13) {
    let todo = document.querySelector('#newTodo').value.trim()
    if (todo !== '') {
      addItem(todo)
      inputNew.value = ''
    } else {
      alert('內容不能空白，請輸入有效字元或字串!')
    }
  }
})

// delete and check
let todoList = document.querySelector('#todoList')
todoList.addEventListener('click', function (e) {
  if (e.target.matches('.delete')) {
    e.target.parentElement.remove()
  }
})

//todo / done list conversion
todoList.addEventListener('click', function (e) {
  if (e.target.tagName === 'LABEL') {
    e.target.classList.toggle('checked')
    if (e.target.matches('.checked')) {
      doneItem(e.target.innerHTML)
      e.target.parentElement.remove()
    } else {
      addItem(e.target.innerHTML)
      e.target.parentElement.remove()
    }
  }
})