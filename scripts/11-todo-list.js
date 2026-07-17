const todolist = [{
    name: 'watch js',
    dueDate: '2026-7-12'
},
{
     name: 'Gaming',
     dueDate: '2026-7-13'
}];
//let todoListHtml = JSON.parse(localStorage.getItem('todo')) || ''; 
//let todoListHtml = '';
renderTodoList();
function renderTodoList() {
    //  let todoListHtml = JSON.parse(localStorage.getItem('todo')) || '';
    let todoListHtml = '';
    // it is called accumulator variable 
    for (let i = 0; i < todolist.length; i++) {
        const todosObject = todolist[i];
        // const name = todosObject.name;
        // const dueDate = todosObject.duedate;
        const { name, dueDate } = todosObject;

        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
        todolist.splice(${i}, 1);
        renderTodoList();
        " class="delete-todo-btn">Delete</button>
        `; // generating the html using js 
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

    const dateInputElement = document.querySelector('.js-duedate-input');
    const dueDate = dateInputElement.value;

    todolist.push({
        // name: name, // short hand property
        // date: duedate
        name,
        dueDate

    }); // add a value to the end of the array 
    inputElement.value = '';
    renderTodoList();

}

// function removeTODO(){
//     for(let i= 0; i< todolist.length; i++){
//     localStorage.removeItem(todolist[i]);
//     }
// }