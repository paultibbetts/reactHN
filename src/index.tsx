import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { store } from './store';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import { CollectionFeature } from './features/collection/Collection';
import { ItemFeature } from './features/item/Item';
import { UserFeature } from './features/user/User';
import { DefaultFeature } from './features/default/Default';

import Navigation from './components/Navigation';
import About from './components/About';
import NoMatch from './components/NoMatch';

const root: JSX.Element = (
  <Provider store={store}>
    <Router>
      <div>
        <Navigation />
        <main>
          <div className="max-w-screen-lg my-4 mx-auto">
            <Switch>
              <Route exact path="/" component={DefaultFeature} />
              <Route path="/item/:id" component={ItemFeature} />
              <Route path="/user/:id" component={UserFeature} />
              <Route path="/news/:page?" render={props => <CollectionFeature {...props} type='news' />} />
              <Route path="/newest/:page?" render={props => <CollectionFeature {...props} type='newest' />} />
              <Route path="/show/:page?" render={props => <CollectionFeature {...props} type='show' />} />
              <Route path="/ask/:page?" render={props => <CollectionFeature {...props} type='ask' />} />
              <Route path="/jobs/:page?" render={props => <CollectionFeature {...props} type='jobs' />} />
              <Route exact path="/about" component={About} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </main>
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(root, document.getElementById('root'));
serviceWorker.register();
