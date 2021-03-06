import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Routes from "./routes/Routes";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
