import Image from "next/image";
import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";

export default function HappeningNowSlide() {
  return (
    <div className="row">
      <div className="col-sm-12 col-md-8 d-grid gap-4">
        <div
          className="rounded d-none d-sm-flex"
          style={{
            background: 'url("/assets/images/trending/img-01.jpg")',
            height: "100%",
            objectFit: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            padding: 20,
            color: "#fff",
          }}
        >
          <div>
            <h5>CITY</h5>
          </div>
          <div>
            <h6>Large Article title</h6>
            <p className="text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley
            </p>
            <div className="fs-6">
              <AiOutlineClockCircle />
              <span>&nbsp; 2 min ago</span>
            </div>
          </div>
        </div>
        <div
          className="rounded d-none d-sm-flex"
          style={{
            background: 'url("/assets/images/trending/img-02.jpg")',
            height: "100%",
            objectFit: "contain",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            padding: 20,
            color: "#fff",
          }}
        >
          <div>
            <h5>TRAVEL</h5>
          </div>
          <div>
            <h6>Large Article title</h6>
            <p className="text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley
            </p>
            <div className="fs-6">
              <AiOutlineClockCircle />
              <span>&nbsp; 2 min ago</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-4 d-grid gap-1">
        <div>
          <Image
            className="rounded"
            src="/assets/images/trending/img-03.jpg"
            sizes="100vw"
            width={100}
            height={200}
            style={{
              width: "100%",
              height: "auto",
            }}
            alt="Picture of the author"
          />
          <h6 className="mt-2 mb-0">Small Title</h6>
          <div className="fs-6 text-muted">
            <AiOutlineClockCircle />
            <span>&nbsp; 2 min ago</span>
          </div>
        </div>
        <div>
          <Image
            className="rounded"
            src="/assets/images/trending/img-01.jpg"
            sizes="100vw"
            width={100}
            height={200}
            style={{
              width: "100%",
              height: "auto",
            }}
            alt="Picture of the author"
          />
          <h6 className="mt-2 mb-0">Small Title</h6>
          <div className="fs-6 text-muted">
            <AiOutlineClockCircle />
            <span>&nbsp; 2 min ago</span>
          </div>
        </div>
        <div>
          <Image
            className="rounded"
            src="/assets/images/trending/img-02.jpg"
            sizes="100vw"
            width={100}
            height={200}
            style={{
              width: "100%",
              height: "auto",
            }}
            alt="Picture of the author"
          />
          <h6 className="mt-2 mb-0">Small Title</h6>
          <div className="fs-6 text-muted">
            <AiOutlineClockCircle />
            <span>&nbsp; 2 min ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}
