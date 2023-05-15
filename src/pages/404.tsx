import { Button } from "../components/Button";
import Hero, { HeroBody } from "../components/Hero";
import { Layout } from "../components/Layout";
import { NotFoundIcon } from "../icons/NotFoundIcon";

export default function NotFound() {
	return (
		<Layout page={"404"} title={"404"}>
			<Hero className={"ai-center"} style={{ flex: 1 }}>
				<HeroBody className={"ai-center gap-md"}>
					<NotFoundIcon />
					<div className={"flex dir-col ams-text-center ai-center"}>
						<h1>Page Not Found</h1>
						<p>Sorry, we couldn't find that page.</p>
					</div>

					<Button href={"/"} colour={"red"}>
						Return Home
					</Button>
				</HeroBody>
			</Hero>
		</Layout>
	);
}
