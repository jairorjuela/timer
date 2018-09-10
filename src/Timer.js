import React, { Component } from 'react';
import Form from './Form'
import { Grid, Row, Col, Button, Glyphicon } from 'react-bootstrap';

export default class Timer extends Component {
  constructor(){
    super();
    this.state = {
      on: false
    };
  }

  timer(){
    this.setState({
      on: !this.state.on
    });
  }

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col md={6} mdOffset={3}>
            {this.state.on && <Form /> }
            <br />
            <br />
            <Button onClick={this.timer.bind(this)} >
              <Glyphicon glyph="plus" />
            </Button>
          </Col>
        </Row>
      </Grid>

    );
  }
}
