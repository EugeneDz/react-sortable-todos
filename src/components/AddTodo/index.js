import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
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
      <Form inline onSubmit={this.handleOnSubmit}>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input
            type="text"
            name="text"
            placeholder="Enter your todo"
            value={todo}
            onChange={this.handleOnChange}
          />
        </FormGroup>
        <Button
          outline color="primary"
        >
          <span>
            <Icon icon={plus} />
            {' '}
            Add Todo
          </span>
        </Button>
      </Form>
    )
  }
}

export default AddTodo;
