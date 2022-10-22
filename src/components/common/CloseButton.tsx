import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import style from "src/assets/css/common/closeButton.module.css";

const CloseButton = ({ setClose }: { setClose: any }) => {
  return (
    <div
      className={style.close}
      onClick={() => {
        setClose(false);
      }}
    >
      <CloseIcon sx={{ fontSize: 30 }} />
    </div>
  );
};

export default CloseButton;
