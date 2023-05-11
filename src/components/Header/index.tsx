import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { ChevronDown } from "../../icons/ChevronDown";
import { Hamburger } from "../../icons/Hamburger";
import { Button } from "../Button";
import { Logo } from "../Logo";

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
			<ul className={"ams-a11y"}>
				<li>
					<a className={"ams-visually-hidden"} href={"#main-content"} tabIndex={0}>
						Skip to content
					</a>
				</li>
			</ul>

			<header className={"ams-header"} id={"nav"}>
				<div className={"ams-header-container"}>
					<div className={"ams-header-logo"}>
						<a href={"/"} title={"AMS Home"}>
							<Logo />
						</a>
					</div>

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
								<ChevronDown />
							</Link>
						</li>
						<li className={"ams-header-nav-item"}>
							<Link href="/services">
								<strong>Services</strong>
								<ChevronDown />
							</Link>
						</li>
						<li className={"ams-header-nav-item"}>
							<Link href="/business">
								<strong>Business</strong>
								<ChevronDown />
							</Link>
						</li>
						<li className={"ams-header-nav-item"}>
							<a>
								<strong>About</strong>
							</a>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
};
