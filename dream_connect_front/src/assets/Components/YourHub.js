import React, {Component} from 'react';
import Header from "./navigation/Header";
import Footer from "./navigation/Footer";
import Avatar from "../images/avatar.png";
export default class TheHub extends Component {

  render() {

    let posts = []

    // Loop for how many posts exists, 
    // with a backend you would determine this by the length of an array
    for (let i = 0; i < 10; i++) {

        posts.push(
            
            <tr key={i}>
                <td>
                    <span>Ut enim</span>
                </td>
                <td>
                    <span>minima veniam</span>
                </td>
                <td>
                    <span>quis nostrum</span>
                </td>
                <td>
                    <span>exercitationem</span>
                </td>
            </tr>
        )
    }

    return (
                <div>
                    <Header />
                    <main className="hub-gradient container-fluid">
                        <div id="top" className="row py-5">
                            {/* <!-- Avatar --> */}
                            <aside className="container text-light text-center pt-5 col-lg-3 col-md-3 col-sm-12 col-xs-12 float-left mr-auto">
                                <div className="news-card text-light p-3 ">

                                    <div>
                                        <img src={Avatar} alt="avatar" className="avatar  my-2 img-fluid" />
                                        <div>
                                            <button className="btn btn-link text-light" href="#avatar">Change Avatar</button>
                                        </div>
                                    </div>

                                    <div className="md-form input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon text-light" id="material-addon1"><i className="fa fa-envelope"></i></span>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="material-addon1" />
                                    </div>

                                    <div className="md-form input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon text-light" id="material-addon1"><i className="fa fa-lock"></i></span>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Password" aria-label="Username" aria-describedby="material-addon1" />
                                    </div>

                                    <div className="md-form input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon text-light" id="material-addon1"><i className="fa fa-lock"></i></span>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Confirm Password" aria-label="Username" aria-describedby="material-addon1" />
                                    </div>

                                    <div>
                                        <button className="btn btn-outline-light rounded waves-effect" href="#avatar">Update</button>
                                    </div>
                                </div>
                            </aside>
                            {/* Table with buttons */}
                            <section className="container text-light text-center pt-5 col-lg-9 col-md-9 col-sm-12 col-xs-12 float-right ml-auto">
                                <div className="news-card  p-3"  style={{height: "70vh"}}>
                                    <div className="table-responsive"  style={{height: "50vh"}}>
                                        
                                        <table className="table text-light table-hover table-dark table-custom spacing5">
                                            <thead>
                                                <th className="text-danger">Lorem ipsum</th>
                                                <th className="text-danger">Lorem ipsum</th>
                                                <th className="text-danger">Lorem ipsum</th>
                                                <th className="text-danger">Lorem ipsum</th>
                                            </thead>
                                            
                                            <tbody>
                                                {/* Results of for loop */}
                                                {posts}
                                            </tbody>
                                        </table>
                                        
                                    </div>
                                    <div className="pt-3">
                                        <button className="btn btn-sm rounded waves-effect" href="#avatar">ALL POSTS</button>
                                        <button className="btn btn-sm rounded waves-effect" href="#avatar">ALL COMMENTS</button>
                                        <button className="btn btn-sm rounded waves-effect" href="#avatar">ALL HASHTAGS</button>
                                        <button className="btn btn-sm rounded waves-effect" href="#avatar">ALL DREAM WEAVES</button>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </main>
                    <Footer />
                </div>
    )
  }
}
