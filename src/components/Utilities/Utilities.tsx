import React, { useState } from "react";
import style from "src/assets/css/components/Utilities.module.css";
import SettingsIcon from "@mui/icons-material/Settings";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
// import Tooltip from "@mui/material/Tooltip";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import Button from "src/components/common/Button";

const CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    zIndex: -1,
  },
});

const Utilities = ({
  ChangeMode,
  mode,
}: {
  ChangeMode: Function;
  mode: number;
}) => {
  const [volume, setVolume] = useState(true);
  const types = [
    {
      name: "light",
    },
    {
      name: "night",
    },
    {
      name: "rain",
    },
  ];

  const handleVolume = () => {
    setVolume((value) => !value);
  };
  return (
    <div className={style.utilities}>
      <div className={style.utilities_container}>
        <CustomWidthTooltip
          arrow
          placement="bottom-start"
          title={
            <div className={style.utilities_tooltip}>
              {types.map((type, index) => (
                <Button
                  type={index}
                  key={index}
                  func={ChangeMode}
                  name={type.name}
                  active={mode}
                  size={50}
                />
              ))}
            </div>
          }
        >
          <Brightness4Icon
            className={style.utilities_icon}
            sx={{ fontSize: 30, color: grey[400] }}
          />
        </CustomWidthTooltip>
        <SettingsIcon
          className={style.utilities_icon}
          sx={{ fontSize: 30, color: grey[400] }}
        />
        <div className={style.utilities_icon} onClick={() => handleVolume()}>
          <VolumeUpIcon
            style={{ display: volume ? "inherit" : "none" }}
            sx={{ fontSize: 30, color: grey[400] }}
          />
          <VolumeOffIcon
            style={{ display: volume ? "none" : "inherit" }}
            sx={{ fontSize: 30, color: grey[400] }}
          />
        </div>
      </div>
    </div>
  );
};

export default Utilities;
