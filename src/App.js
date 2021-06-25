import { StickyHeader } from 'components/StickyHeader';
import heartFill from './assets/heart-fill.svg';
import heartStroke from './assets/heart-stroke.svg';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <StickyHeader />
    </div>
  );
}

export default App;
