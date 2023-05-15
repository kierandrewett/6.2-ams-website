import Link from "next/link";
import React from "react";
import { Button } from "../components/Button";
import Hero, { HeroBody } from "../components/Hero";
import { Layout } from "../components/Layout";
import { Email } from "../icons/Email";
import { Phone } from "../icons/Phone";
import { Twitter } from "../icons/Twitter";

const wait = async (ms: number) => new Promise((r) => setTimeout(() => r(1), ms));

enum FormState {
	Idle,
	Submitting,
	Success
}

export default function Contact() {
	const [formState, setFormState] = React.useState(FormState.Idle);

	const onSubmit = async (e: any) => {
		e.preventDefault();

		setFormState(FormState.Submitting);
		await wait(1000);
		setFormState(FormState.Success);
	};

	return (
		<Layout page={"contact"} title={"Contact Us"}>
			<Hero size={"sm"}>
				<HeroBody className={"gap-sm"}>
					<h1>Contact AMS</h1>
					<p style={{ maxWidth: "580px" }}>
						Discover answers to your questions regarding products, sales, customer
						support, services, and other related topics.
					</p>
				</HeroBody>
			</Hero>

			<Hero id={"contact-hero"} size={"sm"} style={{ padding: 0 }}>
				<HeroBody className={"ai-end"}>
					<div
						className={"flex gap-md dir-col"}
						style={{ width: "calc(var(--ams-guttered-width) / 2)", padding: "2rem 0" }}
					>
						<h4>Get in touch</h4>

						<ul className={"flex gap-sm dir-col"}>
							<li className={"flex ai-center gap-sm"}>
								<Phone />
								<span>
									<strong>Phone:</strong> 07523 123111 (toll-free)
								</span>
							</li>

							<li className={"flex ai-center gap-sm"}>
								<Email />
								<span>
									<strong>Email: </strong>
									<a href="mailto:client-support@ams.co.uk">
										client-support@ams.co.uk
									</a>
								</span>
							</li>

							<li className={"flex ai-center gap-sm"}>
								<Twitter width={24} height={24} />
								<span>
									<strong>Twitter: </strong>
									<a target={"_blank"} href="https://twitter.com/">
										@AMS
									</a>
								</span>
							</li>
						</ul>

						<h4>Resources</h4>

						<ul className={"flex gap-sm dir-col"}>
							<li>
								<Link target={"_blank"} href="/support">
									Check support
								</Link>
							</li>

							<li>
								<Link target={"_blank"} href="/blog">
									Read our blog
								</Link>
							</li>

							<li>
								<Link target={"_blank"} href="/sitemap">
									Sitemap
								</Link>
							</li>

							<li>
								<Link target={"_blank"} href="/about/careers">
									Careers
								</Link>
							</li>

							<li>
								<Link target={"_blank"} href="/about">
									About AMS
								</Link>
							</li>
						</ul>
					</div>
				</HeroBody>

				<HeroBody style={{ backgroundColor: "var(--ams-gray2-lighter)" }}>
					<div
						className={"flex gap-sm dir-col"}
						style={{
							width: "calc(calc(var(--ams-guttered-width) / 2) - 2rem * 2)",
							padding: "2rem",
							paddingRight: "0"
						}}
					>
						<h4>Send a message via live chat</h4>
						<p>
							Leave us some information about who you are and an agent will start a
							conversation with you shortly.
						</p>
						<p>Live chat is available from 09:00 to 18:00 BST.</p>

						{formState !== FormState.Success ? (
							<form
								className={"ams-form"}
								style={{ maxWidth: "400px", marginTop: "1rem" }}
								onSubmit={(e) => onSubmit(e)}
							>
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
									disabled={formState !== FormState.Idle}
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
									disabled={formState !== FormState.Idle}
									required
								/>
								<label
									className={"ams-visually-hidden"}
									htmlFor={"ams-contact-form--message"}
								>
									Enter a message:
								</label>
								<textarea
									id={"ams-contact-form--message"}
									className={"ams-input"}
									name={"message"}
									placeholder={
										"Describe in a few words what you want to talk about"
									}
									disabled={formState !== FormState.Idle}
									minLength={25}
									style={{
										resize: "vertical",
										minHeight: "150px",
										maxHeight: "300px"
									}}
									required
								/>

								<Button
									colour={"red"}
									type={"submit"}
									disabled={formState !== FormState.Idle}
								>
									Open a live chat
								</Button>
							</form>
						) : (
							<p>Thank you. An agent will be with you shortly.</p>
						)}
					</div>
				</HeroBody>
			</Hero>
		</Layout>
	);
}
