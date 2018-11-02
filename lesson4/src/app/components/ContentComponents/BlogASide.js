import React from 'react';
import config from '../config';

export default class BlogASide extends React.Component {
    render() {
        let month = config.month.map((element, index) => {
            return <li key={index}><a href="#">{element}</a></li>
        });

        let social = config.social.map((element, index) => {
            return <li key={index}><a href={element.url}>{element.name}</a></li>
        });

        const author = `${config.author.surname} ${config.author.name} ${config.author.addname} `;

        return (
            <aside className="col-md-4 blog-sidebar">
                <div className="p-3 mb-3 bg-light rounded">
                <h4 className="font-italic">Обо мне</h4>
                <p className="mb-0">
                    <em>{author}</em> {config.author.text}
                </p>
            </div>

            <div className="p-3">
                <h4 className="font-italic">Архивариум</h4>
                <ol className="list-unstyled mb-0">
                    {month}
                </ol>
            </div>

            <div className="p-3">
                <h4 className="font-italic">Еще я здесь</h4>
                <ol className="list-unstyled">
                    {social}
                </ol>
            </div>
            </aside>);
    }
}