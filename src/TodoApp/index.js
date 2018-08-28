import React, { Component } from 'react';
import TodoHeader from './TodoHeader/index'
import TodoItem from './TodoItem/index'
import TodoFooter from './TodoFooter/index'
import * as FilterTypes from './filter-types'
import 'bootstrap/dist/css/bootstrap.css'

class TodoApp extends Component {
    constructor(props){
        super(props)
        this.state = {
            filterType: FilterTypes.ALL
        }
    }
    toggle = (id) => {
        let todos = this.state.todos;
        todos = todos.map(todo=>{
            if(todo.id === id){
                todo.completed = !todo.completed;
            }
            return todo
        })
        this.setState({todos})
    }
    remove=(id)=>{
        let todos = this.state.todos;
        let index = todos.findIndex(todo=>todo.id === id);
        todos.splice(index,1)
        this.setState({
            todos
        })
    }
    toggleAll= (e) => {
        let checked = e.target.checked;
        let todos = this.state.todos;
        todos = todos.map(todo=>{
            todo.completed = checked;
            return todo
        })
        this.setState({todos})
    }
    changeFilterType = (filterType)=>{
        this.setState({
            filterType
        })
    }
    clearCompleted = ()=>{
        let todos = this.state.todos;
        todos = todos.filter(todo=>!todo.completed);
        this.setState({todos})
    }
    render() {
        let todos = this.props.model.todos;
        let activeTodoCount = todos.reduce((count, todo)=>count+(todo.completed?0:1),0);
        let completedTodoCount = todos.length - activeTodoCount;
        let showTodos = todos.filter((todo)=>{
            switch(this.state.filterType){
                case FilterTypes.ACTIVE: // 要显示未完成的
                return !todo.completed;
                case FilterTypes.COMPLETED: // 完成的
                return todo.completed
                default:
                return true;
            }
        })
        const main = (
            <ul className="list-group">
                {
                    todos.length>0?<li className="list-group-item">
                    <input type="checkbox" onChange={this.toggleAll} checked={activeTodoCount===0} />{activeTodoCount===0?'取消全选':'全部选择'}
                </li>:null
                }
                {
                    showTodos.map((todo,index)=><TodoItem key={index} todo={todo} toggle={this.toggle} remove={this.remove}></TodoItem>)    
                }
            </ul>
        )
        return (
            <div className="container" style={{marginTop: 20}}>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <TodoHeader addTodo={this.props.model.addTodo}/>
                            </div>
                            <div className="panel-body">
                                {main}
                            </div>
                            <div className="panel-footer">
                                <TodoFooter activeTodoCount={activeTodoCount} changeFilterType={this.changeFilterType}
                                    filterType = {this.state.filterType} clearCompleted = {this.clearCompleted}
                                    completedTodoCount = {completedTodoCount}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoApp;