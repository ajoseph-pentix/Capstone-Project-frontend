import React, { Component } from "react";
import * as f from "../utils/fetches.js";
// Comment pop up class for the hub
export default class Comment extends Component {
  constructor() {
    super();
    this.state = {
      comment: "",
      id: null
    };
    this.handleInput = this.handleInput.bind(this);
  }

  // function that gets attached to event handler and sets element's text state.comment
  handleInput(e) {
    console.log(e.target.value);
    this.setState({
      comment: e.target.value
    });
  }

  // created object for post request and sends it through the imported function
  comment() {
    let commentObject = {
      postId: this.props.postId,
      userId: this.props.userId,
      text: this.state.comment
    };
    f.addComment(commentObject).then((res) => {
      this.setState({
        id: res.commentId
      })
    });
  }

  // 
  uncomment() {}


  render() {
    return (
      <div>
        {/* <!--Modal: Login / Register Form--> */}
        <div
          className="modal fade"
          id="modalCommentForm"
          tabIndex="-1"
          role="dialog"
          data-backdrop="false"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog cascading-modal" role="document">
            {/* <!--Content--> */}
            <div className="modal-content ">
              {/* <!--Modal cascading tabs--> */}
              <div className="modal-c-tabs">
                {/* <!-- Nav tabs --> */}
                <ul className="nav nav-tabs md-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link bg-primary text-light"
                      data-toggle="tab"
                      href="#panel9"
                      role="tab"
                    >
                      <i className="fas fa-user mr-1"></i>Comment
                    </a>
                  </li>
                </ul>
                {/* <!-- Tab panels --> */}
                <div className="tab-content">
                  <div
                    className="tab-pane fade in show active"
                    id="panel9"
                    role="tabpanel"
                  >
                    {/* <!--Body--> */}
                    <div className="modal-body mb-1">
                      <div className="md-form form-sm mb-4">
                        {/* <!--Comment --> */}
                        {/* handleInput function attached to the onChange event */}
                        <textarea
                          placeholder="Comment..."
                          type="text"
                          id="modalLRInput11"
                          className="md-textarea form-control p-3"
                          onChange={this.handleInput}
                        />
                      </div>
                      <div className="text-center mt-2">
                        <button className="btn btn-primary">
                          Post <i className="fas fa-envelope prefix"></i>
                          <i className="fas fa-sign-in ml-1"></i>
                        </button>
                      </div>
                    </div>
                    {/* <!--Footer--> */}
                    <div className="modal-footer">
                      <a
                        href="/"
                        className="btn btn-outline-info waves-effect ml-auto"
                        data-dismiss="modal"
                      >
                        Close
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--Modal: Login / Register Form--> */}
        <td>
          <button
            href="#login"
            className="btn btn-secondary btn-sm"
            data-offset="90"
            data-toggle="modal"
            data-target="#modalCommentForm"
          >
            Comment
          </button>
          <button className="btn btn-danger btn-sm">Uncomment</button>
        </td>
      </div>
    );
  }
}
