import React, { Component } from 'react';
import { Button, Form, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { Icon } from 'react-icons-kit';
import { plus } from 'react-icons-kit/fa/plus';

class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: '',
    }
  }

  handleOnChange = ({ target: { value: todo }}) => this.setState({ todo }); 

  handleOnSubmit = e => {
    e.preventDefault();

    const { onAddTodo } = this.props;
    const { todo } = this.state;
    const id = Date.now().toString();

    onAddTodo({ id, todo, isDone: false });
    this.setState({ todo: '' });
  }

  render() {
    const { todo } = this.state;

    return (
      <Form onSubmit={this.handleOnSubmit}>
        <InputGroup size="lg">
          <Input
            type="text"
            name="text"
            placeholder="Enter your todo"
            value={todo}
            onChange={this.handleOnChange}
          />
          <InputGroupAddon addonType="append">
            <Button color="primary">
              <span>
                <Icon icon={plus} /> {' '} Add Todo
              </span>
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </Form>
    )
  }
}

export default AddTodo;
