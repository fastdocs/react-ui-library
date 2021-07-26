import React from "react";

import { ButtonProps } from "./Button.types";

import "./Button.scss";

const Button: React.FC<ButtonProps> = (
    { children, appearance: { type = 'primary', size = 'default' }, onClick, disabled }
) => {

    return (
        <button
            className={`Button ${type} ${size}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
};

export default Button;

