import React, { Component } from "react";
import PropTypes from "prop-types";
import { BiPlus, BiMinus } from "react-icons/bi";
import Paragraph from "./Paragraph";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import styled from 'styled-components';

const Wrapper = styled.div`
  border-bottom:1px solid black;
  padding:20px 0;
  width:100%;
  @media(min-width:992px){
    padding:40px 0;
  }
  .top{
    display:flex;
    align-items:center;
    justify-content:space-between;
    p{
      flex:1;
      margin:0 20px 0;
      font-family:'Avenir-regular';
    }
    span{
       color:red;
    }
  }
  .plus{
    height:20px;
    width:20px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:6px;
    border:2px solid red;
   
  }
`

class AccordionSection extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    const {
      onClick,
      props: { isOpen, label },
    } = this;

    return (
      <Wrapper onClick={onClick}>
        <div className="top">
          <span className="plus">{!isOpen ? <BiPlus /> : <BiMinus />}</span>
          <Paragraph> {label}</Paragraph>
          <span>{!isOpen ? <BsChevronDown /> : <BsChevronUp />}</span>
        </div>
        {isOpen && <div className="description">{this.props.children}</div>}
      </Wrapper>
    );
  }
}

export default AccordionSection;
