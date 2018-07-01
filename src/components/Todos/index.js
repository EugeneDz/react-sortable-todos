import React from 'react';
import { Button, ButtonGroup, ListGroup, ListGroupItem } from 'reactstrap';
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
import { Icon } from 'react-icons-kit';
import { archive, check, bars } from 'react-icons-kit/fa';

import './style.css';

const DragHandle = SortableHandle(() =>
  <div className="drag-handle">
    <Icon icon={bars} />
  </div>
); 

const SortableItem = SortableElement(({ todo: { id, todo, isDone }, onDelete, onDone }) =>
  <ListGroupItem>
    <DragHandle />
    {' '}
    <span
      className="todo-name"
      style={{ textDecoration: isDone ? 'line-through' : 'none' }}
    >
      {todo}
    </span>
    <ButtonGroup>
      <Button
        color="link" size="sm"
        onClick={() => onDone(id)}
      >
        <span>
          <Icon icon={check} style={{ marginRight: '6px' }} />
          {' '}
          Done
        </span>
      </Button>
      <Button
        color="link" size="sm"
        onClick={() => onDelete(id)}
      >
        <span>
          <Icon icon={archive} style={{ marginRight: '6px' }} />
          {' '}
          Delete
        </span>
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
