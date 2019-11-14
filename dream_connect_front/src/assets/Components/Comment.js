import React, {Component} from "react";
// Comment pop up class for the hub
export default class Comment extends Component {

    render() {
        return (
            <div>
                {/* <!--Modal: Login / Register Form--> */}
                <div className="modal fade" id="modalCommentForm" tabIndex="-1" role="dialog" data-backdrop="false" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog cascading-modal" role="document">
                        {/* <!--Content--> */}
                        <div className="modal-content ">
                            {/* <!--Modal cascading tabs--> */}
                            <div className="modal-c-tabs">
                        
                                {/* <!-- Nav tabs --> */}
                                <ul className="nav nav-tabs md-tabs" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link bg-primary text-light" data-toggle="tab" href="#panel9" role="tab"><i className="fas fa-user mr-1"></i>Comment</a>
                                    </li>
                                </ul>
                                {/* <!-- Tab panels --> */}
                                <div className="tab-content">
                                    <div className="tab-pane fade in show active" id="panel9" role="tabpanel">
                                        {/* <!--Body--> */}
                                        <div className="modal-body mb-1">
                                            <div className="md-form form-sm mb-4">
                                                {/* <!--Comment --> */}
                                                <textarea placeholder="Comment..." type="text" id="modalLRInput11" className="md-textarea form-control p-3" />
                                            </div>
                                            <div className="text-center mt-2">
                                                <button className="btn btn-primary">Post <i className="fas fa-envelope prefix"></i><i className="fas fa-sign-in ml-1"></i></button>
                                            </div>
                                        </div>
                                        {/* <!--Footer--> */}
                                        <div className="modal-footer">
                                            <a href="/" className="btn btn-outline-info waves-effect ml-auto" data-dismiss="modal">Close</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--Modal: Login / Register Form--> */}
                    <td>
                        <button href="#login" className="btn btn-secondary btn-sm" data-offset="90" data-toggle="modal" data-target="#modalCommentForm">Comment</button>
                        <button className="btn btn-danger btn-sm">Uncomment</button>
                    </td>
            </div>
        )
    }
}