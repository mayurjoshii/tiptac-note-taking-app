import React from 'react';
import { Route, Switch } from 'react-router';
import { hot } from 'react-hot-loader';
import { Home } from './containers/home';
import { Note } from './components/note';

export const App = hot(module)(() => (
  <Switch>
    <Route path="/note/:noteId">
      <Note />
    </Route>
    <Route path="/" component={Home} exact />
  </Switch>
));
