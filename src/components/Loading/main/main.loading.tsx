import React, { useEffect } from "react";
import gsap from "gsap";
import "./style.css";
import UNA from '../../../assets/Logo.svg'

const MainLoading = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(".box", {
      scale: 0,
      y: 60,
      rotate: 400,
      repeat: 1,
      yoyo: true,
      duration: 1,
      delay: 0.5,
      stagger: {
        amount: 1.5,
        from: "random",
        grid: [3, 3],
      },
    })
      .to(".container", {
        rotate: "-405deg",
        scale: 0,
        duration: 1,
      })
      .to(".wrapper", {
        opacity: 0,
        display: "none",
        duration: 0.5,
      })
      .fromTo(
        ".una-text",
        { opacity: 0 },
        { opacity: 1, duration: 1 }
      );
  }, []);

  return (
    <div>
      <div className="container wrapper">
        {Array.from({ length: 9 }).map((_, ind) => (
          <div className="box" key={ind}></div>
        ))}
      </div>
      <img src={UNA} alt="" className="una-text" />
    </div>
  );
};

export default MainLoading;