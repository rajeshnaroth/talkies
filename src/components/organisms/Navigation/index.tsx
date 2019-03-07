import React from "react";
import styled, { keyframes } from "styled-components";
import logo from "../../../static/images/logo.svg";

const logoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`;

const Rotator = styled.img`
  animation: ${logoSpin} infinite 2s linear;
  height: 40vmin;
  width: 50px;
  pointer-events: none;
`;

export default function Title() {
  return <Rotator src={logo} alt="..." />;
}
