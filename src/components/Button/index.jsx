import React from 'react';
import styled from 'styled-components';

const black = `#222`;

const Button = styled.button`
/* Default Button Style */
  background: #fff;
  color: $black;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  width: 144px;
  height: 48px;
  border: 1px solid #222;
  box-sizing: border-box;
  border-radius: 4px;
  cursor: pointer;
  margin: 8px 16px;

  /* Style sub-classes */
  &.primary {
    color: #fff;
    background: #3e65f0;
    border: none;
    &:hover {
      color: #fff;
      background: #2c4bb9;
      border: none;
    }
  }
  &.secondary {
    color: #3e65f0;
    border-color: #3e65f0;
    /* TODO hover*/
  }

  &.disabled {
    color: #fff;
    background: rgba(62, 101, 240, 0.7);
    border: none;
        /* TODO hover*/
  }

  &.destructive {
    color: #fff;
    background: #f65252;
    border: none;
        /* TODO hover*/
  }
`;



export default Button;
