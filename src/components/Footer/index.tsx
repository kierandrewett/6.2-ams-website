import Link from "next/link";
import { Facebook } from "../../icons/Facebook";
import { LinkedIn } from "../../icons/LinkedIn";
import { Twitter } from "../../icons/Twitter";
import { YouTube } from "../../icons/YouTube";
import { Logo } from "../Logo";

export const Footer = () => {
	return (
		<footer className={"ams-footer"}>
			<div className={"ams-footer-container"}>
				<Link href={"/"}>
					<Logo />
				</Link>

				<ul className={"ams-footer-links"}>
					<li className={"ams-footer-section"}>
						<span className={"ams-footer-section-title"}>Solutions</span>

						<ul>
							<li>
								<Link href={"/solutions/amstore"}>AMStore</Link>
							</li>
							<li>
								<Link href={"/solutions/ambuilder"}>AMBuilder</Link>
							</li>
							<li>
								<Link href={"/solutions/amreports"}>AMReports</Link>
							</li>
							<li>
								<Link href={"/solutions/amcat"}>AMCat</Link>
							</li>
						</ul>
					</li>
					<li className={"ams-footer-section"}>
						<span className={"ams-footer-section-title"}>Help</span>

						<ul>
							<li>
								<Link href={"/support"}>Support</Link>
							</li>
							<li>
								<Link href={"/support/new-ticket"}>Helpdesk</Link>
							</li>
							<li>
								<Link href={"/contact"}>Contact Us</Link>
							</li>
						</ul>
					</li>
					<li className={"ams-footer-section"}>
						<span className={"ams-footer-section-title"}>Business</span>

						<ul>
							<li>
								<Link href={"/blog"}>Blog</Link>
							</li>
							<li>
								<Link href={"/case-studies"}>Case Studies</Link>
							</li>
							<li>
								<Link href={"/partners"}>Partners</Link>
							</li>
							<li>
								<Link href={"/awards"}>Awards</Link>
							</li>
						</ul>
					</li>
					<li className={"ams-footer-section"}>
						<span className={"ams-footer-section-title"}>Resources</span>

						<ul>
							<li>
								<Link href={"/resources/privacy"}>Privacy</Link>
							</li>
							<li>
								<Link href={"/resources/cookies"}>Cookies</Link>
							</li>
							<li>
								<Link href={"/resources/accessibility"}>Accessibility</Link>
							</li>
							<li>
								<Link href={"/sitemap"}>Sitemap</Link>
							</li>
						</ul>
					</li>
					<li className={"ams-footer-section"}>
						<span className={"ams-footer-section-title"}>About</span>

						<ul>
							<li>
								<Link href={"/about"}>About AMS</Link>
							</li>
							<li>
								<Link href={"/about/news"}>Newsroom</Link>
							</li>
							<li>
								<Link href={"/about/careers"}>Careers</Link>
							</li>
						</ul>
					</li>
				</ul>

				<div className={"ams-footer-info"}>
					<div className={"ams-footer-socials"}>
						<a href={"https://twitter.com/"} target={"_blank"}>
							<Twitter />
						</a>
						<a href={"https://linkedin.com/"} target={"_blank"}>
							<LinkedIn />
						</a>
						<a href={"https://facebook.com/"} target={"_blank"}>
							<Facebook />
						</a>
						<a href={"https://youtube.com/"} target={"_blank"}>
							<YouTube />
						</a>
					</div>

					<div className={"ams-footer-logo-lockup"}>
						<Link href={"/"}>
							<Logo />
						</Link>
						<span>
							Doing things <strong>right</strong> since 1987.
						</span>
					</div>

					<span className={"ams-footer-copyright"}>
						Copyright © 2023 Applied Management Solutions plc
					</span>
				</div>
			</div>
		</footer>
	);
};
