import React from 'react';
import "./style.scss";

const STYLES = [
  "default",
  "primary",
  "secondary",
];

export const Button = ({
  children,
  type,
  onClick,
  variant,
  disabled,
}) => {
  const checkVariant= STYLES.includes(variant) ? variant : STYLES[0];

  return (
    <button className= {`btn ${checkVariant}`} onClick={onClick} type={type}
      disabled={disabled}>
      {children}
    </button>
  )
}


export default Button;
