import React from "react";
import nightcube_dashbord_background from '../website_assets/videos/nightcube_dashbord_background.mp4';
import { MdExpandCircleDown } from "react-icons/md";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { PieChart } from "@mui/x-charts/PieChart";
import { BarChart } from "@mui/x-charts/BarChart";

const SuperAdmin = () => {
  return (
    <div className="bgContainer">
      <div className="overlay">
        <video className="bgVideo" src={nightcube_dashbord_background} autoPlay loop muted />
        <div className="content">
          <div className="parent">
            <div>
              <h1 className="text-center">SUPER ADMIN</h1>
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
                                  label: "LADIES NIGHT",
                                   color : "#FAF700"
                                },
                                {
                                  id: 1,
                                  value: 15,
                                  label: "BRUNCH", color : "#00EBFA"
                                },
                                {
                                  id: 2,
                                  value: 20,
                                  label: "FRIDAY NIGHT LIVE", color: "#FF3600"}, // orange
                                {
                                  id: 3,
                                  value: 10,
                                  label: "SATURDAY NIGHT LIVE", color: "#FFFFFF"}, // white
                                {
                                  id: 4,
                                  value: 15,
                                  label: "SUNDAY LIGHT LIVE", color  :"#3396B8"}, // dark blue
                                {
                                  id: 5,
                                  value: 20,
                                  label: "COSTUMES AND THEMES", color : "#00FC7E"}, // green
                                {
                                  id: 6,
                                  value: 20,
                                  label: "CONCEPT NIGHTS" , color  :"#FE0041"
                                }, // red
                                {
                                  id: 7,
                                  value: 23,
                                  label: "HAPPY HOURS" , color  :"#01950F"
                                }, // red
                              ],
                              highlightScope: { faded: 'global', highlighted: 'item' },
                              faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
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
                                  label: "BOLLYWOOD / COMMERCIALS",color : "#00FC7E"}, // green
                                {
                                  id: 1,
                                  value: 15,
                                  label: "EDM / COMMERCIALS", color  :"#900C3F"}, // brown
                                {
                                  id: 2,
                                  value: 25,
                                  label: "TECHNO / UNDERGROUND", color  :"#3696A6"}, // dark blue
                                {
                                  id: 3,
                                  value: 20,
                                  label: "DUBSTEP / BASE",color: "#FF3600"}, // orange
                                {
                                  id: 4,
                                  value: 10,
                                  label: "BIG ROOM / ELECTRO", color: "#FFFFFF"}, // white
                                {
                                  id: 5,
                                  value: 15,
                                  label: "DEEP / HOUSE",color : "#FAF700"}, // yellow
                                {
                                  id: 6,
                                  value: 20,
                                  label: "CHILL / HOUSE",color  :"#6E7C7A"
                                }, // gray

                                {
                                  id: 7,
                                  value: 20,
                                  label: "HIP-HOP / TRAP",color  :"#013649"
                                },  // dark blue
                                
                                {
                                  id: 8,
                                  value: 20,
                                  label: "LIVE BAND / METAL",color  :"#ED0241"
                                },  // red
                                
                                {
                                  id: 9,
                                  value: 20,
                                  label: "LIVE BAND / ACOUSTIC",color  :"#AD5041"
                                },  // brown
                              ],
                              highlightScope: { faded: 'global', highlighted: 'item' },
                              faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                            },
                          ]}
                          width={990}
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
                    <h4 className="text-center">RADIO PLATFORMS</h4>
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
                                  label: "APPLE iTUNES",color : "#00FC7E"}, // green
                                {
                                  id: 1,
                                  value: 15,
                                  label: "SPOTIFY", color  :"#900C3F"}, // dark blue
                                {
                                  id: 2,
                                  value: 25,
                                  label: "JIO SAAVN", color  :"#3696A6"}, // dark blue
                                {
                                  id: 3,
                                  value: 20,
                                  label: "AMAZON MUSIC",color: "#FF3600"}, // orange
                                {
                                  id: 4,
                                  value: 10,
                                  label: "SOUNDCLOUD", color: "#FFFFFF"}, // white
                                {
                                  id: 5,
                                  value: 15,
                                  label: "GOOGLE YOUTUBE MUSIC",color : "#FAF700"}, // yellow
                                {
                                  id: 6,
                                  value: 20,
                                  label: "BEATPORT",color  :"#6E7C7A"
                                }, // red
                              ],
                              highlightScope: { faded: 'global', highlighted: 'item' },
                              faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
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
                                            { id: 0,   value: 10,color : "#00FC7E"}, // green
                                            { id: 1, value: 15, color  :"#900C3F"}, // brown
                                            { id: 2,  value: 25,  color  :"#3696A6"}, // dark blue
                                            { id: 3, value: 20, color: "#FF3600"}, // orange
                                            { id: 4, value: 10,  color: "#FFFFFF"}, // white
                                            { id: 5,  value: 15, color : "#FAF700"}, // yellow
                                            { id: 6, value: 20, color  :"#6E7C7A" }, // gray
                                            { id: 7, value: 20, color  :"#013649"  },  // dark blue
                                            { id: 8, value: 20, color  :"#ED0241"},  // red
                                            { id: 9, value: 20, color  :"#AD5041"},  // brown
                                        
                                        ],
                                        highlightScope: { faded: 'global', highlighted: 'item' },
                                        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                                      },
                                    ]}
                                    width={200}
                                    height={300}
                                  />
                                </div>

                                <div className="piecalculations d-flex align-items-center">
                                  <BarChart
                                    xAxis={[
                                      {
                                        id: "barCategories",
                                        data: [
                                          "BOLLYWOOD/COMMERCIALS",
                                          "EDM/COMMERCIALS",
                                          "TECHNO/UNDERGROUND",
                                          "DUBSTEP/BASE",
                                          "BIG ROOM/ELECTRO",
                                          "DEEP/HOUSE",
                                          "CHILL/HOUSE",
                                          "HIP-HOP/TRAP",
                                          "LIVE BAND/METAL",
                                          "LIVE BAND/ACOUSTIC",
                                        ],
                                        scaleType: "band",
                                      },
                                    ]}
                                    series={[
                                      {
                                        data: [20, 50, 30, 40, 23, 97, 40, 23, 97,55],
                                      },
                                    ]}
                                    width={1700}
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
                                            {
                                              id: 0, value: 10,
                                               color : "#FAF700"
                                            },
                                            {
                                              id: 1, value: 15, color : "#00EBFA"
                                            },
                                            {
                                              id: 2,
                                              value: 20,
                                               color: "#FF3600"}, // orange
                                            {
                                              id: 3,
                                              value: 10, color: "#FFFFFF"}, // white
                                            {
                                              id: 4,
                                              value: 15, color  :"#3396B8"}, // dark blue
                                            {
                                              id: 5,
                                              value: 20, color : "#00FC7E"}, // green
                                            {
                                              id: 6,
                                              value: 20, color  :"#FE0041"
                                            }, // red
                                            {
                                              id: 7,
                                              value: 23, color  :"#01950F"
                                            }, // red
                                        ],
                                        highlightScope: { faded: 'global', highlighted: 'item' },
                                        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
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
                                    width={550}
                                    height={300}
                                  />
                                </div>
                              </div>
                            </div>

                            <div
                              class="col d-flex flex-column justify-content-center align-items-center custom-pie-chart-container"
                              style={{ height: "400px" }}
                            >
                              <h4 className="text-light">RADIO PLATFORMS</h4>
                              <div
                                className="maincircle d-flex justify-content-center"
                                style={{ height: "100%", width: "100%" }}
                              >
                                <div className="piechart d-flex align-items-center">
                                  <PieChart
                                    series={[
                                      {
                                        data: [
                                            {
                                              id: 0,
                                              value: 10,color : "#00FC7E"}, // green
                                            {
                                              id: 1,
                                              value: 15, color  :"#900C3F"}, // dark blue
                                            {
                                              id: 2,
                                              value: 25,color  :"#3696A6"}, // dark blue
                                            {
                                              id: 3,
                                              value: 20,color: "#FF3600"}, // orange
                                            {
                                              id: 4,
                                              value: 10, color: "#FFFFFF"}, // white
                                            {
                                              id: 5,
                                              value: 15,color : "#FAF700"}, // yellow
                                            {
                                              id: 6,
                                              value: 20,color  :"#6E7C7A"
                                            }, // red
                                        ],
                                        highlightScope: { faded: 'global', highlighted: 'item' },
                                        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
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
                                          "iTUNES",
                                          "SPOTIFY",
                                          "JIO SAAVN",
                                          "AMAZON MUSIC",
                                          "SOUND CLOUD",
                                          "GOOGLE YOUTUBE MUSIC",
                                          "BEATPORT",
                                        ],
                                        scaleType: "band",
                                      },
                                    ]}
                                    series={[
                                      {
                                        data: [20, 50, 30, 40, 23, 97],
                                      },
                                    ]}
                                    width={750}
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

