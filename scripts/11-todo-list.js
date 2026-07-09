const todolist = [];
//let todoListHtml = JSON.parse(localStorage.getItem('todo')) || ''; 
//let todoListHtml = '';
//renderTodoList();
function renderTodoList() {
  //  let todoListHtml = JSON.parse(localStorage.getItem('todo')) || '';
  let todoListHtml = '';
    // it is called accumulator variable 
    for (let i = 0; i < todolist.length; i++) {
        const todos = todolist[i];
        const html = `<p>${todos}</p>`; // generating the html using js 
        todoListHtml += html;
    }
    document.querySelector('.js-todo-list').innerHTML = todoListHtml;
    //localStorage.setItem('todo', JSON.stringify(todoListHtml));
}

function handleEvent(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    todolist.push(name); // add a value to the end of the array 
    inputElement.value = '';
    renderTodoList();

}

// function removeTODO(){
//     for(let i= 0; i< todolist.length; i++){
//     localStorage.removeItem(todolist[i]);
//     }
// }