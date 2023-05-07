import clsx from "clsx";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export const Button = ({
	children,
	icon,
	colour,
	...rest
}: {
	children?: any;
	icon?: boolean;
	colour?: string;
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
	const className = clsx(
		"ams-button",
		{
			icon: !!icon,
			[colour as string]: !!colour
		},
		rest.className || ""
	);

	return (
		<button {...rest} className={className}>
			{children}
		</button>
	);
};
