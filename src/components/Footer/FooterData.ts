import type { FooterData } from "./FooterData.types";

export const footerData: FooterData[] = [
  {
    type: "brand",
    title: "Lumen Archive",
    description: "A curated collection of objects that celebrate the interplay\n of light, material, and atmosphere. Each piece is a\n meditation on the spaces we inhabit."
  },
  {
    type: "links",
    title: "NAVIGATE",
    items: [
      { label: "Collection", url: "#collection" },
      { label: "Materials", url: "#materials" },
      { label: "Shipping", url: "#shipping" },
      { label: "Returns", url: "#" }
    ]
  },
  {
    type: "links",
    title: "CONNECT",
    items: [
      { label: "Instagram", url: "https://instagram.com/..." },
      { label: "Pinterest", url: "https://pinterest.com/..." },
      { label: "Journal", url: "#" }
    ]
  },
  {
    type: "contacts",
    title: "INQUIRIES",
    email: "hello@lumenarchive.com",
    workingHours: "Mon — Fri, 9am — 6pm CET"
  }
];