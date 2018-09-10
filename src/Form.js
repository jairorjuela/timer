import React, { Component } from 'react';
import { Grid, Row, Col, Button, FormGroup, FormControl, ControlLabel, ListGroup, ListGroupItem, ButtonGroup  } from 'react-bootstrap';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col md={4} mdOffset={1}>
            <ListGroup>
              <form onSubmit={this.handleSubmit}>
                <ListGroupItem>
                  <FormGroup bsSize="large" >
                    <ControlLabel >Title</ControlLabel>
                    <FormControl type="text" placeholder="Ingrese el Título" value={this.state.value} onChange={this.handleChange} />
                    <ControlLabel >Project</ControlLabel>
                    <FormControl type="text" placeholder="Ingrese el Proyecto" />
                  </FormGroup>
                  <ButtonGroup bsSize="large">
                    <Button type="submit" bsStyle="success">Submit</Button>
                    <Button type="submit" bsStyle="danger">Cancel</Button>
                  </ButtonGroup>
                </ListGroupItem>
              </form>
            </ListGroup>
          </Col>
        </Row>
      </Grid>
    );
  }
}
