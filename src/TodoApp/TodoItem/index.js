import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        let todo = this.props.todo;
        return (
            <li className="list-group-item">
                <div className="row">
                    <div className="col-md-1">
                        <input type="checkbox" checked={todo.completed} onChange={()=>this.props.toggle(todo.id)}/>
                    </div>
                    <div className="col-md-10" style={{textDecoration: todo.completed?'line-through':''}}>
                        {todo.title}
                    </div>
                    <div className="col-md-1">
                        <button className="btn btn-danger btn-sm" onClick={()=>this.props.remove(todo.id)}>X</button>
                    </div>
                </div>
            </li>
        );
    }
}

export default TodoItem;