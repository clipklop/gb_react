import React from 'react';

export default class Blog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: this.props.posts
        }
    }

    render() {
        let postsArray = this.state.posts.map((element, index) => {
            return <div key={index} className="blog-post">
                        <h2 className="blog-post-title">{element.title}</h2>
                        <p className="blog-post-meta">{element.data} <a href="#">{element.author}</a></p>
                        <div dangerouslySetInnerHTML={{__html: element.text}}></div>
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