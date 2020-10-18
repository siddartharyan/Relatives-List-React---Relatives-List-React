import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    let relativeList = ["siddarth", "Aryan"];
    return (
      <>
        <ol key="relativeList">
          {relativeList.map((relativeListItem, index) => (
            <li key={`relativeListItem${index + 1}`}>{relativeListItem}</li>
          ))}
        </ol>
      </>
    );
  }
}

export default App;
