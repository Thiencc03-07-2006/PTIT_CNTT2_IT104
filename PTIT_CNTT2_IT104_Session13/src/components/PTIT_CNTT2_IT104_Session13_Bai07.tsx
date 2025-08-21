import { Component } from "react";
interface UI {
  theme: string;
  language: string;
}
export default class PTIT_CNTT2_IT104_Session13_Bai07 extends Component<
  object,
  UI
> {
  constructor(props: object) {
    super(props);
    this.state = {
      theme: "light",
      language: "en",
    };
  }
  handleClick = () => {
    this.setState({
      theme: Math.random() < 0.5 ? "light" : "dark",
      language: Math.random() < 0.5 ? "en" : "vi",
    });
  };
  render() {
    const { theme, language } = this.state;
    return (
      <div
        onClick={this.handleClick}
        style={{
          backgroundColor: theme === "dark" ? "#000000" : "#ffffff",
          border: "5px solid gray",
          cursor: "pointer",
          color: theme === "light" ? "#000000" : "#ffffff",
        }}
      >
        <h3>Bai 7</h3>
        <p>
          {language === "en" ? "Theme" : "Nen"}:{" "}
          {language === "en" ? theme : theme === "dark" ? "Toi" : "Sang"}
        </p>
        <p>
          {language === "en" ? "Language: English" : "Ngon ngu: Tieng Viet"}:
        </p>
      </div>
    );
  }
}
