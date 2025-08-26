import { Component } from "react";
interface DarkMode {
  isDarkMode: boolean;
}
export default class ThemeSwitcher extends Component<object, DarkMode> {
  state: DarkMode = { isDarkMode: false };
  handleClick = () => {
    this.setState({ isDarkMode: !this.state.isDarkMode });
  };
  render() {
    return (
      <div>
        <h3>Bai 6</h3>
        <div
          style={{ backgroundColor: this.state.isDarkMode ? "black" : "white" }}
        >
          <h4 style={{ color: this.state.isDarkMode ? "white" : "black" }}>
            Che do {this.state.isDarkMode ? "Toi" : "Sang"} dang bat
          </h4>
          <button onClick={this.handleClick}>Chuyen theme</button>
        </div>
      </div>
    );
  }
}
