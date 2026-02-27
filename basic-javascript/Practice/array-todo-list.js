// arrays ia the another type of value and it represents a list of values
//   const num = [10, 20, 30, 40, [11, 22, 33], { name: "vaibhav" }];
//   console.log(num);
// to get the specific value from num array we use the indexing
//   console.log(num[0]);
//   console.log(num[1]);
//   console.log(num[2]);
//   console.log(num[3]);

//   if we want to change the value from array
//   num[0] = 100;
//   console.log(num);
//   console.log(num[0]);

// An array is an object (its a special type of object)
//   console.log(typeof num);
//   console.log(Array.isArray(num));

// arrays are the special type of objects they also have properties and methods
// length
//   console.log(num.length);

//   accessing the last ele from array
//   console.log(num[num.length - 1]);

// the important methods of array
//.push :- this adds the value at the end of an array
//   num.push("lasy ele");
//   console.log(num);

// .splice :- this method removes from an array
// first value :- index that we want to remove
// second value :- number of values to remove
// num.splice(0, 1);
// console.log(num);

//create a empty array to store the values (todo items)
const todoList = [1, 2];

function renderTodoList() {
  let todoListHTML = "";
  // loops through array
  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    // console.log(todo);
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
    console.log(todoListHTML);
  }

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
  // function to add ele to the array
}

function addTodo() {
  const inputEle = document.querySelector(".js-name-input");
  const name = inputEle.value;
  // console.log(name);
  todoList.push(name);
  // console.log(todoList);
  inputEle.value = "";
  renderTodoList();
}
