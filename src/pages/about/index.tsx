import { Button } from "../../components/Button";
import Hero, { HeroBody } from "../../components/Hero";
import { Layout } from "../../components/Layout";
import { Logo } from "../../components/Logo";
import { Eyebrow } from "../../components/Typography";

export default function About() {
	return (
		<Layout page={"about"}>
			<Hero size={"lg"}>
				<HeroBody
					className={"ai-center ams-text-center jc-center gap-sm"}
					style={{ color: "var(--ams-white)" }}
				>
					<Logo inverted />
					<h1 style={{ maxWidth: "600px" }}>
						We create the world’s leading database tools and solutions
					</h1>
				</HeroBody>
			</Hero>

			<Hero>
				<HeroBody>
					<ul className={"ams-about-facts"}>
						<li>
							<span>
								Founded in <h1>1987</h1> in the UK
							</span>
						</li>

						<li>
							<span>
								Delivering to <h1>500+</h1> clients
							</span>
						</li>

						<li>
							<span>
								Raised over <h1>£1bn</h1> in capital
							</span>
						</li>

						<li>
							<span>
								Rated globally <h1>#1</h1> leader in data
							</span>
						</li>
					</ul>
				</HeroBody>
			</Hero>

			<Hero>
				<HeroBody className={"ai-center ams-text-center"}>
					<Eyebrow uppercase>Across the globe</Eyebrow>
					<div className="flex gap-sm dir-col">
						<h1>We work all around the world</h1>
						<p style={{ maxWidth: "560px" }}>
							We're operating in more than 10 countries all over the world, but we
							still stay true to our roots in the UK. It's where our main headquarters
							have been located since 1987 and we love it to bits!
						</p>
					</div>
					<img
						src={"/assets/images/world.png"}
						style={{ width: "100%", marginTop: "2.5rem" }}
					/>
				</HeroBody>
			</Hero>

			<Hero>
				<HeroBody className={"ai-center ams-text-center"}>
					<Eyebrow uppercase>Keeping us going</Eyebrow>
					<div className="flex gap-sm dir-col">
						<h1>Backed by big investors</h1>
						<p style={{ maxWidth: "650px" }}>
							AMS is proud to be supported by a number of investors, whether it be
							individuals or businesses, as they help us to continue to innovate and
							grow.
						</p>
					</div>
				</HeroBody>
			</Hero>

			<Hero>
				<HeroBody className={"ai-center ams-text-center"}>
					<Eyebrow uppercase>Join our team</Eyebrow>
					<div className="flex gap-sm dir-col ai-center">
						<h1 style={{ maxWidth: "500px" }}>
							We’re always open to new faces on our team
						</h1>
						<Button colour={"red"}>Careers at AMS</Button>
					</div>
				</HeroBody>
			</Hero>
		</Layout>
	);
}
