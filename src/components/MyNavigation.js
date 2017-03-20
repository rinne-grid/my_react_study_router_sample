import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';
import {
    TopPage, ContentsPage,
    ReactPage, RouterPage,
} from './pages/MySitePages';

import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
/**
 * @return {React.Component}
 */
const MyNavigation = () => (
    <Router>
        <div>
            <MyHeader />
            <nav className="mysite-context-menu">
                <ul>
                    <li><Link to="/">トップページ</Link></li>
                    <li><Link to="/contents">コンテンツ</Link></li>
                    <li><Link to="/react">React</Link></li>
                    <li><Link to="/router">Router</Link></li>
                </ul>
            </nav>
            <Route exact path="/" component={TopPage} />
            <Route exact path="/contents" component={ContentsPage} />
            <Route exact path="/react" component={ReactPage} />
            <Route exact path="/router" component={RouterPage} />
            <MyFooter />

        </div>
    </Router>
);

export default MyNavigation;
