import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {

    const handleChange = (event)=>{
        props.setSearch(event.target.value);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">NewsMonkey</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" to="/">Top Headlines</Link>
                        <Link className="nav-link" to="/business">Business</Link>
                        <Link className="nav-link" to="/entertainment">Entertainment</Link>
                        <Link className="nav-link" to="/health">Health</Link>
                        <Link className="nav-link" to="/science">Science</Link>
                        <Link className="nav-link" to="/sports">Sports</Link>
                        <Link className="nav-link" to="/technology">Technology</Link>
                    </div>
                </div>
                <form className="d-flex">
                    <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" ref={props.SearchRef} value={props.search} onChange={handleChange} />
                    <Link className="btn btn-outline-success"  to={props.search===''?'/':'/search'} >Search</Link>
                </form>
            </div>
        </nav>
    )
}