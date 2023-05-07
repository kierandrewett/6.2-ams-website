import clsx from "clsx";
import { DetailedHTMLProps, HTMLAttributes } from "react";

const Hero = ({
	children,
	size,
	direction,
	...rest
}: { size?: string; direction?: "h" | "v" } & DetailedHTMLProps<
	HTMLAttributes<HTMLElement>,
	HTMLElement
>) => {
	const className = clsx(
		"ams-hero",
		{
			[size as string]: !!size,
			[`dir-${direction}`]: !!direction
		},
		rest.className || ""
	);

	return (
		<section {...rest} className={className}>
			{children}
		</section>
	);
};

const HeroBody = ({
	children,
	direction,
	...rest
}: { direction?: "h" | "v" } & DetailedHTMLProps<
	HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
>) => {
	const className = clsx(
		"ams-hero-body",
		{
			[`dir-${direction}`]: !!direction
		},
		rest.className || ""
	);

	return (
		<div {...rest} className={className}>
			{children}
		</div>
	);
};

export default Hero;
export { Hero, HeroBody };
