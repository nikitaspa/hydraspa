export const dynamic = 'force-static';
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://hydraspa.online",
      lastModified: new Date(),
    },
    {
      url: "https://hydraspa.online/about",
      lastModified: new Date(),
    },
    {
      url: "https://hydraspa.online/services",
      lastModified: new Date(),
    },
    {
      url: "https://hydraspa.online/gallery",
      lastModified: new Date(),
    },
    {
      url: "https://hydraspa.online/contact",
      lastModified: new Date(),
    },
    {
      url: "https://hydraspa.online/spa-in-gachibowli",
      lastModified: new Date(),
    },
    {
      url: "https://hydraspa.online/couple-spa-gachibowli",
      lastModified: new Date(),
    },
    {
      url: "https://hydraspa.online/massage-spa-hyderabad",
      lastModified: new Date(),
    },
    {
      url: "https://hydraspa.online/swedish-massage-hyderabad",
      lastModified: new Date(),
    },
    {
      url: "https://hydraspa.online/deep-tissue-massage",
      lastModified: new Date(),
    },
  ];
}
