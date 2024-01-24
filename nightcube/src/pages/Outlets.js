import React from "react";
import earth_green from "../website_assets/videos/earth_green.mp4";
import earth_brown from "../website_assets/videos/earth_brown.mp4";
import nightcube_dashbord_background from '../website_assets/videos/nightcube_dashbord_background.mp4';
import { MdExpandCircleDown } from "react-icons/md";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { PieChart } from "@mui/x-charts/PieChart";
import { BarChart } from "@mui/x-charts/BarChart";
import { MicNone } from "@mui/icons-material";

const Outlets = () => {
  return (
    <div className="bgContainer">
      <div className="overlay">
        <video className="bgVideo" src={nightcube_dashbord_background} autoPlay loop muted />
        <div className="content">
          <div className="parent">
            <div>
              <h1 className="text-center">OUTLETS</h1>
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
                    <a class="nav-link text-light" href="#">
                      USERS
                    </a>
                  </li>
                  <li class="nav-item flex-grow-1 text-center">
                    <a class="nav-link text-light" href="#">
                      OUTLETS
                    </a>
                  </li>
                  <li class="nav-item flex-grow-1 text-center">
                    <a class="nav-link text-light" href="#">
                      ARTISTS
                    </a>
                  </li>
                  <li class="nav-item flex-grow-1 text-center">
                    <a class="nav-link text-light" href="#">
                      EVENTS
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mainsection content">
              <div class="container-fluid text-center">
                <div class="row">
                  <div
                    class="col  d-flex flex-column justify-content-start align-items-center"
                    style={{ height: "400px", width: "25%" }}
                  >
                    <h4 className="text-center">GENDER RATIO</h4>
                    <div
                      className="maincircle d-flex justify-content-center align-items-center mx-0"
                      style={{ height: "100%", width: "100%" }}
                    >
                      <div
                        className="piechart d-flex justify-content-start align-items-center  custom-pie-chart-container"
                        style={{ width: "100%" }}
                      >
                        <PieChart
                          series={[
                            {
                              data: [
                                { id: 0, value: 10, label: "MALE" },
                                { id: 1, value: 15, label: "FEMALE" },
                              ],
                            },
                          ]}
                          width={500}
                          height={250}
                          margin={{ right: 300 }}
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    class="col  d-flex flex-column justify-content-start align-items-center "
                    style={{ height: "400px", width: "25%" }}
                  >
                    <h4 className="text-center">AGE GROUP</h4>
                    <div
                      className="maincircle d-flex justify-content-center align-items-center mx-0"
                      style={{ height: "100%", width: "100%" }}
                    >
                      <div
                        className="piechart d-flex justify-content-start align-items-center  custom-pie-chart-container"
                        style={{ width: "100%" }}
                      >
                        <PieChart
                          series={[
                            {
                              data: [
                                { id: 0, value: 10, label: "18 to 21" },
                                { id: 1, value: 15, label: "21 to 25" },
                                { id: 2, value: 20, label: "26 to 30" },
                                { id: 3, value: 10, label: "31 to 35" },
                                { id: 4, value: 15, label: "36 to 40" },
                                { id: 5, value: 20, label: "40 +    " },
                              ],
                            },
                          ]}
                          width={500}
                          height={250}
                          margin={{ right: 300 }}
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    class="col  d-flex flex-column justify-content-start align-items-center "
                    style={{ height: "400px", width: "25%" }}
                  >
                    <h4 className="text-center">OUTING FREQUENCY</h4>
                    <div
                      className="maincircle d-flex justify-content-center align-items-center mx-0"
                      style={{ height: "100%", width: "100%" }}
                    >
                      <div
                        className="piechart d-flex justify-content-start align-items-center  custom-pie-chart-container"
                        style={{ width: "100%" }}
                      >
                        <PieChart
                          series={[
                            {
                              data: [
                                { id: 0, value: 10, label: "ONCE A WEEK" },
                                { id: 1, value: 15, label: "ONCE IN 2 WEEKS" },
                                { id: 2, value: 20, label: "ONCE A MONTH" },
                              ],
                            },
                          ]}
                          width={550}
                          height={250}
                          margin={{ right: 300 }}
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    class="col  d-flex flex-column justify-content-start align-items-center "
                    style={{ height: "400px", width: "25%" }}
                  >
                    <h4 className="text-center">COMMUNICATION</h4>
                    <div
                      className="maincircle d-flex justify-content-center align-items-center mx-0"
                      style={{ height: "100%", width: "100%" }}
                    >
                      <div
                        className="piechart d-flex justify-content-start align-items-center  custom-pie-chart-container"
                        style={{ width: "100%" }}
                      >
                        <PieChart
                          series={[
                            {
                              data: [
                                { id: 0, value: 10, label: "WHATSAPP" },
                                { id: 1, value: 15, label: "EMAIL" },
                                { id: 2, value: 20, label: "TEXT MESSAGE" },
                              ],
                            },
                          ]}
                          width={500}
                          height={250}
                          margin={{ right: 300 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row ">
                  <div
                    class="col  d-flex flex-column justify-content-start align-items-center "
                    style={{ height: "400px", width: "33%" }}
                  >
                    <h4 className="text-center">EVENT PREFERENCE</h4>
                    <div
                      className="maincircle d-flex justify-content-center align-items-center mx-0"
                      style={{ height: "100%", width: "100%" }}
                    >
                      <div
                        className="piechart d-flex justify-content-start align-items-center custom-pie-chart-container"
                        style={{ width: "100%" }}
                      >
                        <PieChart
                          series={[
                            {
                              data: [
                                {
                                  id: 0,
                                  value: 10,
                                  label: "BOLYWOOD EDM COMMERTIALS",
                                },
                                {
                                  id: 1,
                                  value: 15,
                                  label: "TECHNO UNDERGROUND",
                                },
                                {
                                  id: 2,
                                  value: 20,
                                  label: "HIPHOP - R&B - TRAP",
                                },
                                {
                                  id: 3,
                                  value: 10,
                                  label: "DEEP HOUSE MELODIC",
                                },
                                {
                                  id: 4,
                                  value: 15,
                                  label: "LIVE BAND - METAL ACQUOSTIC",
                                },
                                {
                                  id: 5,
                                  value: 20,
                                  label: "ALTERNATIVE ELECTRO INDUSTRIALS",
                                },
                              ],
                            },
                          ]}
                          width={790}
                          height={250}
                          margin={{ right: 300 }}
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    class="col  d-flex flex-column justify-content-start align-items-center"
                    style={{ height: "400px", width: "33%" }}
                  >
                    <h4 className="text-center">MUSIC PREFERENCE</h4>
                    <div
                      className="maincircle d-flex justify-content-center align-items-center mx-0"
                      style={{ height: "100%", width: "100%" }}
                    >
                      <div
                        className="piechart d-flex justify-content-start align-items-center custom-pie-chart-container"
                        style={{ width: "100%" }}
                      >
                        <PieChart
                          series={[
                            {
                              data: [
                                {
                                  id: 0,
                                  value: 10,
                                  label: "BOLYWOOD EDM COMMERTIALS",
                                },
                                {
                                  id: 1,
                                  value: 15,
                                  label: "TECHNO UNDERGROUND",
                                },
                                {
                                  id: 2,
                                  value: 20,
                                  label: "HIPHOP - R&B - TRAP",
                                },
                                {
                                  id: 3,
                                  value: 10,
                                  label: "DEEP HOUSE MELODIC",
                                },
                                {
                                  id: 4,
                                  value: 15,
                                  label: "LIVE BAND - METAL ACQUOSTIC",
                                },
                                {
                                  id: 5,
                                  value: 20,
                                  label: "ALTERNATIVE ELECTRO INDUSTRIALS",
                                },
                              ],
                            },
                          ]}
                          width={790}
                          height={250}
                          margin={{ right: 300 }}
                        />
                      </div>
                    </div>
                  </div>

                </div>

                <div className="mainsectionend ">
                  <div class="accordion" id="accordionPanelsStayOpenExample">
                    <div class="accordion-item border-0">
                      <h2 class="accordion-header">
                        <button
                          class="accordion-button collapsed text-right text-light d-block"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseThree"
                          aria-expanded="true"
                          aria-controls="panelsStayOpen-collapseThree"
                        >
                          {" "}EXPAND DISTRIBUTION &nbsp;
                          <MdExpandCircleDown />
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseThree"
                        class="accordion-collapse collapse"
                      >
                        <div class="accordion-body">
                          <div class="row">
                            <div
                              class="col d-flex flex-column justify-content-center align-items-center"
                              style={{ height: "400px" }}
                            >
                              <h4 className="text-light">AGE GROUP</h4>
                              <div
                                className="maincircle d-flex justify-content-center"
                                style={{ height: "100%", width: "100%" }}
                              >
                                <div className="piechart d-flex align-items-center custom-pie-chart-container">
                                  <PieChart
                                    series={[
                                      {
                                        data: [
                                          { id: 0, value: 10 },
                                          { id: 1, value: 15 },
                                          { id: 2, value: 20 },
                                          { id: 3, value: 10 },
                                          { id: 4, value: 15 },
                                          { id: 5, value: 20 },
                                        ],
                                      },
                                    ]}
                                    width={250}
                                    height={300}
                                  />
                                </div>

                                <div className="piecalculations d-flex align-items-center custom-pie-chart-container">
                                  <BarChart
                                    xAxis={[
                                      {
                                        id: "barCategories",
                                        data: [
                                          "18 - 21",
                                          "21 - 25",
                                          "26-30",
                                          "31-35",
                                          "36-40",
                                          "40+",
                                        ],
                                        scaleType: "band",
                                      },
                                    ]}
                                    series={[
                                      {
                                        data: [20, 50, 30, 40, 23, 97],
                                      },
                                    ]}
                                    width={400}
                                    height={300}
                                  />
                                </div>
                              </div>
                            </div>

                            <div
                              class="col d-flex flex-column justify-content-center align-items-center custom-pie-chart-container"
                              style={{ height: "400px" }}
                            >
                              <h4 className="text-light">MUSIC PREFERENCE</h4>
                              <div
                                className="maincircle d-flex justify-content-center"
                                style={{ height: "100%", width: "100%" }}
                              >
                                <div className="piechart d-flex align-items-center">
                                  <PieChart
                                    series={[
                                      {
                                        data: [
                                          { id: 0, value: 10 },
                                          { id: 1, value: 15 },
                                          { id: 2, value: 20 },
                                          { id: 3, value: 10 },
                                          { id: 4, value: 15 },
                                          { id: 5, value: 20 },
                                        ],
                                      },
                                    ]}
                                    width={250}
                                    height={300}
                                  />
                                </div>

                                <div className="piecalculations d-flex align-items-center">
                                  <BarChart
                                    xAxis={[
                                      {
                                        id: "barCategories",
                                        data: [
                                          "BOLLYWOOD",
                                          "TECHNO",
                                          "HIP HOP",
                                          "DEEP HOUSE",
                                          "LIVE BAND",
                                          "ELECTRO",
                                        ],
                                        scaleType: "band",
                                      },
                                    ]}
                                    series={[
                                      {
                                        data: [20, 50, 30, 40, 23, 97],
                                      },
                                    ]}
                                    width={650}
                                    height={300}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="row">
                            <div
                              class="col  d-flex flex-column justify-content-center align-items-center custom-pie-chart-container"
                              style={{ height: "400px" }}
                            >
                              <h4 className="text-light">OUTING FREQUENCY</h4>
                              <div
                                className="maincircle d-flex justify-content-center"
                                style={{ height: "100%", width: "100%" }}
                              >
                                <div className="piechart d-flex align-items-center custom-pie-chart-container">
                                  <PieChart
                                    series={[
                                      {
                                        data: [
                                          { id: 0, value: 10 },
                                          { id: 1, value: 15 },
                                          { id: 2, value: 20 },
                                        ],
                                      },
                                    ]}
                                    width={250}
                                    height={300}
                                  />
                                </div>

                                <div className="piecalculations d-flex align-items-center custom-pie-chart-container">
                                  <BarChart
                                    xAxis={[
                                      {
                                        id: "barCategories",
                                        data: [
                                          "ONCE A WEEK",
                                          "ONCE 2 WEEKS",
                                          "ONCE A MONTH",
                                        ],
                                        scaleType: "band",
                                      },
                                    ]}
                                    series={[
                                      {
                                        data: [40, 23, 97],
                                      },
                                    ]}
                                    width={440}
                                    height={300}
                                  />
                                </div>
                              </div>
                            </div>

                            <div
                              class="col d-flex flex-column justify-content-center align-items-center custom-pie-chart-container"
                              style={{ height: "400px" }}
                            >
                              <h4 className="text-light">GENDER RATIO</h4>
                              <div
                                className="maincircle d-flex justify-content-center"
                                style={{ height: "100%", width: "100%" }}
                              >
                                <div className="piechart d-flex align-items-center">
                                  <PieChart
                                    series={[
                                      {
                                        data: [
                                          { id: 0, value: 10 },
                                          { id: 1, value: 15 },
                                        ],
                                      },
                                    ]}
                                    width={210}
                                    height={300}
                                  />
                                </div>

                                <div className="piecalculations d-flex align-items-center">
                                  <BarChart
                                    xAxis={[
                                      {
                                        id: "barCategories",
                                        data: ["MALE", "FEMALE"],
                                        scaleType: "band",
                                      },
                                    ]}
                                    series={[
                                      {
                                        data: [40, 23],
                                      },
                                    ]}
                                    width={230}
                                    height={300}
                                  />
                                </div>
                              </div>
                            </div>

                            <div
                              class="col d-flex flex-column justify-content-center align-items-center custom-pie-chart-container"
                              style={{ height: "400px" }}
                            >
                              <h4 className="text-light">COMMUNICATION</h4>
                              <div
                                className="maincircle d-flex justify-content-center"
                                style={{ height: "100%", width: "100%" }}
                              >
                                <div className="piechart d-flex align-items-center">
                                  <PieChart
                                    series={[
                                      {
                                        data: [
                                          { id: 0, value: 10 },
                                          { id: 1, value: 15 },
                                          { id: 2, value: 20 },
                                        ],
                                      },
                                    ]}
                                    width={250}
                                    height={300}
                                  />
                                </div>

                                <div className="piecalculations d-flex align-items-center custom-pie-chart-container">
                                  <BarChart
                                    xAxis={[
                                      {
                                        id: "barCategories",
                                        data: [
                                          "EMAIL",
                                          "WHATSAPP",
                                          "TEXT MESSAGE",
                                        ],
                                        scaleType: "band",
                                      },
                                    ]}
                                    series={[
                                      {
                                        data: [40, 23, 97],
                                      },
                                    ]}
                                    width={400}
                                    height={300}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="row custom-pie-chart-container">
                            <div
                              class="col d-flex flex-column justify-content-center align-items-center"
                              style={{ height: "400px" }}
                            >
                              <h4 className="text-light">EVENT PREFERENCE</h4>
                              <div
                                className="maincircle d-flex justify-content-center"
                                style={{ height: "100%", width: "100%" }}
                              >
                                <div className="piechart d-flex align-items-center">
                                  <PieChart
                                    series={[
                                      {
                                        data: [
                                          { id: 0, value: 10 },
                                          { id: 1, value: 15 },
                                          { id: 2, value: 20 },
                                          { id: 3, value: 10 },
                                          { id: 4, value: 15 },
                                          { id: 5, value: 20 },
                                        ],
                                      },
                                    ]}
                                    width={250}
                                    height={300}
                                  />
                                </div>

                                <div className="piecalculations d-flex align-items-center">
                                  <BarChart
                                    xAxis={[
                                      {
                                        id: "barCategories",
                                        data: [
                                          "FRI NI LI",
                                          "SAT NI LI",
                                          "SUNDAY",
                                          "LADIES NI",
                                          "HAP HRS",
                                          "BRUNCH",
                                        ],
                                        scaleType: "band",
                                      },
                                    ]}
                                    series={[
                                      {
                                        data: [20, 50, 30, 40, 23, 97],
                                      },
                                    ]}
                                    width={650}
                                    height={300}
                                  />
                                </div>
                              </div>
                            </div>


                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="roas_section p-5" id="pos">
            <div class="row">
            <h2 className="text-center p-3">
                POINT OF SALES : OUTLET{" "}
              </h2>

              <div className="transparent-table">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">SL NO</th>
                      <th scope="col">CUSOMER NAME</th>
                      <th scope="col">CUSTOMER PHONE</th>
                      <th scope="col">VALIDITY</th>
                      <th scope="col">GROSS AMOUNT</th>
                      <th scope="col">ELIGIBILITY</th>
                      <th scope="col">TOTAL AMOUNT(GST)</th>
                      <th scope="col">COUPONS</th>
                      <th scope="col">FINAL AMOUNT</th>
                      <th scope="col">STATUS</th>
                      <th scope="col">TRANSACTION ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>

                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>Otto</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>Otto</td>
                      <td>Otto</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>

                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>Otto</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>Otto</td>
                      <td>Otto</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry the Bird</td>
                      <td>@twitter</td>
                      <td>@fat</td>
                      <td>Mark</td>

                      <td>@mdo</td>
                      <td>Otto</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>Otto</td>
                      <td>Otto</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="roas_section p-5" id="accounts">
            <div class="row">
            <h2 className="text-center text-decoration-underline p-3">
                SETTINGS{" "}
              </h2>

              <div className="transparent-table">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">MY PROFILE</th>
                      <th scope="col">OVER VIEW</th>
                      <th scope="col">MANAGE OFFICIALS</th>

                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td scope="row">CHANGE EMAIL</td>
                      <td>USER</td>
                      <td>OFFICIAL 1</td>

                    </tr>
                    <tr>
                      <td scope="row">CHANGE PASSWORD</td>
                      <td>POINT OF SALES</td>
                      <td>OFFICIAL 2</td>

                    </tr>
                    <tr>
                    <td scope="row">SOCIAL HANDLES</td>
                      <td>SURVEY FORM</td>
                      <td></td>

                    </tr>
                    <tr>
                      <td scope="row">LOGOUT</td>
                      <td>IMAGES</td>
                      <td></td>

                    </tr>
                    <tr>
                      <th scope="row"></th>
                      <td>VIDEOS</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Outlets;
