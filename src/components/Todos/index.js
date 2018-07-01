import React from 'react';
import { Button, ButtonGroup, ListGroup, ListGroupItem } from 'reactstrap';

const Todos = ({ todos, onDelete, onDone }) => (
  <ListGroup>
    {todos.map(({ id, todo, isDone }) => (
      <ListGroupItem
        className={isDone ? 'is-done' : ''}
        key={id}
      >
        {todo}
        {' '}
        <ButtonGroup>
          <Button
            onClick={() => onDone(id)}
          >
            Done
          </Button>
          <Button
            onClick={() => onDelete(id)}
          >
            Delete
          </Button>
        </ButtonGroup>
      </ListGroupItem>
    ))}
  </ListGroup>
);

export default Todos;