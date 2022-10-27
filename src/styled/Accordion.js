import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import AccordionSection from "./AccordionSection";

const Wrapper = styled.div`
  @media(min-width:768px){
    width:80%;
    margin:0 auto;
    max-width:600px;
  }
  .description{
    margin-top:20px;
  }
`

class Accordion extends Component {
  static propTypes = {
    allowMultipleOpen: PropTypes.bool,
    children: PropTypes.instanceOf(Object).isRequired,
  };

  static defaultProps = {
    allowMultipleOpen: false,
  };

  constructor(props) {
    super(props);

    const openSections = {};
    
    this.props.children.forEach(child => {
      if (child.props.isOpen) {
        openSections[child.props.label] = true;
      }
    });

    this.state = { openSections };
  }

  onClick = label => {
    const { props: { allowMultipleOpen }, state: { openSections } } = this;

    const isOpen = !!openSections[label];

    if (allowMultipleOpen) {
      this.setState({
        openSections: {
          ...openSections,
          [label]: !isOpen
        }
      });
    } else {
      this.setState({
        openSections: {
          [label]: !isOpen
        }
      });
    }
  };

  render() {
    const { 
      onClick,
      props: { children },
      state: { openSections },
    } = this;

    return (
      <Wrapper >
        {children.map((child,i) => (
          <AccordionSection
          key={i}
            isOpen={!!openSections[child.props.label]}
            label={child.props.label}
            onClick={onClick}
          >
          
            {child.props.children}
          </AccordionSection>
        ))}
      </Wrapper>
    );
  }
}

export default Accordion;