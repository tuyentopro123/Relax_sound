import React, { useState, useEffect } from "react";
import { getTimeString } from "src/util/GetTimeString";
import Body from "./calenderBody/Body";
import {
  convertSolar2Lunar,
  convertLunar2Solar,
} from "src/components/Calender/LunaCalender";

import CloseButton from "src/components/common/CloseButton";
import style from "src/assets/css/components/Calender.module.css";

const Calender = ({
  setOpenCalender,
  language,
}: {
  setOpenCalender: any;
  language: boolean;
}) => {
  const nowDate = new Date();
  const day = nowDate.toLocaleString("en-us", { weekday: "long" });
  const date = language
    ? day +
      ", " +
      getTimeString(nowDate.getMonth() + 1, "en") +
      " " +
      nowDate.getDate() +
      ", " +
      nowDate.getFullYear()
    : nowDate.toLocaleString("vi", { weekday: "long" }) +
      ", " +
      nowDate.getDate() +
      " " +
      getTimeString(nowDate.getMonth() + 1, "vi") +
      " năm " +
      nowDate.getFullYear();

  const [info, setInfo] = useState<any>(null);
  const [type, setType] = useState<boolean>(true);

  // Đổi ngày dương lịch ra ngày âm lịch
  const getLunarDay = (dd: number, mm: number, yy: number) => {
    const arr = convertSolar2Lunar(dd, mm, yy, 7);
    return arr;
  };

  // Đổi ngày dương lịch ra ngày âm lịch
  const getSolarDay = (dd: number, mm: number, yy: number) => {
    const arr = convertLunar2Solar(dd, mm + 1, yy, 365, 7);
    return arr;
  };

  // chuyển đổi type âm dương
  const setTypeDate = () => {
    setType((value) => !value);
  };

  // submit form
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await resetInfo();
    if (!e.target[1].value || !e.target[2].value) {
      alert("điền đầy đủ thông tin để tìm kiếm");
    } else {
      let day = parseInt(e.target[0].value);
      let month = parseInt(e.target[1].value) - 1;
      let year = parseInt(e.target[2].value);
      let SolarDate = [day, month, year];
      if (!type) {
        SolarDate = getSolarDay(day, month, year);
      }
      const newInfo = {
        day: SolarDate[0],
        month: type ? SolarDate[1] : SolarDate[1] - 1,
        year: SolarDate[2],
      };
      setInfo(newInfo);
    }
    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = "";
  };

  const resetInfo = () => {
    setInfo(null);
  };

  // get today
  const handleGetToday = async () => {
    await resetInfo();
    const nowDate = new Date().getDate();
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const newInfo = {
      day: nowDate,
      month: currentMonth,
      year: currentYear,
    };
    setInfo(newInfo);
  };

  return (
    <div className={style.calender}>
      <div className={style.calender__container}>
        <div className={style.calender__form}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="">{`Ngày ${
              type ? "dương lịch" : "âm lịch"
            }:`}</label>
            <input name="day" type="number" min="1" max="31" />
            <br />
            <label htmlFor="">{`Tháng ${
              type ? "dương lịch" : "âm lịch"
            }:`}</label>
            <input name="month" type="number" min="1" max="12" />
            <br />
            <label htmlFor="">{`Năm ${
              type ? "dương lịch" : "âm lịch"
            }:`}</label>
            <input name="year" type="number" min="1900" />
            <br />
            <button type="submit"> Tìm kiếm </button>
            <label
              onClick={setTypeDate}
              className={style.calender__button__type}
            >
              {" "}
              {type ? "âm lịch" : "dương lịch"}{" "}
            </label>
          </form>
        </div>

        <div className={style.calender__today} onClick={handleGetToday}>
          <div>
            {language ? "Today:" : "Hôm nay:"} <span>{date}</span>
          </div>
        </div>

        <div className={style.calender__content}>
          <Body language={language} info={info} func={getLunarDay} />
        </div>
      </div>

      <CloseButton setClose={setOpenCalender} />
    </div>
  );
};

export default Calender;
