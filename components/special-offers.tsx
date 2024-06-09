import type { NextPage } from "next";
import styles from "./special-offers.module.css";

export type SpecialOffersType = {
  className?: string;
};

const SpecialOffers: NextPage<SpecialOffersType> = ({ className = "" }) => {
  return (
    <div className={[styles.specialOffers, className].join(" ")}>
      <div className={styles.specialOfferContent}>
        <h1 className={styles.specialSpecialSpecialContainer}>
          <p className={styles.special}>SPECIAL</p>
          <p className={styles.special1}>SPECIAL</p>
          <p className={styles.special2}>SPECIAL</p>
          <p className={styles.special3}>SPECIAL</p>
        </h1>
        <div className={styles.specialOfferBackground} />
        <img
          className={styles.coffeebean44Icon}
          loading="lazy"
          alt=""
          src="/coffeebean4-4-1@2x.png"
        />
      </div>
      <div className={styles.specialOfferDetails}>
        <div className={styles.offerBackground} />
        <div className={styles.offerDescription}>
          <h1 className={styles.special4}>Special</h1>
          <h1 className={styles.followYourNoseContainer}>
            <p className={styles.follow}>{`FOLLOW `}</p>
            <p className={styles.yourNose}>YOUR NOSE</p>
            <p className={styles.toFroot}>{`TO FROOT `}</p>
            <p className={styles.loopstm}>LOOPSTM </p>
            <p className={styles.world}>WORLD</p>
          </h1>
        </div>
        <div className={styles.followToucanSamToFindWheWrapper}>
          <p className={styles.followToucanSam}>
            Follow Toucan Sam® to find where the Froot Loops® colors come from
          </p>
        </div>
      </div>
      <div className={styles.followUsButton}>
        <button className={styles.view}>
          <a className={styles.followUs}>FOLLOW US</a>
        </button>
      </div>
    </div>
  );
};

export default SpecialOffers;
