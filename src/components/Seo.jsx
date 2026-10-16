// Per-route <title>, description and canonical URL. Google renders the app,
// so distinct page titles let it list the site's sections (sitelinks).
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE_URL, pages } from "../seoPages";

const setMeta = (selector, attribute, value) => {
  const element = document.head.querySelector(selector);
  if (element) element.setAttribute(attribute, value);
};

function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = pages[pathname] ?? pages["/"];
    const url = `${SITE_URL}${pathname === "/" ? "/" : pathname}`;

    document.title = page.title;
    setMeta('meta[name="description"]', "content", page.description);
    setMeta('link[rel="canonical"]', "href", url);
    setMeta('meta[property="og:title"]', "content", page.title);
    setMeta('meta[property="og:description"]', "content", page.description);
    setMeta('meta[property="og:url"]', "content", url);
  }, [pathname]);

  return null;
}

export default Seo;
