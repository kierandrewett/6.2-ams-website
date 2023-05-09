import clsx from "clsx";
import Link from "next/link";
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
		rest.href ? (rest.href.startsWith("http") ? "a" : Link) : "button",
		{
			...rest,
			className
		} as any,
		children
	);
};
