import React from "react";
import PropTypes from "prop-types";

const Button = ({ color, children, styles, variant = "basic", ...props }) => {
  const variants = {
    outlined:
      "border-2 border-primary border-solid text-primary active:bg-primary active:text-white",
    basic: "shadow-transparent",
    contained: "bg-primary !text-white",
  };
  return (
    <button
      {...props}
      className={`rounded shadow-sm m-1 p-2 text-primary font-semibold ${variants[variant]} ${styles} active:opacity-90 `}
    >
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  styles: PropTypes.string,
  variant: PropTypes.oneOf(["contained", "outlined", "basic"]),
};
