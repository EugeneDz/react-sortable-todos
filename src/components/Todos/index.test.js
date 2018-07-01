import React from 'react';
import ReactDOM from 'react-dom';
import Todos from './index.js';

import todos from '../../store/todos.json';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Todos todos={todos} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
