import React, { Component } from "react";
import { Modal, Button } from "antd";

const PortfolioListContent = [
  {
    image: "image-1",
    category: "Development",
    title: "Synaps",
    link: "http://www.synapsapp.com/",
    description: `This project is the result of a 3 months of work.
                  I was paired with a cross functional team of Full Stack 
                  Engineers and UX Designers.  I personally worked on a 
                  majority of the back end API and documentation 
                  (we built some impressive documentation via the API Docs
                  library; this library allowed for actual calls to be
                  made to the database so that you can see what a response
                  looks like for each endpoint) by using Node.JS and Express
                  to build the RESTFUL API endpoints. Once I finished the
                  back end I joined my team on the front end where we used
                  React/Redux and Ant Design to implement components and
                  views that were designed by our UX team.  Our project is
                  a flashcard app designed for life science students.  It
                  allows the user to create a profile, create a deck, and
                  create cards for each deck.  Once their cards have been
                  created they can take a quiz with all their flashcards.`,
  }, //,
  // {
  //     image: 'image-2',
  //     category: 'Development',
  //     title: 'Getting tickets to the big show'
  // },
  // {
  //     image: 'image-3',
  //     category: 'Development',
  //     title: 'Getting tickets to the big show'
  // },
  // {
  //     image: 'image-4',
  //     category: 'Development',
  //     title: 'Getting tickets to the big show'
  // },
  // {
  //     image: 'image-3',
  //     category: 'Development',
  //     title: 'Getting tickets to the big show'
  // },
  // {
  //     image: 'image-4',
  //     category: 'Development',
  //     title: 'Getting tickets to the big show'
  // }
];

class PortfolioList extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    const { column, styevariation } = this.props;
    const list = PortfolioListContent.slice(0, this.props.item);
    return (
      <React.Fragment>
        {list.map((value, index) => (
          <div className={`${column}`} key={index} style={{ display: "row" }}>
            <div
              className={`portfolio ${styevariation}`}
              onClick={() => window.open(value.link, "_blank")}
            >
              <div className="thumbnail-inner">
                <div className={`thumbnail ${value.image}`}></div>
                <div className={`bg-blr-image ${value.image}`}></div>
              </div>
              <div className="content">
                <div className="inner">
                  <div className="portfolio-button">
                    <a className="rn-btn">View Project</a>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ marginTop: "15px", display: "flex" }}>
              <a
                style={{ cursor: "pointer" }}
                onClick={() => window.open(value.link, "_blank")}
              >
                <h3 style={{ marginRight: "7px" }}>Front End Site </h3>
              </a>
              <h4>|</h4>
              <a
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.open(
                    "https://github.com/SynapsFlashCards/SynapsFrontend",
                    "_blank"
                  )
                }
              >
                <h3 style={{ marginLeft: "7px" }}>Front End Repo</h3>
              </a>
            </div>
            <div style={{ display: "flex" }}>
              <a
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.open(
                    "https://staging-lambda-synaps-be.herokuapp.com/",
                    "_blank"
                  )
                }
              >
                <h3 style={{ marginRight: "7px" }}>Back End Site </h3>
              </a>
              <h4>|</h4>
              <a
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.open(
                    "https://github.com/SynapsFlashCards/SynapsBackend",
                    "_blank"
                  )
                }
              >
                <h3 style={{ marginLeft: "7px" }}>Back End Repo</h3>
              </a>
            </div>
            <p style={{ color: "rgba(198,201,216,0.75)" }}>
              {value.description}
            </p>
          </div>
        ))}
      </React.Fragment>
    );
  }
}
export default PortfolioList;
