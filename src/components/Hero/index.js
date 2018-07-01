import React from 'react';
import { Jumbotron, Button, NavLink } from 'reactstrap';


import links from '../../config/links';

const Hero = () => (
  <Jumbotron>
    <h1 className="display-3">Hello, world!</h1>
    <p className="lead">This is another one Todo App ...</p>
    <hr className="my-2" />
    <p>You can refer to the source code, maybe you will found something helpful for you.</p>
    <p className="lead">
      <NavLink href={links.source.link} target="_blunk">
        <Button color="primary">{links.source.title}</Button>
      </NavLink>
    </p>
  </Jumbotron>
);

export default Hero;