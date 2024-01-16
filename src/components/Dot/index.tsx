import { useState, CSSProperties, forwardRef, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './Dot.module.scss';

interface DotProps {
	active?: boolean;
	index: number;
	onClick: () => void;
	title: string;
	maxItems: number;
	currentSlide: number;
}

const Dot = forwardRef<HTMLSpanElement, DotProps>((props, ref) => {
	const [isHover, setHover] = useState(false);
	const elRef = useRef<HTMLSpanElement>(null);
	useEffect(() => {
		if (props.active || isHover) {
			gsap.to(elRef.current, { scale: 1, opacity: 1, duration: 0.5 });
		} else {
			gsap.to(elRef.current, { scale: 0, opacity: 0, duration: 0.5 });
		}
	}, [isHover, props.active]);
	return (
		<li
			className={[styles.dot, props.active ? styles['dot--active'] : ''].join(' ')}
			style={{ '--i': props.index, '--max': props.maxItems, '--current': props.currentSlide } as CSSProperties}
			onClick={() => props.onClick?.()}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}>
			<div className={styles.dot__wrapper}>
				<span ref={elRef} className={styles.dot__activ}>
					{props.index}
				</span>
			</div>

			<span ref={ref} className={styles.dot__title}>
				{props.title}
			</span>
		</li>
	);
});
export default Dot;
