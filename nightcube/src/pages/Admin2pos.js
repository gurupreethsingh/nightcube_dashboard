import React from "react";
import earth_green from "../website_assets/videos/earth_green.mp4";
import earth_brown from "../website_assets/videos/earth_brown.mp4";

import { FaArrowRightToBracket } from "react-icons/fa6";
import {Link} from 'react-router-dom';

const Admin2pos = () => {
  return (
    <div className="bgContainer">
      <div className="overlay">
        <video className="bgVideo" src={earth_green} autoPlay loop muted />
        <div className="content">
          <div className="parent">
            <div>
              <h1 className="text-center">ADMIN 2</h1>
            </div>
            <div className="navsection d-flex align-items-center justify-content-start p-3  ">
              <div className="leftside flex-grow-1 ms-3 me-3">
                <button
                  class="btn"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasWithBothOptions"
                  aria-controls="offcanvasWithBothOptions"
                >
                  <FaArrowRightToBracket
                    style={{ height: "50px", width: "50px", color: "white" }}
                  />
                </button>

                <div
                  class="offcanvas offcanvas-start"
                  data-bs-scroll="true"
                  tabindex="-1"
                  id="offcanvasWithBothOptions"
                  aria-labelledby="offcanvasWithBothOptionsLabel"
                >
                  <div class="offcanvas-header">
                    <h5
                      class="offcanvas-title"
                      id="offcanvasWithBothOptionsLabel"
                    >
                      Backdrop with scrolling
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="offcanvas-body">
                    <p>
                      Try scrolling the rest of the page to see this option in
                      action.
                    </p>
                  </div>
                </div>
              </div>

              <div className="righside flex-grow-1 w-100  ">
                <ul class="nav nav-underline d-flex justify-content-evenly">
                  <li class="nav-item flex-grow-1 text-center">
                    <Link class="nav-link text-light" to="/admin2">
                      OUTLETS
                    </Link>
                  </li>

                  <li class="nav-item flex-grow-1 text-center">
                  <Link class="nav-link text-light" to="/admin2pos">
                      POS
                    </Link>
                  </li>
                  <li class="nav-item flex-grow-1 text-center">
                  <Link class="nav-link text-light" to="/admin2stories">
                      STORIES
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mainsection content">
            <div class="container-fluid text-center">
                          <div className="roas_section p-5" id="pos">
            <div class="row">
            <h2 className="text-center p-3">
                POINT OF SALES{" "}
              </h2>

              <div className="transparent-table">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">SL NO</th>
                      <th scope="col">CUSOMER NAME</th>
                      <th scope="col">CUSTOMER PHONE</th>
                      <th scope="col">OUTLET NAME</th>
                      <th scope="col">VALIDITY</th>
                      <th scope="col">GROSS AMOUNT</th>
                      <th scope="col">ELIGIBILITY</th>
                      <th scope="col">TOTAL AMOUNT(GST)</th>
                      <th scope="col">COUPONS</th>
                      <th scope="col">FINAL AMOUNT</th>
                      <th scope="col">STATUS</th>
                      <th scope="col">TRANSACTION ID</th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>Otto</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>Otto</td>
                      <td>Otto</td>
                      <td><a className="btn btn-sm btn-warning">EDIT</a></td>
                      <td><a className="btn btn-sm btn-danger">DELETE</a></td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>Otto</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>Otto</td>
                      <td>Otto</td>
                      <td><a className="btn btn-sm btn-warning">EDIT</a></td>
                      <td><a className="btn btn-sm btn-danger">DELETE</a></td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry the Bird</td>
                      <td>@twitter</td>
                      <td>@fat</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>Otto</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>Otto</td>
                      <td>Otto</td>
                      <td><a className="btn btn-sm btn-warning">EDIT</a></td>
                      <td><a className="btn btn-sm btn-danger">DELETE</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
              </div>


              {/* <div class="container-fluid text-center">
              <div className="roas_section ps-5 pe-5"  id = "accounts">
          <div class="row">
            <div className="transparent-table" >
                            <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">CUSTOMER ID / PHONE #</th>
                                <th scope="col">OUTLET ID</th>
                                <th scope="col">VALIDITY / TRANSACTION ID</th>
                                <th scope="col">TOTAL AMOUNT + GST</th>
                                <th scope="col">ELIGIBILITY</th>
                                <th scope="col">COUPON</th>
                                <th scope="col">FINAL AMOUNT</th>
                                <th scope="col">STATUS</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <th>USERS 1</th>
                                <th>Whatsapp</th>
                                <th>12 dec</th>
                                <th>+91 987654321</th>
                                <th>Whatsapp</th>
                                <th>12 dec</th>
                                <th>+91 987654321</th>
                            </tr>

                            <tr>
                                <th scope="row">2</th>
                                <th>USERS 2</th>
                                <th>Whatsapp</th>
                                <th>12 dec</th>
                                <th>+91 987654321</th>
                                <th>Whatsapp</th>
                                <th>12 dec</th>
                                <th>+91 987654321</th>
                            </tr>

                            <tr>
                                <th scope="row">3</th>
                                <th>USERS 3</th>
                                <th>Whatsapp</th>
                                <th>12 dec</th>
                                <th>+91 987654321</th>
                                <th>Whatsapp</th>
                                <th>12 dec</th>
                                <th>+91 987654321</th>
                            </tr>
                            </tbody>
                        </table>
                      </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin2pos;
