import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Listings } from './screens/Listings/Listings';
import { StickyHeader } from 'components/StickyHeader';

import styles from './App.module.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;
