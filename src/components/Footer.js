import React from "react";
import styled from "styled-components";
import moment from "moment";

const FooterWrapper = styled.section`
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  background: rgba(229, 229, 229, 0.3);
  margin: 2 0px auto;
  padding: 5% 5%;
  @media (min-width: 992px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .footer-top {
    align-items: center;
    @media (min-width: 992px) {
      margin-left: 48px;
    }
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      text-align: left;
      color: #111617;
      margin-bottom: 0px;
      padding-bottom: 15px;
      line-height: 1.2;
      padding-top: 15px;
      font-family: 'Avenir-regular';
    }
  }
  .footer-bottom {
    text-align: left;
    justify-content: flex-start;
    p {
      text-align: left;
      font-family: 'Avenir-regular';
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      color: #111617;
      margin: 0px;
      line-height: 1.6;
      padding-bottom: 15px;
      @media (min-width: 992px) {
        margin-right: 62px;
      }
    }
  }
`;
function Footer() {
  let year = moment().year();
  return (
    <FooterWrapper>
      <div className="footer-top">
        <p>
          ©{year} Arete Growth Partners • Built by Uncommon.org, a non-profit
          website development company
        </p>
      </div>
      <div className="footer-bottom">
        <p>All Rights Reserved.</p>
      </div>
    </FooterWrapper>
  );
}

export default Footer;
