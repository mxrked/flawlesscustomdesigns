/**
 *
 *  This is the Mobile Nav
 *
 */

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FaCaretDown } from "react-icons/fa";

import { FADE_IN } from "@/assets/animations/FADES";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const MobileNav = () => {
  const router = useRouter();

  //! Framer Motion Detect InView
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();
  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  return (
    <nav id="mobileNav" className={`${styles.mobile_nav} mobile-nav`}>
      <motion.div
        className={`${styles.motion} fm-motion full-second fade-in`}
        ref={REF}
        initial="hidden"
        animate={CONTROLS}
        variants={FADE_IN}
      >
        <div className={`${styles.mobile_nav_inner}`}>
          <div className={`${styles.mobile_nav_inner_box} container-fluid`}>
            <div className={`${styles.mobile_nav_inner_row} row`}>
              <div
                className={`${styles.mobile_nav_inner_side} ${styles.mobile_nav_L} col-lg-6 col-md-6 col-sm-6 col-xs-6`}
              >
                <div className={`${styles.mobile_nav_inner_side_cnt}`}>
                  <div className={`${styles.logo}`}>
                    <h1>
                      <span>flawless</span>customdesigns
                    </h1>
                  </div>
                </div>
              </div>
              <div
                className={`${styles.mobile_nav_inner_side} ${styles.mobile_nav_R} col-lg-6 col-md-6 col-sm-6 col-xs-6`}
              >
                <div className={`${styles.mobile_nav_inner_side_cnt}`}>
                  <button id="mobileNavToggler">
                    <span className="half-second" />
                    <span className="half-second" />
                    <span className="half-second" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};
