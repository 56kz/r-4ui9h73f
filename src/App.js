import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      form: ""
    }
  }
  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" placeholder="Empieza a escribir algo" value={this.state.form} onChange={this.updateForm.bind(this)} />
        <p className="repeater">{this.state.form}</p>
      </div>
    );
  }

  updateForm(event) {
    this.setState({
      form: event.target.value
    })
  }
}

export default App;
