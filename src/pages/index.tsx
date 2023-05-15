import HCaptcha from "@hcaptcha/react-hcaptcha";
import Link from "next/link";
import React from "react";
import { DockerLogo } from "../art/client-logos/Docker";
import { GoogleLogo } from "../art/client-logos/Google";
import { MetaLogo } from "../art/client-logos/Meta";
import { NetflixLogo } from "../art/client-logos/Netflix";
import { TwitterLogo } from "../art/client-logos/Twitter";
import { HomeHeroAMSFeatures } from "../art/home-hero-ams-features";
import { Button } from "../components/Button";
import HTMLComment from "../components/HTMLComment";
import Hero, { HeroBody } from "../components/Hero";
import { Layout } from "../components/Layout";
import { Eyebrow, Highlight } from "../components/Typography";
import { ArrowDown } from "../icons/ArrowDown";
import { ArrowRight } from "../icons/ArrowRight";
import { Book } from "../icons/Book";
import { Chart } from "../icons/Chart";
import { Database } from "../icons/Database";
import { FilledCheck } from "../icons/FilledCheck";
import { Graphs } from "../icons/Graphs";

enum FormState {
	Idle,
	Submitting,
	Error,
	Success
}

// Wait for a certain amount of time
// Uses a promise to make it easier to use with async/await
const wait = async (ms: number) => new Promise((r) => setTimeout(() => r(1), ms));

// Check if a string is valid JSON
// Tests this by being able to parse it.
const isJSON = (str: string) => {
	try {
		JSON.parse(str);
	} catch (e) {
		return false;
	}
	return true;
};

