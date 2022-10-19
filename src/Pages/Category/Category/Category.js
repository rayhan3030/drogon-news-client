import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Category = () => {
    const CategoryNews = useLoaderData();
    return (
        <div>
            <h2>This is Category has News:  {CategoryNews.length}</h2>
            {
                CategoryNews.map(news => <NewsSummaryCard key={news._id} news={news} />)
            }
        </div>
    );
};

export default Category;