import gsap from "gsap";
import { RefObject } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import CustomEase from "gsap/dist/CustomEase";

export default function useHeroAnimation(hero: RefObject<HTMLElement>, cursor: RefObject<HTMLDivElement>) {
	if (window.innerWidth < 992) return;

	function removeSpacing() {
		const spacing = document.querySelector(".pin-spacer");
		spacing?.remove();
	}

	gsap.registerPlugin(ScrollTrigger);
	gsap.timeline({
		scrollTrigger: {
			end: "+=" + window.innerHeight * 3,
			trigger: hero.current,
			start: "top top-=100",
			pin: true,
			anticipatePin: 1,
		},
	})
		.to(cursor.current, {
			scale: 250,
			borderColor: "transparent",
			duration: 1,
			ease: CustomEase.create("custom", "M0,0 C0.104,0.204 0.84,0.244 1,1 "),
			onComplete: removeSpacing,
		})
		.to(hero.current, { duration: 1, opacity: 0, display: "none" });
}
