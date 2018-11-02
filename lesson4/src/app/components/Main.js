import React from 'react';
import BlogHeader from './BlogHeader';
import BlogContent from './BlogContent';
import BlogFooter from './BlogFooter';
import config from './config';
import posts from './posts';

export default class Main extends React.Component {
    render() {
            return (
                <div>
                    <BlogHeader category={config.category} name={config.name} sub={config.sub}/>
                    <BlogContent posts={posts}/>
                    <BlogFooter config={config}/>
                </div>
            );      
    }

    componentDidMount() {
        alert('Тыдыщ!');
    }

}