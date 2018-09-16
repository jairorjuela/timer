import React, { Component } from 'react';
import { PageHeader, Grid, Row, Col } from 'react-bootstrap';

import Timer from './Timer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <Row className="show-grid">
            <Col md={12}>
              <PageHeader>
                Timers
              </PageHeader>
            </Col>
          </Row>
          <Row className="show-grid">
              <Timer />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