<div className="roas_section p-2" id="revenueros">
            <div class="row">
              <h2 className="text-center text-decoration-underline p-3">
                ROAS : LINKS{" "}
              </h2>
              <div
                class="col d-flex flex-column justify-content-center align-items-center"
                style={{ height: "400px", width: "50%" , margin: "50px" }}
              >
                <h4 className="text-center">SOCIAL LINKS</h4>
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
                              label: "FACEBOOK", color : "red", 
                            },
                            {
                              id: 1,
                              value: 15,
                              label: "INSTAGRAM", color : "yellow", 
                            },
                            {
                              id: 2,
                              value: 20,
                              label: "GOOGLE", color : "green", 
                            },
                            {
                              id: 3,
                              value: 10,
                              label: "YOUTUBE", color : "white", 
                            },
                            {
                              id: 4,
                              value: 15,
                              label: "WHATSAPP", color : "cyan",
                            },
                          ],
                          highlightScope: { faded: 'global', highlighted: 'item' },
                          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
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
                class="col  d-flex flex-column justify-content-center  align-items-center"
                style={{ height: "400px", width: "50%", margin: "50px" }}
              >
                <h4 className="text-right">AGENCY LINKS</h4>
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
                              label: "AGENCY 1", color : "red", 
                            },
                            {
                              id: 1,
                              value: 15,
                              label: "AGENCY 2", color : "yellow", 
                            },
                            {
                              id: 2,
                              value: 20,
                              label: "AGENCY 3", color : "green", 
                            },
                            {
                              id: 3,
                              value: 10,
                              label: "AGENCY 4", color : "white", 
                            },
                            {
                              id: 4,
                              value: 15,
                              label: "AGENCY 5", color : "cyan",
                            },
                          ],
                          highlightScope: { faded: 'global', highlighted: 'item' },
                          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                        },
                      ]}
                      width={790}
                      height={250}
                      margin={{ right: 300 }}
                    />
                  </div>
                </div>
              </div>

              <div className="transparent-table d-flex justify-content-between">
                <table className="table me-5">
                  <thead>
                    <tr>
                      <th scope="col">SL NO</th>
                      <th scope="col">PLATFORM</th>
                      <th scope="col">LINK</th>

                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>FACEBOOK</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>INSTAGRAM</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>GOOGLE</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>YOUTUBE</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>WHATSAPP</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>

                <table className="table ms-5">
                  <thead>
                    <tr>
                      <th scope="col">SL NO</th>
                      <th scope="col">AGENCY</th>
                      <th scope="col">LINK</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                      <th scope="row">1</th>
                      <td>AGENCY 1</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>AGENCY 2</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>AGENCY 3</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>AGENCY 4</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>AGENCY 5</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="roas_section p-2" id="revenueros">
            <div class="row">
            <h2 className="text-center text-decoration-underline p-3">
                ROAS : CTR{" "}
              </h2>
              <div
                class="col d-flex flex-column justify-content-center align-items-center"
                style={{ height: "400px", width: "50%" , margin: "50px" }}
              >
                <h4 className="text-center">SOCIAL CTRS</h4>
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
                              label: "FACEBOOK", color : "red", 
                            },
                            {
                              id: 1,
                              value: 15,
                              label: "INSTAGRAM", color : "yellow", 
                            },
                            {
                              id: 2,
                              value: 20,
                              label: "GOOGLE", color : "green", 
                            },
                            {
                              id: 3,
                              value: 10,
                              label: "YOUTUBE", color : "white", 
                            },
                            {
                              id: 4,
                              value: 15,
                              label: "WHATSAPP", color : "cyan",
                            },
                          ],
                          highlightScope: { faded: 'global', highlighted: 'item' },
                          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
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
                class="col  d-flex flex-column justify-content-center  align-items-center"
                style={{ height: "400px", width: "50%", margin: "50px" }}
              >
                <h4 className="text-right">AGENCY CTRS</h4>
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
                              label: "AGENCY 1", color : "red", 
                            },
                            {
                              id: 1,
                              value: 15,
                              label: "AGENCY 2", color : "yellow", 
                            },
                            {
                              id: 2,
                              value: 20,
                              label: "AGENCY 3", color : "green", 
                            },
                            {
                              id: 3,
                              value: 10,
                              label: "AGENCY 4", color : "white", 
                            },
                            {
                              id: 4,
                              value: 15,
                              label: "AGENCY 5", color : "cyan",
                            },
                          ],
                          highlightScope: { faded: 'global', highlighted: 'item' },
                          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                        },
                      ]}
                      width={790}
                      height={250}
                      margin={{ right: 300 }}
                    />
                  </div>
                </div>
              </div>

