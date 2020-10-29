import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { secondPage } from "./secondPage/secondPage";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>new linked page</h1>
            <secondPage/>
          </div>
    );
  }
}
ReactDOM.render(
  <React.StrictMode>
    <App />
    <secondPage /> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
