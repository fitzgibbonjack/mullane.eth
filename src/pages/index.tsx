import * as React from "react";
import type { HeadFC } from "gatsby";
import Hero from "../components/hero/hero";

export const Head: HeadFC = () => <title>Home Page</title>;

export default function IndexPage() {
	return (
		<>
			<Hero />
			<main>
				<h1 style={{ height: "100vh" }}>Mullane.eth</h1>
			</main>
		</>
	);
}
