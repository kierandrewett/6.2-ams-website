import React from "react";
import { DockerLogo } from "../art/client-logos/Docker";
import { GoogleLogo } from "../art/client-logos/Google";
import { MetaLogo } from "../art/client-logos/Meta";
import { NetflixLogo } from "../art/client-logos/Netflix";
import { TwitterLogo } from "../art/client-logos/Twitter";
import { HomeHeroAMSFeatures } from "../art/home-hero-ams-features";
import Hero, { HeroBody } from "../components/Hero";
import { Layout } from "../components/Layout";
import { Eyebrow, Highlight } from "../components/Typography";
import { ArrowDown } from "../icons/ArrowDown";
import { Book } from "../icons/Book";
import { Chart } from "../icons/Chart";
import { Database } from "../icons/Database";
import { FilledCheck } from "../icons/FilledCheck";
import { Graphs } from "../icons/Graphs";

export default function Home() {
	const [count, setCount] = React.useState(0);

	return (
		<Layout page={"home"}>
			<Hero id={"home-hero-ams-intro"} size={"lg"}>
				<HeroBody direction={"h"} className={"ai-center"}>
					<HeroBody style={{ maxWidth: "450px" }}>
						<Eyebrow uppercase>IT Database Management</Eyebrow>
						<h1>Tailored Solutions for Business Growth</h1>
					</HeroBody>
					<HeroBody style={{ paddingLeft: "6rem" }}>
						<HomeHeroAMSFeatures style={{ width: "100%" }} />
					</HeroBody>
				</HeroBody>
			</Hero>

			<Hero
				id={"home-hero-ams-case-studies"}
				size={"lg"}
				direction={"v"}
				className={"ai-center gap-xl"}
			>
				<HeroBody direction={"v"} className={"ai-center gap-md"}>
					<h2 className={"ams-text-center"}>Trusted by industry leaders.</h2>

					<div className={"ams-client-logos"}>
						<NetflixLogo />
						<GoogleLogo />
						<TwitterLogo />
						<MetaLogo />
						<DockerLogo />
					</div>
				</HeroBody>

				<HeroBody direction={"v"} className={"ai-center gap-md ams-netflix-case-study"}>
					<div className={"flex gap-md ai-center"}>
						<img
							src={"/assets/images/case-study/netflix-kaylee-parker.jpg"}
							alt={"Image of Kaylee Parker"}
							width={98}
						/>

						<div className={"flex gap-sm dir-col"}>
							<NetflixLogo />
							<h4>
								Kaylee Parker<span>, CTO</span>
							</h4>
						</div>
					</div>

					<blockquote>
						<h3 style={{ maxWidth: "900px" }} className={"ams-text-center"}>
							“The <Highlight>AMStore</Highlight> solution has allowed us to scale up
							our internal media management system to great heights here at Netflix.”
						</h3>
					</blockquote>
				</HeroBody>
			</Hero>

			<Hero size={"xl"}>
				<HeroBody className={"ai-center gap-lg"}>
					<div className={"flex gap-sm dir-col ai-center"}>
						<Eyebrow uppercase>
							Move into the 21<sup>st</sup> century
						</Eyebrow>
						<div className={"ams-text-center"}>
							<h1 className={"h0"}>Revolutionise</h1>
							<h1>Your Business Operations</h1>
						</div>
					</div>
					<ArrowDown style={{ color: "var(--ams-red)" }} />
					<ul className={"ams-solutions-list"}>
						<li>
							<div className={"ams-solution-info-container"}>
								<div className={"ams-solution-icon"}>
									<Database />
								</div>
								<h4>AMStore</h4>
							</div>
							<p>Managed database solution with flexible scalability and security.</p>
							<ul className={"ams-solution-features"}>
								<li>
									<FilledCheck />
									Makes adding data easy
								</li>
								<li>
									<FilledCheck />
									Award-winning response times
								</li>
								<li>
									<FilledCheck />
									Highly configurable
								</li>
								<li>
									<FilledCheck />
									Simple, fast migration
								</li>
							</ul>
						</li>
						<li>
							<div className={"ams-solution-info-container"}>
								<div className={"ams-solution-icon"}>
									<Graphs />
								</div>
								<h4>AMBuilder</h4>
							</div>
							<p>Perform sophisticated data queries and in-depth analysis.</p>
							<ul className={"ams-solution-features"}>
								<li>
									<FilledCheck />
									Connect with existing AMStore data
								</li>
								<li>
									<FilledCheck />
									Advanced data filtering and sorting
								</li>
								<li>
									<FilledCheck />
									Rapid query times {"<"} 10ms
								</li>
								<li>
									<FilledCheck />
									Simple, fast migration
								</li>
							</ul>
						</li>
						<li>
							<div className={"ams-solution-info-container"}>
								<div className={"ams-solution-icon"}>
									<Chart />
								</div>
								<h4>AMReporter</h4>
							</div>
							<p>Carry out data extraction and analysis to generate reports.</p>
							<ul className={"ams-solution-features"}>
								<li>
									<FilledCheck />
									Build large-scale report documents
								</li>
								<li>
									<FilledCheck />
									Exportable to a wide variety of formats
								</li>
								<li>
									<FilledCheck />
									Highly customisable and personalised branding
								</li>
								<li>
									<FilledCheck />
									Simple, fast migration
								</li>
							</ul>
						</li>
						<li>
							<div className={"ams-solution-info-container"}>
								<div className={"ams-solution-icon"}>
									<Book />
								</div>
								<h4>AMCat</h4>
							</div>
							<p>Organise and categorise data into a searchable data catalogue.</p>
							<ul className={"ams-solution-features"}>
								<li>
									<FilledCheck />
									Suitable for administrators
								</li>
								<li>
									<FilledCheck />
									Simple, automated organisation of data
								</li>
								<li>
									<FilledCheck />
									Enhanced access controls to conform to GDPR
								</li>
								<li>
									<FilledCheck />
									Simple, fast migration
								</li>
							</ul>
						</li>
					</ul>
				</HeroBody>
			</Hero>
		</Layout>
	);
}
