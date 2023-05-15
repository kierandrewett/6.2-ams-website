import Link from "next/link";
import Hero, { HeroBody } from "../components/Hero";
import { Layout } from "../components/Layout";

export default function Sitemap() {
	return (
		<Layout page={"sitemap"} title={"Sitemap"}>
			<Hero size={"sm"} className={"ai-center"}>
				<HeroBody>
					<h1>Sitemap</h1>

					<div className={"ams-sitemap"}>
						<ul className={"ams-sitemap-item"}>
							<h4>Solutions</h4>

							<li>
								<Link href={"/solutions#amstore"}>AMStore</Link>
							</li>

							<li>
								<Link href={"/solutions#ambuilder"}>AMBuilder</Link>
							</li>

							<li>
								<Link href={"/solutions#amreports"}>AMReports</Link>
							</li>

							<li>
								<Link href={"/solutions#amcat"}>AMCat</Link>
							</li>
						</ul>

						<ul className={"ams-sitemap-item"}>
							<h4>Business</h4>

							<li>
								<Link href={"/blog"}>Blog</Link>
							</li>

							<li>
								<Link href={"/blog"}>Case Studies</Link>
							</li>
						</ul>

						<ul className={"ams-sitemap-item"}>
							<h4>Help & Support</h4>

							<li>
								<Link href={"/support"}>Support</Link>
							</li>

							<li>
								<Link href={"/support"}>Helpdesk</Link>
							</li>

							<li>
								<Link href={"/contact"}>Contact AMS</Link>
							</li>
						</ul>

						<ul className={"ams-sitemap-item"}>
							<h4>Resources & Documentation</h4>

							<li>
								<Link href={"/resources/privacy"}>Privacy Policy</Link>
							</li>

							<li>
								<Link href={"/resources/cookies"}>Cookie Policy</Link>
							</li>

							<li>
								<Link href={"/resources/accessibility"}>
									Accessibility Statement
								</Link>
							</li>
						</ul>

						<ul className={"ams-sitemap-item"}>
							<h4>About AMS</h4>

							<li>
								<Link href={"/about"}>About Us</Link>
							</li>

							<li>
								<Link href={"/about/careers"}>Careers</Link>
							</li>
						</ul>
					</div>
				</HeroBody>
			</Hero>
		</Layout>
	);
}
