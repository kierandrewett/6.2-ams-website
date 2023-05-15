// As Next.js does not support HTML comments, this component is used to render HTML comments
const HTMLComment = ({ children }: { children: string | string[] }) => {
	return (
		<div
			className={"__html_comment"}
			dangerouslySetInnerHTML={{
				__html: `<!-- ${
					Array.isArray(children)
						? children.join("").toString().replace(/\n\n/g, "\n")
						: children.toString()
				} -->`
			}}
		></div>
	);
};

export default HTMLComment;
