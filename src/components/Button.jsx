import React from 'react'
import styled from 'styled-components';

const ButtonMove = styled.button`
 text-transform: uppercase;
 font-size:23px;
 padding:1.5rem;
 border-radius: 50px;
 font-weight: 700;
 border: none;
 width:20%;
 cursor:pointer;
`;

const Button = ({text, className}) => {
  return (
      <ButtonMove className={className}>{text}</ButtonMove>
  )
}

export default Button
