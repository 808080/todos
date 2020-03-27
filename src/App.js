import React from 'react';
import styled from 'styled-components';

import Header from './header/header';
import TodoList from './todo-list/todo-list';
import Footer from './footer/footer';

const LIST_STORAGE_NAME = 'list';
const list = {
  get: () => {
    return JSON.parse(localStorage.getItem(LIST_STORAGE_NAME));
  },
  set: (list) => {
    return localStorage.setItem(LIST_STORAGE_NAME, JSON.stringify(list));
  }
};

class App extends React.Component {
  state = {
    listItems: list.get() || [],
    filterBy: localStorage.getItem('filter') || 'all'
  };

  onListFilter = (value) => {
    this.setState({
      filterBy: value
    });    
  }

  onListChange = (listItems) => {
    list.set(listItems);
    this.setState({
      listItems
    });
  }

  render() {
    return (
      <Container>
        <Header
          onListChange={this.onListChange}
          listItems={this.state.listItems}
        />

        <TodoList
          onListChange={this.onListChange}
          listItems={this.state.listItems}
          filterBy={this.state.filterBy}
        />

        <Footer
          onListChange={this.onListChange}
          onListFilter={this.onListFilter}
          listItems={this.state.listItems}
          currentFilter={this.state.filterBy}
        />
      </Container>
    )
  }
}

const Container = styled.section`
  max-width: 550px;
  width: 100%;
  margin: 10px auto 40px;
  background: #fff;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  line-height: 1.4em;
  font: 24px 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 300;
  color: #4d4d4d;
`;

export default App;