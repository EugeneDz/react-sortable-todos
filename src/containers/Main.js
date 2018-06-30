import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

import './Main.css';

const Main = () => (
  <Fragment>
    <header>
      <Container>
        <Navbar /> 
      </Container>
    </header>
    <main className="main">
      <Container>
        <Row>
          <Col xs={12}>
            <Hero />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            Main App
          </Col>
        </Row>
      </Container>
    </main>
    <footer>
      <Container>
        <Row>
          <Col xs={12}>
            <Footer />
          </Col>
        </Row>
      </Container>
    </footer>
  </Fragment>
);

export default Main;
