import type {
  ProductVariants,
  ProductColors,
  ProductParameters,
} from "./MainCollectionSectionData.types";

export const productsVariantsData: ProductVariants[] = [
  {
    id: "day",
    label: "Daylight",
    image:
      "https://media.base44.com/images/public/69fa1b49ebeaa4c7784ddd93/3e8b62eff_generated_9ca6560c.png",
    description: "Warm brass catching the morning sun",
  },
  {
    id: "dusk",
    label: "Dusk",
    image:
      "https://media.base44.com/images/public/69fa1b49ebeaa4c7784ddd93/61ac2fbc7_generated_ffaf5dcf.png",
    description: "Golden hour glow meets amber warmth",
  },
  {
    id: "night",
    label: "Night",
    image:
      "https://media.base44.com/images/public/69fa1b49ebeaa4c7784ddd93/ead119b81_generated_a83c74ce.png",
    description: "A singular pool of intimate light",
  },
];

export const productsColorsData: ProductColors[] = [
  {
    id: "brass",
    label: "Brass",
    className: "bg-orange-500",
  },
  {
    id: "black",
    label: "Matte Black",
    className: "bg-zinc-800",
  },
  {
    id: "chrome",
    label: "Chrome",
    className: "bg-gray-300",
  },
];

export const productsParametersData: ProductParameters[] = [
  { label: "Dimensions", value: "48 × 22 cm" },
  { label: "Light output", value: "2400 lm" },
  { label: "Color temp", value: "2700K" },
  { label: "Material", value: "Aluminum + Glass" },
  { label: "Weight", value: "1.8 kg" },
  { label: "Cord length", value: "2.5 m" },
];
