import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

import AddTodo from '../components/AddTodo';

import todos from './assets/todos.json';
import './Main.css';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    }
  }

  componentDidMount = () => this.setState({ todos });

  handleOnAddTodo = todo => this.setState({ todos: [...todos, todo] });

  render() {
    return (
      <Fragment>
        <header>
          <Container>
            <Navbar /> 
          </Container>
        </header>
        <main className="main">
          <Container>
            <Row>
              <Col xs={12}>
                <Hero />
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <AddTodo
                  onAddTodo={this.handleOnAddTodo}
                />
              </Col>
            </Row>
          </Container>
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
