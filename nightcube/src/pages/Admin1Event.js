import React from "react";
import earth_green from "../website_assets/videos/earth_green.mp4";
import earth_brown from "../website_assets/videos/earth_brown.mp4";

import { FaArrowRightToBracket } from "react-icons/fa6";
import {Link} from 'react-router-dom';

const Admin1Event = () => {
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
            <h1>ADMIN 1 - EVENT MODULE</h1>
                  <div className="transparent-table" >
                            <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">MONITOR TOTAL EVENTS</th>
                                <th scope="col">ADD ALL NEW EVENTS</th>
                                <th scope="col">APPROVE ALL EVENTS AUTO REQUEST ON CHANGES MADE BY OUTLETS-CONDITION TO T.1</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">EDIT AND UPDATE ALL EVENTS TIME, DETAILS, OUTLETS, IMAGES, VIDEOS, CALENDAR</th>
                                <th>SOLVE AND HELP REGISTERED EVENT ISSUES ON REQUESTS</th>
                                <th>REPORT ALL CRASH - BUGS - ERRORS @ EVENTS</th>
                            </tr>
                            <tr>
                            <th>DELETE EVENT</th>
                                <th scope="row">MAIL COMMUNICATION FOR APPROVALS & FIXING ISSUES @ EVENT</th>
                                <th scope="col">CORROSPONDING COMMUNICATION FOR WELCOME APPROVALS @ EVENTS</th>
                            </tr>
                            </tbody>
                        </table>
                      </div>
                  </div>
                </div>
              </div>

              <div class="container-fluid text-center">
              <div className="roas_section ps-5 pe-5"  id = "accounts">
          <div class="row">
                  <div className="transparent-table" >
                            <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">EVENT ID</th>
                                <th scope="col">EVENT DETAILS</th>
                                <th scope="col">IMAGES/VIDEOS</th>
                                <th scope="col">REGISTRATION DATE/MONTH</th>
                                <th scope="col">CALENDER</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <th>USERS 1</th>
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
                            </tr>

                            <tr>
                                <th scope="row">3</th>
                                <th>USERS 3</th>
                                <th>Whatsapp</th>
                                <th>12 dec</th>
                                <th>+91 987654321</th>
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

export default Admin1Event;
