import React from "react";

import { Client1 } from "./Pricing/Client1";
import { Client2 } from "./Pricing/Client2";
import { Client3 } from "./Pricing/Client3";
import { Client4 } from "./Pricing/Client4";
import { Client5 } from "./Pricing/Client5";

import { Card1 } from "./Pricing/Card1";
import { Card2 } from "./Pricing/Card2";
import { Card3 } from "./Pricing/Card3";
import { Card4 } from "./Pricing/Card4";
import { Card5 } from "./Pricing/Card5";

export const Client = () => {
    return(
        <div id="clients" className="the-clients">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="section-heading">
                            <h4>Check What <em>The Clients Say</em> About Our App Dev</h4>
                            <img src="assets/images/heading-line-dec.png" alt=""/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod tempor incididunt ut labore et dolore magna.</p>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="naccs">
                            <div className="grid">
                                <div className="row">
                                    <div className="col-lg-7 align-self-center">
                                        <div className="menu">
                                            <div className="first-thumb active">
                                                {/* Client1 */}
                                                <Client1></Client1>
                                            </div>
                                            <div>
                                                {/* Client2 */}
                                                <Client2></Client2>
                                            </div>
                                            <div>
                                                {/* Client3 */}
                                                <Client3></Client3>
                                            </div>
                                            <div>
                                                {/* Client4 */}
                                                <Client4></Client4>
                                            </div>
                                            <div>
                                                {/* Client5 */}
                                                <Client5></Client5>
                                            </div>
                                        </div>
                                    </div> 
                                    <div className="col-lg-5">
                                    <ul className="nacc">
                                        {/* Card */}
                                        <Card1></Card1>
                                        <Card2></Card2>
                                        <Card3></Card3>
                                        <Card4></Card4>
                                        <Card5></Card5>
                                    </ul>
                                    </div>          
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}