import React, { Component } from 'react';
import Form from './Form';
import { Glyphicon, Grid, Row, Col, Button, FormGroup, FormControl, ControlLabel, ListGroup, ListGroupItem, ButtonGroup } from 'react-bootstrap';

export default class Timer extends Component {
  constructor(){
    super();
    this.state = {
      on: false,
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
    this.setState({
      title: this.state.title
    });
    console.log('A name was submitted: ' + this.state.title);
    console.log('A name was submitted: ' + this.state.project);
  }

  timer(){
    this.setState({
      on: !this.state.on,
      done: !this.state.done
    });
  }



  render() {
    const title = this.state.title
    return (
      <Grid>
      <Row className="show-grid" id="pruebin">
        <Col md={4} mdOffset={1}>
        <Form  title={title}/>
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
                            <Button onClick={this.timer.bind(this)} type="submit" bsStyle="success" >Submit</Button>
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
