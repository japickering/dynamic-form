import React, { Component } from "react";
import data from "./data.json";
import "./styles.css";
//console.log(data);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }

  render() {
    return (
      <div className="App">
        <div className="form-container">
          <form className="form">
            <h3>{this.state.data.questions[0].title}</h3>
            <ul>
              {this.state.data.questions[0].fields.map((item) => {
                return (
                  <li key={item.label}>
                    <input
                      type="text"
                      name={item.name}
                      placeholder={item.label}
                    />
                  </li>
                );
              })}
            </ul>
            <h3>{this.state.data.questions[1].title}</h3>
            <ul>
              {this.state.data.questions[1].fields.map((item) => {
                if (item.type === "text") {
                  return (
                    <li key={item.name}>
                      <input
                        type="text"
                        name={item.name}
                        placeholder={item.label}
                      />
                    </li>
                  );
                } else {
                  return (
                    <select name={item.name}>
                      <option>Select {item.name}..</option>
                      {item.options.map((opt) => {
                        return (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        );
                      })}
                    </select>
                  );
                }
              })}
            </ul>
          </form>
        </div>
      </div>
    );
  }
}
