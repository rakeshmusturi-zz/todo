import _ from 'lodash';
import React from 'react';
import TodosListHeader from './todos-list-header';
import TodoListItem from './todos-list-item';

export default class TodosList extends React.Component {
    returnItems(){
            return _.map(this.props.todos, (todos,index)=> <TodoListItem key={index} {...todos} />);
        }
    render(){
        return(
            <div className="">
            <TodosListHeader />
            <div className="items">
                {this.returnItems()}
            </div>

            </div>
            );
    }
}