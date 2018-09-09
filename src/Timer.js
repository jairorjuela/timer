import React, { Component } from 'react';
import { PageHeader, Grid, Row, Col, Button, Glyphicon } from 'react-bootstrap';

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
      <div>
      {this.state.on && <h1>holiiii</h1> }

      <Button onClick={this.timer.bind(this)}>
        <Glyphicon glyph="plus" />
      </Button>

      </div>
    );
  }
}
