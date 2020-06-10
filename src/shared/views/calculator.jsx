/* eslint-disable react/no-access-state-in-setstate,no-restricted-globals */
import React, { Component } from 'react';
import {
  Button, Col, Form, Row,
} from 'react-bootstrap';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      _input: 0,
      _prev: 0,
      _toZero: false,
      _symbol: null,
    };
  }

  handlePercentage = () => {
    this.setState({
      _input: this.state._input / 100,
      _toZero: true,
    });
  };

  handleClear = () => {
    this.setState({ _input: '0' });
  };

  handlePlusMinus = () => {
    this.setState({
      _input:
        this.state._input > 0
          ? -this.state._input
          : Math.abs(this.state._input),
    });
  };

  handleCalculate = () => {
    const value = this.state._input;
    if (this.state._symbol) {
      switch (this.state._symbol) {
        case '+':
          this.setState({
            _input:
              (Number(this.state._prev) || 0)
              + Number(value),
            _symbol: null,
          });
          break;
        case '-':
          this.setState({
            _input:
              (Number(this.state._prev) || 0)
              - Number(value),
            _symbol: null,
          });
          break;
        case '/':
          this.setState({
            _input:
              ((this.state._prev) || 0)
              / (value),
            _symbol: null,
          });
          break;
        case '*':
          this.setState({
            _input:
              (Number(this.state._prev) || 0)
              * Number(value),
            _symbol: null,
          });
          break;
        default:
      }
    }
  };

  handleClick = (e) => {
    let input = Number(this.state._input) || '';
    if (this.state._toZero) {
      this.setState({ _toZero: false });
      input = '';
    }
    if (isNaN(e.target.value)) {
      this.setState({
        _toZero: true,
        _prev: this.state._input,
        _symbol: e.target.value,
      });
    } else {
      this.setState({ _input: input + e.target.value });
    }
    console.log(this.state);
  };

  handleChange = (e) => {
    this.setState({ _input: e.target.value });
    console.log(this.state);
  };

  calc = () => (
    <div id="calculator">
      <Col md={12}>
        <Form.Control
          type="text"
          className="calcInput"
          onChange={(e) => this.handleChange(e)}
          value={this.state._input}
        />
        <Button
          className="calc"
          onClick={() => this.handleClear()}
        >
          C
        </Button>
        <Button
          className="calc"
          onClick={() => this.handlePlusMinus()}
        >
          {String.fromCharCode(177)}
        </Button>
        <Button
          className="calc"
          onClick={() => this.handlePercentage()}
        >
          %
        </Button>
        <Button
          className="calc"
          value="/"
          onClick={(e) => this.handleClick(e)}
        >
          {String.fromCharCode(247)}
        </Button>
        <br />
        <Button
          className="calc"
          value="7"
          onClick={(e) => this.handleChange(e)}
        >
          7
        </Button>
        <Button
          className="calc"
          value="8"
          onClick={(e) => this.handleChange(e)}
        >
          8
        </Button>
        <Button
          className="calc"
          value="9"
          onClick={(e) => this.handleChange(e)}
        >
          9
        </Button>
        <Button
          className="calc"
          value="*"
          onClick={(e) => this.handleClick(e)}
        >
          {String.fromCharCode(215)}
        </Button>
        <br />
        <Button
          className="calc"
          value="4"
          onClick={(e) => this.handleChange(e)}
        >
          4
        </Button>
        <Button
          className="calc"
          value="5"
          onClick={(e) => this.handleChange(e)}
        >
          5
        </Button>
        <Button
          className="calc"
          value="6"
          onClick={(e) => this.handleChange(e)}
        >
          6
        </Button>
        <Button
          className="calc"
          value="-"
          onClick={(e) => this.handleClick(e)}
        >
          -
        </Button>
        <br />
        <Button
          className="calc"
          value="1"
          onClick={(e) => this.handleChange(e)}
        >
          1
        </Button>
        <Button
          className="calc"
          value="2"
          onClick={(e) => this.handleChange(e)}
        >
          2
        </Button>
        <Button
          className="calc"
          value="3"
          onClick={(e) => this.handleChange(e)}
        >
          3
        </Button>
        <Button
          className="calc"
          value="+"
          onClick={(e) => this.handleClick(e)}
        >
          +
        </Button>
        <br />
        <Button
          className="calc wide"
          value="0"
          onClick={(e) => this.handleChange(e)}
        >
          0
        </Button>
        <Button
          className="calc"
          onClick={() => this.handleCalculate()}
        >
          =
        </Button>
      </Col>
    </div>
  );

  render() {
    return (
      <Row>
        <Col md={12}>
          <h2>Calculator</h2>
          {this.calc()}
        </Col>
      </Row>
    );
  }
}

export default Calculator;
