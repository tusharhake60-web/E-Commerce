import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
export default function CommanNavBar() {

    let navigate = useNavigate();

    let login = () => {
        navigate("/login");
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-warning bg-warning">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src=" https://t3.ftcdn.net/jpg/02/98/18/60/360_F_298186090_Rimyxol4jsYvYbQg1i6sttQ5N3oebXgt.jpg" width="60" height="60" className="rounded-circle"></img></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link className="nav-link active" to="/chome">Home</Link>
                            </li>

                            <li class="nav-item">
                                <button className='btn btn-danger mt-1 ms-2' onClick={login}>login/Register</button>

                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}
