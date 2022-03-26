//selector
const todoInput=document.querySelector('.todo-input')
const todoButton=document.querySelector('.todo-button')
const todoList=document.querySelector('.todo-list')
//eventListener
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);

//function
//prevent form from submitting
function addTodo(event) {
event.preventDefault();

//Todo Div
const todoDiv=document.createElement('div');
todoDiv.classList.add("todo");
//create list
const newTodo=document.createElement('li');
newTodo.innerText=todoInput.value;
newTodo.classList.add('todo-item');
todoDiv.appendChild(newTodo);
//Check Mark todoButton
const completeButton=document.createElement('button');
completeButton.innerHTML='<i class="fas fa-check"></i>';
completeButton.classList.add("complete-btn");
todoDiv.appendChild(completeButton);
//Check trash todoButton
const trashButton=document.createElement('button');
trashButton.innerHTML='<i class="fas fa-trash"></i>';
trashButton.classList.add("trash-btn");
todoDiv.appendChild(trashButton);
//Append to List
todoList.append(todoDiv)
//clear TODO INPUT VALUES
todoInput.value="";
}
//delete function 
function deleteCheck(e){
    const item=e.target;
    //Delete todo
    if (item.classList[0]==="trash-btn"){
        //Animation
        todo.classList.add('fall');
   
    
          const todo=item.parentElement;
          todo.remove()
       
     
        
    }
    //check mark
    if(item.classList[0]==='complete-btn'){
        const todo=item.parentElement;
        todo.classList.toggle("completed")
    }
}
    
