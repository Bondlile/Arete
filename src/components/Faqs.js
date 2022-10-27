import React from "react";
import Heading from "../styled/Heading";
import Paragraph from "../styled/Paragraph";
import styled from "styled-components";
import Accordion from "../styled/Accordion";

const Wrapper = styled.section`
  padding:5%;
  h2{
    font-size: 24px;
    text-align:center;
    font-family: 'worksans-bold';
    @media (min-width: 768px) {
        font-size: 36px;
    }
  }
`;

function Faqs() {
  return (
    <Wrapper id="faqs">
      <h2>Frequently Asked Questions</h2>
      <div className="inner">
        <Accordion>
          <div label="How does AGP plan to finance an acquisition?">
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
              neque fugit saepe iure unde itaque quas odio! Cupiditate pariatur
              labore quasi atque quisquam blanditiis molestiae, ullam molestias,
              nulla, quo nisi.
            </Paragraph>
          </div>
          <div label="Will AGP need to raise equity or find investors to complete a transaction?">
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. ullam
              molestias, nulla, quo nisi.
            </Paragraph>
          </div>
          <div label="How long does it take for AGP to close on an acquisition?">
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. ullam
              molestias, nulla, quo nisi.
            </Paragraph>
          </div>
          <div label="Does AGP Have an operations plan for acquired businesses?">
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. ullam
              molestias, nulla, quo nisi.
            </Paragraph>
          </div>
        </Accordion>
      </div>
    </Wrapper>
  );
}

export default Faqs;
