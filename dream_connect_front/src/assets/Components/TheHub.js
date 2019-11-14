import React, {Component} from 'react';
import Header from "./navigation/Header"; // Import header
import Footer from "./navigation/Footer"; // Import footer
import Comment from "./Comment"; // Import comment boxes
import Blog from "../assets/images/blog.jpg";
import Sunset from "../assets/images/sunset.jpeg";
import Sunflowers from "../assets/images/sunflowers.jpg";
import axios from "axios";


export default class TheHub extends Component {

  state = {
    posts: [],
    searchField: ""
  }

  //as component loads we retrieve posts from the api and save it on component state
  componentDidMount = () => {
      console.log("this works");
      axios.get("http://localhost:8080/admin/getallpost").then(function(data){
        this.setState({
          posts: data.data
        })
      }).catch((err) => {
        console.error("Error accessing the server: ", err.message);
        console.log("Setting dummy data");
        let dummyDreams = [{
          "title":"My December Dream1",
          "description":"Its about december dream",
          "appUser":{ 
             "username":"testuserZ",
          },
          "createdDate":"2019-11-08T13:39:21.806+0000",
        }, {
          "title":"My December Dream2",
          "description":"Its about december dream",
          "appUser":{ 
             "username":"testuserZ",
          },
          "createdDate":"2019-11-08T13:39:21.806+0000",
        }, {
          "title":"My December Dream3",
          "description":"Its about december dream",
          "appUser":{ 
             "username":"testuserZ",
          },
          "createdDate":"2019-11-08T13:39:21.806+0000",
        }, {
          "title":"My December Dream4",
          "description":"Its about december dream",
          "appUser":{ 
             "username":"testuserZ",
          },
          "createdDate":"2019-11-08T13:39:21.806+0000",
        }];
        this.setState({
          posts: dummyDreams
        });
      });
  }

  retrieveDreams = () => {
    alert(`retrieving dreams for ${this.state.searchField}...`)
  }

