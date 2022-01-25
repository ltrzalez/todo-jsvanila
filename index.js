class Todo  {
    static count = 1;

    constructor(task){
        this.id = ++this.constructor.count;  
        this.task = task
        this.finished = false
    }
}

var todoList = []

const form = document.getElementById('form')
const todolista = document.getElementById('todoList')
const todoIem = document.getElementById('todoItem').content
 const fragment = document.createDocumentFragment()


function addToDo() {
    const userInput = prompt('Inserte un Tarea', "Ej.: Pasear al perro")
    const newTodo = new Todo(userInput)
    todoList.push(newTodo)
}

function showItems() {
    todoList.forEach(el => document.write(`<p>${el.id}\n - ${el.task}\n</p>`))
}

function showItems2() {
    todolista.innerHTML = ''
    todoList.forEach(el =>{
        console.log(el.id)
        const tmpClone = todoIem.cloneNode(true)
        tmpClone.getElementById("idid").textContent = el.id
        tmpClone.querySelector("p").textContent = el.task
        fragment.appendChild(tmpClone)
    })
    todolista.appendChild(fragment)
}

form.addEventListener('submit', e => {
    e.preventDefault()
    const {value} = input
    value !== '' ? todoList.push(new Todo(value)) : alert("ingrese un tarea ha realizar")
    form.reset()
    showItems2()
})

