import React, { Component } from 'react';
import * as FilterTypes from './../filter-types'

class TodoFooter extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-3 text-center" >
                    {
                        this.props.activeTodoCount>0?<div style={{height:'30px',lineHeight:'30px'}}>还有{this.props.activeTodoCount}件待办事项</div>:null
                    }
                    
                </div>
                <div className="col-md-6 text-center">
                    <button className={`btn ${this.props.filterType === FilterTypes.ALL?'btn-success':'btn-defaylt'} btn-sm`} onClick={()=>this.props.changeFilterType(FilterTypes.ALL)}>全部</button>
                    <button className={`btn ${this.props.filterType === FilterTypes.ACTIVE?'btn-success':'btn-defaylt'} btn-sm`} onClick={()=>this.props.changeFilterType(FilterTypes.ACTIVE)} style={{marginLeft: 10,marginRight: 10}}>已完成</button>
                    <button className={`btn ${this.props.filterType === FilterTypes.COMPLETED?'btn-success':'btn-defaylt'} btn-sm`} onClick={()=>this.props.changeFilterType(FilterTypes.COMPLETED)}>未完成</button>
                </div>
                <div className="col-md-3 text-center">
                    {
                        this.props.completedTodoCount>0?<button className="btn btn-danger btn-sm" onClick={this.props.clearCompleted}>删除已完成</button>:null
                    }
                </div>
            </div>
        );
    }
}

export default TodoFooter;