import React, { useContext, useEffect } from 'react';
import { Context } from "../store/appContext";
import "../../styles/newsSidebar.css"; // Import CSS file for styling

const NewsSidebar = () => {
    const { store, actions } = useContext(Context); // Access store and actions from context

    useEffect(() => {
        actions.fetchF1News(); // Fetch top Formula 1 news articles when component mounts
    }, []);

    return (
        <div className="news-sidebar">
            <h2>Top Formula 1 News</h2>
            <ul className="article-list">
                {store.topF1News.map((article, index) => (
                    <li key={index}>
                        <a href={article.link} target="_blank" rel="noopener noreferrer" className="article-link">
                            <h5>{article.title}</h5>
                            {article.image_url && <img src={article.image_url} alt={article.title} style={{ width: '150px', height: 'auto' }} />}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NewsSidebar;



