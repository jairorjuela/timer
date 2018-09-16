import React, { Component } from 'react';
import { Grid, Row, Col, Table} from 'react-bootstrap';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: []
    };
  }

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col md={4} mdOffset={1}>
<h3>{this.props.titles}</h3>
          </Col>
        </Row>
      </Grid>
    );
  }
}