<div className="transparent-table d-flex justify-content-between">
                <table className="table me-5">
                  <thead>
                    <tr>
                      <th scope="col">SL NO</th>
                      <th scope="col">PLATFORM</th>
                      <th scope="col">CTR</th>

                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>FACEBOOK</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>INSTAGRAM</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>GOOGLE</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>YOUTUBE</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>WHATSAPP</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>

                <table className="table ms-5">
                  <thead>
                    <tr>
                      <th scope="col">SL NO</th>
                      <th scope="col">AGENCY</th>
                      <th scope="col">CTR</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                      <th scope="row">1</th>
                      <td>AGENCY 1</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>AGENCY 2</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>AGENCY 3</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>AGENCY 4</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>AGENCY 5</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="roas_section p-2" id="revenueros">
            <div class="row">
            <h2 className="text-center text-decoration-underline p-3">
                ROAS : BUDGET{" "}
              </h2>
              <div
                class="col d-flex flex-column justify-content-center align-items-center"
                style={{ height: "400px", width: "50%" , margin: "50px" }}
              >
                <h4 className="text-center">SOCIAL BUDGETS</h4>
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
                              label: "FACEBOOK", color : "red", 
                            },
                            {
                              id: 1,
                              value: 15,
                              label: "INSTAGRAM", color : "yellow", 
                            },
                            {
                              id: 2,
                              value: 20,
                              label: "GOOGLE", color : "green", 
                            },
                            {
                              id: 3,
                              value: 10,
                              label: "YOUTUBE", color : "white", 
                            },
                            {
                              id: 4,
                              value: 15,
                              label: "WHATSAPP", color : "cyan",
                            },
                          ],
                          highlightScope: { faded: 'global', highlighted: 'item' },
                          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
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
                class="col  d-flex flex-column justify-content-center  align-items-center"
                style={{ height: "400px", width: "50%", margin: "50px" }}
              >
                <h4 className="text-right">AGENCY BUDGETS</h4>
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
                              label: "AGENCY 1", color : "red", 
                            },
                            {
                              id: 1,
                              value: 15,
                              label: "AGENCY 2", color : "yellow", 
                            },
                            {
                              id: 2,
                              value: 20,
                              label: "AGENCY 3", color : "green", 
                            },
                            {
                              id: 3,
                              value: 10,
                              label: "AGENCY 4", color : "white", 
                            },
                            {
                              id: 4,
                              value: 15,
                              label: "AGENCY 5", color : "cyan",
                            },
                          ],
                          highlightScope: { faded: 'global', highlighted: 'item' },
                          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                        },
                      ]}
                      width={790}
                      height={250}
                      margin={{ right: 300 }}
                    />
                  </div>
                </div>
              </div>


