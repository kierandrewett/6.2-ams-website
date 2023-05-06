import { useRouter } from "next/router";
import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

export const Link = ({
	children,
	...rest
}: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & {
	"data-href"?: string;
}) => {
	const route = useRouter();

	let newHref =
		((route.pathname.match(/\//g) || []).length == 1
			? `./`
			: Array((route.pathname.match(/\//g) || []).length)
					.fill("../")
					.join("")) + (rest.href || "").substring(1);

	if (typeof window !== "undefined" && window.location.protocol == "file:") {
		newHref = newHref + ".html";
	}

	rest.href = newHref;

	return <a {...rest}>{children}</a>;
};
