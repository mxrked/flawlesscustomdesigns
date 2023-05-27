/**
 *
 *  This is the Index Gallery
 *
 */

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BackgroundImage } from "react-image-and-background-image-fade";

import { FaCaretDown } from "react-icons/fa";

import { BG_INDEX_INFO } from "@/assets/cdns/CDNBgs";
import { FADE_IN } from "@/assets/animations/FADES";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexGallery = () => {
  const router = useRouter();

  //! Framer Motion Detect InView
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();
  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  return (
    <section
      id="indexGallery"
      className={`${styles.index_gallery} overrides_IndexGallery`}
    >
      <motion.div
        className={`${styles.motion} fm-motion full-second fade-in`}
        ref={REF}
        initial="hidden"
        animate={CONTROLS}
        variants={FADE_IN}
      ></motion.div>
    </section>
  );
};
