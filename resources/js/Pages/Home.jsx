import React, { useEffect, useState } from "react";

import { Preloader } from "../Components/Themes/Preloader";
import { Header } from "../Components/Themes/Header";
import { MainBanner } from '../Components/Themes/MainBanner'
import { Services } from '../Components/Themes/Services'
import { WeDo } from '../Components/Themes/WeDo'
import { Client } from '../Components/Themes/Client'
import { Pricing } from '../Components/Themes/Pricing'
import { Footer } from '../Components/Themes/Footer'
import { PopupHeader } from "../Components/Themes/PopupHeader";

export default function Home (props) {
    return(
        <>
            <Preloader></Preloader>
            <Header></Header>
            {/* <PopupHeader></PopupHeader> */}
            <MainBanner></MainBanner>
            <Services></Services>
            <WeDo></WeDo>
            <Client></Client>
            <Pricing></Pricing>
            <Footer></Footer>
        </>
    )
}