import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "../Lotties/2.json";

class UncontrolledLottie extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <div>
        <h1>Uncontrolled Lottie</h1>
        <Lottie options={defaultOptions} height={400} width={600} />
      </div>
    );
  }
}

export default UncontrolledLottie;
