import React from "react";
export interface ButtonProps {
	children: React.ReactNode;
	appearance: {
		type: "primary" | "secondary" | "tertiary";
		size: "default" | "small" | "large";
	};
	disabled?: boolean;
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
