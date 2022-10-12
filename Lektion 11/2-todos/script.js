const output = document.querySelector('#output');
const form = document.querySelector('#todoForm');
const input = document.querySelector('#todoInput');

const todos = [];

const fetchTodos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
  const data = await res.json();
  data.forEach(todo => todos.push(todo))
  
  listTodos()
}
fetchTodos()

const listTodos = () => {
  todos.forEach(todo => {
    output.appendChild(createTodoElement(todo))
  })
}

const createTodoElement = todo => {

  let todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  let title = document.createElement('p');
  title.classList.add('todo-title');
  title.innerText = todo.title;

  let button = document.createElement('button');

  let trash = document.createElement('i');
  trash.classList.add('fa-solid', 'fa-trash-can');

  button.appendChild(trash)

  todoDiv.appendChild(title);
  todoDiv.appendChild(button);

  button.addEventListener('click', () => {removeTodo(todo.id, todoDiv)})

  return todoDiv;
}

const removeTodo = (id, todoElement) => {
 
}


const addTodo = title => {
  fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({
      title,
      completed: false
    })
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
  })

}

form.addEventListener('submit', e => {
  e.preventDefault();

  if(input.value.trim() === '') {
    // TODO: display error message
    return
  }

  addTodo(input.value)

})






















// const listTodos = () => {
  // todos.forEach(todo => {
  //   output.innerHTML += `
  //     <div id="todo-${todo.id}" class="todo">
  //       <p class="todo-title">${todo.title}</p>
  //       <button id="delete-${todo.id}"><i class="fa-solid fa-trash-can"></i></button>
  //     </div>
  //   `

  //   document.querySelector("#delete-" + todo.id).addEventListener('click', () => {
  //     document.querySelector('#todo-' + todo.id).remove()
  //   })
  // })

  // todos.forEach(todo => {
  //   output.insertAdjacentHTML('beforeend', `
  //     <div id="todo-${todo.id}" class="todo">
  //        <p class="todo-title">${todo.title}</p>
  //        <button id="delete-${todo.id}"><i class="fa-solid fa-trash-can"></i></button>
  //     </div>
  //   `)

  //   document.querySelector("#delete-" + todo.id).addEventListener('click', () => {
  //     document.querySelector('#todo-' + todo.id).remove()
  //   })

  // })
// }

