import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Listings } from './screens/Listings';
import { StickyHeader } from 'components/StickyHeader';

import styles from './App.module.css';

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <StickyHeader />
        <Switch>
          <Route path={['/listings', '/', '*']}>
            <Listings />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
