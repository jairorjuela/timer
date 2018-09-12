import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
  }

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col md={4} mdOffset={1}>
            <h1>{this.props.title}</h1>
          </Col>
        </Row>
      </Grid>
    );
  }
}
