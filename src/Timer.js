import React, { Component } from 'react';
import Form from './Form';
import { Glyphicon, Grid, Row, Col, Button, FormGroup, FormControl, ControlLabel, ListGroup, ListGroupItem, ButtonGroup, Panel} from 'react-bootstrap';

export default class Timer extends Component {
  constructor(){
    super();
    this.state = {
      on: false,
      no: false,
      timers: [],
      title: '',
      project: '',
      title1: '',
      project1: '',
      edit: [],
      id: 1,
      done: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.editHandleChange = this.editHandleChange.bind(this);
    this.editHandleChange1 = this.editHandleChange1.bind(this);
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

  editHandleChange(event) {
    this.setState({
      title1: event.target.value
    });
  }

  editHandleChange1(event) {
    this.setState({
      project1: event.target.value
    });
  }

  handleSubmit(event) {
    const id = this.state.id
    if(this.state.title === '' && this.state.project === ''){
      this.setState({
        id: id + 1,
        timers: this.state.timers.concat({id: id, title: 'title', project: 'project'}),
        title: '',
        project: '',
        on: !this.state.on,
        done: !this.state.done
      });
    }
    else if(this.state.title === '' && this.state.project !== ''){
      this.setState({
        id: id + 1,
        timers: this.state.timers.concat({id: id, title: 'title', project: this.state.project}),
        title: '',
        project: '',
        on: !this.state.on,
        done: !this.state.done
      });
    }
    else if(this.state.title !== '' && this.state.project === ''){
      this.setState({
        id: id + 1,
        timers: this.state.timers.concat({id: id, title: this.state.title, project: 'project'}),
        title: '',
        project: '',
        on: !this.state.on,
        done: !this.state.done
      });
    }
    else{
      this.setState({
        id: id + 1,
        timers: this.state.timers.concat({id: id, title: this.state.title, project: this.state.project}),
        title: '',
        project: '',
        on: !this.state.on,
        done: !this.state.done
      });
    }
    event.preventDefault();
  }

  handleSubmit1(id, event) {
    this.setState({
      timers: this.state.timers.map((timer) =>
        timer.id === id ? {id: id, title: this.state.title1, project: this.state.project1} : timer
      ),
      title1: '',
      project1: '',
      edit: []
    })
    event.preventDefault();
  }

  timer(){
    this.setState({
      on: !this.state.on,
      done: !this.state.done
    });
  }

  editCancel(event){
    this.setState({
      edit: []
    });
    event.preventDefault();
  }

  editForm(id, event){
    var found = this.state.timers.find(function(element) {
      return element.id === id;
    });
    this.setState({
      no: !this.state.no,
      edit: this.state.edit.concat(found),
    });
    event.preventDefault();
  }

  deleteForm(id, event){
    this.setState(prevState => {
      const timers = prevState.timers.filter(timer => timer.id !== id);
      return { timers };
    });
  }

  render() {

    const sidebar =
    <div >
      {this.state.timers.map((timer) =>
        <Panel key={timer.id}>
          <Panel.Body>
            <Row className="show-grid">
              <Col md={12}>
                <h2 align="left">{timer.title}</h2>
                <h4 className="text-muted" align="left">{timer.project}</h4>
              </Col>
            </Row>
            <Row className="show-grid">
              <Col md={9} mdPush={4}>
                <span onClick={this.deleteForm.bind(this, timer.id)}>
                  <Glyphicon glyph="trash" />
                </span>
              </Col>
              <Col md={2}>
                <span onClick={this.editForm.bind(this, timer.id)}>
                  <Glyphicon glyph="pencil" />
                </span>
              </Col>
            </Row>
            <Form />
          </Panel.Body>
        </Panel>
      )}
    </div>

    const edits =
    <div>
    {this.state.edit.map((edit) =>
      <form onSubmit={this.handleSubmit1.bind(this, edit.id)} key={edit.id}>
      <ListGroupItem >
        <FormGroup bsSize="large" >
          <ControlLabel >Title</ControlLabel>
          <FormControl type="text" placeholder={edit.title} onChange={this.editHandleChange} required/>
          <ControlLabel >Project</ControlLabel>
          <FormControl type="text" placeholder={edit.project} onChange={this.editHandleChange1} required/>
        </FormGroup>
        <ButtonGroup bsSize="large">
          <Button  type="submit" bsStyle="success" >Submit</Button>
          <Button onClick={this.editCancel.bind(this)} bsStyle="danger">Cancel</Button>
        </ButtonGroup>
      </ListGroupItem>
          </form>
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

              <Grid>
                <Row className="show-grid">
                  <Col md={4} mdOffset={1}>
                    <ListGroup>
                      <div>
                        {edits}
                      </div>
                    </ListGroup>
                  </Col>
                </Row>
              </Grid>

            <Button onClick={this.timer.bind(this)} className={this.state.done ? 'done' : null}>
              <Glyphicon glyph="plus" />
            </Button>
          </Col>
        </Row>
      </Grid>
    );
  }
}
