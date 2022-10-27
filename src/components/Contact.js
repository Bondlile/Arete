import { TextField } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Paragraph from "../styled/Paragraph";
import { AiOutlineArrowRight } from "react-icons/ai";

const ContactWrapper = styled.section`
  padding: 5% 5%;
  @media (min-width: 992px) {
    padding: 5% 10% 10%;
  }
  h2 {
    margin: 10px 0px;
    font-weight: 700;
    font-size: 24px;
    color: #000;
    font-family: 'worksans-bold';
    @media (min-width: 768px) {
      margin-bottom: 43px;
      font-size: 36px;
    }
  }
  .MuiTextField-root {
    width: 100%;
    font-family: 'Avenir-regular';
    border: none;
    margin-bottom: 20px;
    input {
      border: none;
      font-size: 14px;
      font-family: 'Avenir-regular';

    }
    label {
      font-family: 'Avenir-regular';
      font-size: 14px;
    }

    .MuiInput-underline {
      height: 80px;
      padding-bottom: 15px;

      &:before {
        border-color: red;
      }
    }
    .Mui-focused {
      color: red;
      &:after {
        border-color: red;
      }
    }
  }
  button {
    padding: 0;
    border: 1px solid red;
    background: transparent;
    border-radius: 7px;
    height: 40px;
    display: flex;
    width: 250px;
    transition: all 0.7s ease;
    justify-content: space-evenly;
    align-items: center;
    font-family: 'Avenir-regular';
    @media (min-width: 768px) {
      margin-left: auto;
      margin-top: 50px;
    }
    @media (min-width: 992px) {
      margin-right: 80px;
      width: 300px;
    }

    .btn-text {
      font-size: 14px;
      transition: all 0.7s ease;
      width: max-content;
      font-family: 'Avenir-regular';

      @media (min-width: 768px) {
        transform: translateX(30px);
      }
    }
      .btn-icon{
   svg{
     font-size: 0;
   }
      }
    
    @media (min-width: 768px) {
      &:hover {
        .btn-text {
          transform: translateX(0);
        }
        .btn-icon{
          transform: translateX(0);
               height: 25px;
    width: 25px;
    background: rgb(249, 83, 67);
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.7s ease 0s;
    svg{
      height: 12px;
    width: 12px;
    transition: all 0.7s ease 0s;
    }
        }
      }
    }
  }
  .bottom {
    padding: 20px;
    background: rgba(249, 82, 67, 0.45);
    max-width: 300px;
   
    @media (min-width: 768px) {
      margin-top: -100px;
      padding: 10px;
    }
  }
  form {
    margin-bottom: 30px;
    .inner {
      @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
        .MuiTextField-root {
          width: 47%;
        }
      }
    }
  }
`;

function Contact() {
  return (
    <ContactWrapper id="contact">
      <h2>Let’s Get in Touch.</h2>
      <form
        action="https://formsubmit.co/bondlilemoyo20@gmail.com"
        method="POST"
      >
        <div className="inner">
          <TextField
            id="standard-basic"
            variant="standard"
            name="Name"
            required="true"
            label="Name"
          />
          <TextField
            id="standard-basic"
            variant="standard"
            required="true"
            name="Email"
            label="Email Address"
          />
        </div>
        <TextField
          id="standard-basic"
          variant="standard"
          name="Business-Name"
          required="true"
          label="Business Name"
        />
        <TextField
          id="standard-basic"
          variant="standard"
          name="message"
          label="Message..."
          required="true"
          multiline
          rows={3}
        />
        <button>
          <span className="btn-text">Send your message</span>
          <span class="btn-icon">
          <AiOutlineArrowRight />
          </span>
          
                </button>
      </form>
      <div className="bottom">
        <Paragraph>hello@aretegrowthpartners.com</Paragraph>
        <Paragraph>(816) 729-6585</Paragraph>
        <Paragraph>Something, Florida</Paragraph>
      </div>
    </ContactWrapper>
  );
}

export default Contact;
