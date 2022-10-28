import * as React from "react";
import type { HeadFC } from "gatsby";

export default function IndexPage() {
	return (
		<main>
			<h1>Mullane.eth</h1>
		</main>
	);
}

export const Head: HeadFC = () => <title>Home Page</title>;
