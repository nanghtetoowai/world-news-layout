import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import styles from "./newWorld.module.css";
import classNames from "classnames";

export default function NewWorlds() {
  return (
    <div className="row">
      <div className={classNames("col-xs-12 col-sm-12 col-md-7", styles.col1)}>
        <div className={styles.content1}>
          <h2>World News</h2>
          <p>Amazing places in America to visit.</p>
          <p>
            For some reason - this country, this city, this neighborhood, this
            particular street - is the place you are living a majority of your
            life in.
          </p>
          <button>LEARN MORE</button>
        </div>
      </div>
      <div className={classNames("col-xs-12 col-sm-12 col-md-5", styles.col2)}>
        <div className={styles.content2}>
          <h2>More News</h2>
          <div className={styles.article}>
            <h4>Travel</h4>
            <h3>Article title</h3>
            <p className="m-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially.
            </p>
            <div className={styles.iconDiv}>
              <AiOutlineClockCircle className={styles.icon} />
              <span>&nbsp; 2 min ago</span>
            </div>
          </div>
          <div className={styles.article}>
            <h4>Technology</h4>
            <h3>Article title</h3>
            <p className="m-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <div className={styles.iconDiv}>
              <AiOutlineClockCircle className={styles.icon} />
              <span>&nbsp; 2 min ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
