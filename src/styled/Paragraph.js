import React from "react";
import styled from "styled-components";

const WrapperP = styled.p`
  padding: 5px;
  margin: 1px;
  color: black;
  opacity: 0.7;
  text-align: left;
  font-family: "Avenir-regular";
  font-size: 13px;
  width: 100%;
  line-height: 1.6;
`;
function Paragraph({ children }) {
  return <WrapperP>{children}</WrapperP>;
}
export default Paragraph;
