import { FC } from 'react';
import { Slider } from './components';
import styles from './App.module.scss';
import data from './data';

const App: FC = () => {
	return (
		<div className={styles.container}>
			<Slider data={data} />
		</div>
	);
};

export default App;
