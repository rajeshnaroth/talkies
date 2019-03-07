import React, { useContext } from "react";
import styled from "styled-components";
import ThemeContext from "../../provider/Theme/ThemeContext";

const Page = styled.div`
  background: ${props => props.theme.background};
  color: ${props => props.theme.color};
  font-size: 1.2em;
  margin: "0";
  padding: "0";
`;

export default function(props) {
  const { theme } = useContext(ThemeContext);
  console.log(theme);
  return <Page theme={theme}> {props.children} </Page>;
}
