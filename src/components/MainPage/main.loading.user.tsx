import React, { useState, useEffect } from "react";
import MainLoading from "../Loading/main/main.loading";
import '../Loading/main/style.css';
import { MainCon } from "../styles/main";
import MainContent from "./main";

const MainComponent = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      setLoading(true);
      localStorage.setItem("hasVisited", "true");
      setTimeout(() => {
        setLoading(false);
      }, 10000); // Animatsiya davomiyligi
    }
  }, []);

  return (
    <>
      {loading ? (
        <MainCon style={{ paddingTop: "145px" }} className="Maincontainer">
          <MainLoading />
        </MainCon>
      ) : (
        <MainContent />
      )}
    </>
  );
};

export default MainComponent;