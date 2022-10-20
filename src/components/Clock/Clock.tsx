import React, { useState, useEffect } from "react";
import style from "src/assets/css/components/Clock.module.css";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";

const Clock = () => {
  const getTimeString = (month: any, language: String) => {
    var monthEnglish = "";
    switch (month) {
      case 1:
        monthEnglish = language === "en" ? "January" : "tháng 1";
        break;
      case 2:
        monthEnglish = language === "en" ? "Febuary" : "tháng 2";
        break;
      case 3:
        monthEnglish = language === "en" ? "March" : "tháng 3";
        break;
      case 4:
        monthEnglish = language === "en" ? "April" : "tháng 4";
        break;
      case 5:
        monthEnglish = language === "en" ? "May" : "tháng 5";
        break;
      case 6:
        monthEnglish = language === "en" ? "June" : "tháng 6";
        break;
      case 7:
        monthEnglish = language === "en" ? "July" : "tháng 7";
        break;
      case 8:
        monthEnglish = language === "en" ? "August" : "tháng 8";
        break;
      case 9:
        monthEnglish = language === "en" ? "Septemper" : "tháng 9";
        break;
      case 10:
        monthEnglish = language === "en" ? "October" : "tháng 10";
        break;
      case 11:
        monthEnglish = language === "en" ? "November" : "tháng 11";
        break;
      default:
        monthEnglish = language === "en" ? "December" : "tháng 12";
    }
    return monthEnglish;
  };
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

  const [language, setLanguage] = useState(true);

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
        <div id="date" className={style.clock_date}></div>
        <div
          onClick={() => {
            setLanguage((value) => !value);
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
