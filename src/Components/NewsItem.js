import React from 'react'

export default function NewsItem(props) {

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={props.data.urlToImage ? props.data.urlToImage : "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV3c3xlbnwwfHwwfHx8MA%3D%3D"} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.data.title}</h5>
                <p className="card-text">{props.data.description}</p>
                {props.data.author && <p className="card-text"><small className="text-body-secondary">By:{props.data.author}</small></p>}
                {props.data.publishedAt && <p className="card-text"><small className="text-body-secondary">On:{Date(props.data.publishedAt)}</small></p>}
                <a href={props.data.url} className="btn btn-dark">Read More</a>
            </div>
        </div>
    )
}
