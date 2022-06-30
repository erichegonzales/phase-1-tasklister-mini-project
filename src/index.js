document.addEventListener("DOMContentLoaded", () => {
  // your code here

  // making a task object
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
  
  // array of list of tasks to add task objects into later
  const listOfTasks = [];

  // event when user clicks the submit button
  document.addEventListener('submit', function (event) {
    event.preventDefault(); // prevents submit default actoin

    let taskList = document.getElementById('tasks') // stores undordered list in HTML
    let taskInput = document.getElementById('new-task-description').value // stores what user wrote in browser
    let dropDown = document.getElementById('priority') // stores the dropdown HTML element to access the options
    let priority = dropDown.options[dropDown.selectedIndex].value // stores and iterates through dropdown options 
    let date = document.getElementById('due-date-task').value // stores the date from the

    // creates a new task
    const task = new Task(taskInput, priority, date)
    listOfTasks.push(task) // adds the task to the end of array

    // compare function to access the value of an object with another
    // priorityLevel values in HTML: 1-high, 2-med, 3-low
    function compareTasks(obj1, obj2) {
      if (obj1.priorityLevel < obj2.priorityLevel) {
        return -1 // if one priority is higher (lower number) than another
      }
      if (obj1.priorityLevel > obj2.priorityLevel) {
        return 1 // if one priority is lower (higher number) than another
      }
      return 0 // if two priorities are the same
    }

    // sorting the tasks by return value of the comparator
    listOfTasks.sort(compareTasks)

    // to avoid re-appending the list to itself
    // recreate the list <ul> by clearing out the content of the old list
    // and append all the elements to a new list
    list.innerHTML = "<ul style='list-style: none'> <h2>My To Dos:</h2> </ul>"

    // grabbing the list <ul< in the HTML to append list items to it 
    const tasks = document.getElementsByTagName('ul')[0]

    // for loop to append create <li> list element to the <ul> list
    listOfTasks.forEach((item) => {
      let li = document.createElement('li'); // creating the <li> element
      li.innerText = item.input; // making the content of the <li> be the user input
      if (item.priorityLevel == '1-high') {
        li.style.color = 'red' // changing the color of the text depending on priority level
        li.classList.add('high') // adding class to the element to access them later
      } else if (item.priorityLevel == '2-med') {
        li.style.color = '#ffcc00' // readable yellow color
        li.classList.add('med')
      } else {
        li.style.color = 'green'
        li.classList.add('low')
      }

      // appending a line break and a due date (accessed from the object input)
      li.append(document.createElement('br'), 'Due: ', item.dueDate)
    
      // creating a button to edit a task
      let editBtn = document.createElement('button')
      editBtn.innerText = "Edit" // the name of the button
      li.append(document.createElement('br'), editBtn) // line break so buttons are on new line

      // when click the button, toggle from what it wasn't before
      // (e.g. if it was on edit mode, click to make it non edit mode)
      editBtn.onclick = () => {
          li.contentEditable = !li.isContentEditable;
      }

      // creating a button to delete a task
      let deleteBtn = document.createElement('button')
      deleteBtn.innerText = "Delete"
      li.append(deleteBtn)

      deleteBtn.onclick = function () {
        li.remove()

        // removing the index of the list array, second parameter 1 is removing only one element
        // splice(star, deleteCount)
        listOfTasks.splice(listOfTasks.indexOf(item), 1)
      }

      // appending the <li> element to the <ul> list tasks
      tasks.appendChild(li);
    })

    const highTitle = document.createElement('h4') // creating an <h4> title element for the high priority tasks
    highTitle.textContent = "High Priority" // setting up the title
    const highPosition = document.querySelector('.high') // selecting all high priority <li> elements
    if (highPosition !== null) { 
      // if there is a high priority task that has been made
      // (if not, don't create the title yet)
      // create a title before the first priority level task
      tasks.insertBefore(highTitle, highPosition) 
    }

    // comments above apply to medium and low priority tasks

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

    // clears the task description input box for a new task input (after a task is submitted)
    document.getElementById('new-task-description').value = ""

  })
});