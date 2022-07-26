import React from "react";

export const UserPass = () => {
    return(
        <div className="user_login">
            <form>
                <label>Email / Username</label>
                <input type="text" />
                <br />

                <label>Password</label>
                <input type="password" />
                <br />

                <div className="checkbox">
                    <input id="remember" type="checkbox" />
                    <label for="remember">Remember me on this computer</label>
                </div>

                <div className="action_btns">
                    <div className="one_half"><a href="#" className="btn back_btn"><i className="fa fa-angle-double-left"></i> Back</a></div>
                    <div className="one_half last"><a href="#" className="btn btn_red">Login</a></div>
                </div>
            </form>

            <a href="#" className="forgot_password">Forgot password?</a>
        </div>
    )
}