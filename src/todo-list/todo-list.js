import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

import TodoItem from './todo-item';

class TodoList extends React.Component {
  render() {
    return (
      <ListGroup as="ul">
        {this.props.listItems.map((item, index) => (
          <TodoItem
            index={index}
            active={item.active}
            dataId={item.id}
            key={item.id}
            value={item.text}
            parentCallback={this.props.parentCallback}
            listItems={this.props.listItems}
            filterBy={this.props.filterBy}
          />
        ))}
      </ListGroup>
    )
  }
}

export default TodoList;