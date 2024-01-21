import React from "react";
import Firebase from "firebase";
import config from "./config";
import './index.css';

class Params extends React.Component {
  constructor(props) {
    super(props);

    if (!Firebase.apps.length) {
      Firebase.initializeApp(config);
    }

    this.state = {
      temp_target: -1,
      temp_margin_top: 0,
      temp_margin_bottom: 0,
      hum_target: -1,
      hum_margin_top: 0,
      hum_margin_bottom: 0,
      delay_fan_after_heater: 0,
      delay_fan_before_heater: 0,
      series_name: 0,
      time_step: 0
    };
  }

  componentDidMount() {
    this.getUserDataCurrent();
    this.setParamsToInput();
    document.getElementById("login").hidden = true;
    //this.forceUpdate();
    //console.log(config.pwd);
  }

  setParamsToInput = () => {
    setTimeout(() => {
      document.getElementById("temp_target").defaultValue = this.state.temp_target;
      document.getElementById("temp_margin_top").defaultValue = this.state.temp_margin_top;
      document.getElementById("temp_margin_bottom").defaultValue = this.state.temp_margin_bottom;
      document.getElementById("hum_target").defaultValue = this.state.hum_target;
      document.getElementById("hum_margin_top").defaultValue = this.state.hum_margin_top;
      document.getElementById("hum_margin_bottom").defaultValue = this.state.hum_margin_bottom;
      document.getElementById("delay_fan_after_heater").defaultValue = this.state.delay_fan_after_heater;
      document.getElementById("delay_fan_before_heater").defaultValue = this.state.delay_fan_before_heater;
      document.getElementById("series_name").defaultValue = this.state.series_name;
      document.getElementById("time_step").defaultValue = this.state.time_step;
    }, 2000);
  }

  getUserDataCurrent = () => {
    let ref = Firebase.database().ref("/drier_temp_keeping/params/");
    ref.on('value', (snapshot) => {
      const state = snapshot.val();
      this.setState(state);
    });
  };

  writeUserData = () => {
    Firebase.database()
      .ref("/drier_temp_keeping/params/")
      .set(this.state);
    console.log("DATA SAVED");
  };

  updateParamsInDB = () => {
    this.state.temp_target = parseInt(document.getElementById("temp_target").value);
    this.state.temp_margin_top = parseInt(document.getElementById("temp_margin_top").value);
    this.state.temp_margin_bottom = parseInt(document.getElementById("temp_margin_bottom").value);
    this.state.hum_target = parseInt(document.getElementById("hum_target").value);
    this.state.hum_margin_top = parseInt(document.getElementById("hum_margin_top").value);
    this.state.hum_margin_bottom = parseInt(document.getElementById("hum_margin_bottom").value);
    this.state.delay_fan_after_heater = parseInt(document.getElementById("delay_fan_after_heater").value);
    this.state.delay_fan_before_heater = parseInt(document.getElementById("delay_fan_before_heater").value);
    this.state.series_name = parseInt(document.getElementById("series_name").value);
    this.state.time_step = parseInt(document.getElementById("time_step").value);
    this.writeUserData();
    document.getElementById("btnEdit").hidden = false;
    document.getElementById("btnUpdate").hidden = true;
    document.getElementById("btnCancel").hidden = true;
    document.getElementById("temp_target").hidden = true;
    document.getElementById("temp_margin_top").hidden = true;
    document.getElementById("temp_margin_bottom").hidden = true;
    document.getElementById("hum_target").hidden = true;
    document.getElementById("hum_margin_top").hidden = true;
    document.getElementById("hum_margin_bottom").hidden = true;
    document.getElementById("delay_fan_after_heater").hidden = true;
    document.getElementById("delay_fan_before_heater").hidden = true;
    document.getElementById("series_name").hidden = true;
    document.getElementById("time_step").hidden = true;

    document.getElementById("l_temp_target").hidden = false;
    document.getElementById("l_temp_margin_top").hidden = false;
    document.getElementById("l_temp_margin_bottom").hidden = false;
    document.getElementById("l_hum_target").hidden = false;
    document.getElementById("l_hum_margin_top").hidden = false;
    document.getElementById("l_hum_margin_bottom").hidden = false;
    document.getElementById("l_delay_fan_after_heater").hidden = false;
    document.getElementById("l_delay_fan_before_heater").hidden = false;
    document.getElementById("l_series_name").hidden = false;
    document.getElementById("l_time_step").hidden = false;
  }

  setEditParamsMode = () => {
    document.getElementById("btnEdit").hidden = true;
    document.getElementById("btnUpdate").hidden = false;
    document.getElementById("btnCancel").hidden = false;
    document.getElementById("temp_target").hidden = false;
    document.getElementById("temp_margin_top").hidden = false;
    document.getElementById("temp_margin_bottom").hidden = false;
    document.getElementById("hum_target").hidden = false;
    document.getElementById("hum_margin_top").hidden = false;
    document.getElementById("hum_margin_bottom").hidden = false;
    document.getElementById("delay_fan_after_heater").hidden = false;
    document.getElementById("delay_fan_before_heater").hidden = false;
    document.getElementById("series_name").hidden = false;
    document.getElementById("time_step").hidden = false;

    document.getElementById("l_temp_target").hidden = true;
    document.getElementById("l_temp_margin_top").hidden = true;
    document.getElementById("l_temp_margin_bottom").hidden = true;
    document.getElementById("l_hum_target").hidden = true;
    document.getElementById("l_hum_margin_top").hidden = true;
    document.getElementById("l_hum_margin_bottom").hidden = true;
    document.getElementById("l_delay_fan_after_heater").hidden = true;
    document.getElementById("l_delay_fan_before_heater").hidden = true;
    document.getElementById("l_series_name").hidden = true;
    document.getElementById("l_time_step").hidden = true;
  }

