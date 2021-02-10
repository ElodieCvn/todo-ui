import { bindActionCreators } from "redux";

const  initState = {
    list : [],
    loading: false
}
export default function(state = initState, action){
    
    switch(action.type){
        case 'LIST_TODOS_REQUEST':
            return{
                ...state,
                loading: true
            }
        case 'LIST_TODOS_SUCCESS':
            return{
                ...state,
                list: action.todos,
                loading: false
            }
        case 'CREATE_TODOS_SUCCESS':
            return{
                ...state,
                list: [
                    ...state.list,
                    action.todo
                ],
            }
        case 'DELETE_TODO_SUCCESS':
            return{
                ...state,
                list: state.list.filter(todo => todo._id != action.todo._id)
            }
        case 'FAILURE':
            return{
                ...state,
                loading: false
            }
        default:
         return state ;
    }
}