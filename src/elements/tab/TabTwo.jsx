import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

class TabsTwo extends Component {
  render() {
    let tab1 = "Main skills",
      tab2 = "Awards",
      tab3 = "Experience",
      tab4 = "Education & Certification";
    const { tabStyle } = this.props;
    return (
      <div>
        {/* Start Tabs Area */}
        <div className="tabs-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Tabs>
                  <TabList className={`${tabStyle}`}>
                    <Tab>{tab1}</Tab>
                    {/* <Tab>{tab2}</Tab> */}
                    <Tab>{tab3}</Tab>
                    <Tab>{tab4}</Tab>
                  </TabList>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        {/* <li>
                          <a>
                            User experience design <span> - UI/UX</span>
                          </a>
                          Delight the user and make it work.
                        </li> */}
                        <li>
                          <a>
                            Web and user interface design
                            <span> - Front End</span>
                          </a>
                          Javascript | React | Ant Design | Bootstrap | Styled
                          Components
                        </li>
                        <li>
                          <a>
                            RESTful APIs <span> - Back End</span>
                          </a>
                          Node JS | Express
                        </li>
                        <li>
                          <a>
                            SQL Queries and Stored Procedures{" "}
                            <span> - Database</span>
                          </a>
                          MS SQL/SSRS | MYSQL | Postgres
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  {/* <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a>
                            Awwwards.com <span>- Winner</span>
                          </a>{" "}
                          2019 - 2020
                        </li>
                        <li>
                          <a>
                            CSS Design Awards <span>- Winner</span>
                          </a>{" "}
                          2017 - 2018
                        </li>
                        <li>
                          <a>
                            Design nominees <span>- site of the day</span>
                          </a>{" "}
                          2013- 2014
                        </li>
                      </ul>
                    </div>
                  </TabPanel> */}

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a>
                            Full Stack Engineer
                            <span> - Lambda School Labs (synaps.com) </span>
                          </a>{" "}
                          Jan 2020
                        </li>
                        <li>
                          <a>
                            Data analyst
                            <span> - H&S Energy LLC</span>
                          </a>{" "}
                          2019 - Current
                        </li>
                        <li>
                          <a>
                            Inventory Control Manager
                            <span> - H&S Energy LLC</span>
                          </a>{" "}
                          2017 - 2020
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a>
                            Full Stack Web Development and Computer Science
                            <span> - Lambda School</span>
                          </a>{" "}
                          2019 - 2020
                        </li>
                        <li>
                          <a style={{ visibility: "hidden" }}> f</a>{" "}
                          <a style={{ visibility: "hidden" }}>f </a>{" "}
                        </li>
                        <li>
                          <a style={{ visibility: "hidden" }}> f</a>{" "}
                          <a style={{ visibility: "hidden" }}> f</a>{" "}
                        </li>
                        {/* <li>
                          <a>
                            Diploma in Computer Science
                            <span> - Gamma Technical Institute</span>
                          </a>{" "}
                          2009
                        </li>
                        <li>
                          <a>
                            Graphic Designer
                            <span> - ABC Institute, Los Angeles, CA</span>
                          </a>{" "}
                          2007
                        </li> */}
                      </ul>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        {/* End Tabs Area */}
      </div>
    );
  }
}

export default TabsTwo;
