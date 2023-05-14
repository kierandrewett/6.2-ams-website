import Link from "next/link";
import React from "react";
import { DockerLogo } from "../../art/client-logos/Docker";
import { GoogleLogo } from "../../art/client-logos/Google";
import { MetaLogo } from "../../art/client-logos/Meta";
import { NetflixLogo } from "../../art/client-logos/Netflix";
import { TwitterLogo } from "../../art/client-logos/Twitter";
import Hero, { HeroBody } from "../../components/Hero";
import { Layout } from "../../components/Layout";
import { Eyebrow } from "../../components/Typography";
import { Book } from "../../icons/Book";
import { Chart } from "../../icons/Chart";
import { Chat } from "../../icons/Chat";
import { ChevronDown } from "../../icons/ChevronDown";
import { Database } from "../../icons/Database";
import { Email } from "../../icons/Email";
import { Graphs } from "../../icons/Graphs";
import { Phone } from "../../icons/Phone";
import { Post } from "../../icons/Post";

export default function Solutions() {
	const storeRef = React.createRef<HTMLDetailsElement>();
	const builderRef = React.createRef<HTMLDetailsElement>();
	const reportsRef = React.createRef<HTMLDetailsElement>();
	const catRef = React.createRef<HTMLDetailsElement>();

	const onHashChange = (e: any, hash?: string) => {
		if (e) {
			e.preventDefault();
		}

		if (!storeRef || !storeRef.current || !builderRef || !builderRef.current) return;

		const isStore = hash == "amstore";
		const isBuilder = hash == "ambuilder";
		const isReports = hash == "amreports";
		const isCat = hash == "amcat";

		(storeRef.current as any).open = isStore;
		(builderRef.current as any).open = isBuilder;
		(reportsRef.current as any).open = isReports;
		(catRef.current as any).open = isCat;
	};

	const onDetailsOpen = (e: any, hash: string) => {
		const el = e.target as HTMLDetailsElement;
		const uri = new URL(window.location.href);

		if (el.open) {
			uri.hash = "#" + hash;
		} else {
			uri.hash = "#";
		}

		window.history.pushState(null, "", uri.href);
	};

	React.useEffect(() => {
		const hash = window.location.hash.split("#")[1];

		if (hash && hash.length) {
			onHashChange(null, hash);
		}
	}, []);

	return (
		<Layout page={"solutions"}>
			<Hero size={"md"} className={"ai-center"}>
				<HeroBody className={"ai-center gap-md"} direction={"v"}>
					<div className={"flex gap-sm dir-col ai-center jc-center"}>
						<h1 className={"ams-text-center"}>Interconnected solutions from AMS</h1>
						<p className={"ams-text-center"} style={{ maxWidth: "450px" }}>
							AMS provides industry-leading solutions that just work together -
							whether you’re a small or big business.
						</p>
					</div>

					<details
						className={"ams-solution-item"}
						ref={storeRef}
						onToggle={(e) => onDetailsOpen(e, "amstore")}
					>
						<summary className={"ams-button"}>
							<a
								className={"ams-visually-hidden"}
								id={"amstore"}
								style={{ scrollMarginTop: "10rem" }}
							>
								AMStore
							</a>

							<div className={"ams-solution-container"}>
								<div className="ams-solution-icon">
									<Database />
								</div>

								<span>AMStore</span>
							</div>

							<ChevronDown />
						</summary>
						<div className={"flex gap-sm dir-col"} style={{ padding: "1rem" }}>
							<p>
								AMStore is a managed database storage solution that provides an
								excellent way for businesses to manage their data storage needs
								without having to worry about the infrastructure.
							</p>
							<p>
								Managed databases are cloud-based, which means they are scalable,
								secure, and can be accessed from anywhere with an internet
								connection.
							</p>
						</div>
					</details>
					<details
						className={"ams-solution-item"}
						ref={builderRef}
						style={{ scrollMarginTop: "10rem" }}
						onToggle={(e) => onDetailsOpen(e, "ambuilder")}
					>
						<summary className={"ams-button"}>
							<a className={"ams-visually-hidden"} id={"ambuilder"}>
								AMBuilder
							</a>

							<div className={"ams-solution-container"}>
								<div className="ams-solution-icon">
									<Graphs />
								</div>
								<span>AMBuilder</span>
							</div>

							<ChevronDown />
						</summary>
						<div className={"flex gap-sm dir-col"} style={{ padding: "1rem" }}>
							<p>
								AMBuilder is a powerful new product that enables businesses to
								perform sophisticated data queries and in-depth analysis using a
								user-friendly, drag-and-drop interface. With AMBuilder, it makes it
								easier to start querying data without having to write complex SQL
								queries.
							</p>
							<p>
								With just a few clicks, businesses can connect multiple data
								sources, perform complex joins, and apply filters and aggregations
								to analyze their data.
							</p>
						</div>
					</details>
					<details
						className={"ams-solution-item"}
						ref={reportsRef}
						style={{ scrollMarginTop: "10rem" }}
						onToggle={(e) => onDetailsOpen(e, "amreports")}
					>
						<summary className={"ams-button"}>
							<a className={"ams-visually-hidden"} id={"amreports"}>
								AMReports
							</a>

							<div className={"ams-solution-container"}>
								<div className="ams-solution-icon">
									<Chart />
								</div>
								<span>AMReports</span>
							</div>

							<ChevronDown />
						</summary>
						<div className={"flex gap-sm dir-col"} style={{ padding: "1rem" }}>
							<p>
								AMReports is a new product that provides businesses with an easy way
								to extract and analyze data from their database tables and queries
								to create comprehensive reports.
							</p>
							<p>
								The ability to extract data from multiple sources and consolidate it
								into a single report means that businesses can effortlessly collect
								data from various databases and analyze it together, making it
								easier to see trends and patterns across their business operations.
							</p>
						</div>
					</details>
					<details
						className={"ams-solution-item"}
						ref={catRef}
						style={{ scrollMarginTop: "10rem" }}
						onToggle={(e) => onDetailsOpen(e, "amcat")}
					>
						<summary className={"ams-button"}>
							<a className={"ams-visually-hidden"} id={"amcat"}>
								AMCat
							</a>

							<div className={"ams-solution-container"}>
								<div className="ams-solution-icon">
									<Book />
								</div>
								<span>AMCat</span>
							</div>

							<ChevronDown />
						</summary>
						<div className={"flex gap-sm dir-col"} style={{ padding: "1rem" }}>
							<p>
								AMCat is a powerful new product that helps businesses organise and
								categorise their data into a searchable data catalog. With AMCat,
								businesses can easily manage their data assets, making it easier to
								find the right data when they need it.
							</p>
							<p>
								One of the key features of AMCat is its ability to automatically
								discover and catalog data from a wide variety of sources, including
								databases, file systems, and cloud storage. This means that
								businesses can quickly and easily find the data they need without
								having to manually search through various sources.
							</p>
						</div>
					</details>
				</HeroBody>
			</Hero>

			<Hero
				size={"md"}
				direction={"v"}
				className={"gap-lg ai-center"}
				style={{ borderTop: "1px solid var(--ams-gray1)" }}
			>
				<HeroBody>
					<h1 className={"ams-text-center"}>Why choose us?</h1>
				</HeroBody>
				<HeroBody className={"ai-center gap-xl jc-center ams-text-center"}>
					<div className={"flex dir-col ai-center"}>
						<Eyebrow uppercase>Always online</Eyebrow>
						<div className={"ams-text-center gap-sm flex dir-col"}>
							<h1>99.9% uptime guarantee</h1>
							<p>
								Cloud infrastructure ensures your business is up and running at all
								times.
							</p>
						</div>
					</div>

					<div className={"flex dir-col ai-center"}>
						<Eyebrow uppercase>Transnational coverage</Eyebrow>
						<div className={"ams-text-center gap-sm flex dir-col"}>
							<h1>Available in 10+ countries</h1>
							<p style={{ maxWidth: "550px" }}>
								AMS is available across the world in countries like the UK, Germany,
								France, United States, Australia, India, China and Japan.
							</p>
						</div>
						<img
							src={"/assets/images/world.png"}
							style={{ width: "100%", marginTop: "2.5rem" }}
						/>
					</div>

					<div className={"flex dir-col ai-center"}>
						<Eyebrow uppercase>Trusted by tech</Eyebrow>
						<div className={"ams-text-center gap-sm flex dir-col"}>
							<h1>Trusted by industry leaders</h1>
							<p>Learn more about our case study with Netflix.</p>
						</div>
						<div className={"ams-client-logos"} style={{ marginTop: "2.5rem" }}>
							<NetflixLogo />
							<GoogleLogo />
							<TwitterLogo />
							<MetaLogo />
							<DockerLogo />
						</div>
					</div>

					<div className={"flex dir-col ai-center"}>
						<Eyebrow uppercase>Fast responsive support</Eyebrow>
						<div className={"ams-text-center gap-sm flex dir-col"}>
							<h1>Help is here when you need it</h1>
							<p>
								Free, fast and flexible support for all our customers 24/7 any day
								of the week, directly to human operators.{" "}
							</p>
						</div>
						<ul className={"ams-help-info"} style={{ marginTop: "2.5rem" }}>
							<li>
								<Phone />
								<p>07523 123111 (toll-free)</p>
							</li>
							<li>
								<Email />
								<p>
									<a href={"mailto:client-support@ams.co.uk"}>
										client-support@ams.co.uk
									</a>
								</p>
							</li>
							<li>
								<Chat />
								<p>
									<Link href={"/contact"}>Speak to an agent over Live Chat</Link>
								</p>
							</li>
							<li>
								<Post />
								<p className={"ams-text-left"}>
									Applied Management Solutions
									<br />
									1 Broadplane Avenue,
									<br />
									London,
									<br />
									WE31 4AA
								</p>
							</li>
						</ul>
					</div>
				</HeroBody>
			</Hero>
		</Layout>
	);
}
