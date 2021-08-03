import React, { Component } from "react";
import data from "./data.json";
import "./styles.css";
//console.log(data);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
    this.log = this.log.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleDropdownChange(e) {
    this.setState({ country: e.target.value });
  }

  log(e) {
    e.preventDefault();
    console.clear();
    console.log("firstName:", this.state.first_name);
    console.log("last_name:", this.state.last_name);
    console.log("country:", this.state.country);
    console.log("email:", this.state.email);
    console.log("phoneNumber:", this.state.phone_number);
    console.log("streetAddress:", this.state.street_address);
  }

  render() {
    return (
      <div className="container">
        <form className="form">
          <h3 role="question1">{this.state.data.questions[0].title}</h3>
          <ul>
            {this.state.data.questions[0].fields.map((item) => {
              return (
                <li key={item.label}>
                  <input
                    type="text"
                    name={item.name}
                    placeholder={item.label}
                    value={this.state[item.name]}
                    onChange={this.handleChange}
                  />
                </li>
              );
            })}
          </ul>
          <h3 role="question2">{this.state.data.questions[1].title}</h3>
          <ul>
            {this.state.data.questions[1].fields.map((item) => {
              if (item.type === "text") {
                return (
                  <li key={item.name}>
                    <input
                      type="text"
                      name={item.name}
                      placeholder={item.label}
                      value={this.state[item.name]}
                      onChange={this.handleChange}
                    />
                  </li>
                );
              } else {
                return (
                  <select name={item.name} onChange={this.handleDropdownChange}>
                    <option>Select {item.name}..</option>
                    {item.options.map((opt) => {
                      return (
                        <option key={opt} value={this.state[opt]}>
                          {opt}
                        </option>
                      );
                    })}
                  </select>
                );
              }
            })}
          </ul>
          <div>
            <button className="btn btn-primary" onClick={(e) => this.log(e)}>
						submit
            </button>
						<footer className="footer" role="log">
							<p>Open your browser console to view logs</p>
						</footer>
          </div>
        </form>
      </div>
    );
  }
}
