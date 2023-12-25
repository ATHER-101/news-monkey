import React from 'react'
import NewsItem from './NewsItem'

import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loading from './Loading'

export default function News(props) {
    const [data, setData] = useState({});
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios
            .get(`https://newsapi.org/v2/top-headlines?country=in&category=${props.catagory}&apiKey=c84ffdc9e2d24ca59f94f2135f587c40&page=${page}&pageSize=20&q=${props.q}`)
            .then((response) => {
                setLoading(false);
                setData(response.data);
                setArticles(response.data.articles);
            })
    }, [page, props.catagory, props.q]);

    const prev = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    }

    const next = () => {
        let lastPage = (data.totalResults / 20);
        if (page < lastPage) {
            setPage(page + 1);
        }
    }

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    if (loading) {
        return <Loading />
    }

    if (props.q === '') {
        return (
            <div className='m-4'>
                <h1 className='my-4'>{capitalizeFirstLetter(props.catagory) === 'General' ? 'Top Headlines' : capitalizeFirstLetter(props.catagory)}</h1>
                <div className="row">

                    {articles.map((elements) => {
                        return <div className="col my-2" key={elements.url}>
                            <NewsItem data={elements} />
                        </div>
                    })}
                </div>

                <div className="container my-4">
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-dark" disabled={(page <= 1)} onClick={prev}>Previous</button>
                        <button className="btn btn-dark" disabled={page >= data.totalResults / 20} onClick={next}>Next</button>
                    </div>
                </div>

            </div>
        )
    }
    else {
        return (
            <div className='m-4'>
                <h1 className='mt-4 mb-0'>Search Result: {props.q}</h1>
                <h5 className='mb-3 mt-0'>{data.totalResults} results found!</h5>
                <Link className="btn btn-dark mb-4" to='/' onClick={props.exitSearch}>Exit Search</Link>
                <div className="row">

                    {articles.map((elements) => {
                        return <div className="col my-2" key={elements.url}>
                            <NewsItem data={elements} />
                        </div>
                    })}
                </div>

                

                {(data.totalResults!==0) && <div className="container my-4">
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-dark" disabled={(page <= 1)} onClick={prev}>Previous</button>
                        <button className="btn btn-dark" disabled={page >= data.totalResults / 20} onClick={next}>Next</button>
                    </div>
                </div>}

            </div>
        )
    }
}

News.defaultProps = {
    catagory: 'general',
    q: ''
};