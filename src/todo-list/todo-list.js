import React from 'react';
import styled from 'styled-components';

import TodoItem from './todo-item';

class TodoList extends React.Component {
  render() {
    return (
      <List>
        {this.props.listItems.map((item, index) => (
          <TodoItem
            index={index}
            item={item}
            key={item.id}
            onListChange={this.props.onListChange}
            listItems={this.props.listItems}
            filterBy={this.props.filterBy}
          />
        ))}
      </List>
    )
  }
}

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export default TodoList;
