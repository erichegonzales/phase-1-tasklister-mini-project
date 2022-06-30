document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // making an object of task
  class Task {
    constructor(input, priorityLevel, dueDate) {
      this.input = input
      this.priorityLevel = priorityLevel
      this.dueDate = dueDate;
    }

    input() {
      return this.input;
    }

    priorityLevel() {
      return this.priorityLevel
    }

    dueDate() {
      return this.dueDate
    }
  }
  
  const listOfTasks = [];

  document.addEventListener('submit', function (event) {
    event.preventDefault();

    let taskList = document.getElementById('tasks')
    let taskInput = document.getElementById('new-task-description').value
    let dropDown = document.getElementById('priority')
    let priority = dropDown.options[dropDown.selectedIndex].value
    let date = document.getElementById('due-date-task').value

    const task = new Task(taskInput, priority, date)
    listOfTasks.unshift(task)

    function sortTasks(obj1, obj2) {
      if (obj1.priorityLevel < obj2.priorityLevel) {
        return -1
      }
      if (obj1.priorityLevel > obj2.priorityLevel) {
        return 1
      }
      return 0
    }

    listOfTasks.sort(sortTasks)
    list.innerHTML = "<ul style='list-style: none'> <h2>My To Dos:</h2> </ul>"
    const tasks = document.getElementsByTagName('ul')[0]

    style = 'list-style: none'
    listOfTasks.forEach((item) => {
      let li = document.createElement('li');
      li.innerText = item.input;
      if (item.priorityLevel == '1-high') {
        li.style.color = 'red'
        li.classList.add('high')
      } else if (item.priorityLevel == '2-med') {
        li.style.color = '#ffcc00'
        li.classList.add('med')
      } else {
        li.style.color = 'green'
        li.classList.add('low')
      }

      li.append(document.createElement('br'), 'Due: ', item.dueDate)
    
      // button to edit a task
      let editBtn = document.createElement('button')
      editBtn.innerText = "Edit"
      li.append(document.createElement('br'), editBtn)

      editBtn.onclick = () => {
          li.contentEditable = !li.isContentEditable;
      }

      // button to delete a task
      let deleteBtn = document.createElement('button')
      deleteBtn.innerText = "Delete"
      li.append(deleteBtn)

      deleteBtn.onclick = function () {
        li.remove()

        listOfTasks.splice(listOfTasks.indexOf(item), 1)
      }

      tasks.appendChild(li);
    })

    const highTitle = document.createElement('h4')
    highTitle.textContent = "High Priority"
    const highPosition = document.querySelector('.high')
    if (highPosition !== null) {
      tasks.insertBefore(highTitle, highPosition)
    }

    const medTitle = document.createElement('h4')
    medTitle.textContent = "Medium Priority"
    const medPosition = document.querySelector('.med')
    if (medPosition !== null) {
      tasks.insertBefore(medTitle, medPosition)
    }

    const lowTitle = document.createElement('h4')
    lowTitle.textContent = "Low Priority"
    const lowPosition = document.querySelector('.low')
    if (lowPosition !== null) {
      tasks.insertBefore(lowTitle, lowPosition)
    }

    document.getElementById('new-task-description').value = ""

  })
});

/*
 make edit button under the due date
 only edit text? or due date?

 change the content of the task (andor due date)

 saves

*/