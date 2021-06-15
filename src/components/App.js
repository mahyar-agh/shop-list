import React from "react";
import ShowCards from "./ShowCards";
import ShopList from "./ShopList";

class App extends React.Component {
  render() {
    return (
      <div>
        <ShopList />
        <div style={{ marginTop: "25px" }} className="ui container">
          <ShowCards />
        </div>
      </div>
    );
  }
}

export default App;
