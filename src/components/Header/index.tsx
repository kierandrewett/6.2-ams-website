import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { Hamburger } from "../../icons/Hamburger";
import { Button } from "../Button";
import HTMLComment from "../HTMLComment";
import { Logo } from "../Logo";

// The Header component is the main navigation for the site, it's a static header.
// It's a bit more complex than the other components, so we'll break it down a bit.
// We have different parts shown here such as: the main header, the hamburger menu,
// and the skip to content link (which is used to get screen readers and tab button users to the content faster).
export const Header = () => {
	const ref = React.createRef<HTMLElement>();
	const ulRef = React.createRef<HTMLUListElement>();
	const [menuVisible, setMenuVisible] = React.useState(false);
	const [menuHeight, setMenuHeight] = React.useState(0);

	React.useEffect(() => {
		const bounds = ulRef.current?.getBoundingClientRect();
		setMenuHeight(bounds ? bounds.height : 0);
	}, [menuVisible]);

	return (
		<>
			<HTMLComment>
				This is here for accessibility reasons, so people using a keyboard don't have to tab
				through the whole header to get to the content, this shortcut allows them to skip
				straight to content.
			</HTMLComment>

			<ul className={"ams-a11y"}>
				<li>
					<a className={"ams-visually-hidden"} href={"#main-content"} tabIndex={0}>
						Skip to content
					</a>
				</li>
			</ul>

			<HTMLComment>
				The AMS header, we have both desktop and mobile views shown here, we just swap the
				two out depending on your screen size (css)
			</HTMLComment>

			<header className={"ams-header"} id={"nav"}>
				<div className={"ams-header-container"}>
					<div className={"ams-header-logo"}>
						<a href={"/"} title={"AMS Home"}>
							<Logo />
						</a>
					</div>

					<HTMLComment>
						The navigation links, that lead to the different pages on the site.
					</HTMLComment>
					<nav className={"ams-header-nav"}>
						<ul>
							<li className={"ams-header-nav-item"}>
								<Link href="/solutions">
									<strong>Solutions</strong>
								</Link>
							</li>
							<li className={"ams-header-nav-item"}>
								<Link href="/blog">
									<strong>Blog</strong>
								</Link>
							</li>
							<li className={"ams-header-nav-item"}>
								<Link href="/support">
									<strong>Support</strong>
								</Link>
							</li>
							<li className={"ams-header-nav-item"}>
								<Link href="/about">
									<strong>About</strong>
								</Link>
							</li>
						</ul>
					</nav>

					<HTMLComment>The call the action button that says get in touch.</HTMLComment>
					<HTMLComment>
						On smaller displays, this will change to a hamburger menu to accomodate the
						smaller screen size.
					</HTMLComment>
					<div className={"ams-header-cta"}>
						<Button colour={"red"} href={"/contact"}>
							Get in touch
						</Button>

						<Button
							icon
							className={clsx("ams-hamburger-btn", { open: !!menuVisible })}
							onClick={() => setMenuVisible(!menuVisible)}
						>
							<Hamburger />
						</Button>
					</div>
				</div>

				<HTMLComment>
					The hamburger menu, this is only shown on smaller screens.
				</HTMLComment>
				<nav
					className={"ams-header-hamburger"}
					ref={ref}
					style={
						{
							"--height": (menuVisible ? menuHeight : 0) + "px",
							visibility: menuVisible ? "" : "hidden"
						} as any
					}
					tabIndex={-1}
				>
					<ul ref={ulRef}>
						<li className={"ams-header-nav-item"}>
							<Link href="/solutions">
								<strong>Solutions</strong>
							</Link>
						</li>
						<li className={"ams-header-nav-item"}>
							<Link href="/blog">
								<strong>Blog</strong>
							</Link>
						</li>
						<li className={"ams-header-nav-item"}>
							<Link href="/support">
								<strong>Support</strong>
							</Link>
						</li>
						<li className={"ams-header-nav-item"}>
							<Link href="/about">
								<strong>About</strong>
							</Link>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
};
