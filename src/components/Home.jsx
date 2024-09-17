import React from "react";
import { Link } from "react-router-dom";
import component1 from "../assets/Component 1.png";
import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <main className="d-lg-flex  align-items-center justify-content-center mb-5 gap-4 py-2">
        <div>
          <img
            src={component1}
            alt="component1"
            className="img fluid d-lg-none  "
          />
        </div>
        <div className=" p-4   mb-5 div-home ">
          <h2 className="h2-home ">
            Manage your Tasks on
            <span>TaskDuty</span>
          </h2>
          <p className="p-home">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tellus,
            sapien, morbi ante nunc euismod ac felis ac. Massa et, at platea
            tempus duis non eget. Hendrerit tortor fermentum bibendum mi nisl
            semper porttitor. Nec accumsan.
          </p>
          <Link to={"/alltasks"}>
            <button className="btn btn-success">Go to my tasks</button>
          </Link>
        </div>
        <div>
          <img
            src={component1}
            alt="component1"
            className=" img fluid d-lg-block d-none  row"
          />
        </div>
      </main>
    </>
  );
};

export default Home;
