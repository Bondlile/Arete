import React from "react";
import styled from "styled-components";
import Paragraph from "../styled/Paragraph";

const Wrapper = styled.section`
  padding: 10% 5%;
  @media (min-width: 992px) {
    display: flex;
    justify-content: space-between;
    padding: 5%;
  }
  .inner {
    width: 96%;
    padding: 1%;
    @media (min-width: 992px) {
      width: 63%;
    }
    h2 {
      font-size: 24px;
      line-height: 1.2;
      color: rgb(17, 22, 23);
      margin-bottom: 30px;
      font-family: 'worksans-bold';
      @media (min-width: 992px) {
        font-size: 36px;
        line-height: 1.3;
      }
    }
    .founder-inner {
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      h4 {
        font-size: 18px;
        color: rgb(249, 83, 67);
        margin-right: 20px;
        margin-bottom: 4px;
        font-family: 'worksans-bold';
        align-items: center;
      }
      span {
        font-size: 13px;
        align-items: center;
        font-family: "Avenir-regular";
        justify-content: center;
      }
    }
  }
  .img {
    width: 98%;
    padding: 1%;
    border: 1px solid rgb(249, 83, 67);
    @media (min-width: 768px) {
      width: 98%;
      border: 1px solid rgb(249, 83, 67);
      max-width: 455px;
      margin: 0px auto;
      padding: 5px;
      object-fit: contain;
    }
    @media (min-width: 992px) {
      width: 35%;
      margin: auto 0px auto auto;
    }
    img {
      width: 100%;
    }
  }
`;
function About() {
  return (
    <Wrapper id="about">
      <div className="inner">
        <h2>About the Founder</h2>
        <div className="founder-inner">
          <h4>Greg Newton </h4>
          <span>Founder &amp; Managing Partner</span>
        </div>
        <Paragraph>
          Greg has an intense strategic focus bolstered by strong finance and
          operating experiences within Fortune 100 and international,
          multi-billion dollar companies. Prior to founding Arete Growth
          Partners, Greg directed strategy and innovation, and was responsible
          for corporate strategy and development efforts at a $2B international
          manufacturer of construction materials and building products.
        </Paragraph>
        <Paragraph>
          Greg began his career with GE where he graduated from their Financial
          Management Program (FMP) and subsequently held various financial
          leadership roles across mergers and acquisitions, financial planning
          and analysis, supply chain operations, and product management. Greg is
          also a graduate of Hamilton College where he holds a Bachelor of Arts
          in Economics and was captain of the Men's Basketball team.
        </Paragraph>
        <Paragraph>
          In the spirit of arete, Greg has fostered his own pursuit of
          excellence as a lifelong learner with an achievement oriented mindset.
          He is passionate about partnering with owners to ensure that their
          legacy endures and the full potential of their business gets realized.
        </Paragraph>
      </div>
      <div className="img">
        <img src="images/founder.png" alt="Founder" />
      </div>
    </Wrapper>
  );
}

export default About;