<div className="transparent-table d-flex justify-content-between">
                <table className="table me-5">
                  <thead>
                    <tr>
                      <th scope="col">SL NO</th>
                      <th scope="col">PLATFORM</th>
                      <th scope="col">BUDGET</th>

                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>FACEBOOK</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>INSTAGRAM</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>GOOGLE</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>YOUTUBE</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>WHATSAPP</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>

                <table className="table ms-5">
                  <thead>
                    <tr>
                      <th scope="col">SL NO</th>
                      <th scope="col">AGENCY</th>
                      <th scope="col">BUDGET</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                      <th scope="row">1</th>
                      <td>AGENCY 1</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>AGENCY 2</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>AGENCY 3</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>AGENCY 4</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>AGENCY 5</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="roas_section p-2" id="revenueros">
            <div class="row">
            <h2 className="text-center text-decoration-underline p-3">
                ROAS : CONVERSION{" "}
              </h2>
              <div
                class="col d-flex flex-column justify-content-center align-items-center"
                style={{ height: "400px", width: "50%" , margin: "50px" }}
              >
                <h4 className="text-center">SOCIAL CONVERSIONS</h4>
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
                              label: "FACEBOOK", color : "red", 
                            },
                            {
                              id: 1,
                              value: 15,
                              label: "INSTAGRAM", color : "yellow", 
                            },
                            {
                              id: 2,
                              value: 20,
                              label: "GOOGLE", color : "green", 
                            },
                            {
                              id: 3,
                              value: 10,
                              label: "YOUTUBE", color : "white", 
                            },
                            {
                              id: 4,
                              value: 15,
                              label: "WHATSAPP", color : "cyan",
                            },
                          ],
                          highlightScope: { faded: 'global', highlighted: 'item' },
                          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
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
                class="col  d-flex flex-column justify-content-center  align-items-center"
                style={{ height: "400px", width: "50%", margin: "50px" }}
              >
                <h4 className="text-right">AGENCY CONVERSIONS</h4>
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
                              label: "AGENCY 1", color : "red", 
                            },
                            {
                              id: 1,
                              value: 15,
                              label: "AGENCY 2", color : "yellow", 
                            },
                            {
                              id: 2,
                              value: 20,
                              label: "AGENCY 3", color : "green", 
                            },
                            {
                              id: 3,
                              value: 10,
                              label: "AGENCY 4", color : "white", 
                            },
                            {
                              id: 4,
                              value: 15,
                              label: "AGENCY 5", color : "cyan",
                            },
                          ],
                          highlightScope: { faded: 'global', highlighted: 'item' },
                          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                        },
                      ]}
                      width={790}
                      height={250}
                      margin={{ right: 300 }}
                    />
                  </div>
                </div>
              </div>


