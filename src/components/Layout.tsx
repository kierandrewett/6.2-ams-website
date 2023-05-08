import Head from "next/head";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({
	page,
	children,
	title,
	description
}: {
	page: string;
	children?: any;
	title?: string;
	description?: string;
}) => {
	return (
		<>
			<Head>
				<title>{title ? `${title} - ` : `` + "Applied Management Solutions"}</title>
				<meta name="description" content={description || "Applied Management Solutions"} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="./favicon.ico" />
			</Head>
			<Header />
			<main id={"main-content"} className={`page-${page}`}>
				{children}
			</main>
			<Footer />
		</>
	);
};
