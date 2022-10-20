import React from "react";
import style from "src/assets/css/common/button.module.css";
import LightModeIcon from "@mui/icons-material/LightMode";
import WbCloudyIcon from "@mui/icons-material/WbCloudy";
import NightsStayIcon from "@mui/icons-material/NightsStay";
const Button = ({
  type,
  func,
  name,
  active,
  size,
}: {
  type: number;
  func: Function;
  name: String;
  active: number;
  size: number;
}) => {
  return (
    <button
      className={`${style.button} ${active === type ? style.button_light : ""}`}
      type="button"
      disabled={active === type}
      style={{
        cursor: active === type ? "inherit" : "pointer",
        width: size,
        height: size,
      }}
      onClick={() => func(type)}
    >
      {name === "light" ? (
        <LightModeIcon />
      ) : name === "night" ? (
        <NightsStayIcon />
      ) : (
        <WbCloudyIcon />
      )}
    </button>
  );
};

export default Button;
