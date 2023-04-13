import React, { useRef, useState } from "react";
import style from "src/assets/css/components/Player.module.css";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { grey } from "@mui/material/colors";
// import Audio from "src/assets/image/take_me_higher.mp3";

const Player = () => {
  const process = useRef<any>();
  const duration = useRef<any>();
  const audio = useRef<any>();
  const range = useRef<any>();
  const sound = useRef<any>();
  const pause = useRef<any>();
  const [play, setPlay] = useState<boolean>(false);
  const [volume, setVolume] = useState<boolean>(false);

  // Draggle process
  var pos3: number, pos1, lastWidth: number;
  const handleHold = (e: { preventDefault: () => void; clientX: number }) => {
    e.preventDefault();
    pos3 = e.clientX;
    lastWidth = process.current.offsetWidth;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  };

  const elementDrag = (e: { preventDefault: () => void; clientX: number }) => {
    e.preventDefault();
    pos1 = e.clientX - pos3;
    if (
      lastWidth + pos1 >= 0 &&
      lastWidth + pos1 <= process.current.offsetParent.offsetWidth
    ) {
      process.current.style.width = lastWidth + pos1 + "px";
    }
  };

  const closeDragElement = () => {
    lastWidth = process.current.offsetWidth;
    document.onmouseup = null;
    document.onmousemove = null;
  };

  // Pause,play audio
  const handlePause = () => {
    audio.current.pause();
    setPlay(false);
  };

  const handlePlay = () => {
    audio.current.play();
    setPlay(true);
  };

  // change Volumn
  const handleChangeVolumn = (e: any) => {
    audio.current.volume = parseInt(e.target.value) / 100;
    if (audio.current.volume === 0) {
      sound.current.classList.add("active");
    } else {
      sound.current.classList.remove("active");
    }
  };

  const handleMute = (e: any) => {
    audio.current.muted = true;
    range.current.value = 0;
    setVolume(true);
  };

  const handleVolumnUp = (e: any) => {
    audio.current.muted = false;
    range.current.value = audio.current.volume * 100;
    setVolume(false);
  };
  return (
    <div className={style.player}>
      <div className={style.dashboard}>
        <header>
          <h2>Bài Hát đang phát</h2>
        </header>

        <div className={style.cd}>
          <div
            className={style.cd_thumb}
            style={{
              backgroundImage:
                "url('https://i.pinimg.com/originals/bf/a5/61/bfa561a38078dace069bc2b499079c0a.jpg')",
            }}
          ></div>
        </div>

        <div className={style.control}>
          <div className={style.draggble}>
            <div
              className={style.duration}
              ref={duration}
              // onMouseDown={handlePreview}
              // onMouseOver={handlePreviewTime}
            >
              <div className={style.process} ref={process}>
                <div
                  className={style.process__hold}
                  onMouseDown={handleHold}
                ></div>
              </div>
            </div>
          </div>

          <div className={style.utilities}>
            <div className={style.utilities_box}>
              <div
                ref={pause}
                className={`${style.utilities_pause} ${play && style.active}`}
              >
                <div className={style.pause} onClick={handlePause}>
                  <PauseIcon sx={{ fontSize: 30, color: grey[100] }} />
                </div>

                <div className={style.play} onClick={handlePlay}>
                  <PlayArrowIcon sx={{ fontSize: 30, color: grey[100] }} />
                </div>
              </div>

              <div
                ref={sound}
                className={`${style.utilities_volumn} ${
                  volume && style.active
                }`}
              >
                <div className={style.mute} onClick={handleVolumnUp}>
                  <VolumeOffIcon sx={{ fontSize: 30, color: grey[100] }} />
                </div>

                <div className={style.volumn_up} onClick={handleMute}>
                  <VolumeUpIcon sx={{ fontSize: 30, color: grey[100] }} />
                </div>
                <input
                  id="range"
                  type="range"
                  ref={range}
                  className={style.range}
                  // onChange={(e) => handleChangeVolumn(e)}
                />
              </div>

              <div className={style.utilities_duration}>
                <div>
                  <span id="load" className={style.utilities_load}>
                    00:00
                  </span>
                  /
                  <span id="total" className={style.utilities_total}>
                    00:00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <audio
          id="audio"
          ref={audio}
          src="../../../assets/audio/take_me_higher.mp3"
        ></audio>
      </div>
    </div>
  );
};

export default Player;
