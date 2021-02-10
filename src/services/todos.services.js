const API_URL = "http://localhost:3000";

export default{
    listTodos,
    createTodo,
    deleteTodo
}

function apiFetch(path, options){
    const headers = new Headers();
    headers.append("Content-Type","application/json")
    return fetch(`${API_URL}${path}`, {
        headers,
        ...options
    })
    .then(response => response.json())
    .catch(console.error.bind(console))
    ;
}

function listTodos(){
    return apiFetch("/todos")
}

function createTodo(content){
    return apiFetch("/todos", {
        method: 'POST',
    body: JSON.stringify({ content })
    });
}
function deleteTodo(id){
    return apiFetch(`/todos/${id}`, {
        method: 'DELETE'
    });
}