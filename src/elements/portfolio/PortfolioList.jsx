import React, { Component } from "react";
import { Modal, Button } from "antd";

const PortfolioListContent = [
  {
    image: "image-4",
    category: "row1",
    title: "Custom Ipsum",
    link: "http://www.custom-ipsum.com",
    description: `Custom Ipsum is a Lorem Ipsum generator with a twist!  You can
                    generate customized Lorem Ipsum based on the user input. The 
                    app makes use of the Markov's Chain algorithm to randomly 
                    generate a pre determined number of paragraphs. The app was
                    primarily programmed in React JS and styled with Ant Design
                    and Styled Components.`,
    github: "https://github.com/christopherc1331/Custom-Ipsum",
  },
  {
    image: "image-1",
    category: "row1",
    title: "Synaps",
    link: "http://www.synapsapp.com/",
    description: `This project is the result of 3 months of work.
                    I was paired with a cross functional team of Full Stack 
                    Engineers and UX Designers.  One of the things I'm most
                    proud of in this project is our backend API documentation.
                    Synaps is a flashcard app designed for life science students.
                    It allows the user to create a profile, create a deck, and
                    create cards for each deck.  Once their cards have been
                    created they can take a quiz with all their flashcards
                    .`,
  }, //,
  {
    image: "image-2",
    category: "row1",
    title: "Tax Filing Report",
    description: `I recently programmed an SQL query to provide H&S Energy's
                    accounting team with the company's total taxes
                    due.  I used SSRS to style the report after the data was queried.
                    The above picture is an actual snippet of the final select
                    statement in my query.`,
  }, //,
  {
    image: "image-3",
    category: "row2",
    title: `Cellular Automata`,
    link: "https://conwaysgolcellularautomata.herokuapp.com/",
    description: `This project was built using React and incorporated computer
                    science recursion techniques to display Conway's Rules of Life
                    in real time. Styled components was utilized for the styling of
                    the cells.`,
    github: "https://github.com/christopherc1331/CellularAutomata",
  },
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
          <div
            className={`${column}`}
            key={index}
            style={{
              display: "row",
              marginTop: value.category !== "row1" ? "15px" : "0px",
            }}
          >
            <h3 style={{ color: "#fff" }}>{value.title}</h3>
            <div
              className={`portfolio ${styevariation}`}
              onClick={() =>
                value.title !== "Tax Filing Report" &&
                window.open(value.link, "_blank")
              }
            >
              <div className="thumbnail-inner">
                <div className={`thumbnail ${value.image}`}></div>
                <div className={`bg-blr-image ${value.image}`}></div>
              </div>
              <div className="content">
                <div className="inner">
                  {value.title !== "Tax Filing Report" && (
                    <div className="portfolio-button">
                      <a className="rn-btn">View Project</a>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {value.title == "Synaps" && (
              <div style={{ marginTop: "25px", display: "flex" }}>
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
                  <h3 style={{ marginLeft: "7px", color: "#f9004d" }}>
                    Front End Repo
                  </h3>
                </a>
              </div>
            )}

            {value.title == "Synaps" && (
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
                  <h3 style={{ marginRight: "7px" }}>Back End Docs </h3>
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
                  <h3 style={{ marginLeft: "7px", color: "#f9004d" }}>
                    Back End Repo
                  </h3>
                </a>
              </div>
            )}
            {(value.title == "Cellular Automata" ||
              value.title == "Custom Ipsum") && (
              <div style={{ marginTop: "25px", display: "flex" }}>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => window.open(value.github, "_blank")}
                >
                  <h3 style={{ marginRight: "7px" }}>Github Repo</h3>
                </a>
              </div>
            )}

            <p
              style={{
                color: "rgba(198,201,216,0.75)",
                marginTop: value.title === "Tax Filing Report" ? "25px" : "0px",
              }}
            >
              {value.description}
            </p>
          </div>
        ))}
      </React.Fragment>
    );
  }
}
export default PortfolioList;
