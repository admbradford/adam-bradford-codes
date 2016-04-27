import React from 'react';
import {
    Route,
    Redirect,
    IndexRoute,
} from 'react-router';

// Here we define all our material-ui ReactComponents.
import Master from './components/Master';
import Home from './components/pages/Home';
import Bio from './components/pages/Bio';
import Resume from './components/pages/Resume';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';

const AppRoutes = (
    <Route path="/" component={Master}>
        <IndexRoute component={Home} />
        <Route path="home" component={Home} />
        <Route path="bio" component={Bio} />
        <Route path="resume" component={Resume} />
        <Route path="blog" component={Blog} />
        <Route path="contact" component={Contact} />
    </Route>
);

export default AppRoutes;
