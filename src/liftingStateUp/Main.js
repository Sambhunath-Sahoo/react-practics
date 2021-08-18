import React, { Component } from "react";

class Main extends Component {

  state = {
    name: "",
  };

  onText = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  render() {
    return (
      <div style={{ backgroundColor: "green" }}>
        <h5>main</h5>
        <Child1 onTextChange={this.onText}/>
        <br />
        <h4>{this.state.name}</h4>
      </div>
    );
  }
}

class Child1 extends Component {

  render() {
    return (
      <div style={{ backgroundColor: "red" }}>
        <h5>child</h5>
        <Child11 {...this.props}/>
      </div>
    );
  }
}

class Child11 extends Component {

  render() {
    return (
      <div style={{ backgroundColor: "yellow" }}>
        <h5>child</h5>
        <input type="text" onChange={this.props.onTextChange} />
      </div>
    );
  }
}



export default Main;
