import React from 'react';
import styled from 'styled-components';

import Header from './header/header';
import TodoList from './todo-list/todo-list';
import Footer from './footer/footer';

import './style.css';

class App extends React.Component {
  state = {
    listItems: [],
    filterBy: 'all'
  };

  componentDidMount(){
    let storage = this.state.listItems;
    let filter = this.state.filterBy;

    const getData = localStorage.getItem('list');
    const getFilter = localStorage.getItem('filter');

    if(getData){
      storage = JSON.parse(getData)
    }
    if(getFilter){
      filter = getFilter
    }

    this.setState({
      listItems: storage,
      filterBy: filter
    });    
  }

  filterCallback = (value) => {
    this.setState({
      filterBy: value
    });
  }

  inputCallback = (value) => {
    localStorage.setItem('list', JSON.stringify(value));
    this.setState({
      listItems: value
    });

    // console.log(this.state.listItems);
  }

  filter = () => {
    let filtered;

    switch (this.state.filterBy) {
      case 'all':
        filtered = 'all';
        break;

      case 'active':
        filtered = true;
        break;

      case 'completed':
        filtered = false;
        break;

      default:
        
        break;
    }

    return filtered;
  }

  render(){
    return (
      <Container>
        <Header
          parentCallback={this.inputCallback}
          listItems={this.state.listItems}
        />
        <TodoList
          parentCallback={this.inputCallback}
          listItems={this.state.listItems}
          filterBy={this.filter()}
        />
        <Footer
          parentCallback={this.inputCallback}
          filterCallback={this.filterCallback}
          listItems={this.state.listItems}
        />
      </Container>
    )
  }
}

export default App;

const Container = styled.section`
  max-width: 550px;
  width: 100%;
  margin: 0 auto;
`;