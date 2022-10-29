import React, { useRef, useState, useEffect } from "react";
import * as styles from "./cursor.module.scss";

export default function Cursor({ hero }: { hero: any }) {
	const [cursorIsShown, setCursorIsShown] = useState(false);
	const cursorRef = useRef<HTMLDivElement>(null);

	const cursorPosition = useRef({
		x: 0 as number,
		y: 0 as number,
		nextX: 0 as number,
		nextY: 0 as number,
	});

	function hideCursor() {
		setCursorIsShown(false);
	}

	function lerp(start: number, end: number, amount: number) {
		return (1 - amount) * start + amount * end;
	}

	function updateCursorPosition(event: MouseEvent) {
		!cursorIsShown && setCursorIsShown(true);
		cursorPosition.current.x = event.clientX;
		cursorPosition.current.y = event.clientY;
	}

	useEffect(() => {
		hero.current.onmouseleave = () => hideCursor();
		hero.current.onmousemove = (event: any) => updateCursorPosition(event);

		setInterval(() => {
			if (!cursorRef.current) return false;
			cursorPosition.current.nextX = lerp(cursorPosition.current.nextX, cursorPosition.current.x, 0.1);
			cursorPosition.current.nextY = lerp(cursorPosition.current.nextY, cursorPosition.current.y, 0.1);
			cursorRef.current.style.left = `${cursorPosition.current.nextX}px`;
			cursorRef.current.style.top = `${cursorPosition.current.nextY}px`;
		}, 1000 / 60);
	}, []);

	return (
		<div ref={cursorRef} aria-hidden="true" className={styles.cursor} style={cursorIsShown ? { opacity: 1 } : {}} />
	);
}
