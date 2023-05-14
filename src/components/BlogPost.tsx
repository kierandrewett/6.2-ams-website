import Link from "next/link";
import { posts } from "../pages/blog";
import Hero, { HeroBody } from "./Hero";
import { Layout } from "./Layout";

export const BlogPost = ({ id, children }: { id: string; children?: any }) => {
	const post = posts.find((p) => p.id == id);

	return post ? (
		<Layout page={"blog"}>
			<Hero size={"sm"}>
				<HeroBody className={"gap-md"}>
					<HeroBody className={"gap-sm"}>
						<Link style={{ color: "inherit", textDecoration: "none" }} href={"/blog"}>
							<h1>Blog</h1>{" "}
						</Link>
						<div className="flex dir-col">
							<h3>{post.headline}</h3>
							<h5>{post.publishedAt}</h5>
						</div>
					</HeroBody>
					<HeroBody className={"gap-md"}>
						<img
							src={`/assets/images/blog/${post.id}.jpg`}
							alt={post.imageAlt}
							width={500}
						/>

						<article className={"flex gap-md dir-col"} style={{ maxWidth: "800px" }}>
							{children}
						</article>
					</HeroBody>
				</HeroBody>
			</Hero>
		</Layout>
	) : (
		<></>
	);
};
