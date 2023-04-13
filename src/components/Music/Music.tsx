import React, { useState, useEffect } from "react";
import style from "src/assets/css/components/Music.module.css";
import Effect from "src/components/common/Effect";

import CloseIcon from "@mui/icons-material/Close";
import WidgetsIcon from "@mui/icons-material/Widgets";
import ForestIcon from "@mui/icons-material/Forest";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import CloudIcon from "@mui/icons-material/Cloud";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import WavesIcon from "@mui/icons-material/Waves";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import GroupsIcon from "@mui/icons-material/Groups";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import TrainIcon from "@mui/icons-material/Train";
import AirIcon from "@mui/icons-material/Air";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Player from "./Player/Player";

const Music = () => {
  const [invisible, setInvisible] = useState(false);
  const [volume, setVolume] = useState(true);

  return (
    <div className={`${style.music} ${invisible && style.active}`}>
      <div
        className={style.music_close}
        onClick={() => {
          setInvisible(false);
        }}
      >
        <CloseIcon sx={{ fontSize: 20 }} />
      </div>
      <Player />
      {/* <div className={style.music_effect_menu}>
        {effectSoundList.map((type, index) => (
          <Effect key={index} volume={volume} name={type.name} icon={type} />
        ))}
      </div> */}
    </div>
  );
};

export default Music;
