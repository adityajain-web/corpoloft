import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Images/logo.png';

const Header = () => {
    const [width, setWidth] = useState();
    const [scrollHeight, setScrollHeight] = useState();

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [width])

    window.addEventListener('scroll', () => {
        setScrollHeight(window.scrollY)
    })
    return (
        <>
            <header className={`fixed-top ${scrollHeight > 50 ? "py-2 shadow-lg bg-white" : "shadow-none"}`}>
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="col-md-10 col-12 mx-auto">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <Link to='/'>
                                    <img src={Logo} alt="logo" className='img-fluid' style={{ maxHeight: width > 576 ? "3rem" : "2rem" }} />
                                </Link>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item">
                                            <Link to="/" className='nav-link'>Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/" className='nav-link'>Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/" className='nav-link'>Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/" className='nav-link'>Home</Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header