import React from 'react'
import { Link } from 'react-router-dom'
import './Error.css'
const Error = () => {
    return (
        <div className="container">
            <div className="not-found">
                <div><p className="center" style={{ textAlign: 'center' }}>
                    <img
                        srcSet={`
                        http://placekitten.com/300/300 300w,
                        http://placekitten.com/400/400 400w,
                        http://placekitten.com/500/500 500w,
                        http://placekitten.com/600/600 600w`}
                        sizes="(max-width: 600px) 400px,
                    (max-width: 768px) 300px,
                    (max-width: 992px) 400px,
                    (max-width: 1200px) 500px,
                    600px"
                        src="http://placekitten.com/200/200"
                        alt="a kitten" />

                </p></div>
                <div>
                    <h1 className="large">404</h1>
                    <h1 className="center">Opps!! <br /> Page Not Found</h1>
                    <br />
                    <br />
                    <div style={{ textAlign: 'center' }}>
                        <Link to="/" className="btn-back">Back to Home</Link>
                    </div>
                    <br />
                    <br />
                </div>

            </div>
        </div>
    )
}

export default Error
