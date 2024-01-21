import React from "react";
import Firebase from "firebase";
import config from "./config";

class Cmd extends React.Component {

  constructor(props) {
    super(props);

    if (!Firebase.apps.length) {
      Firebase.initializeApp(config);
    }

    this.state = {
      relay_f: 0,
      relay_h: 0
    };
  }

  componentDidMount() {
    this.getUserDataCurrent();
  }

  getUserDataCurrent = () => {
    let ref = Firebase.database().ref("/drier_temp_keeping/cmd/");
    ref.on('value', (snapshot) => {
      const state = snapshot.val();
      this.setState(state);
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          {(this.state.relay_f === 1) && <img class="icons" src="/img/mode_fan_FILL0_wght400_GRAD0_opsz48.png" alt="fan-on"></img>}
          {(this.state.relay_f === 0) && <img class="icons" src="/img/mode_fan_off_FILL0_wght400_GRAD0_opsz48.png" alt="fan-off"></img>}
          {(this.state.relay_h === 1) && <img class="icons" src="/img/mode_heat_FILL0_wght400_GRAD0_opsz48.png" alt="heat-on"></img>}
          {(this.state.relay_h === 0) && <img class="icons" src="/img/mode_heat_off_FILL0_wght400_GRAD0_opsz48.png" alt="heat-off"></img>}
        </div>
      </React.Fragment>
    );
  }
}

export default Cmd;
