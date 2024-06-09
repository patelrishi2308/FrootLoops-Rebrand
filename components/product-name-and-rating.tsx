import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./product-name-and-rating.module.css";

export type ProductNameAndRatingType = {
  className?: string;
  fROOTLOOPSINSTABOWLSBREAK?: string;

  /** Style props */
  propGap?: CSSProperties["gap"];
  propMargin?: CSSProperties["margin"];
  propHeight?: CSSProperties["height"];
  propDisplay?: CSSProperties["display"];
};

const ProductNameAndRating: NextPage<ProductNameAndRatingType> = ({
  className = "",
  fROOTLOOPSINSTABOWLSBREAK,
  propGap,
  propMargin,
  propHeight,
  propDisplay,
}) => {
  const productNameAndRatingStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const fROOTLOOPSINSTABOWLSStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin,
      height: propHeight,
      display: propDisplay,
    };
  }, [propMargin, propHeight, propDisplay]);

  return (
    <div
      className={[styles.productNameAndRating, className].join(" ")}
      style={productNameAndRatingStyle}
    >
      <p
        className={styles.frootLoopsInstaBowls}
        style={fROOTLOOPSINSTABOWLSStyle}
      >
        {fROOTLOOPSINSTABOWLSBREAK}
      </p>
      <div className={styles.starColumnsContainer}>
        <div className={styles.starColumnOneContainer}>
          <div className={styles.starContainerWrapper}>
            <div className={styles.starContainer}>
              <img className={styles.starIcon} alt="" src="/star.svg" />
              <img className={styles.starIcon1} alt="" src="/star-1.svg" />
              <img className={styles.starIcon2} alt="" src="/star-1.svg" />
              <img className={styles.starIcon3} alt="" src="/star-1.svg" />
              <img className={styles.starIcon4} alt="" src="/star-4.svg" />
            </div>
          </div>
          <b className={styles.columnDivider}>4.7 (10)</b>
        </div>
      </div>
    </div>
  );
};

export default ProductNameAndRating;
