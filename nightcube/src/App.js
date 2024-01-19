import './App.css';
import Header from './components/Header';
import { FaArrowRightToBracket } from "react-icons/fa6";
import { IoIosArrowDropdown } from "react-icons/io";
import { PieChart } from '@mui/x-charts/PieChart';

import { BarChart } from '@mui/x-charts/BarChart';

function App() {
  return (
    <div className="App">
      <div className='parent'>
        <div>
           <Header />
        </div>

        <div className='navsection d-flex align-items-center justify-content-start p-3'>
            <div className='leftside flex-grow-1 ms-3 me-3'>

            <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><FaArrowRightToBracket style={{height: "50px", width: "50px"}}/></button>

                  <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                    <div class="offcanvas-header">
                      <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                      <p>Try scrolling the rest of the page to see this option in action.</p>
                    </div>
                  </div>

            
            </div>

            <div className='righside flex-grow-1 w-100'>
              <ul class="nav  d-flex justify-content-evenly">
                  <li class="nav-item flex-grow-1 text-center">
                    <a class="nav-link" href="#">USERS</a>
                  </li>
                  <li class="nav-item flex-grow-1 text-center">
                    <a class="nav-link" href="#">OUTLETS</a>
                  </li>
                  <li class="nav-item flex-grow-1 text-center">
                    <a class="nav-link" href="#">ARTISTS</a>
                  </li>
                  <li class="nav-item flex-grow-1 text-center">
                    <a class="nav-link" href="#">EVENTS</a>
                  </li>
              </ul>
            </div>
        </div>

        <div className='mainsection'>
        <div class="container-fluid text-center">
          <div class="row">
            <div class="col  d-flex justify-content-center align-items-center" style={{height: "400px"}}>
              <div className='maincircle d-flex justify-content-center align-items-center' style={{height: "100%" , width: "100%"}}>
                 <div className='piechart w-100 d-flex  justify-content-center  align-items-center'>
                 <PieChart
                    colors={['blue', 'pink']} // Use palette
                    series={[
                      {
                        data: [
                          { id: 0, value: 10, label: 'MALE' },
                          { id: 1, value: 15, label: 'FEMALE' },

                        ],
                        highlightScope: { faded: 'global', highlighted: 'item' },
                        faded: { innerRadius: 30, additionalRadius: -40, color: 'gray' },
                      },
                    ]}
                    width={300}
                    height={300}
                  />
                 </div>
              </div>
            </div>

            <div class="col  d-flex justify-content-center align-items-center" style={{height: "400px"}}>
              <div className='maincircle  d-flex justify-content-center align-items-center' style={{height: "100%" , width: "100%"}}>
                 <div className='piechart w-100 d-flex  justify-content-center  align-items-center'>
                 <PieChart
                    colors={['blue', 'pink']} // Use palette
                    series={[
                      {
                        data: [
                          { id: 0, value: 10, label: 'MALE' },
                          { id: 1, value: 15, label: 'FEMALE' },

                        ],
                        highlightScope: { faded: 'global', highlighted: 'item' },
                        faded: { innerRadius: 30, additionalRadius: -40, color: 'gray' },
                      },
                    ]}
                    width={300}
                    height={300}
                  />
                 </div>
              </div>
            </div>
            <div class="col  d-flex justify-content-center align-items-center" style={{height: "400px"}}>
              <div className='maincircle  d-flex justify-content-center align-items-center' style={{height: "100%" , width: "100%"}}>
                 <div className='piechart w-100 d-flex  justify-content-center  align-items-center'>
                 <PieChart
                    colors={['blue', 'pink']} // Use palette
                    series={[
                      {
                        data: [
                          { id: 0, value: 10, label: 'MALE' },
                          { id: 1, value: 15, label: 'FEMALE' },

                        ],
                        highlightScope: { faded: 'global', highlighted: 'item' },
                        faded: { innerRadius: 30, additionalRadius: -40, color: 'gray' },
                      },
                    ]}
                    width={300}
                    height={300}
                  />
                 </div>
              </div>
            </div>
            <div class="col  d-flex justify-content-center align-items-center" style={{height: "400px"}}>
              <div className='maincircle  d-flex justify-content-center align-items-center' style={{height: "100%" , width: "100%"}}>
                 <div className='piechart w-100 d-flex  justify-content-center  align-items-center'>
                 <PieChart
                    colors={['blue', 'pink']} // Use palette
                    series={[
                      {
                        data: [
                          { id: 0, value: 10, label: 'MALE' },
                          { id: 1, value: 15, label: 'FEMALE' },

                        ],
                        highlightScope: { faded: 'global', highlighted: 'item' },
                        faded: { innerRadius: 30, additionalRadius: -40, color: 'gray' },
                      },
                    ]}
                    width={300}
                    height={300}
                  />
                 </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col  d-flex justify-content-center align-items-center" style={{height: "400px"}}>
              <div className='maincircle d-flex justify-content-center align-items-center' style={{height: "100%" , width: "100%"}}>
                 <div className='piechart w-100 d-flex  justify-content-center  align-items-center'>
                 <PieChart
                    colors={['blue', 'pink']} // Use palette
                    series={[
                      {
                        data: [
                          { id: 0, value: 10, label: 'MALE' },
                          { id: 1, value: 15, label: 'FEMALE' },

                        ],
                        highlightScope: { faded: 'global', highlighted: 'item' },
                        faded: { innerRadius: 30, additionalRadius: -40, color: 'gray' },
                      },
                    ]}
                    width={300}
                    height={300}
                  />
                 </div>
              </div>
            </div>

            <div class="col  d-flex justify-content-center align-items-center" style={{height: "400px"}}>
              <div className='maincircle d-flex justify-content-center align-items-center' style={{height: "100%" , width: "100%"}}>
                 <div className='piechart w-100 d-flex  justify-content-center  align-items-center'>
                 <PieChart
                    colors={['blue', 'pink']} // Use palette
                    series={[
                      {
                        data: [
                          { id: 0, value: 10, label: 'MALE' },
                          { id: 1, value: 15, label: 'FEMALE' },

                        ],
                        highlightScope: { faded: 'global', highlighted: 'item' },
                        faded: { innerRadius: 30, additionalRadius: -40, color: 'gray' },
                      },
                    ]}
                    width={300}
                    height={300}
                  />
                 </div>
              </div>
            </div>
            <div class="col  d-flex justify-content-center align-items-center" style={{height: "400px"}}>
              <div className='maincircle  d-flex justify-content-center align-items-center' style={{height: "100%" , width: "100%"}}>
                 <div className='piechart w-100 d-flex  justify-content-center  align-items-center'>
                 <PieChart
                    colors={['blue', 'pink']} // Use palette
                    series={[
                      {
                        data: [
                          { id: 0, value: 10, label: 'MALE' },
                          { id: 1, value: 15, label: 'FEMALE' },

                        ],
                        highlightScope: { faded: 'global', highlighted: 'item' },
                        faded: { innerRadius: 30, additionalRadius: -40, color: 'gray' },
                      },
                    ]}
                    width={300}
                    height={300}
                  />
                 </div>
              </div>
            </div>
          </div>



          {/* <div class="row">
          <div class="col  d-flex justify-content-center align-items-center" style={{height: "400px"}}>
              <div className='maincircle border d-flex' style={{height: "90%" , width: "90%"}}>
                 <div className='piechart w-50 border border-danger d-flex justify-content-center align-items-center'>
                 <PieChart
                      series={[
                        {
                          data: [
                            { id: 0, value: 10, label: 'series A' },
                            { id: 1, value: 15, label: 'series B' },
                            { id: 2, value: 20, label: 'series C' },
                          ],
                        },
                      ]}
                      width={200}
                      height={250}
                    />
                 </div>

                 <div className='piecalculations w-50 border border-danger d-flex justify-content-center align-items-center'>
                 <BarChart
                      xAxis={[
                        {
                          id: 'barCategories',
                          data: ['MALE', 'FEMALE'],
                          scaleType: 'band',
                        },
                      ]}
                      series={[
                        {
                          data: [20, 50],
                        },
                      ]}
                      width={200}
                      height={250}
                    />
                 </div>
              </div>
            </div>
            <div class="col  d-flex justify-content-center align-items-center" style={{height: "400px"}}>
              <div className='maincircle border d-flex' style={{height: "90%" , width: "90%"}}>
                 <div className='piechart w-50 border border-danger d-flex justify-content-center align-items-center'>
                 <PieChart
                      series={[
                        {
                          data: [
                            { id: 0, value: 10, label: 'series A' },
                            { id: 1, value: 15, label: 'series B' },
                            { id: 2, value: 20, label: 'series C' },
                          ],
                        },
                      ]}
                      width={200}
                      height={250}
                    />
                 </div>

                 <div className='piecalculations w-50 border border-danger d-flex justify-content-center align-items-center'>
                 <BarChart
                      xAxis={[
                        {
                          id: 'barCategories',
                          data: ['MALE', 'FEMALE'],
                          scaleType: 'band',
                        },
                      ]}
                      series={[
                        {
                          data: [20, 50],
                        },
                      ]}
                      width={200}
                      height={250}
                    />
                 </div>
              </div>
            </div>
            <div class="col  d-flex justify-content-center align-items-center" style={{height: "400px"}}>
              <div className='maincircle border d-flex' style={{height: "90%" , width: "90%"}}>
                 <div className='piechart w-50 border border-danger d-flex justify-content-center align-items-center'>
                 <PieChart
                      series={[
                        {
                          data: [
                            { id: 0, value: 10, label: 'series A' },
                            { id: 1, value: 15, label: 'series B' },
                            { id: 2, value: 20, label: 'series C' },
                          ],
                        },
                      ]}
                      width={200}
                      height={250}
                    />
                 </div>

                 <div className='piecalculations w-50 border border-danger d-flex justify-content-center align-items-center'>
                 <BarChart
                      xAxis={[
                        {
                          id: 'barCategories',
                          data: ['MALE', 'FEMALE'],
                          scaleType: 'band',
                        },
                      ]}
                      series={[
                        {
                          data: [20, 50],
                        },
                      ]}
                      width={200}
                      height={250}
                    />
                 </div>
              </div>
            </div>
          </div> */}
        </div>


        <div className='mainsectionend mt-3 mb-3 border-0 pt-5 pb-5'>
                <div class="accordion " id="accordionPanelsStayOpenExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        EXPAND
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                      <div class="accordion-body">
                      <div class="row">
                          <div class="col border d-flex justify-content-center align-items-center" style={{height: "400px"}}>
                              <div className='maincircle d-flex' style={{height: "100%" , width: "100%"}}>
                                <div className='piechart d-flex align-items-center'>
                                <PieChart
                                      series={[
                                        {
                                          data: [
                                            { id: 0, value: 10,  },
                                            { id: 1, value: 15,  },
                                            { id: 2, value: 20,  },
                                          ],
                                        },
                                      ]}
                                      width={350}
                                      height={350}
                                    />
                                </div>

                                <div className='piecalculations d-flex align-items-center'>
                                <BarChart
                                      xAxis={[
                                        {
                                          id: 'barCategories',
                                          data: ['MALE', 'FEMALE'],
                                          scaleType: 'band',
                                        },
                                      ]}
                                      series={[
                                        {
                                          data: [20, 50],
                                        },
                                      ]}
                                      width={200}
                                      height={250}
                                    />
                                </div>
                              </div>
                            </div>
                            <div class="col border d-flex justify-content-center align-items-center" style={{height: "400px"}}>
                              <div className='maincircle d-flex' style={{height: "100%" , width: "100%"}}>
                                <div className='piechart d-flex align-items-center'>
                                <PieChart
                                      series={[
                                        {
                                          data: [
                                            { id: 0, value: 10,  },
                                            { id: 1, value: 15,  },
                                            { id: 2, value: 20,  },
                                          ],
                                        },
                                      ]}
                                      width={350}
                                      height={350}
                                    />
                                </div>

                                <div className='piecalculations d-flex align-items-center'>
                                <BarChart
                                      xAxis={[
                                        {
                                          id: 'barCategories',
                                          data: ['MALE', 'FEMALE'],
                                          scaleType: 'band',
                                        },
                                      ]}
                                      series={[
                                        {
                                          data: [20, 50],
                                        },
                                      ]}
                                      width={200}
                                      height={250}
                                    />
                                </div>
                              </div>
                            </div>
                      </div> 

                      <div class="row">
                          <div class="col border d-flex justify-content-center align-items-center" style={{height: "400px"}}>
                              <div className='maincircle d-flex' style={{height: "100%" , width: "100%"}}>
                                <div className='piechart d-flex align-items-center'>
                                <PieChart
                                      series={[
                                        {
                                          data: [
                                            { id: 0, value: 10,  },
                                            { id: 1, value: 15,  },
                                            { id: 2, value: 20,  },
                                          ],
                                        },
                                      ]}
                                      width={350}
                                      height={350}
                                    />
                                </div>

                                <div className='piecalculations d-flex align-items-center'>
                                <BarChart
                                      xAxis={[
                                        {
                                          id: 'barCategories',
                                          data: ['MALE', 'FEMALE'],
                                          scaleType: 'band',
                                        },
                                      ]}
                                      series={[
                                        {
                                          data: [20, 50],
                                        },
                                      ]}
                                      width={200}
                                      height={250}
                                    />
                                </div>
                              </div>
                            </div>
                            <div class="col border d-flex justify-content-center align-items-center" style={{height: "400px"}}>
                              <div className='maincircle d-flex' style={{height: "100%" , width: "100%"}}>
                                <div className='piechart d-flex align-items-center'>
                                <PieChart
                                      series={[
                                        {
                                          data: [
                                            { id: 0, value: 10,  },
                                            { id: 1, value: 15,  },
                                            { id: 2, value: 20,  },
                                          ],
                                        },
                                      ]}
                                      width={350}
                                      height={350}
                                    />
                                </div>

                                <div className='piecalculations d-flex align-items-center'>
                                <BarChart
                                      xAxis={[
                                        {
                                          id: 'barCategories',
                                          data: ['MALE', 'FEMALE'],
                                          scaleType: 'band',
                                        },
                                      ]}
                                      series={[
                                        {
                                          data: [20, 50],
                                        },
                                      ]}
                                      width={200}
                                      height={250}
                                    />
                                </div>
                              </div>
                            </div>

                            <div class="col border d-flex justify-content-center align-items-center" style={{height: "400px"}}>
                              <div className='maincircle d-flex' style={{height: "100%" , width: "100%"}}>
                                <div className='piechart d-flex align-items-center'>
                                <PieChart
                                      series={[
                                        {
                                          data: [
                                            { id: 0, value: 10,  },
                                            { id: 1, value: 15,  },
                                            { id: 2, value: 20,  },
                                          ],
                                        },
                                      ]}
                                      width={350}
                                      height={350}
                                    />
                                </div>

                                <div className='piecalculations d-flex align-items-center'>
                                <BarChart
                                      xAxis={[
                                        {
                                          id: 'barCategories',
                                          data: ['MALE', 'FEMALE'],
                                          scaleType: 'band',
                                        },
                                      ]}
                                      series={[
                                        {
                                          data: [20, 50],
                                        },
                                      ]}
                                      width={200}
                                      height={250}
                                    />
                                </div>
                              </div>
                            </div>
                      </div> 

                      <div class="row">
                          <div class="col border d-flex justify-content-center align-items-center" style={{height: "400px"}}>
                              <div className='maincircle d-flex' style={{height: "100%" , width: "100%"}}>
                                <div className='piechart d-flex align-items-center'>
                                <PieChart
                                      series={[
                                        {
                                          data: [
                                            { id: 0, value: 20,  },
                                            { id: 1, value: 50,  },
                                            { id: 2, value: 55,  },
                                            { id: 3, value: 66,  },
                                            { id: 4, value: 40,  },
                                          ],
                                        },
                                      ]}
                                      width={350}
                                      height={350}
                                    />
                                </div>

                                <div className='piecalculations d-flex align-items-center'>
                                <BarChart
                                      xAxis={[
                                        {
                                          id: 'barCategories',
                                          data: ['ONE', 'TWO' , "THREE" , 'FOUR' , "FIVE"],
                                          scaleType: 'band',
                                        },
                                      ]}
                                      series={[
                                        {
                                          data: [20, 50 , 55 , 66, 40],
                                        },
                                      ]}
                                      width={500}
                                      height={250}
                                    />
                                </div>
                              </div>
                            </div>
                            <div class="col border d-flex justify-content-right align-items-center" style={{height: "400px"}}>
                              <div className='maincircle d-flex' style={{height: "100%" , width: "100%"}}>
                                <div className='piechart d-flex align-items-center'>
                                <PieChart
                                      series={[
                                        {
                                          data: [
                                            { id: 0, value: 10,  },
                                            { id: 1, value: 15,  },
                                            { id: 2, value: 20,  },
                                            { id: 3, value: 10,  },
                                            { id: 4, value: 15,  },
                                          ],
                                        },
                                      ]}
                                      width={350}
                                      height={350}
                                    />
                                </div>

                                <div className='piecalculations d-flex align-items-center'>
                                <BarChart
                                      xAxis={[
                                        {
                                          id: 'barCategories',
                                          data: ['ONE', 'TWO' , "THREE" , 'FOUR' , "FIVE"],
                                          scaleType: 'band',
                                        },
                                      ]}
                                      series={[
                                        {
                                          data: [20, 50, 30, 40, 60],
                                        },
                                      ]}
                                      width={500}
                                      height={250}
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
  );
}

export default App;
