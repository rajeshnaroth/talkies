import React from "react";
import styled, { keyframes } from "styled-components";
import { logoSpin } from "../../styled/animation";

import logo from "../../static/images/logo.svg";

const Rotator = styled.img`
  animation: ${logoSpin} infinite 2s linear;
  height: 40vmin;
  width: 50px;
  pointer-events: none;
`;

export default function Spinner() {
  return <Rotator src={logo} alt="..." />;
}
