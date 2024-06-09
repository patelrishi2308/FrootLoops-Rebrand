import type { NextPage } from "next";
import Header from "../components/header";
import CerealGrid from "../components/cereal-grid";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import SpecialOffers from "../components/special-offers";
import FrameComponent from "../components/frame-component";
import styles from "./index.module.css";

const Homepage: NextPage = () => {
  return (
    <div className={styles.homepage3}>
      <div className={styles.cinnamonCoffee}>
        <p className={styles.cinnamon}>CINNAMON</p>
        <p className={styles.coffee}>COFFEE</p>
      </div>
      <div className={styles.special}>Special</div>
      <img className={styles.vasoCafe1Icon} alt="" src="/vasocafe-1@2x.png" />
      <div className={styles.homepage3Child} />
      <Header />
      <section className={styles.content}>
        <div className={styles.foodHeaderContainerParent}>
          <div className={styles.foodHeaderContainer}>
            <h1 className={styles.ourFood}>OUR FOOD</h1>
          </div>
          <p className={styles.grabASpoon}>
            Grab a spoon and dig into our classic Froot Loops® and fluffy
            marshmallows, or bring your Froot Loops® on-the-go with cereal made
            easy for snacking!
          </p>
        </div>
      </section>
      <CerealGrid />
      <FrameComponent2 />
      <section className={styles.homepage4}>
        <div className={styles.frameParent}>
          <FrameComponent1 />
          <SpecialOffers />
        </div>
        <img
          className={styles.coffeebean14Icon}
          loading="lazy"
          alt=""
          src="/coffeebean1-4-1@2x.png"
        />
        <div className={styles.coffeeBeanImages}>
          <div className={styles.coffee21Parent}>
            <img
              className={styles.coffee21Icon}
              alt=""
              src="/coffee2-1@2x.png"
            />
            <img
              className={styles.coffeebean11Icon}
              loading="lazy"
              alt=""
              src="/coffeebean1-1-1@2x.png"
            />
            <img
              className={styles.coffeebean41Icon}
              loading="lazy"
              alt=""
              src="/coffeebean4-1-1@2x.png"
            />
          </div>
          <div className={styles.wrapperCoffeebean43}>
            <img
              className={styles.coffeebean43Icon}
              loading="lazy"
              alt=""
              src="/coffeebean4-3-1@2x.png"
            />
          </div>
        </div>
        <img
          className={styles.coffeebean13Icon}
          loading="lazy"
          alt=""
          src="/coffeebean1-3-1@2x.png"
        />
        <FrameComponent />
      </section>
      <section className={styles.footerContentContainerWrapper}>
        <div className={styles.footerContentContainer}>
          <div className={styles.wkKelloggCoWrapper}>
            <div className={styles.wkKelloggCo}>© 2024 WK Kellogg Co</div>
          </div>
          <p className={styles.cookiePreferencesPrivacyContainer}>
            <span className={styles.blankLine}>&nbsp;</span>
            <span className={styles.cookiePreferencesPrivacyNo}>
              {`Cookie Preferences  `}
              <a
                className={styles.privacyNotice}
                href="https://www.wkkellogg.com/en-us/privacy-notice.html"
                target="_blank"
              >
                <span className={styles.privacyNotice1}>Privacy Notice</span>
              </a>
              {`  `}
              <a
                className={styles.usPrivacy}
                href="https://www.wkkellogg.com/en-us/us-privacy-notice.html"
                target="_blank"
              >
                <span className={styles.usPrivacy1}>US Privacy</span>
              </a>
              {` `}
              <a
                className={styles.termsOfUse}
                href="https://www.wkkellogg.com/en-us/usage-terms.html"
                target="_blank"
              >
                <span className={styles.termsOfUse1}>Terms of Use</span>
              </a>
            </span>
            <span className={styles.doNotSellOrShareMyPerson}>
              <a
                className={styles.doNotSellOrShareMyPerson1}
                href="https://www.wkkellogg.com/en-us/do-not-share-or-sell-my-personal-info.html"
                target="_blank"
              >
                <span className={styles.doNotSell}>
                  Do Not Sell or Share My Personal Information
                </span>
              </a>
              {`   `}
              <a
                className={styles.accessibility}
                href="https://www.wkkellogg.com/en-us/accessibility.html"
                target="_blank"
              >
                <span className={styles.accessibility1}>Accessibility</span>
              </a>
            </span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
