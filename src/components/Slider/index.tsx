/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import styles from './Slider.module.scss';
import { SliderEvents, Navigation, Dot } from '../';
import { IData } from '../../data';

interface SliderProps {
	data: IData[];
}

const Slider: FC<SliderProps> = (props) => {
	const [slide, setSlide] = useState(1);
	const [prevStartDate, setPrevStartDate] = useState(props.data?.[0].date.start);
	const [prevEndDate, setPrevEndDate] = useState(props.data?.[0].date.end);
	const max = props.data?.length;
	const handleNextSlide = () => {
		setSlide((prev) => {
			if (prev + 1 > max) return 1;
			return prev + 1;
		});
	};
	const handlePrevSlide = () => {
		setSlide((prev) => {
			if (prev - 1 < 1) return max;
			return prev - 1;
		});
	};

	const slider = useRef<null | HTMLDivElement>(null);
	const dots = useRef<HTMLSpanElement[]>([]);
	const start = useRef<HTMLSpanElement>(null);
	const end = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		gsap.fromTo(slider.current, { opacity: 0, duration: 2 }, { duration: 2, opacity: 1 });
		dots.current?.map((item, index) => {
			if (index === slide - 1) {
				gsap.to(dots.current[index], { opacity: 1, delay: 2, duration: 1 });
				// eslint-disable-next-line array-callback-return
				return;
			}
			gsap.to(dots.current[index], { opacity: 0, duration: 1 });
		});
		gsap.from(start.current, {
			innerText: prevStartDate,
			duration: 0.5,
			snap: {
				innerText: 1,
			},
		});
		gsap.from(end.current, {
			innerText: prevEndDate,
			duration: 0.5,
			snap: {
				innerText: 1,
			},
		});
		setPrevStartDate(props.data?.[slide - 1].date.start);
		setPrevEndDate(props.data?.[slide - 1].date.end);
	}, [slide]);
	return (
		<>
			<div className={styles.wrapper}>
				<h2 className={styles.title}>
					Исторические <br /> даты
				</h2>
				<div className={styles.wrapper__slider}>
					<div className={styles.date}>
						<span ref={start} className={styles.date__start}>
							{props.data[slide - 1]?.date?.start}
						</span>
						<span ref={end} className={styles.date__end}>
							{props.data[slide - 1]?.date?.end}
						</span>
					</div>
					<ul className={styles.dots}>
						{props.data.map((item, i) => (
							<Dot
								key={`dot-${i}`}
								ref={(el) => (dots.current[i] = el!)}
								index={item.id}
								title={item.title}
								maxItems={max}
								onClick={() => setSlide(item.id)}
								active={slide === item.id}
								currentSlide={slide}
							/>
						))}
					</ul>
				</div>
				<Navigation max={max} currentSlide={slide} onNext={handleNextSlide} onPrev={handlePrevSlide} />
			</div>
			<SliderEvents ref={slider} slides={props.data[slide - 1]?.slides}></SliderEvents>
		</>
	);
};
export default Slider;
