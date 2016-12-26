import React from 'react';
import TodoListItem from './todos-list-item';
export default class TodosCompleteItem extends React.Component {

    returnCompleteItems(){
            return _.map(this.props.todos, (todos,index)=>{
                if(todos.isCompleted){
                     const taskStyle = {
                            color: 'green',
                            cursor: 'pointer'
                        };
                    return <div className="tasks" key={index} onClick={this.undotask.bind(this,todos)}>
                        <span style={taskStyle}>{todos.task}</span>
                    </div>
                }
            }
            );
        }
    render() {
        return (
            <div className="completed">
            <h3>Completed Tasks</h3>
            {this.returnCompleteItems()}
            </div>
        );
    }
    undotask(todos){
        todos.isCompleted = false;
        this.props.callbackFunction(todos)
    }
}