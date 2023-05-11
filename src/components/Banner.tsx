import clsx from "clsx";

export const Banner = ({ colour, children }: { colour?: string; children?: any }) => {
	const className = clsx("ams-banner", {
		[colour as string]: !!colour
	});

	return <aside className={className}>{children}</aside>;
};
