import Link from "next/link";
import { Eyebrow } from "./Typography";

export const BlogPost = ({
	id,
	category,
	headline,
	image,
	imageAlt,
	publishedAt
}: {
	id: string;
	category: string;
	headline: string;
	image: string;
	imageAlt: string;
	publishedAt: string;
}) => {
	return (
		<Link className={"ams-blog-post"} href={`/blog/${id}`}>
			<article>
				<img src={image} alt={imageAlt} />

				<div className={"ams-blog-post-metadata"}>
					<Eyebrow uppercase>{category}</Eyebrow>
					<h2>{headline}</h2>
					<h5>{publishedAt}</h5>
				</div>
			</article>
		</Link>
	);
};
