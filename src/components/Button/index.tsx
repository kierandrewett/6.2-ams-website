import clsx from "clsx";
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export const Button = ({
	children,
	icon,
	colour,
	...rest
}: {
	children?: any;
	icon?: boolean;
	colour?: string;
	href?: string;
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
	const className = clsx(
		"ams-button",
		{
			icon: !!icon,
			[colour as string]: !!colour
		},
		rest.className || ""
	);

	return React.createElement(
		rest.href ? "a" : "button",
		{
			...rest,
			className
		},
		children
	);
};
