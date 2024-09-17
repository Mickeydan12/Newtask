import React from "react";
import Logo from "../assets/Rectangle 1.png";
import LadyImg from "../assets/Ellipse 1.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import menu from "../assets/menu_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <nav className="container d-flex justify-content-between py-2">
        <div className="d-flex align-items-center gap-3">
          <Link to={"/"}>
            <img src={Logo} alt="logo" />
          </Link>
          <Link className="h1 text-decoration-none" to={"/"}>
            <h1 className="fs-3 pt-3">TaskDuty</h1>
          </Link>
        </div>
        <div className="d-lg-flex d-none gap-4 align-items-center ">
          <Link to={"/newtask"} className="text-decoration-none">
            <h2 className="fs-4 pt-1">New Task</h2>
          </Link>
          <Link to={"/alltasks"} className="text-decoration-none">
            <h2 className="fs-4 pt-1">All Task</h2>
          </Link>
          <img src={LadyImg} alt="" />
        </div>
        {/* offcanvas */}
        <div className="d-md-block d-lg-none  mt-2 ">
          <div className="d-lg-none" onClick={handleShow}>
            <img className="menu-img" src={menu} alt="menu" />
          </div>

          <Offcanvas
            show={show}
            onHide={handleClose}
            responsive="lg"
            style={{ width: "300px", height: "auto" }}
          >
            <Offcanvas.Header></Offcanvas.Header>
            <Offcanvas.Body>
              <div className="mt-5 ms-3">
                <div className="d-flex row gap-4 align-items-center ">
                  <img src={LadyImg} className="icon-lady" alt="" />
                  <Link className="text-decoration-none" to={"/newtask"}>
                    <h2 className="pt-1 nav-text">New Task</h2>
                  </Link>
                  <Link className="text-decoration-none" to={"/alltasks"}>
                    <h2 className="pt-1 nav-text">All Task</h2>
                  </Link>
                </div>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </nav>
      <hr />
    </>
  );
};

export default Navbar;
