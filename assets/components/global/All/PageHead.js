/**
 *
 *  This is the page's meta data and tab settings
 *
 */

import { useRouter } from "next/router";

import Head from "next/head";

import { SITE_KWS } from "@/assets/data/variables/ARRAYS";

export const PageHead = () => {
  const router = useRouter();

  //! Descriptions
  const INDEX_DESC =
    "codingthefront is home to the web developer, Parker Phelps, who is always ready to get your web presence ready for the public eye.";

  const DESCS = [INDEX_DESC];

  let desc;
  let kws;
  let title;
  let robots;
  let url;

  // Index Page
  if (router.pathname == "/") {
    title = "flawlesscustomdesigns - Get Your Custom T-Shirt Design.";
    robots = "index, follow";
    url = router.pathname;

    if (INDEX_DESC.length > 0) {
      desc = DESCS[0];
    } else {
      desc = DESCS[0];
    }

    kws = SITE_KWS;
  }

  // 404 Page
  if (router.pathname == "/404") {
    title = "flawlesscustomdesigns - 404";
    robots = "no index, no follow";
    desc = "No description";
    kws = "No keywords";
    url = router.pathname;
  }

  return (
    <Head id="pageHead">
      <title>{title}</title>

      <meta name="keywords" content={kws} />
      <meta name="description" content={desc} />
      <meta name="robots" content={robots} />

      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:url" content={url} />
      <meta
        name="google-site-verification"
        content="V5Rtva_ZUQGbD75j-mxlBzvediiQnPt2hEi7YaPPAEE"
      />

      <link rel="canonical" href={url} />

      <link
        rel="shortcut icon"
        href="https://raw.githubusercontent.com/mxrked/codingthefront_2023_CDN/master/icons/tab-icons/favicon.ico"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="https://raw.githubusercontent.com/mxrked/codingthefront_2023_CDN/master/icons/tab-icons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://raw.githubusercontent.com/mxrked/codingthefront_2023_CDN/master/icons/tab-icons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="https://raw.githubusercontent.com/mxrked/codingthefront_2023_CDN/master/icons/tab-icons/favicon-16x16.png"
      />
    </Head>
  );
};
