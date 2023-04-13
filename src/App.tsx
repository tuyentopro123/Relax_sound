import React, { useEffect, useRef, useState } from "react";
import style from "src/assets/css/globals.module.css";
import "./App.css";
import { Howl } from "howler";
import Effect from "src/components/common/Effect";
import Cube from "src/components/Loading/Cube";
import Clock from "./components/Clock/Clock";
import Utilities from "./components/Utilities/Utilities";
import Calender from "./components/Calender/Calender";
import Setting from "./components/Setting/Setting";

// icon
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
import Overlay from "./components/common/Overlay";
import Music from "./components/Music/Music";

const boop = new Howl({
  src: ["/sound/boop.mp3"],
});

function App() {
  var date = new Date();
  var h = date.getHours();
  const [mode, setMode] = useState(h > 12 ? 1 : 0);
  const [invisible, setInvisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [openCalender, setOpenCalender] = useState(false);
  const [openSetting, setOpenSetting] = useState(false);
  const [language, setLanguage] = useState(true);
  const [volume, setVolume] = useState(true);

  const status = [
    {
      name: "morning",
      webm: "https://res.cloudinary.com/tealive/video/upload/v1666024279/Video/ygzdm35dkuqqds49mocz.webm",
      mp4: "https://res.cloudinary.com/tealive/video/upload/v1666024025/Video/yqsdmsv36abobydox0wr.mp4",
    },
    {
      name: "night",
      webm: "https://res.cloudinary.com/tealive/video/upload/v1666024017/Video/gl0udbcvsmjbtjis6fpe.webm",
      mp4: "https://res.cloudinary.com/tealive/video/upload/v1666024025/Video/nj7nthx1b0bumk2keqdw.mp4",
    },
    {
      name: "rain",
      webm: "https://res.cloudinary.com/tealive/video/upload/v1666024017/Video/oz4pacmwozdxhprymdtk.webm",
      mp4: "https://res.cloudinary.com/tealive/video/upload/v1666024016/Video/e6k55tyv37uhoitb8mon.mp4",
    },
  ];

  const ChangeMode = (e: number) => {
    boop.play();
    setLoading(true);
    setMode(e);
    setTimeout(LoadingVideo, 1000);
  };

  const LoadingData = () => {
    setTimeout(EndLoadingData, 3000);
  };
  const EndLoadingData = () => {
    setLoading(false);
  };

  const LoadingVideo = () => {
    const video = document.getElementById("video") as HTMLVideoElement | null;
    if (video != null) {
      video.load();
    }
  };

  const effectSoundList = [
    { name: "morning", icon: ForestIcon },
    { name: "night", icon: DarkModeIcon },
    { name: "rain", icon: CloudIcon },
    { name: "thunder", icon: ElectricBoltIcon },
    { name: "waves", icon: WavesIcon },
    { name: "fire", icon: LocalFireDepartmentIcon },
    { name: "group", icon: GroupsIcon },
    { name: "keyboard", icon: KeyboardIcon },
    { name: "train", icon: TrainIcon },
    { name: "wing", icon: AirIcon },
    { name: "city", icon: DirectionsCarIcon },
    { name: "noel", icon: NotificationsIcon },
  ];

  return (
    <main className={style.main_layout}>
      <div className={style.video_intro}>
        <video
          id="video"
          onLoadedData={LoadingData}
          preload="auto"
          loop={true}
          muted={true}
          autoPlay={true}
          playsInline={true}
        >
          <source
            type="video/mp4"
            src={
              mode === 0
                ? status[0].mp4
                : mode === 1
                ? status[1].mp4
                : status[2].mp4
            }
          />
          <source
            type="video/webm"
            src={
              mode === 0
                ? status[0].webm
                : mode === 1
                ? status[1].webm
                : status[2].webm
            }
          />
        </video>
      </div>
      {/* ---------- */}
      <div className={`${style.style_mode} ${invisible && style.active}`}>
        <div
          className={style.style_close}
          onClick={() => {
            setInvisible(false);
          }}
        >
          <CloseIcon sx={{ fontSize: 20 }} />
        </div>
        <div className={style.style_effect_menu}>
          {effectSoundList.map((type, index) => (
            <Effect key={index} volume={volume} name={type.name} icon={type} />
          ))}
        </div>
      </div>
      {/* ---------- */}
      <div
        className={`${style.button_mode} ${!invisible && style.active}`}
        onClick={() => {
          setInvisible(true);
        }}
      >
        <WidgetsIcon sx={{ fontSize: 30 }} />
      </div>
      {/* ---------- */}
      <Clock
        setLanguage={setLanguage}
        language={language}
        setOpenCalender={setOpenCalender}
      />
      {/* ---------- */}

      <Utilities
        volume={volume}
        setVolume={setVolume}
        setSetting={setOpenSetting}
        ChangeMode={ChangeMode}
        mode={mode}
      />
      {/* ---------- */}
      <Music />
      {/* ---------- */}

      <Overlay open={openCalender} setOpen={setOpenCalender}>
        <Calender language={language} setOpenCalender={setOpenCalender} />
      </Overlay>
      {/* ---------- */}

      <Overlay open={openSetting} setOpen={setOpenSetting}>
        <Setting setOpenSetting={setOpenSetting} />
      </Overlay>
      <Cube active={isLoading} />
    </main>
  );
}

export default App;
