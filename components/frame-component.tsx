import type { NextPage } from "next";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div className={[styles.tasteNowContentParent, className].join(" ")}>
      <div className={styles.tasteNowContent}>
        <h1 className={styles.tasteNowTasteContainer}>
          <p className={styles.tasteNow}>TASTE NOW</p>
          <p className={styles.tasteNow1}>TASTE NOW</p>
          <p className={styles.tasteNow2}>TASTE NOW</p>
          <p className={styles.tasteNow3}>TASTE NOW</p>
        </h1>
        <div className={styles.wrapperVasoCafe1}>
          <img
            className={styles.vasoCafe1Icon}
            alt=""
            src="/vasocafe-1@2x.png"
          />
        </div>
      </div>
      <div className={styles.buyWrapper}>
        <div className={styles.buy}>
          <div className={styles.buyNow}>BUY NOW</div>
          <div className={styles.buttonIcon}>
            <img className={styles.vectorIcon} alt="" src="/vector-3.svg" />
          </div>
        </div>
      </div>
      <div className={styles.frameChild} />
    </div>
  );
};

export default FrameComponent;
