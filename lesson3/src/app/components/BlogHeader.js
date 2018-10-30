import React from 'react';
import BlogTitle from './HeaderComponents/BlogTitle';
import BlogCategory from './HeaderComponents/BlogCategory';

export default class BlogHeader extends React.Component {
    render() {
            return(
                <div className="container">
                    <BlogTitle/>
                    <BlogCategory/>
                </div>
            );
        }
    }