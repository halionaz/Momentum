
const todoList = document.querySelector(".todolist");
const todoForm = document.querySelector(".todoForm");
const todoInput = document.querySelector(".todoInput");
const addBtn = document.querySelector("#jsAddIcon");

let list = [];
let id;

function add(todo,ind, done){
    done = done ? `radio-button-on-outline`: `radio-button-off-outline`;
    const item = document.createElement('li');
    item.className='todoList_item';
    item.id=ind;
    const doneIcon = document.createElement('ion-icon');
    doneIcon.name = done;
    doneIcon.id = ind;
    doneIcon.addEventListener('click',doneIt);
    const content = document.createElement('div');
    content.className = 'listText';
    content.innerHTML = todo;
    item.appendChild(doneIcon);
    item.appendChild(content);
    todoList.appendChild(item);
    console.log(id);
}

function inputAdd(event){
    event.preventDefault();
    if(todoInput.value && list.length < 13){
        add(todoInput.value, id, false);
        list.push({todo:todoInput.value,ind:id,done:false});
        localStorage.setItem('TODO',JSON.stringify(list));
        id++;
    }
    todoInput.value = '';
}

function displayList(arr){
    arr.forEach((item)=>{
        add(item.todo,item.ind,item.done);
    });
}

function getData(){
    const data = localStorage.getItem('TODO');
    if(data == null){
        id = 0;
        list = [];
    } else {
        list = JSON.parse(data);
        if(list.length == 0){
            id = 0;
        } else {
            id = (list[list.length-1].ind)+1;
        }
    }
    displayList(list);
}

function doneIt(event){
    const deleteId = event.target.id;
    for(let i = 0; i < list.length; i++){
        if(list[i].ind === parseInt(deleteId)){
            console.log(list[i]);
            list.splice(i,1);
        }
    }
    todoList.innerHTML = '';
    localStorage.setItem('TODO',JSON.stringify(list));
    displayList(list);
}

getData();

todoForm.addEventListener("submit",inputAdd);
addBtn.addEventListener("click",inputAdd);