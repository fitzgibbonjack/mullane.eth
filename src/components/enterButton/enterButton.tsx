import React from "react";
import * as styles from "./enterButton.module.scss";
import { useIsMobile } from "../../hooks/useIsMobile";

export default function EnterButton() {
	const isMobile = useIsMobile();

	function enterSite() {
		window.scrollTo(0, 100);
	}

	return (
		<button className={styles.enterButton} aria-hidden="true" aria-label="enter site" onClick={enterSite}>
			<span>↓</span>
			{isMobile ? "Swipe Down" : "Enter"}
		</button>
	);
}
