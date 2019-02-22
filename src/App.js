import React, { Component } from "react";

// Components
import Container from "./components/Container";
import NavBar from "./components/NavBar";
import Routes from "./components/Routes/Routes";
// CSS

class App extends Component {
  render() {
    console.log(process.env.REACT_APP_API);
    return (
      <React.Fragment>
        <NavBar />
        <Container>
          <Routes />
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
