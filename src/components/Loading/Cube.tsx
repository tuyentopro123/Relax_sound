import React from "react";
import "./Cube.css";

const Cube = ({ active }: { active: boolean }) => {
  return (
    <div className={`cube ${active ? "active" : ""}`}>
      <div className="cube-container">
        <div className="h1Container container">
          <div className="cube-box h1 w1 l1">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube-box h1 w1 l2">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube-box h1 w1 l3">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube-box h1 w2 l1">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube-box h1 w2 l2">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube-box h1 w2 l3">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube-box h1 w3 l1">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube-box h1 w3 l2">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube-box h1 w3 l3">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>
        </div>

        <div className="h2Container container">
          <div className="cube-box h2 w1 l1">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube-box h2 w1 l2">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube-box h2 w1 l3">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube-box h2 w2 l1">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube-box h2 w2 l2">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube-box h2 w2 l3">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube-box h2 w3 l1">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube-box h2 w3 l2">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube-box h2 w3 l3">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>
        </div>

        <div className="h3Container container">
          <div className="cube-box h3 w1 l1">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube-box h3 w1 l2">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube-box h3 w1 l3">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube-box h3 w2 l1">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube-box h3 w2 l2">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube-box h3 w2 l3">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube-box h3 w3 l1">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube-box h3 w3 l2">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube-box h3 w3 l3">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cube;
