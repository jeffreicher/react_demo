import React from 'react';
import {
    Route,
    Link
} from 'react-router-dom';
import NestedArticle from './nestedArticle';

const Articles = () => (
    
        <div>
            <div>
                <h4>This is my first article</h4>
                <Link to="/articles/nestedArticle">Nested Article</Link>
                <Route exact path="/articles/nestedArticle" component={NestedArticle}/>
            </div>
            <div>
                <h4>This is my second article</h4>
            </div>
            <div>
                <h4>This is my third article</h4>
            </div>
        </div>
)

export default Articles;