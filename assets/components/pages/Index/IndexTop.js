/**
 *
 *  This is the Index Top
 *
 */

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BackgroundImage } from "react-image-and-background-image-fade";

import { FaCaretDown } from "react-icons/fa";

import { BG_INDEX_TOP } from "@/assets/cdns/CDNBgs";
import { FADE_IN } from "@/assets/animations/FADES";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexTop = () => {
  const router = useRouter();

  //! Framer Motion Detect InView
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();
  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  return (
    <section id="indexTop" className={`${styles.index_top} overrides_IndexTop`}>
      <motion.div
        className={`${styles.motion} fm-motion full-second fade-in`}
        ref={REF}
        initial="hidden"
        animate={CONTROLS}
        variants={FADE_IN}
      >
        <BackgroundImage
          src={BG_INDEX_TOP}
          className={`${styles.bg}`}
          id="indexTopBg"
          width="100%"
          height="100%"
        />

        <div className={`${styles.overlay} half-second`} id="indexTopOverlay">
          <div className={`${styles.overlay_cnt}`}>
            <h1 className="half-second">
              Wear Flawlessly<span>.</span>
            </h1>

            <p className="half-second">
              Get your own custom designed t-shirt, tumbler or keychain today.
            </p>

            <div
              className="half-second"
              onClick={() => {
                document.getElementById("indexContact").scrollIntoView();
              }}
              onMouseEnter={(e) => {
                document
                  .getElementById("indexTopBg")
                  .classList.add("half-second");

                setTimeout(() => {
                  document.getElementById("indexTopBg").style.scale = 1.02;
                  document.getElementById(
                    "indexTopOverlay"
                  ).style.backgroundColor = "rgba(0, 0, 0, 0.6)";
                  // document.getElementById("indexTopBg").style.filter =
                  //   "brightness(55%)";
                }, 200);
              }}
              onMouseLeave={(e) => {
                setTimeout(() => {
                  document.getElementById("indexTopBg").style.scale = 1;
                  document.getElementById(
                    "indexTopOverlay"
                  ).style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                  // document.getElementById("indexTopBg").style.filter =
                  //   "brightness(65%)";
                }, 200);

                setTimeout(() => {
                  document
                    .getElementById("indexTopBg")
                    .classList.remove("half-second");
                }, 800);
              }}
            >
              <span>Start Now</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
