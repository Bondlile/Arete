import React from "react";
import styled from "styled-components";

const Wrapperh1 = styled.h1`
  margin: 10px 0px;
  font-weight: 700;
  font-family: 'worksans-bold';
  font-size: 35px;
  color: rgb(49, 130, 206);
`;
function Heading({ children }) {
  return <Wrapperh1>{children}</Wrapperh1>;
}
export default Heading;
