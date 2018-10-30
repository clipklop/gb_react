import React from 'react';
import config from './config';

export default class BlogFooter extends React.Component {
    render() {
            return(
                <footer className="blog-footer">
                    <p>Блог {config.author.surname}а {config.author.name}а {config.year} &copy;</p>
                    <p>
                        <a href="#">Вернуться на верх</a>
                    </p>
                </footer>
            );
        }
    }