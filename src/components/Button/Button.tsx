import React from "react";

import { ButtonProps } from "./Button.types";

import "./Button.scss";

const Button: React.FC<ButtonProps> = ({ children, appearence }) => (
    <button className={`Button ${appearence}`}>{children}</button>
);

export default Button;

