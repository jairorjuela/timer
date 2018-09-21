import React, { Component } from 'react';
import { Panel, Button, ButtonGroup, Row, Col } from 'react-bootstrap';

export default class View extends Component {
  constructor(props) {
    super(props);

    this.state = {
    minutes: 0,
    seconds: 0,
    millis: 0,
    running: false
    };

    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleStopClick = this.handleStopClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
  }

  handleStartClick(event) {
    if (!this.state.running) {
      this.interval = setInterval(() => {
        this.tick();
      }, 100)
      this.setState({running: true})
    }
  }

  handleStopClick(event) {
    if (this.state.running) {
      clearInterval(this.interval);
    this.setState({running: false})
    }
  }

  handleResetClick(event) {
    this.handleStopClick();
  this.update(0, 0, 0);
  }

  tick() {
    let millis = this.state.millis + 1;
    let seconds = this.state.seconds;
    let minutes = this.state.minutes;

    if (millis === 10) {
      millis = 0;
      seconds = seconds + 1;
    }

    if (seconds === 60) {
      millis = 0;
      seconds = 0;
      minutes = minutes + 1;
    }

    this.update(millis, seconds, minutes);
  }

  zeroPad(value) {
    return value < 10 ? `0${value}` : value;
  }

  update(millis, seconds, minutes) {
    this.setState({
      millis: millis,
      seconds: seconds,
      minutes: minutes
    });
  }

  render() {
    return (
      <div>
        <Panel.Body >
          <Row className="show-grid">
            <Col md={4} mdPush={4}>
              <h1>{this.zeroPad(this.state.minutes)}</h1>
            </Col>
            <Col md={4} mdPush={2}>
              <h1>: {this.zeroPad(this.state.seconds)}</h1>
            </Col>
            <Col md={4}>
              <h1>: {this.state.millis}</h1>
            </Col>
          </Row>
          <br />
          <Row className="show-grid">
            <Col md={12}>
              <ButtonGroup>
                <Button bsStyle="success" bsSize="lg" onClick={this.handleStartClick}>Start</Button>
                <Button bsStyle="danger" bsSize="lg" onClick={this.handleStopClick}>Stop</Button>
                <Button bsStyle="warning" bsSize="lg" onClick={this.handleResetClick}>Reset</Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Panel.Body>
      </div>
    );
  }
}
