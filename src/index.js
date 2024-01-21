import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Current from './Current';
import Cmd from './Cmd';
import Params from './Params';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div class="maindiv">
      <table align='center'>
        <tr>
          <td><h3><u>Upravljanje sušenjem</u></h3></td>
        </tr>
      </table>
      <table align='center'>
        <tr>
          <td><Current /></td>
        </tr>
      </table>
      <table align='center'>
        <tr>
          <td><Cmd /></td>
        </tr>
      </table>
      <table align='center'>
        <tr>
          <td><Params /></td>
        </tr>
      </table>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
