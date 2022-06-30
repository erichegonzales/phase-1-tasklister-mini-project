document.addEventListener("DOMContentLoaded", () => {
  // your code here
  class Task {
    constructor(input, priorityLevel) {
      this.input = input
      this.priorityLevel = priorityLevel
    }

    input() {
      return this.input;
    }

    priorityLevel() {
      return this.priorityLevel
    }
  }
  
  const listOfTasks = [];

  document.addEventListener('submit', function (event) {
    event.preventDefault();

    let taskList = document.getElementById('tasks')
    let taskInput = document.getElementById('new-task-description').value
    let dropDown = document.getElementById('priority')
    let priority = dropDown.options[dropDown.selectedIndex].value

    const task = new Task(taskInput, priority)
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
    list.innerHTML = "<h2>My To Dos:</h2>"


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

      let btn = document.createElement('button')
      btn.innerHTML = "x"
      li.append(btn)

      btn.onclick = function () {
        li.remove()

        listOfTasks.splice(listOfTasks.indexOf(item), 1)
      }
      list.appendChild(li);
    })

    const highTitle = document.createElement('h4')
    highTitle.textContent = "High Priority"
    const highPosition = document.querySelector('.high')
    if (highPosition !== null) {
      list.insertBefore(highTitle, highPosition)
    }

    const medTitle = document.createElement('h4')
    medTitle.textContent = "Medium Priority"
    const medPosition = document.querySelector('.med')
    if (medPosition !== null) {
      list.insertBefore(medTitle, medPosition)
    }

    const lowTitle = document.createElement('h4')
    lowTitle.textContent = "Low Priority"
    const lowPosition = document.querySelector('.low')
    if (lowPosition !== null) {
      list.insertBefore(lowTitle, lowPosition)
    }

    document.getElementById('new-task-description').value = ""

  })
});


    // task.append(`${dropDown.options[dropDown.selectedIndex].value} priority: ${taskInput}`)
    // taskList.append(task)

// empty array
// create an object function


// class Task {
//   constructor(input, priorityLevel) {
//     this.input = input
//     this.priorityLevel = priorityLevel
//   }

//   input() {
//     return this.input;
//   }

//   priorityLevel() {
//     return this.priorityLevel
//   }
// }

// const one = new Task("coffee", "1")
// const two = new Task("asdf", "3")
// const three = new Task("fdgad", "1")

// const four = new Task("agfa", "2")
// const five = new Task("aewdv", "3")
// const six = new Task("thwrte", "2")



// console.log(one)

// const emptyArr = [];

// emptyArr.unshift(one)
// emptyArr.unshift(two)
// emptyArr.unshift(three)
// emptyArr.unshift(four)
// emptyArr.unshift(five)
// emptyArr.unshift(six)

// console.log(emptyArr)

// function sortLevel(obj1, obj2) {
//   if (obj1.priorityLevel < obj2.priorityLevel) {
//     return -1
//   }
//   if (obj1.priorityLevel > obj2.priorityLevel) {
//     return 1
//   }
//   return 0
// }

// console.log(emptyArr.sort(sortLevel))


