import React from "react";
import style from "src/assets/css/common/overlay.module.css";

const Overlay = ({
  children,
  open,
  setOpen,
}: {
  children: any;
  open: boolean;
  setOpen: any;
}) => {
  return (
    <div className={`${style.overlay} ${open ? style.active : ""}`}>
      <div
        className={style.overlay_bg}
        onClick={() => {
          setOpen(false);
        }}
      ></div>
      {children}
    </div>
  );
};

export default Overlay;
