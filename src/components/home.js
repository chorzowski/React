import React from "react";

class Home extends React.Component {
  state = {
    kurczak: "kurczak"
  };

  TestowaDana = "";

  handleMenuName = () => {
    this.setState({ kurczak: "NowyKurczak" });
    this.testowaDana = "TEST";
  };

  render() {
    document.onload = this.handleMenuName;
    if (window.location.href.indexOf("info") > -1) {
      const url = "jestem url info";
    }

    const test = NowaFunkcja;
    return (
      <>
        <h1>
          Komponent z Home {this.url} {this.testowaDana}
        </h1>
        <br />

        <h3>{this.state.kurczak}</h3>
        <h3>
          <NowaFunkcja></NowaFunkcja>
        </h3>
        <test />
      </>
    );
  }
}

const NowaFunkcja = () => {
  return "NowaFunkcjaTest";
};

export default Home;
