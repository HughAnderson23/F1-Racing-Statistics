import React, { useContext, useEffect } from 'react';
import { Context } from "../store/appContext";

const NewsSidebar = () => {
    const { store, actions } = useContext(Context); // Access store and actions from context

    useEffect(() => {
        actions.fetchF1News(); // Fetch top Formula 1 news articles when component mounts
    }, []);

    return (
        <div className="news-sidebar">
            <h2>Top Formula 1 News</h2>
            <ul>
                {store.topF1News.map((article, index) => (
                    <li key={index}>
                        <h3>{article.title}</h3>
                        <p>{article.description}</p>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NewsSidebar;

