import React from "react";
import * as styles from "./enterButton.module.scss";

export default function EnterButton() {
	function enterSite() {
		window.scrollTo(0, 100);
	}

	return (
		<button className={styles.enterButton} aria-hidden="true" aria-label="enter site" onClick={enterSite}>
			<span>↓</span>
			Enter
		</button>
	);
}
