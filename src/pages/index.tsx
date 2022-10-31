import * as React from "react";
import type { HeadFC } from "gatsby";
import Hero from "../components/hero/hero";

export const Head: HeadFC = () => <title>Home Page</title>;

export default function IndexPage() {
	return (
		<>
			<Hero />
			<main style={{ height: "100vh", scrollSnapAlign: "start" }}>
				<h1>Mullane.eth</h1>
			</main>
		</>
	);
}
