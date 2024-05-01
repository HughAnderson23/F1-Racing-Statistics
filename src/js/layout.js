import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import Banner from "./component/banner";
import { Footer } from "./component/footer";
import Tabviews from "./component/tabs";
import Qualies from "./views/qualies";
import RaceRes from "./views/raceresults";
import SidebarSchedule from "./component/sidebarschedule.js";
import NewsSidebar from "./component/newssidebar.js";
import "./../styles/layout.css";

const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Tabviews />
                    <Banner />
                    <div className="content-container">
						<div className="sidebar">
                            <NewsSidebar />
                        </div>
						<div className="main-content">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/qualies" element={<Qualies />} />
                                <Route path="/raceresults" element={<RaceRes />} />
                                <Route path="/demo" element={<Demo />} />
                                <Route path="/single/:theid" element={<Single />} />
                                <Route path="*" element={<h1>Not found!</h1>} />
                            </Routes>
                        </div>
                        <div className="sidebar">
                            <SidebarSchedule />
                        </div>
                    </div>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
