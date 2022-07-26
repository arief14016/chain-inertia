import React from "react";

export const RegisterForm = () => {
    return(
        <div className="user_register">
            <form>
                <label>Full Name</label>
                <input type="text" />
                <br />

                <label>Email Address</label>
                <input type="email" />
                <br />

                <label>Password</label>
                <input type="password" />
                <br />

                <div className="checkbox">
                    <input id="send_updates" type="checkbox" />
                    <label for="send_updates">Send me occasional email updates</label>
                </div>

                <div className="action_btns">
                    <div className="one_half"><a href="#" className="btn back_btn"><i className="fa fa-angle-double-left"></i> Back</a></div>
                    <div className="one_half last"><a href="#" className="btn btn_red">Register</a></div>
                </div>
            </form>
        </div>
    )
}