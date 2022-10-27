import React from "react";
import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";

const InvestmentWrapper = styled.section`
  padding: 10% 5%;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 5%;
  }
  .img {
    margin-bottom: 52px;
    position: relative;
    max-width: 400px;
    @media (min-width: 568px) {
      margin: 0 auto;
    }
    @media (min-width: 768px) {
      width: 55%;
      margin: unset;
      overflow: hidden;
      padding: 2% 0;
    }
    .text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 10px;
      border: 1px solid rgba(255, 255, 255, 0.5);
      .text-inner {
        width: 250px;
        height: 250px;
        background: rgba(249, 83, 67, 0.45);
        display: flex;
        justify-content: center;
        align-items: center;
        color: rgb(255, 255, 255);
        flex-direction: column;
        font-family: "avenir";
        h4 {
          padding: 0px 5%;
          font-size: 19px;
          margin-bottom: 20px;
          line-height: 1.5;
          text-align: center;
          font-family: 'worksans-bold';
        }
        button {
          padding: 0 5%;
          border: 1px solid #fff;
          background: transparent;
          border-radius: 7px;
          height: 40px;
          display: flex;
          width: 200px;
          transition: all 0.7s ease;
          justify-content: space-around;
          align-items: center;
          span {
            color: #fff;
            font-size: 14px;
            font-family: "avenir";
            transition: all 0.7s ease;
            @media (min-width: 768px) {
              transform: translateX(30px);
            }
          }
          @media (min-width: 768px) {
            &:hover {
              .btn-icon {
                transform: translateX(0) scale(1);
                opacity: 1;
                svg {
                  opacity: 1;
                  transform: scale(1);
                  color: #000;
                }
              }
              span {
                transform: translateX(0);
              }
            }
          }
          .btn-icon {
            height: 25px;
            width: 25px;
            background: #ffffff;
            border-radius: 7px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.7s ease;
            @media (min-width: 768px) {
              transform: translateX(-10px) scale(0);
              opacity: 0;
            }
            svg {
              height: 12px;
              width: 12px;
              transition: all 1s ease;
              color: #000;
              @media (min-width: 768px) {
                opacity: 0;
                transform: scale(0);
              }
            }
          }
        }
      }
    }
  }
  img {
    width: 100%;
  }

  .info { 
    margin-top:30px;
    @media (min-width: 768px) {
      padding: 2%;
      margin-top:unset;
    }
    h2 {
      margin-bottom: 30px;
      font-family: 'worksans-bold';
      font-weight: 700;
      font-size: 24px;
      @media (min-width: 768px) {
        width: 40%;
        padding: 2%;
        font-size: 43px;
      }
      @media (min-width: 992px) {
        font-size: 43px;
        line-height: 1.3;
      }
    }
    .info-inner {
      margin-bottom: 25px;
      h4 {
        margin-bottom: 10px;
        font-size: 16px;
        font-family: 'Avenir-regular';
        font-weight: 600;
      }
      ul {
        list-style-type: disc;
        padding-left: 20px;
        li {
          margin-bottom: 5px;
          line-height: 1.3;
          font-size: 13px;
          font-family: 'Avenir-regular';
        }
      }
    }
  }
`;
function Investment() {
  return (
    <InvestmentWrapper id="investment">
      <div className="img">
        <img src="./images/investment.png" alt="our-office" />
        <div className="text">
          <div className="text-inner">
            <h4>
              Get in touch with us for an introductory call
            </h4>
            <button>
              <span>Get in touch</span>
              <span class="btn-icon">
                <AiOutlineArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="info">
        <h2>Investment Criteria</h2>
        <div className="info-inner">
          <h4>Financial Attributes</h4>
          <ul>
            <li>Annual EBITDA: $1M-$3M+</li>
            <li>Minimum 10% EBITDA margins</li>
            <li>Strong, consistent cash flow</li>
            <li>Low to moderate capital intensity</li>
          </ul>
        </div>
        <div className="info-inner">
          <h4>Business Models</h4>
          <ul>
            <li>B2B/B2C products or services</li>
            <li>Enduringly profitable with platform growth potential</li>
            <li>Fragmented industry and low cyclicality</li>
            <li>Competitive offering and strong stakeholder relationships</li>
            <li>
              Recurring or repeat revenues with low customer concentration
            </li>
          </ul>
        </div>
        <div className="info-inner">
          <h4>Industry Targets </h4>
          <ul>
            <li>Building Products</li>
            <li>Niche Manufacturing</li>
            <li>Industrial Internet of Things (IoT)</li>
            <li>Transportation and Logistics</li>
          </ul>
        </div>
      </div>
    </InvestmentWrapper>
  );
}

export default Investment;
