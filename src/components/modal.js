import React from 'react';
import TodosList from './create-todo';
export default class ModalForm extends React.Component {

    render() {
        return (
            <div className="mdoalform">
            <button type="button" className="btn btn-info" data-toggle="modal" data-target="#myModal">Create Task</button>
            <div className="modal fade" id="myModal" role="dialog">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button type="button" className="close" data-dismiss="modal">&times;</button>
                      <h4 className="modal-title">Create a New Task</h4>
                    </div>
                    <div className="modal-body">
                      <TodosList todos={this.props.todos} createTask={this.props.createTask} />
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        );
    }

}