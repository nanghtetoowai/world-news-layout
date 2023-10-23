import React from "react";
import { Button, Form } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";
import { IoEarth } from "react-icons/io5";

export default function Footer() {
  return (
    <div className="bg-secondary">
      <footer className="container text-white">
        <div className="row">
          <div className="col-6 col-md-1 mb-3">
            <h5>LOGO</h5>
          </div>

          <div className="col-6 col-md-1 mb-3">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white text-xs">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white text-xs">
                  Discovery
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white text-xs">
                  Photos
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white text-xs">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-1 mb-3">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white text-xs">
                  About
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white text-xs">
                  Help
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white text-xs">
                  Terms
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white text-xs">
                  Guidlines
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white text-xs">
                  Testimonials
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white text-xs">
                  Advertise
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white text-xs">
                  Integration
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white text-xs">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 mb-3">
            <form>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <InputGroup className="mb-3">
                  <Form.Control
                    aria-label="Example text with button addon"
                    aria-describedby="basic-addon1"
                    placeholder="Email"
                  />
                  <Button variant="light" id="button-addon1">
                    <FaLocationArrow />
                  </Button>
                </InputGroup>
              </div>
            </form>
            <p className="text-xs">Stay in touch with us for the freshest products!</p>
          </div>
          <div className="col-md-3 mb-3 d-flex justify-content-center gap-2">
            <AiOutlineInstagram className="fs-2" />
            <AiOutlineTwitter className="fs-2" />
            <AiOutlineFacebook className="fs-2" />
            <IoEarth  className="fs-2"/>
          </div>
        </div>
      </footer>
    </div>
  );
}
