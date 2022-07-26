import React from "react";

import { SosialPopup } from "./SosialPopup";

export const PopupHeader = () => {
    return(
        <div id="modal" className="popupContainer" style="display:none;">
            <div className="popupHeader">
                <span className="header_title">Login</span>
                <span className="modal_close"><i className="fa fa-times"></i></span>
            </div>
            <SosialPopup/>
        </div>
    )
}