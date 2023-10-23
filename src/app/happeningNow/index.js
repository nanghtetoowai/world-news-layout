"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import HappeningNowSlide from "./HappeningNowSlide";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

export default class Trending extends Component {
  render() {
    function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return (
        <AiOutlineRight
          className={className}
          style={{
            ...style,
            display: "block",
            position: "absolute",
            top: -16,
            right: "0.7rem",
            color: "#000",
          }}
          onClick={onClick}
        />
      );
    }

    function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
      return (
        <AiOutlineLeft
          className={className}
          style={{
            ...style,
            display: "block",
            position: "absolute",
            top: -16,
            left: "58rem",
            // left: window?.innerWidth < 800 ? "70%" : "88%",
            color: "#000",
          }}
          onClick={onClick}
        />
      );
    }

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div className="container">
        <h5>HAPPENING NOW</h5>
        <Slider {...settings}>
          <HappeningNowSlide />
          <HappeningNowSlide />
          <HappeningNowSlide />
        </Slider>
      </div>
    );
  }
}
