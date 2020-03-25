import React from 'react';
import TodoItem from './todo-item';

class TodoList extends React.Component {

  render() {
    return (

      <ul id="list">
        {this.props.listItems.map((item, index) => (
          <TodoItem
            index={index}
            active={item.active}
            dataId={item.id}
            key={item.id}
            value={item.text}
            parentCallback={this.props.parentCallback}
            listItems={this.props.listItems}
          />
        ))}
      </ul>
    )
  }
}

export default TodoList;