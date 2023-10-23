"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import TrendingCard from "./TrendingCard";
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
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="container">
        <h5>TRENDING</h5>
        <Slider {...settings}>
          <TrendingCard
            title="Dolore magna aliqua"
            img="assets/images/trending/img-01.jpg"
            description="Lorem Ipsum is simply dummy text of the printing..."
          />

          <TrendingCard
            title="Dolore magna aliqua"
            img="assets/images/trending/img-02.jpg"
            description="Lorem Ipsum is simply dummy text of the printing..."
          />

          <TrendingCard
            title="Dolore magna aliqua"
            img="assets/images/trending/img-03.jpg"
            description="Lorem Ipsum is simply dummy text of the printing..."
          />

          <TrendingCard
            title="Dolore magna aliqua"
            img="assets/images/trending/img-01.jpg"
            description="Lorem Ipsum is simply dummy text of the printing..."
          />

          <TrendingCard
            title="Dolore magna aliqua"
            img="assets/images/trending/img-02.jpg"
            description="Lorem Ipsum is simply dummy text of the printing..."
          />

          <TrendingCard
            title="Dolore magna aliqua"
            img="assets/images/trending/img-03.jpg"
            description="Lorem Ipsum is simply dummy text of the printing..."
          />
        </Slider>
      </div>
    );
  }
}
