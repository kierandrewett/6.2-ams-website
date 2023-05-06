import Head from "next/head";
import { Header } from "./Header";

export const Layout = ({ children, title, description }: { children?: any; title?: string; description?: string }) => {
	return (
		<>
			<Head>
				<title>{title ? `${title} - ` : `` + "Applied Management Solutions"}</title>
				<meta name="description" content={description || "Applied Management Solutions"} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="stylesheet" href="./assets/css/ams.css" />
				<link rel="icon" href="./favicon.ico" />
			</Head>
			<Header />
			<main id={"main-content"}>{children}</main>
		</>
	);
};
