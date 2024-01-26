import React from "react";
import nightcube_dashbord_background from '../website_assets/videos/nightcube_dashbord_background.mp4';
import { MdExpandCircleDown } from "react-icons/md";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { PieChart } from "@mui/x-charts/PieChart";
import { BarChart } from "@mui/x-charts/BarChart";

const SuperAdminPos = () => {
  return (
    <div className="bgContainer">
      <div className="overlay">
        <video className="bgVideo" src={nightcube_dashbord_background} autoPlay loop muted />
        <div className="content">
          <div className="parent">
            <div>
              <h4 className="text-center">SUPER ADMIN POS</h4>
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
                                  { id: 0, value: 10,  label: "MALE" ,    color : "#00FC7E" },
                                  { id: 1, value: 15,  label: "FEMALE"  , color  :"#013649"},
                                ],
                                highlightScope: { faded: 'global', highlighted: 'item' },
                                faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
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
                                { id: 0, value: 10, label: "16 to 21" , color : "#00FC7E"}, // green
                                { id: 1, value: 15, label: "21 to 25", color : "#00EBFA" }, // blue
                                { id: 2, value: 20, label: "26 to 30"  , color : "#FAF700"}, // yellow
                                { id: 3, value: 10, label: "31 to 35"  , color: "#FFFFFF"}, // white
                                { id: 4, value: 15, label: "36 to 40" , color: "#FF3600"}, // orange
                                { id: 5, value: 20, label: "40 +    "  , color  :"#FE0041"}, // red
                              ],
                              highlightScope: { faded: 'global', highlighted: 'item' },
                              faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
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
                                { id: 0, value: 10, label: "ONCE A WEEK" ,      color : "#FE0041"},
                                { id: 1, value: 15, label: "ONCE IN 2 WEEKS" , color : "#FAF700"},
                                { id: 2, value: 20, label: "ONCE A MONTH" ,    color : "#00FC7E" },
                              ],

                              highlightScope: { faded: 'global', highlighted: 'item' },
                              faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },

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
                                { id: 0, value: 10, label: "WHATSAPP" , color : "#00FC7E"}, // green 
                                { id: 1, value: 15, label: "EMAIL"  , color : "#FAF700"},    // yellow
                                { id: 2, value: 20, label: "TEXT MESSAGE" , color : "#FE0041" }, // red
                              ],
                              highlightScope: { faded: 'global', highlighted: 'item' },
                              faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
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
                                          { id: 0, value: 10 , color : "#00FC7E"},
                                          { id: 1, value: 15 ,  color : "#00EBFA"},
                                          { id: 2, value: 20 , color : "#FAF700"},
                                          { id: 3, value: 10 , color: "#FFFFFF"},
                                          { id: 4, value: 15 , color: "#FF3600"},
                                          { id: 5, value: 20 , color  :"#FE0041"},
                                        ],
                                        highlightScope: { faded: 'global', highlighted: 'item' },
                                        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                                      },
                                    ]}
                                    width={200}
                                    height={300}
                                  />
                                </div>

                                <div className="piecalculations d-flex align-items-center custom-pie-chart-container">
                                  <BarChart
                                    xAxis={[
                                      {
                                        id: "barCategories",
                                        data: [
                                          "16 - 21",
                                          "21 - 25",
                                          "26-30",
                                          "31-35",
                                          "36-40",
                                          "40+ ",
                                        ],
                                        scaleType: "band",
                                      },
                                    ]}
                                    series={[
                                      {
                                        data: [20, 50, 30, 40, 23, 97],
                                      },
                                    ]}
                                    width={380}
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
                                          { id: 0, value: 10, color : "#FE0041"},
                                          { id: 1, value: 15,  color : "#FAF700"},
                                          { id: 2, value: 20, color : "#00FC7E" },
                                        ],
                                        highlightScope: { faded: 'global', highlighted: 'item' },
                                        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
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
                                    data: ["ONCE A WEEK", "ONCE 2 WEEKS", "ONCE A MONTH"],
                                    scaleType: "band",
                                  },
                                ]}
                                series={[
                                  {
                                    id: "barSeries",
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
                                          { id: 0, value: 10,  color : "#00FC7E" },
                                          { id: 1, value: 15,  color  :"#013649"},
                                        ],
                                        highlightScope: { faded: 'global', highlighted: 'item' },
                                        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
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
                                          { id: 0, value: 10, color : "#00FC7E"}, // green 
                                          { id: 1, value: 15,  color : "#FAF700"},    // yellow
                                          { id: 2, value: 20,  color : "#FE0041" }, // red
                                        ],
                                        highlightScope: { faded: 'global', highlighted: 'item' },
                                        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
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
  );
};

export default SuperAdminPos;
