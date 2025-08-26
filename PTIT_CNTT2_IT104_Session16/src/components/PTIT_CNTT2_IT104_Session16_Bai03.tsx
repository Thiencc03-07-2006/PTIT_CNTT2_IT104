import { Component } from "react";
import "../style/bai3.css";

export default class PTIT_CNTT2_IT104_Session16_Bai03 extends Component {
  render() {
    return (
      <div id="bai3">
        <h3>Bai 3</h3>
        <div
          style={{
            display: "flex",
            gap: "10px",
            backgroundColor: "black",
            padding: "10px",
          }}
        >
          <button className="Primary">Primary</button>
          <button className="Secondary">Secondary</button>
          <button className="Success">Success</button>
          <button className="Warning">Warning</button>
          <button className="Danger">Danger</button>
          <button className="Info">Info</button>
          <button className="Light">Light</button>
          <button className="Dark">Dark</button>
          <a href="">
            <button>
              <a href="">Link</a>
            </button>
          </a>
        </div>
      </div>
    );
  }
}
