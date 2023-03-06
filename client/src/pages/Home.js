import React from "react";
import wings from "../images/wingsFood.jpeg"
import pizza from "../images/pep-pizza.jpg"

function Home() {
    return (
        <>
             <div className="row">
                <div className="col-6 p-0">
                    <img src={wings}></img>
                </div>
                <div className="col-6 p-0">
                    <img src={pizza}></img>
                </div>
            </div>
        </>
    );
}

export default Home;