var todoList = []

function togleAddToDo() {
    const userInput = prompt('Inserte un Tarea', "Ej.: Pasear al perro")
    console.log(userInput)
    todoList.push(userInput)
}

function showItems() {
    todoList.forEach(el => document.write(`<br>${el}\n</br>`))
}