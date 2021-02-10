import React from 'react';
import {connect} from 'react-redux';
import todosActions from '../actions/todos.action';

export default

@connect()

class TodoItem extends React.PureComponent{
    handleDelete = () =>{
        const { dispatch, todo } = this.props;
        dispatch(todosActions.deleteTodo(todo._id));
    }

    render(){
        const { todo } = this.props
        return( 
            <li className="todo-item">
                <input type="checkbox"/>
                <span className="todo-content">{todo.content}</span>
                <button
                onClick={this.handleDelete}> X
                    </button>
             </li>
        );
    }
}