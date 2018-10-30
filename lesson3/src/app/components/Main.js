import React from 'react';
import BlogHeader from './BlogHeader';
import BlogContent from './BlogContent';
import BlogFooter from './BlogFooter';

export default class Main extends React.Component {
    render() {
            return (
                <div>
                    <BlogHeader/>
                    <BlogContent/>
                    <BlogFooter/>
                </div>
            );      
    }
}