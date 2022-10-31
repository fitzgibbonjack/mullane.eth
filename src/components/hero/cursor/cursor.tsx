import React, { useRef, useState, useEffect } from "react";
import useHeroAnimation from "../../../animations/heroAnimation";
import * as styles from "./cursor.module.scss";

export default function Cursor({ hero }: { hero: any }) {
	const [cursorIsShown, setCursorIsShown] = useState(true);
	const glowRef = useRef<HTMLDivElement>(null);
	const cursorRef = useRef<HTMLDivElement>(null);

	const glowPosition = useRef({
		x: 0 as number,
		y: 0 as number,
		nextX: 0 as number,
		nextY: 0 as number,
	});

	function lerp(start: number, end: number, amount: number) {
		return (1 - amount) * start + amount * end;
	}

	function updateCursorPosition(event: MouseEvent) {
		!cursorIsShown && setCursorIsShown(true);
		glowPosition.current.x = event.clientX;
		glowPosition.current.y = event.clientY;
	}

	function moveCursor() {
		if (!glowRef.current || !cursorRef.current) return false;
		glowPosition.current.nextX = lerp(glowPosition.current.nextX, glowPosition.current.x, 0.04);
		glowPosition.current.nextY = lerp(glowPosition.current.nextY, glowPosition.current.y, 0.04);
		glowRef.current.style.inset = `${glowPosition.current.nextY}px auto auto ${glowPosition.current.nextX}px`;
		cursorRef.current.style.inset = `${glowPosition.current.y}px auto auto ${glowPosition.current.x}px`;
	}

	useEffect(() => {
		hero.current.onmouseleave = () => setCursorIsShown(false);
		hero.current.onmouseenter = () => setCursorIsShown(true);
		hero.current.onmousemove = (event: any) => updateCursorPosition(event);
		useHeroAnimation(hero, cursorRef);
		setInterval(moveCursor, 1000 / 60);
	}, []);

	return (
		<div style={cursorIsShown ? { opacity: 1 } : {}} aria-hidden="true" className={styles.container}>
			<div ref={cursorRef} className={styles.cursor} />
			<div ref={glowRef} className={styles.glow} />
		</div>
	);
}
