import React from "react";
import style from "src/assets/css/components/Setting.module.css";
import CloseButton from "src/components/common/CloseButton";

const Setting = ({ setOpenSetting }: { setOpenSetting: any }) => {
  return (
    <div className={style.setting}>
      <div className={style.setting__container}>
        <div className={style.setting__option}>
          {"chưa có j để setting :))"}
        </div>
      </div>

      <CloseButton setClose={setOpenSetting} />
    </div>
  );
};

export default Setting;