  cancelEditParamsDB = () => {
    document.getElementById("btnEdit").hidden = false;
    document.getElementById("btnUpdate").hidden = true;
    document.getElementById("btnCancel").hidden = true;
    document.getElementById("temp_target").hidden = true;
    document.getElementById("temp_margin_top").hidden = true;
    document.getElementById("temp_margin_bottom").hidden = true;
    document.getElementById("hum_target").hidden = true;
    document.getElementById("hum_margin_top").hidden = true;
    document.getElementById("hum_margin_bottom").hidden = true;
    document.getElementById("delay_fan_after_heater").hidden = true;
    document.getElementById("delay_fan_before_heater").hidden = true;
    document.getElementById("series_name").hidden = true;
    document.getElementById("time_step").hidden = true;

    document.getElementById("l_temp_target").hidden = false;
    document.getElementById("l_temp_margin_top").hidden = false;
    document.getElementById("l_temp_margin_bottom").hidden = false;
    document.getElementById("l_hum_target").hidden = false;
    document.getElementById("l_hum_margin_top").hidden = false;
    document.getElementById("l_hum_margin_bottom").hidden = false;
    document.getElementById("l_delay_fan_after_heater").hidden = false;
    document.getElementById("l_delay_fan_before_heater").hidden = false;
    document.getElementById("l_series_name").hidden = false;
    document.getElementById("l_time_step").hidden = false;
  }

  setLoginVisible = () => {
    document.getElementById("login").hidden = false;
    document.getElementById("login").style.autoFocus = "true";
    document.getElementById("btnEdit").hidden = true;
  }
  setLoginHidden = () => {
    document.getElementById("login").hidden = true;
    document.getElementById("pin").value = "";
  }

  myPinValidation = () => {
    let pinValue = document.getElementById("pin").value;
    if (config.pwd == pinValue) {
      this.setEditParamsMode();
      this.setLoginHidden();
    } else {
      this.cancelEditParamsDB();
    }

    if (pinValue.length === 0) {
      this.setLoginHidden();
      document.getElementById("btnEdit").hidden = false;
    } else {
      document.getElementById("btnEdit").hidden = true;
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h4>Parametri:</h4>
          <div>
            <label for="temp_target">Ciljna temp.: </label>
            <label id="l_temp_target">{this.state.temp_target}</label>
            <input type="number" min="0" max="100" id="temp_target" hidden="true" />(°C)
            <br />
            <label for="temp_margin_top">Maksimalno odstupanje temp.: </label>
            <label id="l_temp_margin_top">{this.state.temp_margin_top}</label>
            <input type="number" id="temp_margin_top" hidden="true" />/
            <label id="l_temp_margin_bottom">{this.state.temp_margin_bottom}</label>
            <input type="number" id="temp_margin_bottom" hidden="true" />(°C)
            <br />
            <label for="hum_target">Ciljna rel. vlažn.: </label>
            <label id="l_hum_target">{this.state.hum_target}</label>
            <input type="number" min="0" max="100" id="hum_target" hidden="true" />(%)
            <br />
            <label for="hum_margin_top">Maksimalno odstupanje rel. vlažn.: </label>
            <label id="l_hum_margin_top">{this.state.hum_margin_top}</label>
            <input type="number" id="hum_margin_top" hidden="true" />/
            <label id="l_hum_margin_bottom">{this.state.hum_margin_bottom}</label>
            <input type="number" id="hum_margin_bottom" hidden="true" />(%)
            <br />
            <label for="delay_fan_after_heater">Vreme rada ventilatora posle gašenja grejača: </label>
            <label id="l_delay_fan_after_heater">{this.state.delay_fan_after_heater}</label>
            <input type="number" id="delay_fan_after_heater" hidden="true" />(s)
            <br />
            <label for="delay_fan_before_heater">Vreme rada ventilatora pre paljenja grejača: </label>
            <label id="l_delay_fan_before_heater">{this.state.delay_fan_before_heater}</label>
            <input type="number" id="delay_fan_before_heater" hidden="true" />(s)
            <br />
            <label for="series_name">Serijski broj merenja: </label>
            <label id="l_series_name">{this.state.series_name}</label>
            <input type="number" id="series_name" hidden="true" /> (№)
            <br />
            <label for="time_step">Vreme između dva merenja: </label>
            <label id="l_time_step">{this.state.time_step}</label>
            <input type="number" id="time_step" hidden="true" />(s)
            <br />
            <button id="btnUpdate" onClick={() => this.updateParamsInDB()} hidden="false">Ažurirati</button>
            <button id="btnCancel" onClick={() => this.cancelEditParamsDB()} hidden="false">Odustati</button>
            <button id="btnEdit" onClick={() => this.setLoginVisible()}>Urediti</button>
            <div id="login">
              <h4>PIN: <input id="pin" size="4" type="password" name="pin" maxLength="4" autoFocus onKeyUp={() => { this.myPinValidation() }} /></h4>
            </div>
          </div>
          <a href={`https://vtszr-9e108.firebaseio.com/drier_temp_keeping/${this.state.series_name}.json`} target="_blank">Arhiva postojećeg merenja</a>
          <small>
            <br />Autor aplikacije: <a href="https://www.linkedin.com/in/zeljkoeremic/" target="_blank">Željko Eremić, PhD</a>
            <br />Autor koncepta upr. sušenjem.: Dragan Halas, PhD
            <br />verzija. 1.0.0.
          </small>
        </div>
      </React.Fragment>
    );
  }
}

export default Params;
