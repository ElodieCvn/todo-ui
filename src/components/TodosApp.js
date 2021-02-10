import React from 'react';
import { connect } from 'react-redux';
import todosActions from '../actions/todos.action';
import TodoItem from './TodoItems';

const ENTER_KEY = 'Enter';

export default 

@connect(({ todos: {list, loading}}) => ({ todos: list, loading}))

class TodosApp extends React.PureComponent{
    state = {
        newTodoContent:"",
        todos: []
    }

    componentDidMount(){
        const {dispatch} = this.props;
        dispatch(todosActions.listTodos());
    }
    handleSubmit = () => {
        const {dispatch} = this.props;
        const { newTodoContent } = this.state;
        dispatch(todosActions.createTodo(newTodoContent));
        this.setState({ newTodoContent: ''})
    }
    render(){
        const { newTodoContent } = this.state;
        const { todos, loading } = this.props;
        return (
            <div className="todos-root">
                <h1>Todos</h1>
               <div className="todos-header">
                   <input type="checkbox"/>
                   <input type="text" 
                   placeholder="What needs to be done ? " 
                   value={newTodoContent}
                   onChange={({ target: {value}}) =>this.setState({ newTodoContent: value }) }
                   onKeyUp={({ key }) => key == ENTER_KEY && this.handleSubmit()}/>
               </div>
               {loading
               ? <span>Loading...</span>
               : <ul className="todos-list">
                   {todos.map(todo => 
                    <TodoItem 
                    key={`todo_${todo._id}`}
                    todo={todo}/>
                   )}
               </ul>
               }
            </div>
        );
    }
}
