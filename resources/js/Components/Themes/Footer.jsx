import React from 'react'
import { ContactUs } from './Footer/ContactUs'
import { AboutUs } from './Footer/AboutUs'
import { UsefullLink } from './Footer/UsefullLink'
import { About } from './Footer/About'

export const Footer = () => {
    return(
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                    <div className="section-heading">
                        <h4>Join our mailing list to receive the news &amp; latest trends</h4>
                    </div>
                    </div>
                    <div className="col-lg-6 offset-lg-3">
                    <form id="search" action="#" method="GET">
                        <div className="row">
                        <div className="col-lg-6 col-sm-6">
                            <fieldset>
                            <input type="address" name="address" className="email" placeholder="Email Address..." autoComplete="on" required />
                            </fieldset>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                            <fieldset>
                            <button type="submit" className="main-button">Subscribe Now <i className="fa fa-angle-right"></i></button>
                            </fieldset>
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
                <div className="row">
                    <ContactUs></ContactUs>
                    <AboutUs></AboutUs>
                    <UsefullLink></UsefullLink>
                    <About></About>
                </div>
            </div>
        </footer>
    )
}