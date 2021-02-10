import todosService from '../services/todos.services';

export default{
    listTodos,
    createTodo,
    deleteTodo
}

function listTodos(){
    return dispatch => {
        dispatch ({ type: 'LIST_TODOS_REQUEST'});
        todosService.listTodos()
        .then(todos => dispatch({
            type: 'LIST_TODOS_SUCCESS', todos
        }))
        .catch(error =>
            dispatch({
                type: 'FAILURE', error
            })
        )
    }
}

function createTodo(content){
    return dispatch => {
        dispatch ({ type: 'CREATE_TODOS_REQUEST'});
        todosService.createTodo(content)
        .then(todo => dispatch({
            type: 'CREATE_TODOS_SUCCESS', todo
        }))
        .catch(error =>
            dispatch({
                type: 'FAILURE', error
            })
        )
    }
}

function deleteTodo(id){
    return dispatch => {
        dispatch ({ type: 'DELETE_TODO_REQUEST'});
        todosService.deleteTodo(id)
        .then(todo => dispatch({
            type: 'DELETE_TODO_SUCCESS', todo
        }))
        .catch(error =>
            dispatch({
                type: 'FAILURE', error
            })
        )
    }
}