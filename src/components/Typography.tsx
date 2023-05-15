import clsx from "clsx";
import { DetailedHTMLProps, HTMLAttributes } from "react";

// Special typography that is displayed subtly above titles
export const Eyebrow = ({
	children,
	uppercase,
	...rest
}: {
	uppercase?: boolean;
} & DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => {
	const className = clsx("ams-eyebrow", {
		uppercase: !!uppercase
	});

	return <h4 className={className}>{children}</h4>;
};

// Special modifier component that makes text red and bold
export const Highlight = ({
	children,
	...rest
}: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => {
	const className = clsx("ams-highlight");

	return <span className={className}>{children}</span>;
};
