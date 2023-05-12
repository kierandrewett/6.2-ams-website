import { ResourcesHero } from ".";
import Hero, { HeroBody } from "../../components/Hero";
import { Layout } from "../../components/Layout";

export default function AccessibilityStatement() {
	return (
		<Layout page={"resources-accessibility"}>
			<ResourcesHero />

			<Hero style={{ "--padding-y": 0 } as any}>
				<HeroBody className={"gap-sm"}>
					<h2>Accessibility Statement</h2>
				</HeroBody>
			</Hero>

			<Hero size={"sm"}>
				<HeroBody direction={"h"} className={"ams-resource"}>
					<article className={"ams-resource-text"}>
						<p>
							At AMS, we are committed to ensuring that our website and services are
							accessible to everyone, regardless of their abilities or disabilities.
						</p>

						<p>
							We recognise the importance of providing equal access to information,
							and we strive to make sure that our website and services are easy to use
							and understand.
						</p>

						<div className={"ams-p"}>
							As the user, you should be able to:
							<ul className={"ams-bullet-list"} style={{ lineHeight: "2rem" }}>
								<li>zoom in up to 250% without any problems</li>
								<li> move around the website using just a keyboard</li>
								<li> access multimedia content like images using alt-text</li>
								<li>
									use voice recognition software to access parts of the website
								</li>
								<li> use a screen reader to dictate the contents of the page</li>
							</ul>
						</div>

						<p>
							We have implemented a variety of strategies to ensure that users can
							access our content and services in the way that best suits their needs.
						</p>

						<div className={"ams-p"}>
							These features include:
							<ul className={"ams-bullet-list"} style={{ lineHeight: "2rem" }}>
								<li>
									Alternative text descriptions for images and other non-text
									content, to ensure that users with visual impairments can
									understand the content of our website.
								</li>
								<li>
									Clear and easy-to-read fonts and layouts, to help users with
									cognitive or reading disabilities navigate our website more
									easily.
								</li>
								<li>
									Keyboard navigation options, to make it easy for users who
									cannot use a mouse or other pointing device to navigate our
									website and services.
								</li>
								<li>
									Consistent and predictable design elements, to make it easier
									for users with disabilities to navigate our website and
									services.
								</li>
								<li>
									Well contrasted backgrounds and colours, to ensure that text on
									the page is fully readable against a variety of backgrounds.
								</li>
							</ul>
						</div>

						<p>
							We are constantly improving the accessibility of our website and
							services, and welcome feedback and suggestions from our users on how we
							can make our content more accessible. If you encounter any barriers to
							accessing our website or services, or have suggestions for how we can
							improve accessibility, please contact us at{" "}
							<a href={"mailto:accessibility@ams.co.uk"}>accessibility@ams.co.uk</a>.
						</p>
					</article>
				</HeroBody>
			</Hero>
		</Layout>
	);
}
