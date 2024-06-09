import type { NextPage } from "next";
import styles from "./header.module.css";

export type HeaderType = {
  className?: string;
};

const Header: NextPage<HeaderType> = ({ className = "" }) => {
  return (
    <section className={[styles.header, className].join(" ")}>
      <div className={styles.navigation}>
        <a className={styles.home}>HOME</a>
        <a className={styles.ourFood}>OUR FOOD</a>
        <div className={styles.logo}>
          <a className={styles.frootLoops}>FROOT LOOPS</a>
        </div>
        <a className={styles.ourStory}>OUR STORY</a>
        <a className={styles.contactUs}>CONTACT US</a>
        <div className={styles.storyContent}>
          <div className={styles.frootloopsFrootloopsFrootlooParent}>
            <h1 className={styles.frootloopsFrootloopsFrootlooContainer}>
              <p className={styles.frootloops}>FROOTLOOPS</p>
              <p className={styles.frootloops1}>FROOTLOOPS</p>
              <p className={styles.frootloops2}>FROOTLOOPS</p>
            </h1>
            <img
              className={styles.coffeebean41Icon}
              loading="lazy"
              alt=""
              src="/coffeebean4-1@2x.png"
            />
            <div className={styles.wrapperCoffeebean42}>
              <img
                className={styles.coffeebean42Icon}
                loading="lazy"
                alt=""
                src="/coffeebean4-2@2x.png"
              />
            </div>
            <img
              className={styles.coffeebean11Icon}
              loading="lazy"
              alt=""
              src="/coffeebean1-1@2x.png"
            />
            <img
              className={styles.coffeebean13Icon}
              loading="lazy"
              alt=""
              src="/coffeebean1-3@2x.png"
            />
          </div>
          <div className={styles.description}>
            <p
              className={styles.thereAreMore}
            >{`There are more ways you can enjoy the delicious flavor of Froot Loops® than ever before. `}</p>
            <div className={styles.ellipseParent}>
              <div className={styles.frameChild} />
              <div className={styles.coffee}>
                <div className={styles.coffeeChild} />
                <img
                  className={styles.coffee21Icon}
                  loading="lazy"
                  alt=""
                  src="/coffee2-1@2x.png"
                />
                <h1 className={styles.startYourDayContainer}>
                  <p className={styles.start}>{`START `}</p>
                  <p className={styles.yourDay}>YOUR DAY</p>
                  <p className={styles.onThe}>{`ON THE `}</p>
                  <p className={styles.rightFroot}>RIGHT FROOT</p>
                </h1>
              </div>
              <img
                className={styles.coffeebean14Icon}
                alt=""
                src="/coffeebean1-4@2x.png"
              />
              <div className={styles.wrapperCoffeebean43}>
                <img
                  className={styles.coffeebean43Icon}
                  loading="lazy"
                  alt=""
                  src="/coffeebean4-3@2x.png"
                />
              </div>
            </div>
          </div>
          <button className={styles.buy}>
            <a className={styles.buyNow}>BUY NOW</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
