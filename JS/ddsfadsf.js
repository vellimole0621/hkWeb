const todos = [];
 
let answerTodo = prompt("what is your plan");
 
while (answerTodo !== 'done') {
    if (answerTodo === 'check') {
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
            console.log('There are to do list');
        }
    } else if (answerTodo === 'add') {
        const addTodo = prompt("what do you want to add?");
        todos.push(addTodo);
        console.log(`ok we add ${addTodo} in your plan`);
    } else if (answerTodo === 'delete') {
        const deleteTodo = prompt("what do you want to delete");
        const delectedTodo = todos.splice(deleteTodo, 1);
    } else {
        console.log("Please Enter Correctly");
    }
    answerTodo = prompt("what is your plan");
}
 
console.log("Have a nice day")