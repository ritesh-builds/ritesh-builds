const addBtn = document.getElementById('todo-btn');
const todoInput = document.getElementById('todo-input');
const todoItemsContainer = document.getElementById('todo-items-container');

addBtn.addEventListener('click' , function(){
    const value = todoInput.value;
    console.log('User Entered' , value);

   

      const li = document.createElement('li');   // creation of li tag <li></li>
      li.innerText = value;      // input the value of li tag by user  <li>{value}</li>
 
      const delButton = document.createElement('button');
      delButton.innerText = 'remove';

 delButton.addEventListener('click' , function(){
        li.remove();
    })

li.appendChild(delButton);
     
      todoItemsContainer.appendChild(li);
      todoInput.value = '';

})




