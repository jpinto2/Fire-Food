import React from "react";
import { BsGithub , BsTwitter , BsFacebook , BsInstagram} from "react-icons/bs";

function Footer() {
    return <> 
                <div className="bg-danger bg-gradient p-3">
                    <div className="container text-center text-white ">
                        <h3 className="p-3">Meet the team!</h3>
                        <div className="row">
                            <div className="col">
                                <div className="team-info">
                                    <h4>Hernan Tapia</h4>
                                    <p>
                                        <a href="https://github.com/HTapia7" target='_blank'>GitHub</a>
                                    </p>
                                    <p>
                                        <a href="" target="_blank">LinkedIn</a>
                                    </p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="team-info">
                                    <h4>Kenan Mesic</h4>
                                    <p>
                                        <a href="https://github.com/kenanmesic" target='_blank'>GitHub</a>
                                    </p>
                                    <p>
                                        <a href="https://www.linkedin.com/in/kenan-mesic-/" target="_blank">LinkedIn</a>
                                    </p>
                                </div>

                            </div>
                            <div className="col">
                                <div className="team-info">
                                    <h4>Connor McGrath</h4>
                                    <p>
                                        <a href="https://github.com/CJMerit" target='_blank'>GitHub</a>
                                    </p>
                                    <p>
                                        <a href="https://www.linkedin.com/in/connor-mcgrath-46349223a/" target="_blank">LinkedIn</a>
                                    </p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="team-info">
                                    <h4>John Pinto</h4>
                                    <p>
                                        <a href="https://github.com/jpinto2" target='_blank'>GitHub</a>
                                    </p>
                                    <p>
                                        <a href="https://www.linkedin.com/in/john-pinto-bba824b0/" target="_blank">LinkedIn</a>
                                    </p>
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