import React from 'react';
import { Container, Jumbotron } from 'reactstrap';

import links from '../../config/links';

const Hero = () => (
  <Jumbotron fluid>
    <Container>
      <h1 className="display-3">Hello, world!</h1>
      <p className="lead">This is another one Todo App ...</p>
      <hr className="my-2" />
      <p>
        You can refer to the <a href={links.source.link} target="_blunk">source code</a>,
        maybe you will found something helpful for you.
      </p>
    </Container>
  </Jumbotron>
);

export default Hero;