import clsx from "clsx";

// A banner component
// Takes in colour, children
// Colour is any colour defined in the banner .scss file
// Children is a built-in prop where you just add a child element
export const Banner = ({ colour, children }: { colour?: string; children?: any }) => {
	// Using clsx here to generate a className with dynamic properties
	// We only want to add the class for colour if we have set a colour on the props
	const className = clsx("ams-banner", {
		[colour as string]: !!colour
	});

	return <aside className={className}>{children}</aside>;
};
