import { ChevronDown } from "../../icons/ChevronDown";
import { Link } from "../Link";
import { Logo } from "../Logo";

export const Header = () => {
	return (
		<header className={"ams-header"} id={"ams-nav"}>
			<div className={"ams-header-container"}>
				<a className={"ams-header-logo"} href={"/"} title={"AMS Home"}>
					<Logo />
				</a>

				<nav className={"ams-header-nav"}>
					<ul>
						<li>
							<Link href="/solutions">
								<span>Solutions</span>
								<ChevronDown />
							</Link>
						</li>
						<li>
							<Link href="/services">
								<span>Services</span>
								<ChevronDown />
							</Link>
						</li>
						<li>
							<Link href="/business">
								<span>Business</span>
								<ChevronDown />
							</Link>
						</li>
						<li>
							<a>About</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};
