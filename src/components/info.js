import React from "react";

class Info extends React.Component {
  state = {
    kurczak: "kurczak"
  };

  handleMenuName = () => {
    if (document.URL.indexOf("info") > -1) {
      this.setState({ kurczak: "NowyKurczak" });
      const url = "jestem url info";
    }
  };

  componentDidMount() {
    this.handleMenuName();
  }

  testowaDana = "testowaDana";
  render() {
    document.onload = this.handleMenuName;

    return (
      <>
        <h1>
          Komponent z Info {this.state.kurczak} {this.testowaDana}{" "}
        </h1>
        1>
        <h1>{this.url}</h1>
      </>
    );
  }
}

export default Info;
