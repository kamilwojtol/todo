// Selectors
const input = document.querySelector('.input__text');
const send = document.querySelector('.input__send');

const wrapper = document.querySelector('.todo__wrapper');
const element = document.querySelector('.todo__element');
const list = document.querySelector('.todo__list');
const text = document.querySelector('.todo__text');
const deleteBtn = document.querySelector('.todo__delete');
const completeBtn = document.querySelector('.todo__complete');

// Event listeners
send.addEventListener('click', addTask);
document.addEventListener('click', removeTask);
document.addEventListener('click', completeTask);


// Functions
function addTask(event) {

    // Prevent default
    event.preventDefault()

    // Check if input isn't empty
    if (input.value !== "") {

    // Take value from input
    let inputValue = input.value;
    
    // Create li
    let todoLi = document.createElement('li');

    // Set attribute to li
    todoLi.classList.add('todo__element');

    // Append li to ul
    list.appendChild(todoLi);

    // Create paragraph
    let todoParagraph = document.createElement('p');

    // Set class to paragraph
    todoParagraph.classList.add('todo__text');

    // Set text of paragraph
    todoParagraph.innerText = inputValue;

    // Append paragraph to li
    todoLi.appendChild(todoParagraph);

    
    

    // Clean input
    input.value = "";

    // Create button div
    let buttonDiv = document.createElement('div');

    // Append div
    todoLi.appendChild(buttonDiv);

    // Set class of button div
    buttonDiv.classList = 'todo__buttons'

    // Create delete button
    let btnCreateDelete = document.createElement('button');

    // Set classes of delete button
    btnCreateDelete.classList.add('todo__delete');
    btnCreateDelete.classList.add('btn');

    // Set icon of delete button
    btnCreateDelete.innerHTML = '<i class="fas fa-trash-alt fa-2x"></i>';

    // Append delete button
    buttonDiv.appendChild(btnCreateDelete);

    // Create complete button
    let btnCreateComplete = document.createElement('button');

    // Set classes of delete button
    btnCreateComplete.classList.add('todo__complete');
    btnCreateComplete.classList.add('btn');

    // Set icon of delete button
    btnCreateComplete.innerHTML = '<i class="fas fa-check fa-2x"></i>';

    // Append delete button
    buttonDiv.appendChild(btnCreateComplete);


    // Remove class from wrapper
    wrapper.classList.remove('non-visible');

    }

    

}
function removeTask(event) {
    // Check target
    const item = event.target;

    // If clicked object is trash icon then delete
    if (item.classList == "fas fa-trash-alt fa-2x") {
        item.parentElement.parentElement.parentElement.remove()
        
        if (list.childElementCount === 0) {
            wrapper.classList.add('non-visible');
        }
           
        
    }
}

function completeTask(event) {
    // Check target
    const item = event.target;

    // If clicked object is trash icon then delete
    if (item.classList == "fas fa-check fa-2x") {
        item.parentElement.parentElement.parentElement.classList.add('complete');   
    }
}

