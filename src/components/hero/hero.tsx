import React, { useRef } from "react";
import Typewriter from "typewriter-effect";
import Cursor from "./cursor/cursor";
import EnterButton from "./enterButton/enterButton";
import * as styles from "./hero.module.scss";

export default function Hero() {
	const text = [
		"Focused on crafting intuitive and engaging web products.",
		"I create complex systems to digitally transform businesses.",
		"I build responsive websites with a focus on accessiblity.",
	];

	const heroRef = useRef<HTMLElement>(null);

	return (
		<section className={styles.hero} ref={heroRef}>
			<div className={styles.hero__container}>
				<h1 className={styles.hero__title}>
					Hello, world. I'm <strong>Jack Fitzgibbon</strong>, a Full-Stack Developer based in
					<strong> Northamptonshire, UK</strong>
				</h1>
				<Typewriter
					options={{
						strings: text,
						autoStart: true,
						loop: true,
						delay: 90,
						deleteSpeed: 35,
						// @ts-ignore
						pauseFor: 3000,
						wrapperClassName: styles.Typewriter,
					}}
				/>
				<EnterButton />
			</div>
			<Cursor hero={heroRef} />
		</section>
	);
}
