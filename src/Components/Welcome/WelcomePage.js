import React from "react";
import car from "../Images/car.png";
import star from "../Images/Star.png";
import "../Styles/Style.css";
import { BiRadioCircle } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";

const WelcomePage = () => {
  const circleRef = useRef(null);
  const [circleText, setCircleText] = useState("FOR TIME ROAD AHEAD BUILT");
  console.log(setCircleText);

  useEffect(() => {
    if (circleRef.current) {
      const text = circleRef.current;
      const newText = circleText
        .split("")
        .map((char, i) => {
          return `<span style="transform: translateY(-50%) rotate(${
            (i + 1) * 13.5
          }deg)" data="${i}" >${char}</span>`;
        })
        .join("");
      text.innerHTML = newText;
    }
  }, [circleText]);

  return (
    <div>
      <section className="info-car">
        <div className="description-car">
          <div className="color-transparent">
          <h1>Best Car For Your Performance</h1>
          <p className="description">
            We will serve you to get dream car here easily and quickly that is
            reliable
          </p>

          <div className="search-container">
            <input type="text" placeholder="Search" className="search-input" />
            <button className="search-button">
              <svg
                className="search-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <path
                  d="M16 16L11 11M12.6667 6.83333C12.6667 10.055 10.055 12.6667 6.83333 12.6667C3.61167 12.6667 1 10.055 1 6.83333C1 3.61167 3.61167 1 6.83333 1C10.055 1 12.6667 3.61167 12.6667 6.83333Z"
                  stroke="#F2F4F7"
                  // stroke-width="2"
                  // stroke-linecap="round"
                  // stroke-linejoin="round"
                />
              </svg>
            </button>
            </div>
          </div>

          <p className="model-series">BMW Series 3 BLUE</p>
          <div className="grid-price-container">
            <div className="grid-item">
              <h3>Base Price</h3>
              <p>$ 41.87k</p>
            </div>
            <div className="grid-item">
              <h3>Power</h3>
              <p>365 HP</p>
            </div>
            <div className="grid-item">
              <h3>Engine</h3>
              <p>362 V6</p>
            </div>
          </div>

          <div className="hr-container">
            <svg
              className="horizontal-barre"
              xmlns="http://www.w3.org/2000/svg"
              width="560"
              height="2"
              viewBox="0 0 560 2"
              fill="none"
            >
              <path d="M0 1H560" stroke="#98A2B3" />
            </svg>
            <BiRadioCircle className="circle-icon"></BiRadioCircle>
          </div>
        </div>

        <div className="strip-blue"></div>

        <div className="car">
          <div className="btn">
            <div className="circle" ref={circleRef}>
              {circleText}
            </div>

            <img src={star} alt="yellow star" className="icon-yellow-star" />
          </div>

          <img src={car} className="blue-car" alt=" blue car" />

          <div className="icon-chevron">
            <svg
              className="icon-chevron-left"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M14.4 16L18.0832 11.9904C18.2339 11.8372 18.3183 11.6309 18.3183 11.416C18.3183 11.2011 18.2339 10.9948 18.0832 10.8416C18.0088 10.7666 17.9203 10.7071 17.8229 10.6665C17.7254 10.6259 17.6208 10.605 17.5152 10.605C17.4096 10.605 17.305 10.6259 17.2075 10.6665C17.1101 10.7071 17.0216 10.7666 16.9472 10.8416L12.456 15.424C12.305 15.5768 12.2204 15.7829 12.2204 15.9976C12.2204 16.2124 12.305 16.4185 12.456 16.5712L16.9472 21.1536C17.0214 21.229 17.1098 21.2888 17.2073 21.3297C17.3048 21.3706 17.4095 21.3916 17.5152 21.3916C17.6209 21.3916 17.7256 21.3706 17.8231 21.3297C17.9206 21.2888 18.009 21.229 18.0832 21.1536C18.2342 21.0009 18.3188 20.7948 18.3188 20.58C18.3188 20.3653 18.2342 20.1592 18.0832 20.0064L14.4 16ZM16 0.640015C13.9829 0.640015 11.9855 1.03731 10.122 1.80923C8.25842 2.58114 6.56515 3.71255 5.13884 5.13885C3.71253 6.56516 2.58112 8.25844 1.80921 10.122C1.0373 11.9856 0.639999 13.9829 0.639999 16C0.639999 24.4848 7.5168 31.36 16 31.36C24.4832 31.36 31.36 24.4848 31.36 16C31.36 11.9263 29.7417 8.01941 26.8612 5.13885C23.9806 2.2583 20.0737 0.640015 16 0.640015ZM16 29.3664C12.4548 29.3664 9.0548 27.9581 6.54796 25.4513C4.04113 22.9444 2.6328 19.5444 2.6328 15.9992C2.6328 12.454 4.04113 9.05401 6.54796 6.54718C9.0548 4.04034 12.4548 2.63201 16 2.63201C19.5452 2.63201 22.9452 4.04034 25.452 6.54718C27.9589 9.05401 29.3672 12.454 29.3672 15.9992C29.3672 19.5444 27.9589 22.9444 25.452 25.4513C22.9452 27.9581 19.5452 29.3664 16 29.3664Z"
                fill="#98A2B3"
              />

              <defs>
                <clipPath id="clip0_6_393">
                  <rect
                    width="32"
                    height="32"
                    fill="white"
                    transform="matrix(-1 0 0 1 32 0)"
                  />
                </clipPath>
              </defs>
            </svg>

            <svg
              className="icon-chevron-right"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M17.6 16L13.9168 11.9904C13.7661 11.8372 13.6817 11.6309 13.6817 11.416C13.6817 11.2011 13.7661 10.9948 13.9168 10.8416C13.9912 10.7666 14.0797 10.7071 14.1772 10.6665C14.2746 10.6259 14.3792 10.605 14.4848 10.605C14.5904 10.605 14.695 10.6259 14.7925 10.6665C14.89 10.7071 14.9784 10.7666 15.0528 10.8416L19.544 15.424C19.695 15.5768 19.7796 15.7829 19.7796 15.9976C19.7796 16.2124 19.695 16.4185 19.544 16.5712L15.0528 21.1536C14.9787 21.229 14.8903 21.2888 14.7927 21.3297C14.6952 21.3706 14.5905 21.3916 14.4848 21.3916C14.3791 21.3916 14.2744 21.3706 14.1769 21.3297C14.0794 21.2888 13.991 21.229 13.9168 21.1536C13.7659 21.0009 13.6812 20.7948 13.6812 20.58C13.6812 20.3653 13.7659 20.1592 13.9168 20.0064L17.6 16ZM16 0.640015C18.0171 0.640015 20.0145 1.03731 21.878 1.80923C23.7416 2.58114 25.4349 3.71255 26.8612 5.13885C28.2875 6.56516 29.4189 8.25844 30.1908 10.122C30.9627 11.9856 31.36 13.9829 31.36 16C31.36 24.4848 24.4832 31.36 16 31.36C7.51682 31.36 0.640015 24.4848 0.640015 16C0.640015 11.9263 2.2583 8.01941 5.13885 5.13885C8.01941 2.2583 11.9263 0.640015 16 0.640015ZM16 29.3664C19.5452 29.3664 22.9452 27.9581 25.4521 25.4513C27.9589 22.9444 29.3672 19.5444 29.3672 15.9992C29.3672 12.454 27.9589 9.05401 25.4521 6.54718C22.9452 4.04034 19.5452 2.63201 16 2.63201C12.4548 2.63201 9.05481 4.04034 6.54798 6.54718C4.04114 9.05401 2.63281 12.454 2.63281 15.9992C2.63281 19.5444 4.04114 22.9444 6.54798 25.4513C9.05481 27.9581 12.4548 29.3664 16 29.3664Z"
                fill="#98A2B3"
              />

              <defs>
                <clipPath id="clip0_6_391">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default WelcomePage;
