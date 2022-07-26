import React from "react";

export const Login = () => {
    return(
        <div className="social_login">
            <div className="">
                <a href="#" className="social_box fb">
                    <span className="icon"><i className="fab fa-facebook"></i></span>
                    <span className="icon_title">Connect with Facebook</span>
                </a>
                <a href="#" className="social_box google">
                    <span className="icon"><i className="fab fa-google-plus"></i></span>
                    <span className="icon_title">Connect with Google</span>
                </a>
            </div>

            <div className="centeredText">
                <span>Or use your Email address</span>
            </div>

            <div className="action_btns">
                <div className="one_half"><a href="#" id="login_form" className="btn">Login</a></div>
                <div className="one_half last"><a href="#" id="register_form" className="btn">Sign up</a></div>
            </div>
        </div>
    )
}