import React from 'react';
import { Button, ButtonGroup, ListGroup, ListGroupItem } from 'reactstrap';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';

const SortableItem = SortableElement(({ todo: { id, todo, isDone }, onDelete, onDone }) =>
  <ListGroupItem> 
    <span style={{ textDecoration: isDone ? 'line-through' : 'none' }}>
      {todo}
    </span>
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
);

const Todos = SortableContainer(({ todos, onDelete, onDone }) => 
  <ListGroup>
    {todos.map((todo, index) => 
      <SortableItem
        key={`item-${index}`}
        index={index}
        todo={todo}
        onDelete={onDelete}
        onDone={onDone}
      />
    )}
  </ListGroup>
);

export default Todos;