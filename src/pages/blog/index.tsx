import Hero, { HeroBody } from "../../components/Hero";
import { Layout } from "../../components/Layout";
import { Post } from "../../components/Post";

export default function Blog() {
	return (
		<Layout page={"blog"}>
			<Hero size={"sm"}>
				<HeroBody className={"gap-md"}>
					<HeroBody>
						<h1>Blog</h1>
					</HeroBody>
					<HeroBody className={"ams-post-items"}>
						<Post
							id={"ams-adobe-partnership"}
							href={"/blog/ams-adobe-partnership"}
							category={"Business"}
							headline={"AMS announces partnership with Adobe"}
							image={"/assets/images/blog/ams-adobe-partnership.jpg"}
							imageAlt={"An image of the AMS logo with a plus and the Adobe logo."}
							publishedAt={"5th May 2023"}
						/>

						<Post
							id={"amstore-version-34"}
							href={"/blog/amstore-version-34"}
							category={"Release"}
							headline={"AMStore version 34 released"}
							image={"/assets/images/blog/amstore-version-34.jpg"}
							imageAlt={
								"An image of the AMStore logo in the top left and version 34 text in the bottom right corner."
							}
							publishedAt={"23rd April 2023"}
						/>

						<Post
							id={"netflix-case-study"}
							href={"/blog/netflix-case-study"}
							category={"Case Study"}
							headline={"How Netflix has scaled to new heights using AMS"}
							image={"/assets/images/blog/netflix-case-study.jpg"}
							imageAlt={"An image of a TV with the Netflix logo in the centre."}
							publishedAt={"8th April 2023"}
						/>
					</HeroBody>
				</HeroBody>
			</Hero>
		</Layout>
	);
}