  render = () => {

    // let posts = []

    // Loop for how many posts exists, 
    // with a backend you would determine this by the length of an array
    // for (let i = 0; i < 10; i++) {

        // posts.push(
        //     <tr key={i}>
        //         <td>
        //             <span>Ut enim</span>
        //         </td>
        //         <td>
        //             <span>minima veniam</span>
        //         </td>
        //         <td>
        //             <span>quis nostrum</span>
        //         </td>
        //         <td>
        //             <span>exercitationem</span>
        //         </td>
        //         {/* Imported for each row, you could pass in props for this to work */}
        //         <Comment />
        //     </tr>
        // )
    // }

    return (
                <div>
                    <Header />
                    <main className="rgba-gradient container-fluid">
                        {/* <!-- Article --> */}
                        <div id="top" className="row pt-5">
                            <aside className="container text-light text-center pt-5 col-lg-3 col-md-3 col-sm-12 col-xs-12 float-left mr-auto">
                            {/* <!--Grid column--> */}

                                {/* <!-- Card Narrower --> */}
                                <div className="card card-cascade narrower">

                                    {/* <!-- Card image --> */}
                                    <div className="view view-cascade">
                                        <img className="blog-img card-img-top" src={Blog} alt="Dream Collect" />
                                        <a href="#void">
                                            <div className="mask img-gradient"></div>
                                        </a>
                                    </div>

                                    {/* <!-- Card content --> */}
                                    <div className="card-body card-body-cascade">

                                        {/* <!-- Label --> */}
                                        <h5 className="pink-text pb-2 pt-1"><i className="fa fa-cutlery"></i> Blog Post</h5>
                                        {/* <!-- Text --> */}
                                        <p className="card-text">Ut enim ad minima veniam, quis nostrum exercitationem ullam
                                            corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.</p>
                                        {/* <!-- Button --> */}
                                        <a href="#void" className="btn btn-unique">Read More</a>

                                    </div>
                                </div>
                            </aside>


                            <section className="container text-light text-center pt-5 col-lg-9 col-md-9 col-sm-12 col-xs-12 float-right ml-auto">
                                <div className="news-card  p-3"  style={{height: "120vh"}}>
                                        <nav className="float-right ml-auto">
                                            <ul className="pagination">
                                                <li className="page-item">
                                                <a className="page-link  text-light" href="#void"  aria-label="Previous">
                                                    <span aria-hidden="true">«</span>
                                                    <span className="sr-only">Previous</span>
                                                </a>
                                                </li>
                                                <li className="page-item active"><a className="page-link  text-light" href="#void">1</a></li>
                                                <li className="page-item"><a className="page-link  text-light" href="#void">2</a></li>
                                                <li className="page-item"><a className="page-link  text-light" href="#void">3</a></li>
                                                <li className="page-item">
                                                <a className="page-link  text-light" href="#void" aria-label="Next">
                                                    <span aria-hidden="true">»</span>
                                                    <span className="sr-only">Next</span>
                                                </a>
                                                </li>
                                            </ul>
                                        </nav>
                                        {/* Table */}
                                        <div className="table-responsive"  style={{height: "45vh"}}>
                                            
                                            <table className="table text-light table-hover table-dark table-custom spacing5">
                                                <thead>
                                                    <th className="text-danger">Title</th>
                                                    <th className="text-danger">User</th>
                                                    <th className="text-danger">Description</th>
                                                    <th className="text-danger">Created</th>
                                                </thead>
                                                
                                                <tbody>
                                                    {/* Results of the above for loop */}

                                                </tbody>
                                            </table>
                                            
                                        </div>
                                        <nav className="float-right ml-auto mt-3">
                                            <ul className="pagination">
                                                <li className="page-item">
                                                <a className="page-link  text-light" href="#void"  aria-label="Previous">
                                                    <span aria-hidden="true">«</span>
                                                    <span className="sr-only">Previous</span>
                                                </a>
                                                </li>
                                                <li className="page-item active"><a className="page-link  text-light" href="#void">1</a></li>
                                                <li className="page-item"><a className="page-link  text-light" href="#void">2</a></li>
                                                <li className="page-item"><a className="page-link  text-light" href="#void">3</a></li>
                                                <li className="page-item">
                                                <a className="page-link  text-light" href="#void" aria-label="Next">
                                                    <span aria-hidden="true">»</span>
                                                    <span className="sr-only">Next</span>
                                                </a>
                                                </li>
                                            </ul>
                                        </nav>

                                        <div className="table-responsive"  style={{height: "45vh"}}>
                                        {/* Second table */}
                                        <table className="table text-light table-hover table-dark table-custom spacing5">
                                            <thead>
                                              <th className="text-danger">Title</th>
                                              <th className="text-danger">User</th>
                                              {/* <th className="text-danger">Description</th> */}
                                              <th className="text-danger">Created</th>
                                            </thead>
                                            
                                            <tbody>
                                                {/* Results of the above for loop again */}
                                                    {this.state.posts.map((post, index) => (
                                           
                                                      <React.Fragment key={index}>
                                                        <tr>
                                                            <td>
                                                                <span>{post.title}</span>
                                                            </td>
                                                            <td>
                                                                <span>{post.appUser.username}</span>
                                                            </td>
                                                            {/* <td>
                                                                <span>{post.description}</span>
                                                            </td> */}
                                                            <td>
                                                                <span>{new Date(post.createdDate).toLocaleString ()}</span>
                                                            </td>
                                                            {/* Imported for each row, you could pass in props for this to work */}
                                                            <Comment />
                                                        </tr>
                                                        <tr>
                                                          <td colspan="3">
                                                          {post.description}
                                                          </td>
                                                        </tr>
                                                      </React.Fragment>

                                                    ))}
                                            </tbody>
                                        </table>
                                        
                                    </div>
                                    
                                </div>
                            </section>
                        </div>

                        {/* <!-- Article --> */}
                        <div className="row pt-5">
                            <section className="container pb-5 text-light text-center col-lg-3 col-md-3 col-sm-12 col-xs-12 float-left mr-auto">
                            {/* <!--Grid column--> */}

                                {/* <!-- Card Narrower --> */}
                                <div className="card card-cascade narrower">

                                    {/* <!-- Card image --> */}
                                    <div className="view view-cascade">
                                        <img className="blog-img card-img-top" src={Sunset} alt="Dream Collect" />
                                        <a href="#void">
                                            <div className="mask img-gradient"></div>
                                        </a>
                                    </div>

                                    {/* <!-- Card content --> */}
                                    <div className="card-body card-body-cascade">

                                        {/* <!-- Label --> */}
                                        <h5 className="pink-text pb-2 pt-1"><i className="fa fa-cutlery"></i> Blog Post</h5>
                                        {/* <!-- Text --> */}
                                        <p className="card-text">Ut enim ad minima veniam, quis nostrum exercitationem ullam
                                            corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.</p>
                                        {/* <!-- Button --> */}
                                        <a href="#void" className="btn btn-unique">Read More</a>

                                    </div>
                                </div>
                            </section>
                            <aside className="container text-light text-center col-lg-6 col-md-6 col-sm-12 col-xs-12 float-right ml-auto">
                                <div className="news-card text-primary p-3 ">Post <i className="fas fa-pencil-alt prefix"></i><label htmlFor="form24"></label>
                                    <form className="form-group md-form amber-textarea active-amber-textarea-2">
                                        <input placeholder="Title" className="text-light form-control mb-5" />
                                        <textarea id="form24" placeholder="Post" className="p-3 lg-textarea form-control text-light" rows="3"></textarea>
                                        <button className="btn btn-outline-danger">Delete</button>
                                        <button className="btn btn-outline-primary">Submit</button>
                                    </form>
                                </div>
                            </aside>
                        </div>

                        
                         {/* <!-- Article --> */}
                         <div className="row pb-5">
                            <section className="container pt-5 text-light text-center pb-5 col-lg-3 col-md-3 col-sm-12 col-xs-12 float-left mr-auto">
                            {/* <!--Grid column--> */}

                                {/* <!-- Card Narrower --> */}
                                <div className="card card-cascade narrower">

                                    {/* <!-- Card image --> */}
                                    <div className="view view-cascade">
                                        <img className="blog-img card-img-top" src={Sunflowers} alt="Dream Collect" />
                                        <a href="#void">
                                            <div className="mask img-gradient"></div>
                                        </a>
                                    </div>

                                    {/* <!-- Card content --> */}
                                    <div className="card-body card-body-cascade">

                                        {/* <!-- Label --> */}
                                        <h5 className="pink-text pb-2 pt-1"><i className="fa fa-cutlery"></i> Blog Post</h5>
                                        {/* <!-- Text --> */}
                                        <p className="card-text">Ut enim ad minima veniam, quis nostrum exercitationem ullam
                                            corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.</p>
                                        {/* <!-- Button --> */}
                                        <a href="#void" className="btn btn-unique">Read More</a>

                                    </div>
                                </div>
                            </section>
                            <aside className="container py-5 text-light text-center col-lg-6 col-md-6 col-sm-12 col-xs-12 float-right ml-auto">
                                <div className="news-card text-primary p-3" style={{height: "70vh"}}>DREAM <i className="fas fa-cloud prefix"></i><label htmlFor="form24"></label>
                                    <div className="table-responsive mt-3" style={{height: "40vh"}}>
                                        
                                        <table className="table text-light table-hover table-dark table-custom spacing5">
                                            <thead>
                                                <th className="text-danger">Lorem</th>
                                                <th className="text-danger">Ipsum</th>
                                            </thead>
                                            
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <span>Ut enim</span>
                                                    </td>
                                                    <td>
                                                        <span>exercitationem</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
 
                                    <form className="col-12 form-group md-form amber-textarea active-amber-textarea-2">
                                        <input onChange={e => this.setState({searchField: e.target.value})} value={this.state.searchField} placeholder="DREAM" className="text-light col-6 mx-auto mb-3 float-left mr-auto" />
                                        <button type="button" onClick={this.retrieveDreams} className="btn btn-outline-primary mx-auto">DREAM WEAVER</button>
                                    </form>
                                </div>
                            </aside>
                        </div>
                    </main>
                    <Footer />
                </div>
        )
    }
}