

document.addEventListener("DOMContentLoaded", () => {
  // your code here

  document.addEventListener('submit', function (event) {
    event.preventDefault();




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
      
      toLi() {
        let li = document.createElement('li')
        return li;
      }
    }

    let taskList = document.getElementById('tasks')
    let taskInput = document.getElementById('new-task-description').value
    const task = new Task(toLi(taskInput), priority)
    // const li = task.toLi()
    // let task = document.createElement('li')

    const listOfTasks = [];

    const dropDown = document.getElementById('priority')
    let priority = dropDown.options[dropDown.selectedIndex].value
    task.append(`${dropDown.options[dropDown.selectedIndex].value} priority: ${taskInput}`)


    
    // if (priority == 'high') {
    //   task.style.color = 'red'
    // } else if (priority == 'med') {
    //   task.style.color = '#ffcc00'
    // } else {
    //   task.style.color = 'green'
    // }



    function sortTasks(obj1, obj2) {
      if (obj1.priorityLevel < obj2.priorityLevel) {
        return -1
      }
      if (obj1.priorityLevel > obj2.priorityLevel) {
        return 1
      }
      return 0
    }

    listOfTasks.sort(sortTasks))



    taskList.append(task)
    document.getElementById('new-task-description').value = ""

    let btn = document.createElement('button')
    btn.innerHTML = "x" // make button red
    task.append(btn)

    btn.onclick = function () {
      task.remove(taskInput)
    }
  })
});

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


