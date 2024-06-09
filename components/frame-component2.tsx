import type { NextPage } from "next";
import styles from "./frame-component2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <section className={[styles.coffeebean44Parent, className].join(" ")}>
      <img
        className={styles.coffeebean44Icon}
        loading="lazy"
        alt=""
        src="/coffeebean4-4@2x.png"
      />
      <div className={styles.coffeebean17Parent}>
        <img
          className={styles.coffeebean17Icon}
          loading="lazy"
          alt=""
          src="/coffeebean1-7@2x.png"
        />
        <img
          className={styles.coffeebean15Icon}
          alt=""
          src="/coffeebean1-5@2x.png"
        />
      </div>
      <div className={styles.coffeeBeanImages}>
        <img
          className={styles.coffeebean16Icon}
          alt=""
          src="/coffeebean1-6@2x.png"
        />
        <img
          className={styles.coffeebean46Icon}
          loading="lazy"
          alt=""
          src="/coffeebean4-6@2x.png"
        />
        <img
          className={styles.coffeebean18Icon}
          loading="lazy"
          alt=""
          src="/coffeebean1-8@2x.png"
        />
      </div>
      <button className={styles.view}>
        <a className={styles.learnMore}>LEARN MORE</a>
      </button>
      <h1 className={styles.ourStory}>OUR STORY</h1>
      <p className={styles.learnAboutHow}>
        Learn about how Toucan Sam® brought delicious fruity flavor,
        irresistible smells and fun colors to the world of cereal
      </p>
      <img
        className={styles.ourStoryImage}
        loading="lazy"
        alt=""
        src="/rectangle-6-4@2x.png"
      />
    </section>
  );
};

export default FrameComponent2;
