import React from "react";
import Firebase from "firebase";
import config from "./config";
import Barometer from "./barometer";
import './index.css';

class Current extends React.Component {
  constructor(props) {
    super(props);

    if (!Firebase.apps.length) {
      Firebase.initializeApp(config);
    }

    this.state = {
      dayofweek: 0,
      limit_l: 0,
      limit_r: 0,
      t_un: 0,
      hlimit_l: 0,
      hlimit_r: 0,
      h_un: 0,
      time: 0
    };
  }

  componentDidMount() {
    this.getUserDataCurrent();
  }

  getUserDataCurrent = () => {
    let ref = Firebase.database().ref("/drier_temp_keeping/current/");
    ref.on('value', (snapshot) => {
      const state = snapshot.val();
      this.setState(state);
    });
  };

  getDayOfWeek(day) {
    const days = ["Nedelja", "Ponedeljak", "Utorak", "Sreda", "Četvrtak", "Petak", "Subota"];
    return days[day];
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          Poslednje merenje:<br />{this.getDayOfWeek(this.state.dayofweek)} u {this.state.time}
          <table>
            <tr>
              <td>
                <Barometer id="dial9" value={this.state.t_un} title="Temp.(°C)" limit_l={this.state.limit_l} limit_r={this.state.limit_r} />
              </td>
            </tr>
          </table>
          Spoljna temp.: <b>{this.state.t_sp}(°C)</b>
          <table>
            <tr>
              <td>
                <Barometer id="dialh" value={this.state.h_un} title="R.Vlaž.(%)" limit_l={this.state.hlimit_l} limit_r={this.state.hlimit_r} />
              </td>
            </tr>
          </table>
          Spoljna r. vlažn.: <b>{this.state.h_sp}(%)</b>
        </div>
      </React.Fragment>
    );
  }
}

export default Current;
