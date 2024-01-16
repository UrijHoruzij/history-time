import { useRef, useCallback, useState, forwardRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { gsap } from 'gsap';
import styles from './SliderEvents.module.scss';

interface SliderEventsProps {
	slides?: { year: number; description: string }[];
}

const SliderEvents = forwardRef<HTMLDivElement, SliderEventsProps>((props, ref) => {
	const sliderRef = useRef<any>(null);
	const prevRef = useRef<any>(null);
	const nextRef = useRef<any>(null);
	const [showPrev, setShowPrev] = useState<boolean>(true);
	const [showNext, setShowNext] = useState<boolean>(false);
	const handlePrev = useCallback(() => {
		if (!sliderRef.current) return;
		sliderRef.current.swiper.slidePrev();
	}, []);

	const handleNext = useCallback(() => {
		if (!sliderRef.current) return;
		sliderRef.current.swiper.slideNext();
	}, []);

	useEffect(() => {
		if (showPrev) gsap.to(prevRef.current, { opacity: 0 });
		if (!showPrev) gsap.to(prevRef.current, { opacity: 1 });
	}, [showPrev]);
	useEffect(() => {
		if (showNext) gsap.to(nextRef.current, { opacity: 0 });
		if (!showNext) gsap.to(nextRef.current, { opacity: 1 });
	}, [showNext]);
	return (
		<div ref={ref} className={styles.container}>
			<div
				ref={prevRef}
				className={[styles.slider__navigation, styles['slider__navigation--prev']].join(' ')}
				onClick={handlePrev}>
				<svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
					<path d="M1 1L6 6L1 11" stroke="#3877EE" strokeWidth="2" />
				</svg>
			</div>
			<Swiper
				ref={sliderRef}
				className={styles.slider}
				spaceBetween={80}
				slidesPerView={3}
				onSlideChange={(swiper: any) => {
					setShowPrev(swiper.isBeginning);
					setShowNext(swiper.isEnd);
				}}>
				{props.slides?.map((slide, index) => (
					<SwiperSlide key={`slide-${index}`}>
						<div className={styles.slide}>
							<h4 className={styles.slide__title}>{slide.year}</h4>
							<p className={styles.slide__description}>{slide.description}</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<div
				ref={nextRef}
				className={[styles.slider__navigation, styles['slider__navigation--next']].join(' ')}
				onClick={handleNext}>
				<svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
					<path d="M1 1L6 6L1 11" stroke="#3877EE" strokeWidth="2" />
				</svg>
			</div>
		</div>
	);
});

export default SliderEvents;