// The main home page
//
export default function Home() {
	const [token, setToken] = React.useState("");
	const captchaRef = React.createRef<HCaptcha>();

	const [formState, setFormState] = React.useState(FormState.Idle);
	const [formError, setFormError] = React.useState<any>();
	const [formFocused, setFormFocused] = React.useState(false);

	const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		e.stopPropagation();

		const form = e.target as HTMLFormElement;

		const name = form.elements.namedItem("name") as HTMLInputElement;
		const emailAddress = form.elements.namedItem("email_address") as HTMLInputElement;
		const message = form.elements.namedItem("message") as HTMLTextAreaElement;

		if (!name || !emailAddress || !message) return;

		if (!token || !token.trim().length) {
			setFormError("Complete the captcha to continue.");
			setFormState(FormState.Error);
			return;
		}

		setFormError(null);
		setFormState(FormState.Submitting);

		await wait(1000);

		fetch("/api/contact", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				name: name.value,
				emailAddress: emailAddress.value,
				message: message.value,
				securityToken: token
			})
		}).then(async (res) => {
			const text = await res.text();

			if (res.status == 200) {
				setFormState(FormState.Success);
			} else {
				setFormState(FormState.Error);
				setFormError(isJSON(text) ? JSON.parse(text).message : text);
			}
		});
	};

	const onHCaptchaLoad = () => {
		captchaRef.current?.execute();
	};

	return (
		<Layout page={"home"}>
			<HTMLComment>
				Main home page section, gives a brief insight into what we do at AMS
			</HTMLComment>

			<Hero id={"home-hero-ams-intro"} size={"lg"}>
				<HeroBody direction={"h"} className={"ai-center"}>
					<HeroBody style={{ maxWidth: "450px" }}>
						<Eyebrow uppercase>IT Database Management</Eyebrow>
						<h1>Tailored Solutions for Business Growth</h1>
					</HeroBody>
					<HeroBody style={{ paddingLeft: "6rem" }}>
						<HTMLComment>
							Main home section image, using SVGs here as it means we get infinite
							scaling
						</HTMLComment>
						<HomeHeroAMSFeatures style={{ width: "100%" }} />
					</HeroBody>
				</HeroBody>
			</Hero>

			<HTMLComment>
				Second home section, this one shows the different clients that use our services
			</HTMLComment>

			<Hero
				id={"home-hero-ams-case-studies"}
				size={"lg"}
				direction={"v"}
				className={"ai-center gap-xl"}
			>
				<HeroBody direction={"v"} className={"ai-center gap-md"}>
					<h2 className={"ams-text-center"}>Trusted by industry leaders.</h2>

					<div className={"ams-client-logos"}>
						<HTMLComment>Client logos as SVGs</HTMLComment>

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

					<HTMLComment>
						Using a blockquote element here as it follows HTML semantics
					</HTMLComment>

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
							<Button
								href={"/solutions#amstore"}
								style={{ marginTop: "auto", marginLeft: "-1.25rem" }}
							>
								Learn more <ArrowRight width={20} />
							</Button>
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
							<Button
								href={"/solutions#ambuilder"}
								style={{ marginTop: "auto", marginLeft: "-1.25rem" }}
							>
								Learn more <ArrowRight width={20} />
							</Button>
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
							<Button
								href={"/solutions#amreporter"}
								style={{ marginTop: "auto", marginLeft: "-1.25rem" }}
							>
								Learn more <ArrowRight width={20} />
							</Button>
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
							<Button
								href={"/solutions#amcat"}
								style={{ marginTop: "auto", marginLeft: "-1.25rem" }}
							>
								Learn more <ArrowRight width={20} />
							</Button>
						</li>
					</ul>
				</HeroBody>
			</Hero>

			<Hero id={"home-hero-ams-contact"}>
				<HeroBody className={"jc-center ai-center gap-lg"}>
					<div className={"flex dir-col gap-sm ai-center jc-center"}>
						<h2>Get in touch with us</h2>
						<p>
							We’d love to show you how the AMS suite of products can help accelerate
							your business.
						</p>
					</div>

					<HTMLComment>Start of basic contact form for AMS</HTMLComment>

					{formState !== FormState.Success ? (
						<form
							className={"ams-form"}
							style={{ maxWidth: "400px", minWidth: "400px" }}
							onSubmit={(e) => onFormSubmit(e)}
						>
							<HTMLComment>
								The label element is hidden to users, but is still picked up by
								screen readers for accessibility reasons
							</HTMLComment>
							<label
								className={"ams-visually-hidden"}
								htmlFor={"ams-contact-form--name"}
							>
								Full name:
							</label>
							<input
								id={"ams-contact-form--name"}
								className={"ams-input"}
								type={"text"}
								name={"name"}
								placeholder={"Full name"}
								disabled={formState == FormState.Submitting}
								onBlur={() => setFormFocused(true)}
								required
							/>
							<label
								className={"ams-visually-hidden"}
								htmlFor={"ams-contact-form--email_address"}
							>
								Email address:
							</label>
							<input
								id={"ams-contact-form--email_address"}
								className={"ams-input"}
								type={"email"}
								name={"email_address"}
								placeholder={"Email address"}
								disabled={formState == FormState.Submitting}
								onBlur={() => setFormFocused(true)}
								required
							/>
							<label
								className={"ams-visually-hidden"}
								htmlFor={"ams-contact-form--message"}
							>
								Enter a message:
							</label>
							<HTMLComment>
								Using a textarea element as it means we can get multi line responses
								from users
							</HTMLComment>
							<textarea
								id={"ams-contact-form--message"}
								className={"ams-input"}
								name={"message"}
								placeholder={"Message"}
								minLength={25}
								disabled={formState == FormState.Submitting}
								style={{
									resize: "vertical",
									minHeight: "150px",
									maxHeight: "300px"
								}}
								onBlur={() => setFormFocused(true)}
								required
							/>

							<HTMLComment>
								The captcha element will go here, it appears client side and is
								introduced using JavaScript so it won't appear in the static HTML
								document.
							</HTMLComment>

							{formFocused && (
								<HCaptcha
									sitekey={"f70011d7-726f-493c-8cec-9741ac4347e0"}
									onLoad={onHCaptchaLoad}
									onVerify={(token) => setToken(token)}
									ref={captchaRef}
								/>
							)}

							{formState == FormState.Error && <Highlight>{formError}</Highlight>}

							<HTMLComment>
								Submit button will send the information to the AMS API for it to be
								sent to a database
							</HTMLComment>

							<Button
								colour={"red"}
								type={"submit"}
								style={{ margin: "0 auto" }}
								disabled={formState == FormState.Submitting}
							>
								{formState == FormState.Submitting ? "Sending..." : "Send message"}
							</Button>

							<small className={"ams-text-center"}>
								By clicking "Send message", you agree AMS can store your name, email
								address and message for up to 30 days as outlined in our{" "}
								<Link target={"_blank"} href={"/resources/privacy"}>
									Privacy Policy
								</Link>
								.
							</small>
						</form>
					) : (
						<p style={{ height: "400px" }}>
							Thank you! We have received your message and will get back to you
							shortly.
						</p>
					)}
				</HeroBody>
			</Hero>
		</Layout>
	);
}
