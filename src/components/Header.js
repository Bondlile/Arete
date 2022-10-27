import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const HeaderWrapper = styled.header`
  position: absolute;
  display: flex;
  width: 100%;
  height: 70px;
  padding-top: 20px;
  align-items: center;
  left: 50%;
  padding-top: 20px;
  justify-content: space-between;
  transform: translateX(-50%);
  z-index: 5;
  padding: 5%;
     transition: all 300ms ease 0s; 
   

  &.inverted {
    
    box-shadow: 0 3px 5px 0.3px #0000004c;
    @media(min-width:1200px){
padding: 20px;
    }
  }
  img {
    width: 50px;
    transition: all 0.7s ease 0s;
  }
  ul {
    @media (min-width: 768px) {
      justify-content: flex-end;
      padding: unset;
      position: unset;
      width: max-content;
      margin-right: 5px;
    }
  }
  .humburger {
    padding: 20px 20px 20px 20px;
    outline: rgb(255, 255, 255) solid 1px;
    position: relative;
    z-index: 5;
    span {
      width: 30px;
      height: 1px;
      right: 5px;
      background: rgb(255, 255, 255);
      position: absolute;
    }
    &::before {
      width: 30px;
      height: 1px;
      right: 5px;
      top: 14px;
      content: "";
      background: rgb(255, 255, 255);
      position: absolute;
    }
    &::after {
      width: 30px;
      height: 1px;
      right: 5px;
      top: 26px;
      content: "";
      background: rgb(255, 255, 255);
      position: absolute;
    }
  }
  .menu {
    position: absolute;
    background: rgba(0, 0, 0, 0.884);
    width: 100%;
    max-width: 0%;
    height: 100vh;
    overflow: hidden;
    right: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 2;
    transition: all 0.7s ease-in-out;
    li {
      margin-bottom: 30px;
      list-style: none;
      a {
        color: #ffffff;
        font-size: 16px;
        font-family: 'Avenir-regular';
        margin: 0 auto;
        text-decoration: none;
        @media (min-width: 768px) {
          font-size: 20px;
        }
      }
    }
    @media (min-width: 768px) {
      background-color: #000000b2;
    }
  }
  .change {
    max-width: 100%;
  }
`;
function Header() {
  const [click, setClick] = useState(false);
  var className = "inverted";
  var scrollTrigger = 60;
  window.onscroll = function () {
    if (
      window.scrollY >= scrollTrigger ||
      window.pageYOffset >= scrollTrigger
    ) {
      document.getElementsByTagName("header")[0].classList.add(className);
    } else {
      document.getElementsByTagName("header")[0].classList.remove(className);
    }
  };
  return (
    <HeaderWrapper id="site-header">
      <a href="#">
        <img className="logo" src="images/logo.png" alt="arete logo" />
      </a>
      <div className="humburger" onClick={() => setClick(!click)}>
        <span></span>
      </div>
      <div className={click ? "menu change" : "menu"}>
        <ul>
          <li onClick={() => setClick(false)}>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
            >
              <a href="#home">Home</a>{" "}
            </Link>
          </li>
          <li onClick={() => setClick(false)}>
            <Link
              activeClass="active"
              to="partners"
              spy={true}
              smooth={true}
              duration={500}
            >
              <a href="#partners">Partners</a>{" "}
            </Link>
          </li>
          <li onClick={() => setClick(false)}>
            <Link
              activeClass="active"
              to="investment"
              spy={true}
              smooth={true}
              duration={500}
            >
              <a href="#investment">Investment</a>{" "}
            </Link>
          </li>
          <li onClick={() => setClick(false)}>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
            >
              <a href="#about">About</a>{" "}
            </Link>
          </li>
          <li onClick={() => setClick(false)}>
            <Link
              activeClass="active"
              to="faqs"
              spy={true}
              smooth={true}
              duration={500}
            >
              <a href="#faqs">Faqs</a>{" "}
            </Link>
          </li>

          <li onClick={() => setClick(false)}>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              <a href="#contact">Contact</a>{" "}
            </Link>
          </li>
        </ul>
      </div>
    </HeaderWrapper>
  );
}

export default Header;
