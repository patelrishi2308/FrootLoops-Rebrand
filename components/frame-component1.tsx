import type { NextPage } from "next";
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.wrapperCoffeebean42Wrapper}>
        <div className={styles.wrapperCoffeebean42}>
          <img
            className={styles.coffeebean42Icon}
            loading="lazy"
            alt=""
            src="/coffeebean4-2-1@2x.png"
          />
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.navigationMenuParent}>
          <div className={styles.navigationMenu}>
            <div className={styles.home}>HOME</div>
            <div className={styles.aboutUs}>ABOUT US</div>
          </div>
          <div className={styles.coffeeBanner}>
            <div className={styles.bannerContent}>
              <div className={styles.theBestColombianCoffeeParent}>
                <h1 className={styles.theBestColombianContainer}>
                  <p className={styles.theBest}>THE BEST</p>
                  <p className={styles.colombian}>COLOMBIAN</p>
                  <p className={styles.coffee}>COFFEE</p>
                </h1>
                <div className={styles.coffeeImages}>
                  <div className={styles.wrapperCoffee3}>
                    <img
                      className={styles.coffee3Icon}
                      alt=""
                      src="/coffee-3@2x.png"
                    />
                  </div>
                  <div className={styles.coffeeBeanIcons}>
                    <div className={styles.coffeeBeanIconsChild} />
                    <div className={styles.colombianCoofffeeeeColombianParent}>
                      <h1
                        className={styles.colombianCoofffeeeeColombianContainer}
                      >
                        <p className={styles.colombian1}>COLOMBIAN</p>
                        <p className={styles.coofffeeee}>COOFFFEEEE</p>
                        <p className={styles.colombian2}>COLOMBIAN</p>
                      </h1>
                      <div className={styles.coffee1}>
                        <div className={styles.coffeeChild} />
                        <img
                          className={styles.coffee21Icon}
                          alt=""
                          src="/coffee2-1-1@2x.png"
                        />
                        <img
                          className={styles.coffeebean31Icon}
                          loading="lazy"
                          alt=""
                          src="/coffeebean3-1@2x.png"
                        />
                      </div>
                    </div>
                    <img
                      className={styles.bxscoffeeBeanIcon}
                      loading="lazy"
                      alt=""
                      src="/bxscoffeebean-2.svg"
                    />
                    <img
                      className={styles.bxscoffeeBeanIcon1}
                      alt=""
                      src="/bxscoffeebean-2.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.aliquamVestibulumNibhFelisParent}>
                <p className={styles.aliquamVestibulumNibh}>
                  Aliquam vestibulum nibh felis, at congue massa pretium ut. In
                  vel justo ipsum.
                </p>
                <div className={styles.buttonContainer}>
                  <button className={styles.buy}>
                    <div className={styles.buyNow}>BUY NOW</div>
                    <div className={styles.buttonIcons}>
                      <img
                        className={styles.iconList}
                        alt=""
                        src="/icon-list.svg"
                      />
                    </div>
                  </button>
                  <button className={styles.view}>
                    <div className={styles.viewMore}>VIEW MORE</div>
                    <div className={styles.vectorWrapper}>
                      <img
                        className={styles.vectorIcon}
                        alt=""
                        src="/icon-list.svg"
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.logoWrapper}>
        <div className={styles.logo}>
          <img className={styles.groupIcon} alt="" src="/group.svg" />
          <img
            className={styles.groupIcon1}
            loading="lazy"
            alt=""
            src="/group-1.svg"
          />
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerNavigation}>
            <div className={styles.coffee2}>COFFEE</div>
            <div className={styles.footerIcon}>
              <img className={styles.vectorIcon1} alt="" src="/vector-2.svg" />
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.contactWrapper}>
              <div className={styles.contact}>CONTACT</div>
            </div>
            <div className={styles.contactDetails}>
              <div className={styles.contactImageContainer}>
                <div className={styles.wrapperCoffee4}>
                  <img
                    className={styles.coffee4Icon}
                    loading="lazy"
                    alt=""
                    src="/coffee-4@2x.png"
                  />
                </div>
              </div>
              <div className={styles.sedConvallisNibhParent}>
                <h1 className={styles.sedConvallisNibh}>Sed convallis nibh</h1>
                <div className={styles.descriptionList}>
                  <div className={styles.suspendisseVitaeVenenatisContainer}>
                    <p className={styles.suspendisseVitaeVenenatis}>
                      Suspendisse vitae venenatis
                    </p>
                    <p className={styles.sedSemper}>Sed semper</p>
                  </div>
                </div>
                <div className={styles.descriptionList1}>
                  <div className={styles.donecSedVehiculaContainer}>
                    <p className={styles.donecSedVehicula}>
                      Donec sed vehicula ligula in
                    </p>
                    <p className={styles.hendreritOdioSem}>
                      hendrerit odio sem
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
