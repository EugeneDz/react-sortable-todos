import React from 'react';
import ReactDOM from 'react-dom';
import Todos from './index.js';

const todos = [
  { "id": "1530365497982", "todo": "Learn modern ES6 JavaScript", "isDone": true },
  { "id": "1530365610564", "todo": "Clean up inbox", "isDone": true },
  { "id": "1530365615427", "todo": "Check out Feedly", "isDone": true }
]

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Todos todos={todos} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
