import { FC } from 'react';
import styles from './Navigation.module.scss';

interface NavigationProps {
	max: number;
	currentSlide: number;
	onPrev?: () => void;
	onNext?: () => void;
}

const Navigation: FC<NavigationProps> = (props) => {
	const handlePrev = () => {
		if (props.currentSlide !== 1) {
			props.onPrev?.();
		}
	};
	const handleNext = () => {
		if (props.currentSlide !== props.max) {
			props.onNext?.();
		}
	};
	return (
		<div className={styles.navigation}>
			<span className={styles.navigation__counter}>{`0${props.currentSlide}/0${props.max}`}</span>
			<div className={styles.navigation__buttons}>
				<button
					onClick={handlePrev}
					className={[
						styles.navigation__button,
						props.currentSlide === 1 ? styles['navigation__button--last'] : '',
					].join(' ')}
					type="button">
					<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
						<path d="M27.4999 18.75L21.2499 25L27.4999 31.25" stroke="#42567A" strokeWidth="2" />
					</svg>
				</button>
				<button
					onClick={props.currentSlide !== props.max ? handleNext : undefined}
					className={[
						styles.navigation__button,
						props.currentSlide === props.max ? styles['navigation__button--last'] : '',
					].join(' ')}
					type="button">
					<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
						<path d="M22.5001 18.75L28.7501 25L22.5001 31.25" stroke="#42567A" strokeWidth="2" />
					</svg>
				</button>
			</div>
		</div>
	);
};
export default Navigation;
