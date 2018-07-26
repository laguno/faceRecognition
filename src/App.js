import React, { Component } from "react";
import "./App.css";
import Navigation from "./component/Navigation/Navigation";
import Logo from "./component/Logo/Logo";
import ImageLinkForm from "./component/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "./component/FaceRecognition/FaceRecognition";
import Rank from "./component/Rank/Rank";
import Particles from "react-particles-js";
import particlesConfiguration from "./particlesjs-config.json";
import Clarifai from "clarifai";

const app = new Clarifai.App({
  apiKey: "57194c5bc5d246499a907d7f31e61ca1"
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }

  onInputChange = event => {
    console.log(event.target.value);
  };

  onButtonSubmit = () => {
    console.log("click");
    app.models
      .predict(
		Clarifai.COLOR_MODEL,
        "https://samples.clarifai.com/metro-north.jpg"
      )
      .then(
        function(response) {
          console.log(response);
        },
        function(err) {
          console.log(err);
        }
      );
  };
  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesConfiguration} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition />
      </div>
    );
  }
}

export default App;
