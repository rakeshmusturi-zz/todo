import React from 'react';

export default class TodosListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
        };
    }

    renderTaskSection() {
        const { task, isCompleted } = this.props;
        const taskStyle = {
            color: isCompleted ? 'green' : 'red',
            cursor: 'pointer'
        };
        
        if (this.state.isEditing) {
            return (
                <div className="tasks">
                    <form onSubmit={this.onSaveClick.bind(this)}>
                        <input type="text" defaultValue={task} ref="editInput" />
                    </form>
                </div>
            );
        }
        if(!this.props.isCompleted){
        return (
            <div className="tasks" style={taskStyle}  onClick={this.props.toggleTask.bind(this, task)}>
                {task}
            </div>
        );
        }
    }

    renderActionsSection() {
        if (this.state.isEditing) {
            return (
                <div className="button">
                    <button onClick={this.onSaveClick.bind(this)}>Save</button>
                    <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
                </div>
            );
        }
if(!this.props.isCompleted){
        return (
            <div className="button">
                <button onClick={this.onEditClick.bind(this)}>Edit</button>
                <button onClick={this.props.deleteTask.bind(this, this.props.task)}>Delete</button>
            </div>
        );
    }
    }

    render() {
        return (
            <div className="blocks">
                {this.renderTaskSection()}
                {this.renderActionsSection()}
            </div>
        );
    }

    onEditClick() {
        this.setState({ isEditing: true });
    }

    onCancelClick() {
        this.setState({ isEditing: false });
    }

    onSaveClick(event) {
        event.preventDefault();

        const oldTask = this.props.task;
        const newTask = this.refs.editInput.value;
        this.props.saveTask(oldTask, newTask);
        this.setState({ isEditing: false });
    }
}
