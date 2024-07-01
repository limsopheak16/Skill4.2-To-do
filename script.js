function fetchTodos() {
    fetch('https://todo-api-beige.vercel.app/api/todos?x-secret-key=9f65ab977aa8be03a346cdc106a707a943f8d33f5148ef3f89c88fdf6df3bffe', {
        method:'Get',
        headers: {
            'x-secret-key': '9f65ab977aa8be03a346cdc106a707a943f8d33f5148ef3f89c88fdf6df3bffe',
        },
        body: JSON.stringify()
    })
    .then(response => response.json())
    .then(data => console.log(data))
    
    .catch((error) => {
        console.error("Error:", error)
    })
  }
 
  document.forms[0].addEventListener("submit", submitForm);
  function submitForm(event) {
    event.preventDefault();
    let taskName = document.getElementById("newTask").value;
    console.log(taskName);
    let TaskPriority = document.getElementById("priority").value;
    console.log(TaskPriority);
    let  CreatedBy = document.getElementById("createdBy").value;
    console.log(CreatedBy);


}
function createTask(){
    fetch('https://todo-api-beige.vercel.app/api/todos', {
        method:'POST',
        headers: {
            'x-secret-key': '3c9e1f0a4d0f4e9b8b1a2e0d4e3f5a6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify()
    })
    .then(response => response.json())
    .then(data => console.log(data))
    
    .catch((error) => {
        console.error("Error:", error)
    })
   
}