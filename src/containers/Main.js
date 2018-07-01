import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { arrayMove } from 'react-sortable-hoc';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

import AddTodo from '../components/AddTodo';
import Todos from '../components/Todos';

import todos from '../store/todos.json';
import './Main.css';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    }
  }

  componentDidMount = () => this.setState({ todos });

  handleOnAddTodo = todo => {
    const { todos } = this.state;
    this.setState({ todos: [...todos, todo] });
  }

  handleOnDoneTodo = id => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);
    todos[index].isDone = !todos[index].isDone;

    this.setState({ todos });
  }

  handleOnDeleteTodo = id => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);
    todos.splice(index, 1);

    this.setState({ todos });
  }

  handleOnSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      todos: arrayMove(this.state.todos, oldIndex, newIndex),
    });
  };

  render() {
    const { todos } = this.state;

    return (
      <Fragment>
        <header>
          <Container>
            <Navbar /> 
          </Container>
        </header>
        <section>
          <Container>
            <Row>
              <Col xs={12}>
                <Hero />
              </Col>
            </Row>
          </Container>
        </section> 
        <main className="container main">
          <aside>
            <Container>
              <Row>
                <Col xs={12}>
                  <AddTodo
                    onAddTodo={this.handleOnAddTodo}
                  />
                </Col>
              </Row>
            </Container>
          </aside>
          <section className="todo-list">
            <Container>
              <Row>
                <Col xs={12}>
                  <Todos
                    todos={todos}
                    onDone={this.handleOnDoneTodo}
                    onDelete={this.handleOnDeleteTodo}
                    onSortEnd={this.handleOnSortEnd}
                    useDragHandle
                  />
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <footer>
          <Container>
            <Row>
              <Col xs={12}>
                <Footer />
              </Col>
            </Row>
          </Container>
        </footer>
      </Fragment>
    );
  };
};

export default Main;
