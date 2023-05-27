/**
 *
 *  This is the Desktop Nav
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

export const DesktopNav = () => {
  const router = useRouter();

  //! Framer Motion Detect InView
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();
  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  return (
    <nav id="desktopNav" className={`${styles.desktop_nav} desktop-nav`}>
      <motion.div
        className={`${styles.motion} fm-motion full-second fade-in`}
        ref={REF}
        initial="hidden"
        animate={CONTROLS}
        variants={FADE_IN}
      >
        <div className={`${styles.desktop_nav_inner}`}>
          <div className={`${styles.desktop_nav_inner_box} container-fluid`}>
            <div className={`${styles.desktop_nav_inner_row} row`}>
              <div
                className={`${styles.desktop_nav_inner_side} ${styles.desktop_nav_L} col-lg-5 col-md-5 col-sm-5 col-xs-5`}
              >
                <div className={`${styles.desktop_nav_inner_side_cnt}`}>
                  <div className={`${styles.logo}`}>
                    <h1>
                      <span>flawless</span>customdesigns
                    </h1>
                  </div>
                </div>
              </div>
              <div
                className={`${styles.desktop_nav_inner_side} ${styles.desktop_nav_R} col-lg-7 col-md-7 col-sm-7 col-xs-7`}
              >
                <div className={`${styles.desktop_nav_inner_side_cnt}`}>
                  <ul>
                    <li>
                      <div
                        className="half-second"
                        onClick={() => {
                          document.getElementById("indexInfo").scrollIntoView();
                        }}
                      >
                        <span className="half-second">Info</span>
                        <FaCaretDown className={`${styles.icon} half-second`} />
                      </div>
                    </li>
                    <li>
                      <div
                        className="half-second"
                        onClick={() => {
                          document
                            .getElementById("indexGallery")
                            .scrollIntoView();
                        }}
                      >
                        <span className="half-second">Gallery</span>
                        <FaCaretDown className={`${styles.icon} half-second`} />
                      </div>
                    </li>
                    <li>
                      <div
                        className="half-second"
                        onClick={() => {
                          document
                            .getElementById("indexContact")
                            .scrollIntoView();
                        }}
                      >
                        <span className="half-second">Contact</span>
                        <FaCaretDown className={`${styles.icon} half-second`} />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};
