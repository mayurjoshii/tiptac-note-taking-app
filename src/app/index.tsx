import React from 'react';
import { Route, Switch } from 'react-router';
import { Home } from './containers/home';

export const App = () => (
  <Switch>
    <Route path="/" component={Home} />
    {/* <Route path="/note" element={<Note />}>
      <Route path=":noteId" element={<Note />} />
    </Route> */}
  </Switch>
)
