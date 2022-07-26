import React from "react";

import { Login } from "./Social/Login";
import { RegisterForm } from "./Social/RegisterForm";
import { UserPass } from "./Social/UserPass";

export const SosialPopup = () => {
    return(
        <section className="popupBody">
            <Login></Login>
            <RegisterForm></RegisterForm>
            <UserPass></UserPass>
        </section>
    )
}