import React, { useState, useEffect } from "react";
import style from "src/assets/css/components/Clock.module.css";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import { getTimeString } from "src/util/GetTimeString";

const Clock = ({
  setOpenCalender,
  language,
  setLanguage,
}: {
  setOpenCalender: any;
  language: boolean;
  setLanguage: any;
}) => {
  const nowDate = new Date();
  const day = nowDate.toLocaleString("en-us", { weekday: "long" });
  const dayString = nowDate.toLocaleString("vi", { weekday: "long" });
  // date with english
  const today =
    day +
    ", " +
    getTimeString(nowDate.getMonth() + 1, "en") +
    " " +
    nowDate.getDate() +
    ", " +
    nowDate.getFullYear();
  // date with vietnamese
  const todayViet =
    dayString +
    ", " +
    nowDate.getDate() +
    " " +
    getTimeString(nowDate.getMonth() + 1, "vi") +
    " năm " +
    nowDate.getFullYear();

  const showTime = () => {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";

    if (h == 0) {
      h = 12;
    }

    if (h > 12) {
      h = h - 12;
      session = "PM";
    }

    var time =
      (h < 10 ? "0" + h : h) +
      ":" +
      (m < 10 ? "0" + m : m) +
      ":" +
      (s < 10 ? "0" + s : s);
    const clock = document.getElementById("MyClockDisplay");
    const sessions = document.getElementById("session");

    if (clock != null && sessions != null) {
      clock.innerText = time;
      clock.textContent = time;
      sessions.innerText = session;
      sessions.textContent = session;
    }

    setTimeout(showTime, 1000);
  };

  showTime();

  useEffect(() => {
    const nowDay = document.getElementById("date");
    if (nowDay != null) {
      if (language) {
        nowDay.innerText = today;
        nowDay.textContent = today;
      } else {
        nowDay.innerText = todayViet;
        nowDay.textContent = todayViet;
      }
    }
  }, [language]);

  return (
    <div className={style.clock}>
      <div className={style.clock_container}>
        <div id="MyClockDisplay" style={{ minWidth: 275 }}></div>
        <div id="session"></div>
      </div>
      <div className={style.clock_date_container}>
        <div
          id="date"
          className={style.clock_date}
          onClick={() => {
            setOpenCalender(true);
          }}
        ></div>
        <div
          onClick={() => {
            setLanguage(!language);
          }}
          className={style.clock_date_icon}
        >
          <ChangeCircleIcon />
        </div>
      </div>
    </div>
  );
};

export default Clock;