<div className="transparent-table d-flex justify-content-between">
                <table className="table me-5">
                  <thead>
                    <tr>
                      <th scope="col">SL NO</th>
                      <th scope="col">PLATFORM</th>
                      <th scope="col">CONVERSION</th>

                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>FACEBOOK</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>INSTAGRAM</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>GOOGLE</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>YOUTUBE</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>WHATSAPP</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>

                <table className="table ms-5">
                  <thead>
                    <tr>
                      <th scope="col">SL NO</th>
                      <th scope="col">AGENCY</th>
                      <th scope="col">CONVERSION</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                      <th scope="row">1</th>
                      <td>AGENCY 1</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>AGENCY 2</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>AGENCY 3</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>AGENCY 4</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>AGENCY 5</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="roas_section p-5" id="pos">
            <div class="row">
            <h2 className="text-center text-decoration-underline p-3">
                POS : SUPER ADMIN{" "}
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
                      <th scope="col">MANAGE ADMINS</th>
                      <th scope="col">MANAGE PARTNERS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td scope="row">CHANGE EMAIL</td>
                      <td>OUTLET</td>
                      <td>ADMIN 1</td>
                      <td>EVENT PARTNERS</td>
                    </tr>
                    <tr>
                      <td scope="row">CHANGE PASSWORD</td>
                      <td>EVENT</td>
                      <td>ADMIN 2</td>
                      <td>ARTIST PARTNERS</td>
                    </tr>
                    <tr>
                    <td scope="row">SOCIAL HANDLES</td>
                      <td>USER</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td scope="row">LOGOUT</td>
                      <td>ARTIST</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row"></th>
                      <td>IMAGES</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row"></th>
                      <td>VIDEOS</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row"></th>
                      <td>STORIES</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row"></th>
                      <td>POS SYSTEM</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row"></th>
                      <td>ROAS SYSTEM</td>
                      <td></td>
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

export default SuperAdmin;
