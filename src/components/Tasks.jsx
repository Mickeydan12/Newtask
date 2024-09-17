import React from "react";
import { Link } from "react-router-dom";
import "../styles/Task.css";
import add from "../assets/Group 12.png";
import edit from "../assets/Frame 4.png";
import del from "../assets/Frame 5.png";

const Tasks = () => {
  return (
    <main className="container">
      <div className="d-flex justify-content-between align-items-center mb-5">
        <h1 className="h1-task">My Tasks</h1>
        <Link to={"/newtask"} className="text-decoration-none">
          <p className=" text-end">
            <img src={add} alt="" className="pe-2 mb-1" />
          </p>
        </Link>
      </div>
      {/* -------------------------------Task 1----------------------------------- */}
      <div className="border border border-3 p-4 rounded-4 my-5">
        <div className="d-flex justify-content-between align-items-center">
          <p className="p-taks-urgent">Urgent</p>
          <div className="d-flex gap-3">
            <Link to={"/edit"}>
            
                <img src={edit} alt="" className="img-task me-2" />
              
            </Link>
           
              <img src={del} alt="" className="img-task me-2" />
            
          </div>
        </div>
        <hr />
        <h3>FinTech Website Update</h3>
        <p className="p-task">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis
          nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam
          faucibus et magna. Interdum eu tempus ultricies cras neque mi. Eget
          tellus suspendisse et viverra.
        </p>
      </div>
      {/* ---------------------------------Task 2----------------------------------- */}
      <div className="border border border-3 p-4 rounded-4 my-5">
        <div className="d-flex justify-content-between align-items-center">
          <p className="p-taks-Important">Important</p>
          <div className="d-flex gap-3">
            <Link to={"/edit"}>
              
                <img src={edit} alt="" className="img-task me-2" />
              
            </Link>
            
              <img src={del} alt="" className="img-task me-2" />
            
          </div>
        </div>
        <hr />
        <h3>Agro Website Update</h3>
        <p className="p-task">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis
          nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam
          faucibus et magna. Interdum eu tempus ultricies cras neque mi. Eget
          tellus suspendisse et viverra.
        </p>
      </div>
      {/* ------------------------------------Task 3--------------------------------------- */}
      <div className="border border border-3 p-4 rounded-4 my-5">
        <div className="d-flex justify-content-between align-items-center">
          <p className="p-taks-urgent">Urgent</p>
          <div className="d-flex gap-3">
            <Link to={"/edit"}>
              
                <img src={edit} alt="" className="img-task me-2" />
              
            </Link>
          
              <img src={del} alt="" className="img-task me-2" />
           
          </div>
        </div>
        <hr />
        <h3>FinTech Website Update</h3>
        <p className="p-task">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis
          nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam
          faucibus et magna. Interdum eu tempus ultricies cras neque mi. Eget
          tellus suspendisse et viverra.
        </p>
      </div>
      {/* --------------------------------------Task 3------------------------------------------ */}
      <div className="border border border-3 p-4 rounded-4 my-5">
        <div className="d-flex justify-content-between align-items-center">
          <p className="p-taks-Important">Important</p>
          <div className="d-flex gap-3">
            <Link to={"/edit"}>
          
                <img src={edit} alt="" className="img-task me-2" />
             
            </Link>
            
              <img src={del} alt="" className="img-task me-2" />
           
          </div>
        </div>
        <hr />
        <h3>Agro Website Update</h3>
        <p className="p-task">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis
          nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam
          faucibus et magna. Interdum eu tempus ultricies cras neque mi. Eget
          tellus suspendisse et viverra.
        </p>
      </div>
      <p className="text-center ">
        <Link className="back-to-top" to={"/alltasks"}>
          Back To Top
        </Link>
      </p>
    </main>
  );
};

export default Tasks;
