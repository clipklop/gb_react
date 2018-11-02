import React from 'react';

export default class BlogFooter extends React.Component {
    render() {
            let config = this.props.config;
            
            return(
                <footer className="blog-footer">
                    <p>Блог {config.author.surname}а {config.author.name}а {config.year} &copy;</p>
                    <p>
                        <a href="#">Вернуться наверх</a>
                    </p>
                </footer>
            );
        }
    }