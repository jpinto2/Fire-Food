import React from "react";
import { BsGithub , BsTwitter , BsFacebook , BsInstagram} from "react-icons/bs";

function Footer() {
    return <>
                <div className="bg-danger bg-gradient p-2">
                    <div className="container text-center text-white ">
                        <h3 className="p-3">Meet the team!</h3>
                        <div className="row">
                            <div className="col">
                                <div>
                                    <h4>Hernan Tapia</h4>
                                    <p>GitHub</p>
                                    <p>LinkedIn</p>
                                </div>
                            </div>
                            <div className="col">
                                <div>
                                    <h4>Kenan Mesic</h4>
                                    <p>GitHub</p>
                                    <p>LinkedIn</p>
                                </div>

                            </div>
                            <div className="col">
                                <div>
                                    <h4>Connor McGrath</h4>
                                    <p>GitHub</p>
                                    <p>LinkedIn</p>
                                </div>
                            </div>
                            <div className="col">
                                <div>
                                    <h4>John Pinto</h4>
                                    <p>GitHub</p>
                                    <p>LinkedIn</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row p-3">
                            <div className="col-4">Terms & Service</div>
                            <div className="col-4">© Copyright 2023</div>
                            <div className="col-4">
                                <p className="icons"><BsGithub/></p>
                                <p className="icons"><BsTwitter/></p>
                                <p className="icons"><BsInstagram/></p>
                                <p className="icons"><BsFacebook/></p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
};

export default Footer;