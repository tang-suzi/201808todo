import React, { Component } from 'react';
import TodoApp from '..';

const ENTRY_KEY = 13;
class index extends Component {
    constructor(props){
        super(props)
        // this.state={title: ''}
    }
    // handleChange= (e)=>{
    //     this.setState({title: e.tatget.value})
    // }
    handleKeyUp = (e)=>{
            if(e.keyCode === ENTRY_KEY && e.target.value) {
                let title = e.target.value;
                this.props.addTodo({title})
                e.target.value = ''
                // e.preventDefault();
        }
    }
    render() {
        return (
            <div className="form-group">
                <input type="text" className="form-control" onKeyUp={this.handleKeyUp} autoFocus />
            </div>
        );
    }
}

export default index;