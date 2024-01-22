import React from "react";
import earth_green from "../website_assets/videos/earth_green.mp4";
import earth_brown from "../website_assets/videos/earth_brown.mp4";

import { FaArrowRightToBracket } from "react-icons/fa6";
import {Link} from 'react-router-dom';

const Admin1account = () => {
  return (
    <div className="bgContainer">
      <div className="overlay">
        <video className="bgVideo" src={earth_green} autoPlay loop muted />
        <div className="content">
          <div className="parent">
            <div>
              <h1 className="text-center">ADMIN 1</h1>
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
                    <Link class="nav-link text-light" to="/admin1user">
                      USERS
                    </Link>
                  </li>

                  <li class="nav-item flex-grow-1 text-center">
                  <Link class="nav-link text-light" to="/admin1event">
                      EVENTS
                    </Link>
                  </li>
                  <li class="nav-item flex-grow-1 text-center">
                  <Link class="nav-link text-light" to="/admin1artist">
                      ARTISTS
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mainsection content">
              <div class="container-fluid text-center">
              <div className="roas_section ps-5 pe-5"  id = "accounts">
          <div class="row">
            <h1>ADMIN 1 - ACCOUNTS</h1>
                  <div className="transparent-table" >
                            <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">CHANGE EMAIL</th>
                                <th>MANAGE APPROVALS</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">CHANGE PASSWORD</th>
                                <th>EVENT</th>
                                <th>USER</th>
                                <th>ARTIST</th>
                                <th>IMAGES</th>
                                <th>VIDEOS</th>
                            </tr>
                            <tr>
                            <th>LOGOUT</th>
                            </tr>
                            </tbody>
                        </table>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin1account;
