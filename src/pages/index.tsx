import React from "react";
import { Layout } from "../components/Layout";

export default function Home() {
	const [count, setCount] = React.useState(0);

	return (
		<Layout>
			<h1>Applied Management Solutions</h1>

			<h4>{count}</h4>
			<button onClick={() => setCount(count - 1)}>-1</button>
			<button onClick={() => setCount(count + 1)}>+1</button>

			<h1>Red Hat Display H1</h1>
			<h2>Red Hat Display H2</h2>
			<h3>Red Hat Display H3</h3>
			<h4>Red Hat Display H4</h4>
			<h5>Red Hat Display H5</h5>
			<p>Red Hat Display P</p>
		</Layout>
	);
}
