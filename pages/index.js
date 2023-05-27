// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports
import { TriggerExitAnimations } from "@/assets/functions/dom/triggers/TriggerExitAnimations";

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";
import { DesktopNav } from "@/assets/components/global/Nav/Desktop/DesktopNav";
import { MobileNav } from "@/assets/components/global/Nav/Mobile/MobileNav";
import { IndexTop } from "@/assets/components/pages/Index/IndexTop";
import { IndexInfo } from "@/assets/components/pages/Index/IndexInfo";
import { IndexGallery } from "@/assets/components/pages/Index/IndexGallery";
import { IndexContact } from "@/assets/components/pages/Index/IndexContact";

import styles from "../assets/styles/modules/Index/Index.module.css";

export default function Home() {
  const router = useRouter();

  // Triggering exit animations
  useEffect(() => {
    TriggerExitAnimations();
  }, []);

  return (
    <div id="PAGE" className="page overrides_Index full-second">
      <PageHead />

      <DesktopNav />
      <MobileNav />

      <main id="PAGE_CNT">
        <IndexTop />
        <IndexInfo />
        <IndexGallery />
        <IndexContact />
      </main>
    </div>
  );
}
