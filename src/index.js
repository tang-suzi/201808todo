import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import TodoApp from './TodoApp/index'
import TodoModel from './TodoApp/TodoModel/index'

let model = new TodoModel();
function render(){
    ReactDOM.render(
        <TodoApp model={model}/>,
        document.getElementById('root')
    )
}
model.subscribt(render);
render();
