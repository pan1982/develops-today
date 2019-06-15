import React from 'react';
import {
  BrowserRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './Store';
import LatestPostsContainer from './components/posts/LatestPostsContainer';
import PostContainer from './components/posts/PostContainer';
import NotFound from './components/NotFound';
import EditPostContainer from './components/posts/EditPostContainer';

const store = configureStore();

export default () => (
  <Router>
    <Provider store={store}>
      <div>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/latest-posts" />} />
          <Route path="/latest-posts" component={LatestPostsContainer} />
          <Route exact path="/post/:postId" component={PostContainer} />
          <Route path="/edit/:postId" component={EditPostContainer} />
          <Route path="/create-post" component={EditPostContainer} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Provider>
  </Router>
);
