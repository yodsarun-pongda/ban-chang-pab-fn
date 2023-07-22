import React, {ReactNode} from 'react';
import '../style/BusinessCard.css'
import ProfilePic from '../assets/profile-pic.png'

const Layout = () =>{
    return(
        <>
            <section className="profile">
                <div className="main-content">
                    <div className="details">
                        <img src={ProfilePic} alt="profile" className="contact-pic"/>
                        <h1 className="heading">Claire Doe</h1>
                        <div className="contact">
                            <div className="col-4">
                                <h4>20</h4>
                                <p>Reviews</p>
                            </div>
                            <div className="col-4">
                                <h4>10</h4>
                                <p>Communities</p>
                            </div>
                            <div className="col-4">
                                <h4>100</h4>
                                <p>Discussions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Layout;