import React from 'react';
import ASide from './ContentComponents/BlogASide';
import Blog from './ContentComponents/Blog';

export default class BlogContent extends React.Component {
    render() {
            return(
                <main role="main" className="container">
                    <div className="row">
                        <div className="col-md-8 blog-main">
                            <Blog posts={this.props.posts}/>
                        </div>
                        <ASide/>
                        <nav className="blog-pagination">
                            <a className="btn btn-outline-primary" href="#">Не актуально</a>
                            <a className="btn btn-outline-secondary ml-2 disabled" href="#">Актуально</a>
                        </nav>
                    </div>
                </main>
            );
        }
    }