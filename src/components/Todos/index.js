import React from 'react';
import { Button, ButtonGroup, ListGroup, ListGroupItem } from 'reactstrap';
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
import { Icon } from 'react-icons-kit';
import { archive } from 'react-icons-kit/fa/archive';
import { check } from 'react-icons-kit/fa/check';
import { bars } from 'react-icons-kit/fa/bars';


const DragHandle = SortableHandle(() => <Icon icon={bars} />); 

const SortableItem = SortableElement(({ todo: { id, todo, isDone }, onDelete, onDone }) =>
  <ListGroupItem>
    <DragHandle />
    {' '}
    <span style={{ textDecoration: isDone ? 'line-through' : 'none' }}>
      {todo}
    </span>
    <ButtonGroup>
      <Button
        outline color="primary" size="sm"
        onClick={() => onDone(id)}
      >
        <span>
          <Icon icon={check} />
          {' '}
          Done
        </span>
      </Button>
      <Button
        outline color="primary" size="sm"
        onClick={() => onDelete(id)}
      >
        <span>
          <Icon icon={archive} />
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