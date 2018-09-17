import React, { Component } from 'react';
import { Glyphicon, Grid, Row, Col, Button, FormGroup, FormControl, ControlLabel, ListGroup, ListGroupItem, ButtonGroup, Panel} from 'react-bootstrap';

export default class Timer extends Component {
  constructor(){
    super();
    this.state = {
      on: false,
      timers: [],
      title: '',
      project: '',
      done: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      title: event.target.value
    });
  }

  handleChange1(event) {
    this.setState({
      project: event.target.value
    });
  }

  handleSubmit(event) {
    if(this.state.title === '' && this.state.project === ''){
      this.setState({
        timers: this.state.timers.concat({title: 'title', project: 'project'}),
        title: '',
        project: '',
        on: !this.state.on,
        done: !this.state.done
      });
    }
    else if(this.state.title === '' && this.state.project !== ''){
      this.setState({
        timers: this.state.timers.concat({title: 'title', project: this.state.project}),
        title: '',
        project: '',
        on: !this.state.on,
        done: !this.state.done
      });
    }
    else if(this.state.title !== '' && this.state.project === ''){
      this.setState({
        timers: this.state.timers.concat({title: this.state.title, project: 'project'}),
        title: '',
        project: '',
        on: !this.state.on,
        done: !this.state.done
      });
    }
    else{
      this.setState({
        timers: this.state.timers.concat({title: this.state.title, project: this.state.project}),
        title: '',
        project: '',
        on: !this.state.on,
        done: !this.state.done
      });
    }
    console.log(this.state.timers);
    event.preventDefault();
  }

  timer(){
    this.setState({
      on: !this.state.on,
      done: !this.state.done
    });
  }

  render() {

    const sidebar =
    <div>
      {this.state.timers.map((timer) =>
        <Panel key={timer.title}>
          <ListGroup>
            <ListGroupItem>
              <h3 align="left">{timer.title}</h3>
              <h4 align="left">{timer.project}</h4>
            </ListGroupItem>
            <Button bsStyle="success">Success</Button>
          </ListGroup>
        </Panel>
      )}
    </div>

    return (
      <Grid>
      <Row className="show-grid" id="pruebin">
        <Col md={6} mdOffset={3}>
        <div>
        {sidebar}
        </div>
        </Col>
      </Row>
        <Row className="show-grid">
          <Col md={6} mdOffset={3}>
            {this.state.on &&
              <Grid>
                <Row className="show-grid">
                  <Col md={4} mdOffset={1}>
                    <ListGroup>
                      <form onSubmit={this.handleSubmit}>
                        <ListGroupItem>
                          <FormGroup bsSize="large" >
                            <ControlLabel >Title</ControlLabel>
                            <FormControl type="text" placeholder="Ingrese el Título" value={this.state.title} onChange={this.handleChange} />
                            <ControlLabel >Project</ControlLabel>
                            <FormControl type="text" placeholder="Ingrese el Proyecto" value={this.state.project} onChange={this.handleChange1} />
                          </FormGroup>
                          <ButtonGroup bsSize="large">
                            <Button  type="submit" bsStyle="success" >Submit</Button>
                            <Button onClick={this.timer.bind(this)} bsStyle="danger">Cancel</Button>
                          </ButtonGroup>
                        </ListGroupItem>
                      </form>
                    </ListGroup>
                  </Col>
                </Row>
              </Grid>
            }
            <Button onClick={this.timer.bind(this)} className={this.state.done ? 'done' : null}>
              <Glyphicon glyph="plus" />
            </Button>
          </Col>
        </Row>
      </Grid>
    );
  }
}
