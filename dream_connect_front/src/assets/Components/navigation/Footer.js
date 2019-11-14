import React, {Component} from "react";

export default class Footer extends Component {

    render() {
        return (
            <div>
                {/* <!-- Footer --> */}
                <footer className="page-footer font-small pt-4 footer-top">
                    <div className="container">
                        
                        {/* <!-- Social buttons --> */}
                        <ul className="list-unstyled list-inline text-center">
                            <li className="list-inline-item">
                                <a href="#facebook" className="btn-floating btn-fb mx-1">
                                    <i className="fab fa-facebook"> </i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#twitter" className="btn-floating btn-tw mx-1">
                                    <i className="fab fa-twitter"> </i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#google" className="btn-floating btn-gplus mx-1">
                                    <i className="fab fa-google-plus"> </i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#linkedin" className="btn-floating btn-li mx-1">
                                    <i className="fab fa-linkedin"> </i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#dribble" className="btn-floating btn-dribbble mx-1">
                                    <i className="fab fa-dribbble"> </i>
                                </a>
                            </li>
                        </ul>
                    </div>
                
                    {/* <!-- Copyright --> */}
                    <div className="page-footer footer-copyright text-center py-1">© 2020 Copyright:
                        <a href="/"> DreamConnect.com</a>
                    </div>
                </footer>
            </div>
        )
    }
}