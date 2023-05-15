import Hero, { HeroBody } from "../../components/Hero";
import { Layout } from "../../components/Layout";
import { Post } from "../../components/Post";

export const posts = [
	{
		id: "ams-adobe-partnership",
		category: "Business",
		headline: "AMS announces partnership with Adobe",
		imageAlt: "An image of the AMS logo with a plus and the Adobe logo.",
		publishedAt: "5th May 2023"
	},
	{
		id: "amstore-version-34",
		category: "Release",
		headline: "AMStore version 34 released",
		imageAlt:
			"An image of the AMStore logo in the top left and version 34 text in the bottom right corner.",
		publishedAt: "23rd April 2023"
	},
	{
		id: "netflix-case-study",
		category: "Case Study",
		headline: "How Netflix has scaled to new heights using AMS",
		imageAlt: "An image of a TV with the Netflix logo in the centre.",
		publishedAt: "8th April 2023"
	}
];

export default function Blog() {
	return (
		<Layout page={"blog"} title={"Blog"}>
			<Hero size={"sm"}>
				<HeroBody className={"gap-md"}>
					<HeroBody>
						<h1>Blog</h1>
					</HeroBody>
					<HeroBody className={"ams-post-items"}>
						{posts.map((p) => (
							<Post
								id={p.id}
								href={`/blog/${p.id}`}
								category={p.category}
								headline={p.headline}
								image={`/assets/images/blog/${p.id}.jpg`}
								imageAlt={p.imageAlt}
								publishedAt={p.publishedAt}
							/>
						))}
					</HeroBody>
				</HeroBody>
			</Hero>
		</Layout>
	);
}
