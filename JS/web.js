let answerTodo = prompt("오늘을 살자!! //추가 목록 제거 끝");
const todos = [];

while(answerTodo !== '끝'){
    if(answerTodo === '목록'){
    for(let i = 0; i < todos.length; i++){
        console.log(`${i}: ${todos[i]}`);
    }console.log('오늘 할 일들!!')}
    else if (answerTodo === '추가'){
        const addTodo = prompt("무엇을 추가 할래?");
        todos.push(addTodo);
        console.log(`그래 ${addTodo} 추가했어!!`)
    }else if (answerTodo === '제거'){
        const deleteTodo = parseInt(prompt("무엇을 제거할래??"));
        if (!Number.isNaN(deleteTodo)){
            const deleted = todos.splice(deleteTodo, 1);
            console.log(`응, ${deleted}을 제거했어`);
    } else {
        console.log("숫자로 대답해줘");
}}
    answerTodo = prompt("오늘을 살자!! //추가 목록 제거 끝")}

console.log("좋은 하루 보내!!");
