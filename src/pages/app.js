import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/header";
import BodySec from "../components/body";

const AppLayout = () =>{

    

    return(
        <div className="main_wrap">
            <div className="container">
                <div className="app_wrapper">
                    <div className="app_cont">
                        <Header></Header>
                        <BodySec></BodySec>
                    </div>
                </div>
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);