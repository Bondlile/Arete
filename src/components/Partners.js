import React from "react";
import styled from "styled-components";
import Paragraph from "../styled/Paragraph";

const Wrapper = styled.section`
  padding: 10% 5%;
  @media (min-width: 992px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media (min-width: 1200px) {
    padding: 5%;
  }
  .inner {
    @media (min-width: 992px) {
      width: 60%;
    }
    p {
      margin-bottom: 20px;
    }
    h2 {
      font-size: 24px;
      margin-bottom: 30px;
      font-family: 'worksans-bold';
      br {
        display: none;
        @media (min-width: 992px) {
          display: block;
         
        }
      }
      @media (min-width: 768px) {
         
          font-size: 36px;
        }
    }
  }
  img {
    width: 100%;
    display: none;
    @media (min-width: 992px) {
      display: unset;
      width: 50%;
      object-fit: contain;
      max-width: 370px;
    }
  }
`;

function Partners() {
  return (
    <Wrapper id="partners">
      <div className="inner">
        <h2>
          Arete Growth Partners <br /> aims to identify, acquire, <br />
          and operate a single <br />
          business over the long term.{" "}
        </h2>
        <Paragraph>
          Our main goal is to partner with small business owners to execute a
          successful transition while maintaining an intense focus on preserving
          their legacy. The team at Arete Growth Partners is committed to a
          stable succession and managing the day-to-day operations of the
          acquired business by taking a humble, authentic approach to
          leadership.
        </Paragraph>
        <Paragraph>
          Arete Growth Partners is led by a dedicated entrepreneur and backed by
          experienced partners with a focus on driving sustainable growth and
          optimizing operations to derive long-term value. The team conducts an
          efficient process by using complete discretion in partnering with
          owners to facilitate a mutual liquidity event while ensuring minimal
          business impact
        </Paragraph>
      </div>
      <img src="images/partners.png" alt="Arete Logo" />
    </Wrapper>
  );
}

export default Partners;
