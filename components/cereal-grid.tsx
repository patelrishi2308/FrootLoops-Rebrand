import type { NextPage } from "next";
import ProductNameAndRating from "./product-name-and-rating";
import styles from "./cereal-grid.module.css";

export type CerealGridType = {
  className?: string;
};

const CerealGrid: NextPage<CerealGridType> = ({ className = "" }) => {
  return (
    <section className={[styles.cerealGrid, className].join(" ")}>
      <div className={styles.gridRowOne}>
        <div className={styles.gridItemOneContainer}>
          <div className={styles.gridItemOneImageContainer}>
            <div className={styles.gridItemOneImageWrapper}>
              <img
                className={styles.gridItemOneImage}
                loading="lazy"
                alt=""
                src="/rectangle-7@2x.png"
              />
            </div>
            <div className={styles.gridItemTwoContainer}>
              <img
                className={styles.gridItemTwoImage}
                loading="lazy"
                alt=""
                src="/rectangle-6@2x.png"
              />
            </div>
            <img
              className={styles.gridItemThreeImage}
              loading="lazy"
              alt=""
              src="/rectangle-6-1@2x.png"
            />
          </div>
        </div>
        <div className={styles.gridRowTwo}>
          <div className={styles.productCards}>
            <div className={styles.cardDetails}>
              <div className={styles.productName}>
                <p className={styles.frootLoopsBreakfastContainer}>
                  <span>
                    <span className={styles.frootLoops}>FROOT LOOPS </span>
                    <span className={styles.breakfastCereal}>
                      BREAKFAST CEREAL
                    </span>
                  </span>
                </p>
              </div>
              <div className={styles.frootLoopsWithContainer}>
                <span className={styles.frootLoopsWithContainer1}>
                  <p className={styles.frootLoops1}>FROOT LOOPS </p>
                  <p className={styles.withMarshmallowsCereal}>
                    WITH MARSHMALLOWS CEREAL
                  </p>
                </span>
              </div>
              <p className={styles.frootLoopsMegaMixups}>
                FROOT LOOPS MEGA MIXUPS COLD BREAKFAST CEREAL
              </p>
            </div>
            <div className={styles.starRating}>
              <div className={styles.ratingContainer}>
                <div className={styles.starColumnTwo}>
                  <div className={styles.frameParent}>
                    <div className={styles.starContainerWrapper}>
                      <div className={styles.starContainer}>
                        <img
                          className={styles.starIcon}
                          alt=""
                          src="/star.svg"
                        />
                        <img
                          className={styles.starIcon1}
                          alt=""
                          src="/star-1.svg"
                        />
                        <img
                          className={styles.starIcon2}
                          alt=""
                          src="/star-1.svg"
                        />
                        <img
                          className={styles.starIcon3}
                          alt=""
                          src="/star-1.svg"
                        />
                        <img
                          className={styles.starIcon4}
                          alt=""
                          src="/star-4.svg"
                        />
                      </div>
                    </div>
                    <b className={styles.starColumnTwo1}>4.7 (10)</b>
                  </div>
                </div>
                <div className={styles.starColumns}>
                  <div className={styles.starColumnOne}>
                    <div className={styles.starContainer1}>
                      <img
                        className={styles.starIcon5}
                        alt=""
                        src="/star.svg"
                      />
                      <img
                        className={styles.starIcon6}
                        alt=""
                        src="/star-1.svg"
                      />
                      <img
                        className={styles.starIcon7}
                        alt=""
                        src="/star-1.svg"
                      />
                      <img
                        className={styles.starIcon8}
                        alt=""
                        src="/star-1.svg"
                      />
                      <img
                        className={styles.starIcon9}
                        alt=""
                        src="/star-4.svg"
                      />
                    </div>
                  </div>
                  <b className={styles.starColumnDivider}>4.7 (10)</b>
                </div>
                <div className={styles.starColumns1}>
                  <div className={styles.starContainerContainer}>
                    <div className={styles.starContainer2}>
                      <img
                        className={styles.starIcon10}
                        alt=""
                        src="/star.svg"
                      />
                      <img
                        className={styles.starIcon11}
                        alt=""
                        src="/star-1.svg"
                      />
                      <img
                        className={styles.starIcon12}
                        alt=""
                        src="/star-1.svg"
                      />
                      <img
                        className={styles.starIcon13}
                        alt=""
                        src="/star-1.svg"
                      />
                      <img
                        className={styles.starIcon14}
                        alt=""
                        src="/star-4.svg"
                      />
                    </div>
                  </div>
                  <b className={styles.b}>4.7 (10)</b>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.productDescription}>
            <div className={styles.descriptionContent}>
              {/* <img className={styles.bxscoffeeBeanIcon} loading="lazy" alt="" /> */}
              <div className={styles.productDetails}>
                <div className={styles.productColumns}>
                  <div className={styles.productColumnOne}>
                    <img
                      className={styles.productImagesIcon}
                      loading="lazy"
                      alt=""
                      src="/rectangle-6-2@2x.png"
                    />
                  </div>
                  <ProductNameAndRating fROOTLOOPSINSTABOWLSBREAK="FROOT LOOPS INSTA-BOWLS BREAKFAST CEREAL" />
                </div>
                <div className={styles.productColumnTwo}>
                  <div className={styles.donecSedVehiculaLigulaInHParent}>
                    {/* <div className={styles.donecSedVehiculaContainer}>
                      <p className={styles.donecSedVehicula}>
                        Donec sed vehicula ligula in
                      </p>
                      <p className={styles.hendreritOdioSem}>
                        hendrerit odio sem
                      </p>
                    </div> */}
                    <div className={styles.productImageAndName}>
                      <div className={styles.imageAndNameContainer}>
                        <div className={styles.imageAndName}>
                          <img
                            className={styles.bxscoffeeBeanIcon1}
                            loading="lazy"
                            alt=""
                          />
                          <img
                            className={styles.productTwoImage}
                            alt=""
                            src="/rectangle-7-1@2x.png"
                          />
                        </div>
                      </div>
                      <ProductNameAndRating
                        fROOTLOOPSINSTABOWLSBREAK="FROOT LOOPS BOLSA"
                        propGap="unset"
                        propMargin="unset"
                        propHeight="90px"
                        propDisplay="flex"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.productColumns1}>
                  <div className={styles.productColumnsInner}>
                    <img
                      className={styles.frameChild}
                      loading="lazy"
                      alt=""
                      src="/rectangle-6-3@2x.png"
                    />
                  </div>
                  <div className={styles.frootLoopsFlavoredNutritionParent}>
                    <p className={styles.frootLoopsFlavoredContainer}>
                      <span className={styles.blankLine}>&nbsp;</span>
                      <span
                        className={styles.frootLoopsFlavored}
                      >{`FROOT LOOPS FLAVORED NUTRITIONAL DRINK `}</span>
                    </p>
                    <div className={styles.frameWrapper}>
                      <div className={styles.frameGroup}>
                        <div className={styles.starContainerFrame}>
                          <div className={styles.starContainer3}>
                            <img
                              className={styles.starIcon15}
                              alt=""
                              src="/star.svg"
                            />
                            <img
                              className={styles.starIcon16}
                              alt=""
                              src="/star-1.svg"
                            />
                            <img
                              className={styles.starIcon17}
                              alt=""
                              src="/star-1.svg"
                            />
                            <img
                              className={styles.starIcon18}
                              alt=""
                              src="/star-1.svg"
                            />
                            <img
                              className={styles.starIcon19}
                              alt=""
                              src="/star-4.svg"
                            />
                          </div>
                        </div>
                        <b className={styles.b1}>4.7 (10)</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CerealGrid;
