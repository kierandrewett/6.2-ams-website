import Link from "next/link";
import { Eyebrow } from "./Typography";

// Component to show previews of blog posts on the blog page
export const Post = ({
	id,
	href,
	category,
	headline,
	image,
	imageAlt,
	publishedAt
}: {
	id: string;
	href?: string;
	category?: string;
	headline?: string;
	image?: string;
	imageAlt?: string;
	publishedAt?: string;
}) => {
	return (
		<Link className={"ams-post"} href={href as any}>
			<article>
				{image && <img src={image} alt={imageAlt} />}

				<div className={"ams-post-metadata"}>
					{category && <Eyebrow uppercase>{category}</Eyebrow>}
					{headline && <h2>{headline}</h2>}
					{publishedAt && <h5>{publishedAt}</h5>}
				</div>
			</article>
		</Link>
	);
};
