import React, { useState, useEffect } from "react";
import { Howl } from "howler";
import style from "src/assets/css/common/effect.module.css";
import { Icon } from "@mui/material";

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

const morning = new Howl({
  src: [`/sound/morning.mp3`],
  loop: true,
});

const night = new Howl({
  src: [`/sound/night.mp3`],
  loop: true,
});
const rain = new Howl({
  src: [`/sound/rain.mp3`],
  loop: true,
});
const thunder = new Howl({
  src: [`/sound/thunder.mp3`],
  loop: true,
});
const waves = new Howl({
  src: [`/sound/waves.mp3`],
  loop: true,
});
const fire = new Howl({
  src: [`/sound/fire.mp3`],
  loop: true,
});
const group = new Howl({
  src: [`/sound/group.mp3`],
  loop: true,
});
const keyboard = new Howl({
  src: [`/sound/keyboard.mp3`],
  loop: true,
});
const train = new Howl({
  src: [`/sound/train.mp3`],
  loop: true,
});
const wing = new Howl({
  src: [`/sound/wing.mp3`],
  loop: true,
});
const city = new Howl({
  src: [`/sound/city.mp3`],
  loop: true,
});
const noel = new Howl({
  src: [`/sound/noel.mp3`],
  loop: true,
});
const Effect = ({ name, icon }: { name: String; icon: any }) => {
  const [sound, setSound] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const effectSound = () => {
    let type = noel;
    switch (name) {
      case "morning":
        type = morning;
        break;
      case "night":
        type = night;
        break;
      case "rain":
        type = rain;
        break;
      case "thunder":
        type = thunder;
        break;
      case "waves":
        type = waves;
        break;
      case "fire":
        type = fire;
        break;
      case "group":
        type = group;
        break;
      case "keyboard":
        type = keyboard;
        break;
      case "train":
        type = train;
        break;
      case "wing":
        type = wing;
        break;
      case "city":
        type = city;
        break;
    }
    return type;
  };

  const handleSound = () => {
    if (!sound) {
      setSound(true);
      effectSound().play();
    } else {
      setSound(false);
      effectSound().pause();
    }
  };

  // Draggle process
  var pos3: number, pos1: number, lastWidth: number;
  var progress = document.getElementById(`${name}`);
  var draggle = document.getElementById(`dragg-${name}`);
  const handleHold = (e: any) => {
    e.preventDefault();
    pos3 = e.clientX;
    if (progress != null) {
      lastWidth = progress.offsetWidth;
    }
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  };

  const elementDrag = (e: any) => {
    e.preventDefault();

    pos1 = e.clientX - pos3;
    if (progress != null && draggle != null) {
      progress.style.width = lastWidth + pos1 + "px";
      setVolume((lastWidth + pos1) / draggle.offsetWidth);
    }
  };

  const closeDragElement = () => {
    if (progress != null) {
      lastWidth = progress.offsetWidth;
    }
    document.onmouseup = null;
    document.onmousemove = null;
  };

  useEffect(() => {
    var progress = document.getElementById(`${name}`);
    var draggle = document.getElementById(`dragg-${name}`);
    effectSound().volume(volume);
    if (progress != null && draggle != null) {
      progress.style.width = volume * draggle.offsetWidth + "px";
    }
  }, [volume, sound]);

  return (
    <div className={style.effect}>
      <button
        className={`${style.effect_button} ${
          sound ? style.effect_button_light : ""
        }`}
        type="button"
        style={{
          cursor: "pointer",
          width: 90,
          height: 90,
        }}
        onClick={() => handleSound()}
      >
        <icon.icon sx={{ fontSize: 40 }} />
      </button>
      <div
        id={`dragg-${name}`}
        style={{ display: sound ? "inherit" : "none" }}
        className={style.effect_draggable}
      >
        <div id={`${name}`} className={style.effect_progress}>
          <div
            className={style.effect_progress_hold}
            onMouseDown={handleHold}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Effect;
