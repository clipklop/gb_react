import React from 'react';
import posts from '../posts';

export default class Blog extends React.Component {
    render() {
        let postsArray = posts.map((element, index) => {
            return <div key={index} className="blog-post">
                        <h2 className="blog-post-title">{element.title}</h2>
                        <p className="blog-post-meta">{element.data} <a href="#">{element.author}</a></p>
                        {element.text}
                    </div>
            });

        return(
                <div className="col-md-8 blog-main">
                    <hr/>
                    {postsArray}
                </div>
            );
    }
}