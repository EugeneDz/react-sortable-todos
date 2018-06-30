import React from 'react';
import { Jumbotron, Button, NavLink } from 'reactstrap';

const Hero = () => (
  <Jumbotron>
    <h1 className="display-3">Hello, world!</h1>
    <p className="lead">This is another one Todo App ...</p>
    <hr className="my-2" />
    <p>You can refer to the source code, maybe you will found something helpful for you.</p>
    <p className="lead">
      <NavLink href="https://github.com/EugeneDz" target="_blunk">
        <Button color="primary">View Source</Button>
      </NavLink>
    </p>
  </Jumbotron>
);

export default Hero;