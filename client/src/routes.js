import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/ui/App';
import PostList from './components/ui/PostList';
import NewPosts from './components/ui/NewPosts';
import ShowPost from './components/ui/ShowPost';
import EditPost from './components/ui/EditPost';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={PostList} />
      <Route path='/wirte' component={NewPosts} />
      <Route path='/post/:id' component={ShowPost} />
      <Route path='/post/:id/edit' component={EditPost} />
    </Route>
  </Router>
);
