import React from "react";
import styled from "styled-components";
import Paragraph from "../styled/Paragraph";

const Wrapper = styled.section`
   height: 100vh;
  display: flex;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(images/hero.jpg);
  background-size:cover;
    background-position: center center;
  justify-content: center;
  align-items: center;
  padding: 0 5%;

  @media (min-width: 568px) {
    padding: 10% 5%;
  }
  @media (min-width: 768px) {
    padding: 0 5%;
    height: 720px;
  }
  @media (min-width: 1200px) {
    height: 100vh;
  }
  .inner {
    position: relative;
    @media (min-width: 768px) {
      transform: translateY(0px);
      max-width: 650px;
    }
    .box {
      display: none;
      position: absolute;
      right: 0;
      top: 50%;
      padding: 10px;
      border: 1px solid rgba(255, 255, 255, 0.45);
      transform: translateY(-50%);
      @media (min-width: 768px) {
        display: block;
        .inner-box {
          height: 300px;
          width: 300px;
          background: rgba(249, 82, 67, 0.45);
        }
      }
      @media (min-width: 992px) {
        display: block;
        right: unset;
        left: 65%;
        transform: translate(-61%, -43%);
        .inner-box {
          height: 320px;
          width: 320px;
        }
      }
    }
    .text {
      position: relative;
      z-index: 1;
      color: #ffffff;
      @media (min-width: 768px) {
        padding-right: 50px;
        padding-top: 50px;
      }
      @media (min-width: 992px) {
        left: -27px;
        padding-top: 100px;
      }
      h1 {
        font-size: 40px;
        margin-bottom: 15px;
        overflow: hidden;
        font-family: "worksans-bold";
        @media (min-width: 768px) {
          font-size: 48px;
          margin-bottom: 15px;
        }
      }
      p {
        color: #ffffff;
        margin-bottom: 10px;
        overflow: hidden;
        line-height: 1.2rem;
        font-size: 13px;
        padding-top: 3px;
        margin-bottom: 10px;
        font-family: "Avenir-regular";
        @media (min-width: 992px) {
          padding-right: 35px;
        }
      }
      p:nth-of-type(2) {
        @media (min-width: 992px) {
          padding-bottom: 30px;
          font-family: "Avenir-regular";
        }
      }
      span {
        font-size: 13px;
        overflow: hidden;
        transform: translateY(50px);
      }
    }
  }
`;

function Banner() {
  return (
    <Wrapper id="home">
      <div className="inner">
        <div className="box">
          <div className="inner-box"></div>
        </div>
        <div className="text">
          <h1>Arete Growth Partners</h1>
          <Paragraph>
            ἀρετή / [ahr-i-tey] / Arete is a concept in ancient greek philosophy
            that refers to the perpetual pursuit of excellence and moral virtue.
            It means the act of living up to one’s full potential by using all
            faculties to achieve real results and the highest effectiveness.
          </Paragraph>
          <Paragraph>
            Arete Growth Partners seeks to continue the pursuit of excellence
            for small business owners by way of acquisition entrepreneurship.
          </Paragraph>
          <span>hello@aretegrowthpartners.com</span>
        </div>
      </div>
    </Wrapper>
  );
}

export default Banner;
