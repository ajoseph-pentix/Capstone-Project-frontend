import React, {Component} from "react";

export default class Login extends Component {

  render() {
    return (
      <div>
        {/* <!--Modal: Login / Register Form--> */}
        <div className="modal fade" id="modalLRForm" tabIndex="-1" role="dialog" data-backdrop="false" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog cascading-modal" role="document">
            {/* <!--Content--> */}
            <div className="modal-content ">
              {/* <!--Modal cascading tabs--> */}
              <div className="modal-c-tabs">
          
                {/* <!-- Nav tabs --> */}
                <ul className="nav nav-tabs md-tabs" role="tablist">
                  <li className="nav-item">
                    <a className="btn blue-gradient nav-link" data-toggle="tab" href="#panel7" role="tab"><i className="fas fa-user mr-1"></i>
                    Login</a>
                  </li>
                  <li className="nav-item">
                    <a className="btn purple-gradient nav-link" data-toggle="tab" href="#panel8" role="tab"><i className="fas fa-user-plus mr-1"></i>
                    Sign Up</a>
                  </li>
                </ul>
        
                {/* <!-- Tab panels --> */}
                <div className="tab-content">
                  <div className="tab-pane fade in show active" id="panel7" role="tabpanel">

                    {/* <!--Body--> */}
                    <div className="modal-body mb-1">
                      <div className="md-form form-sm mb-5">
                        <i className="fas fa-envelope prefix"></i>
                        <input type="email" id="modalLRInput10" className="form-control form-control-sm validate" />
                        <label data-error="wrong" data-success="right" htmlFor="modalLRInput10">Your email</label>
                      </div>
            
                      <div className="md-form form-sm mb-4">
                        <i className="fas fa-lock prefix"></i>
                        <input type="password" id="modalLRInput11" className="form-control form-control-sm validate" />
                        <label data-error="wrong" data-success="right" htmlFor="modalLRInput11">Your password</label>
                      </div>

                      <div className="text-center mt-2">
                        <button className="btn blue-gradient btn-rounded z-depth-1a">Login <i className="fas fa-sign-in ml-1"></i></button>
                        <div className="g-signin2" data-onsuccess="onSignIn"></div>

                      </div>

                    </div>

                    {/* <!--Footer--> */}
                    <div className="modal-footer">
                      <div className="options text-center text-md-right mt-1">
                        <p><a href="#forgot" className="blue-text float-left mr-auto">Forgot Password?</a></p>
                      </div>
                      <a href="/" className="btn btn-outline-info waves-effect ml-auto" data-dismiss="modal">Close</a>
                    </div>
                  </div>
          
                  <div className="tab-pane fade" id="panel8" role="tabpanel">
          
                    {/* <!--Body--> */}
                    <div className="modal-body">
                      <div className="md-form form-sm">
                        <i className="fas fa-user prefix"></i>
                        <input type="text" id="modalLRInput12" className="form-control form-control-sm validate" />
                        <label data-error="wrong" data-success="right" htmlFor="modalLRInput12">First Name</label>
                      </div>
                      
          
                      <div className="md-form form-sm">
                        <i className="fas fa-user prefix"></i>
                        <input type="text" id="modalLRInput13" className="form-control form-control-sm validate" />
                        <label data-error="wrong" data-success="right" htmlFor="modalLRInput13">Last Name</label>
                      </div>
          
                      <div className="md-form form-sm">
                        <i className="fas fa-phone prefix"></i>
                        <input type="text" id="modalLRInput14" className="form-control form-control-sm validate" />
                        <label data-error="wrong" data-success="right" htmlFor="modalLRInput14">Mobile Number</label>
                      </div>

                      <div className="md-form form-sm">
                        <i className="fas fa-envelope prefix"></i>
                        <input type="email" id="modalLRInput15" className="form-control form-control-sm validate" />
                        <label data-error="wrong" data-success="right" htmlFor="modalLRInput15">Your email</label>
                      </div>
                  
          
                      <div className="md-form form-sm">
                        <i className="fas fa-lock prefix"></i>
                        <input type="password" id="modalLRInput16" className="form-control form-control-sm validate" />
                        <label data-error="wrong" data-success="right" htmlFor="modalLRInput16">Your password</label>
                      </div>
          
                      <div className="md-form form-sm">
                        <i className="fas fa-lock prefix"></i>
                        <input type="password" id="modalLRInput17" className="form-control form-control-sm validate" />
                        <label data-error="wrong" data-success="right" htmlFor="modalLRInput17">Repeat password</label>
                      </div>
          
                      <div className="text-center form-sm mt-2">
                        <button className="btn blue-gradient btn-rounded z-depth-1a">Sign up <i className="fas fa-sign-in ml-1"></i></button>
                      </div>
        
                    </div>
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
        
        <li className="nav-item ml-2">
          <a href="#login" className="nav-link" data-offset="90" data-toggle="modal" data-target="#modalLRForm">Login</a>
        </li>
      </div>
    )
  }
}